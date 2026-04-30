import { useMemo, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import toast from "react-hot-toast";

const cardElementOptions = {
  hidePostalCode: true,
  style: {
    base: {
      color: "#111827",
      fontFamily: '"Open Sans", sans-serif',
      fontSize: "16px",
      "::placeholder": {
        color: "#9CA3AF",
      },
    },
    invalid: {
      color: "#DC2626",
    },
  },
};

const StripeCardForm = ({
  clientSecret,
  billingDetails,
  isSubmitting,
  setIsSubmitting,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");

  const buttonLabel = useMemo(() => {
    if (isSubmitting) return "Processing Payment...";
    return "Pay Now";
  }, [isSubmitting]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) return;

    setIsSubmitting(true);
    setCardError("");

    const cardElement = elements.getElement(CardElement);

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: billingDetails?.name || "",
          email: billingDetails?.email || "",
          phone: billingDetails?.phone || "",
          address: {
            line1: billingDetails?.address_line1 || "",
            line2: billingDetails?.address_line2 || "",
            city: billingDetails?.city || "",
            state: billingDetails?.state || "",
            postal_code: billingDetails?.pincode || "",
            country: billingDetails?.country || "US",
          },
        },
      },
    });

    if (result.error) {
      const message = result.error.message || "Payment failed";
      setCardError(message);
      toast.error(message);
      setIsSubmitting(false);
      return;
    }

    if (result.paymentIntent?.status === "succeeded") {
      toast.success("Payment successful");
    } else {
      toast("Payment submitted. Waiting for confirmation.");
    }

    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-lg border border-[#E6E6E6] bg-white p-6"
    >
      <div>
        <p className="mb-2 font-openSans text-sm font-medium text-black">
          Card details
        </p>
        <div className="rounded-md border border-[#D1D5DB] px-4 py-4">
          <CardElement options={cardElementOptions} />
        </div>
      </div>

      {cardError ? (
        <p className="font-openSans text-sm text-red-600">{cardError}</p>
      ) : null}

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={!stripe || isSubmitting}
          className="rounded-full bg-primary px-8 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {buttonLabel}
        </button>
      </div>
    </form>
  );
};

export default StripeCardForm;
