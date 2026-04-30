import { useEffect, useMemo, useRef, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import toast from "react-hot-toast";

import { createPaymentIntentApi } from "../../api/payment.services";
import PaymentMethods from "../../Components/checkout/payment/PaymentMethods";
import StripeCardForm from "../../Components/checkout/payment/StripeCardForm";
import { useCart } from "../../context/cardContext";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const PaymentPage = () => {
  const { priceBreakup, shippingAddress } = useCart();
  const [selectedMethod, setSelectedMethod] = useState("card");
  const [clientSecret, setClientSecret] = useState("");
  const [intentId, setIntentId] = useState("");
  const [isLoadingIntent, setIsLoadingIntent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inFlightRequestRef = useRef("");

  const orderTotal = useMemo(() => {
    const total = Number(priceBreakup?.total || 0);
    return Number.isFinite(total) ? total : 0;
  }, [priceBreakup]);

  const amountInSmallestUnit = useMemo(
    () => Math.round(orderTotal * 100),
    [orderTotal],
  );

  const paymentRequestKey = useMemo(() => {
    return [
      selectedMethod,
      shippingAddress?.id || "",
      shippingAddress?.guest_id || "",
      amountInSmallestUnit,
    ].join(":");
  }, [
    amountInSmallestUnit,
    selectedMethod,
    shippingAddress?.guest_id,
    shippingAddress?.id,
  ]);

  useEffect(() => {
    const createIntent = async () => {
      if (selectedMethod !== "card") {
        setClientSecret("");
        setIntentId("");
        return;
      }

      if (!amountInSmallestUnit) {
        setClientSecret("");
        setIntentId("");
        return;
      }

      const cachedIntent = sessionStorage.getItem(
        `stripe-payment-intent:${paymentRequestKey}`,
      );

      if (cachedIntent) {
        try {
          const parsedIntent = JSON.parse(cachedIntent);
          setClientSecret(parsedIntent.clientSecret || "");
          setIntentId(parsedIntent.intentId || "");
          return;
        } catch {
          sessionStorage.removeItem(`stripe-payment-intent:${paymentRequestKey}`);
        }
      }

      if (inFlightRequestRef.current === paymentRequestKey) {
        return;
      }

      try {
        inFlightRequestRef.current = paymentRequestKey;
        setIsLoadingIntent(true);

        const response = await createPaymentIntentApi({
          addressId: shippingAddress?.id,
          guest_id : shippingAddress?.guest_id,           
        });

//         const response = {
//     "success": true,
//     "data": {
//         "order_id": "d047fea3-5cd7-4726-84d0-8ccb49fe0459",
//         "total_amount": 105.36,
//         "pricing": {
//             "subtotal": 2,
//             "shipping": 100,
//             "tax": 0.36,
//             "tyre_fee": 3,
//             "addons_total": 0,
//             "installer_charge": 0,
//             "discount": 0,
//             "coupon_code": null,
//             "total": 105.36
//         },
//         "payment_intent_id": "pi_3TRrTFJVEMg9rTF90tJQOdda",
//         "client_secret": "pi_3TRrTFJVEMg9rTF90tJQOdda_secret_WrxQp1wAMGHbqocQCDZN8aBOz",
//         "status": "pending",
//         "expires_at": "2026-04-30T10:20:25.615Z"
//     }
// }

        const {success , data} = response || {};


        if(!success){
          throw new Error("Failed to create payment intent");
        }

        const { client_secret, payment_intent_id } = data || {};

        setClientSecret(client_secret || "");
        setIntentId(payment_intent_id || "");

        sessionStorage.setItem(
          `stripe-payment-intent:${paymentRequestKey}`,
          JSON.stringify({
            clientSecret: client_secret || "",
            intentId: payment_intent_id || "",
          }),
        );
      } catch (error) {
        const message =
          error?.response?.data?.message ||
          error?.message ||
          "Unable to initialize payment";
        toast.error(message);
        setClientSecret("");
        setIntentId("");
      } finally {
        inFlightRequestRef.current = "";
        setIsLoadingIntent(false);
      }
    };

    createIntent();
  }, [
    amountInSmallestUnit,
    paymentRequestKey,
    selectedMethod,
    shippingAddress?.guest_id,
    shippingAddress?.id,
  ]);

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

  return (
    <div className="space-y-10">
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
          ) : null}
        </div>

        {isLoadingIntent ? (
          <p className="font-openSans text-sm text-[#5B5B5B]">
            Preparing secure payment...
          </p>
        ) : clientSecret ? (
          <Elements stripe={stripePromise}>
            <StripeCardForm
              clientSecret={clientSecret}
              billingDetails={billingDetails}
              isSubmitting={isSubmitting}
              setIsSubmitting={setIsSubmitting}
            />
          </Elements>
        ) : (
          <p className="font-openSans text-sm text-red-600">
            Unable to initialize payment. Make sure your payment API is running
            at `http://localhost:5000/api/payment/create-payment-intent` and
            accepts a POST request.
          </p>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
