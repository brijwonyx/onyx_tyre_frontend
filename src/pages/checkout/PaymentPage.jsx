import { useMemo, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { createPaymentIntentApi } from "../../api/payment.services";
import Modal from "../../Components/Common/Modal";
import PaymentMethods from "../../Components/checkout/payment/PaymentMethods";
import StripeCardForm from "../../Components/checkout/payment/StripeCardForm";
import { useCart } from "../../context/cardContext";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const PaymentPage = () => {
  const { priceBreakup, shippingAddress } = useCart();
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("card");
  const [intentId, setIntentId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailureModal, setShowFailureModal] = useState(false);
  const [paymentResult, setPaymentResult] = useState({
    amount: 0,
    intentId: "",
    message: "",
  });

  const orderTotal = useMemo(() => {
    const total = Number(priceBreakup?.total || 0);
    return Number.isFinite(total) ? total : 0;
  }, [priceBreakup]);

  const billingDetails = useMemo(
    () => ({
      name: shippingAddress?.name || "",
      email: shippingAddress?.email || "",
      phone: shippingAddress?.phone || "",
      address_line1: shippingAddress?.address_line1 || "",
      address_line2: shippingAddress?.address_line2 || "",
      city: shippingAddress?.city || "",
      state: shippingAddress?.state || "",
      pincode: shippingAddress?.pincode || "",
      country: shippingAddress?.country || "US",
    }),
    [shippingAddress],
  );

  const createIntentForPayment = async () => {
    if (selectedMethod !== "card") {
      throw new Error("Only card payment is available right now.");
    }

    if (!shippingAddress?.id) {
      throw new Error("Please select your shipping address before payment.");
    }

    const response = await createPaymentIntentApi({
      addressId: shippingAddress?.id,
      guest_id: shippingAddress?.guest_id,
    });

    const { success, data, message } = response || {};

    if (!success) {
      throw new Error(message || "Failed to create payment intent");
    }

    const { client_secret, payment_intent_id } = data || {};

    if (!client_secret) {
      throw new Error("Payment intent client secret is missing.");
    }

    setIntentId(payment_intent_id || "");

    return {
      clientSecret: client_secret,
      intentId: payment_intent_id || "",
    };
  };

  const handlePaymentSuccess = (paymentIntent) => {
    setPaymentResult({
      amount: orderTotal,
      intentId: paymentIntent?.id || intentId,
      message: "Payment completed successfully.",
    });
    setShowSuccessModal(true);
  };

  const handlePaymentFailure = ({ message, paymentIntentId }) => {
    setPaymentResult({
      amount: orderTotal,
      intentId: paymentIntentId || intentId,
      message,
    });
    setShowFailureModal(true);
  };

  const handleExitPayment = () => {
    setShowExitModal(true);
  };

  const handleRetryPayment = () => {
    setShowFailureModal(false);
    setIntentId("");
    setPaymentResult({
      amount: 0,
      intentId: "",
      message: "",
    });
    toast("You can try your payment again.");
  };

  return (
    <div className="space-y-10">
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleExitPayment}
          className="rounded-full border border-black px-6 py-2 font-montserrat text-sm font-semibold uppercase text-black"
        >
          Exit Payment
        </button>
      </div>

      <PaymentMethods
        selectedMethod={selectedMethod}
        onChange={setSelectedMethod}
      />

      <div className="rounded-lg border border-[#E6E6E6] bg-gray-50 p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <h3 className="font-montserrat text-xl font-bold text-black">
              Secure card payment
            </h3>
            <p className="font-openSans text-sm text-[#5B5B5B]">
              Enter your card details to pay ${orderTotal.toFixed(2)} securely
              with Stripe.
            </p>
          </div>

          {intentId ? (
            <p className="font-openSans text-xs text-[#8E8E93]">
              Payment Intent: {intentId}
            </p>
          ) : (
            <p className="font-openSans text-xs text-[#8E8E93]">
              Payment intent will be created after you click Pay Now.
            </p>
          )}
        </div>

        <Elements stripe={stripePromise}>
          <StripeCardForm
            billingDetails={billingDetails}
            isSubmitting={isSubmitting}
            setIsSubmitting={setIsSubmitting}
            createPaymentIntent={createIntentForPayment}
            onSuccess={handlePaymentSuccess}
            onFailure={handlePaymentFailure}
          />
        </Elements>
      </div>

      <Modal
        open={showExitModal}
        onClose={() => setShowExitModal(false)}
        title="Leave payment?"
        size="md"
      >
        <div className="space-y-5">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF7E8] text-[#B7791F]">
            <AlertTriangle size={34} />
          </div>

          <p className="font-openSans text-sm text-[#5B5B5B]">
            Your payment is not completed yet. If you leave now, you can return
            later and try again with a fresh payment session.
          </p>

          <div className="rounded-lg border border-[#E6E6E6] bg-gray-50 p-4">
            <ul className="space-y-2 font-openSans text-sm text-[#5B5B5B]">
              <li>Your checkout items will stay in place.</li>
              <li>No successful charge will be created by leaving now.</li>
              <li>You can come back and restart payment when you are ready.</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => setShowExitModal(false)}
              className="rounded-full bg-primary px-6 py-2 font-montserrat text-sm font-semibold uppercase text-white"
            >
              Continue Payment
            </button>
            <button
              type="button"
              onClick={() => navigate("/checkout/review")}
              className="rounded-full border border-black px-6 py-2 font-montserrat text-sm font-semibold uppercase text-black"
            >
              Leave To Review
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        open={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Payment completed"
        size="lg"
      >
        <div className="space-y-6">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF8EE] text-[#2E7D32]">
              <CheckCircle2 size={34} />
            </div>
            <h3 className="font-montserrat text-2xl font-bold text-black">
              Your order is confirmed
            </h3>
            <p className="mt-2 font-openSans text-sm text-[#5B5B5B]">
              We have received your payment and the order is ready for the next
              checkout step.
            </p>
          </div>

          <div className="grid gap-4 rounded-lg border border-[#E6E6E6] bg-gray-50 p-5 md:grid-cols-2">
            <div className="rounded-md bg-white p-4">
              <p className="font-openSans text-sm text-[#5B5B5B]">
                Amount paid
              </p>
              <p className="mt-1 font-montserrat text-3xl font-bold text-black">
                ${Number(paymentResult.amount || 0).toFixed(2)}
              </p>
            </div>
            <div className="rounded-md bg-white p-4">
              <p className="font-openSans text-sm text-[#5B5B5B]">
                Payment status
              </p>
              <p className="mt-1 font-montserrat text-xl font-bold text-black">
                Success
              </p>
              {paymentResult.intentId ? (
                <p className="mt-2 break-all font-openSans text-xs text-[#8E8E93]">
                  Intent: {paymentResult.intentId}
                </p>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="rounded-full border border-black px-6 py-2 font-montserrat text-sm font-semibold uppercase text-black"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        open={showFailureModal}
        onClose={() => setShowFailureModal(false)}
        title="Payment failed"
        size="md"
      >
        <div className="space-y-5">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FDECEC] text-[#C62828]">
              <XCircle size={34} />
            </div>
            <h3 className="font-montserrat text-2xl font-bold text-black">
              We could not complete your payment
            </h3>
            <p className="mt-2 font-openSans text-sm text-[#5B5B5B]">
              {paymentResult.message ||
                "Payment could not be processed right now."}
            </p>
          </div>

          <div className="rounded-lg border border-[#F4C7C7] bg-[#FFF7F7] p-4">
            <p className="font-openSans text-sm text-[#5B5B5B]">
              You can retry this payment now or return to review and choose a
              different step.
            </p>
            {paymentResult.intentId ? (
              <p className="mt-2 break-all font-openSans text-xs text-[#8E8E93]">
                Intent: {paymentResult.intentId}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={handleRetryPayment}
              className="rounded-full bg-primary px-6 py-2 font-montserrat text-sm font-semibold uppercase text-white"
            >
              Retry Payment
            </button>
            <button
              type="button"
              onClick={() => navigate("/checkout/review")}
              className="rounded-full border border-black px-6 py-2 font-montserrat text-sm font-semibold uppercase text-black"
            >
              Back To Review
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PaymentPage;
