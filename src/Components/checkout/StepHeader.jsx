import { ChevronRight } from "lucide-react";
import { useLocation } from "react-router-dom";

import DeliveryIcon from "@/assets/delivery.svg?react";
import InstallerIcon from "@/assets/installer-head.svg?react";
import PaymentIcon from "@/assets/payment.svg?react";

/**
 ✅ SINGLE SOURCE OF TRUTH
 No duplicated configs.
 Just define routes properly.
*/

const STORE_STEPS = [
  {
    id: "delivery",
    label: "Delivery Method",
    icon: DeliveryIcon,
    path: "/checkout/delivery",
  },
  {
    id: "installer",
    label: "Installer",
    icon: InstallerIcon,
    path: "/checkout/store-fitment",
  },
  {
    id: "review",
    label: "Review",
    icon: InstallerIcon,
    path: "/checkout/review",
  },
  {
    id: "payment",
    label: "Payment",
    icon: PaymentIcon,
    path: "/checkout/payment",
  },
];

const HOME_STEPS = [
  {
    id: "delivery",
    label: "Delivery Method",
    icon: DeliveryIcon,
    path: "/checkout/delivery",
  },
  {
    id: "installer",
    label: "Mobile Installer",
    icon: InstallerIcon,
    path: "/checkout/home-fitment",
  },
  {
    id: "address",
    label: "Address",
    icon: InstallerIcon,
    path: "/checkout/address",
  },
  {
    id: "payment",
    label: "Payment",
    icon: PaymentIcon,
    path: "/checkout/payment",
  },
];

const StepHeader = () => {
  const { pathname } = useLocation();

  const isHomeFlow = pathname.startsWith("/checkout/home-fitment");

  const steps = isHomeFlow ? HOME_STEPS : STORE_STEPS;


  const activeIndex = steps.findIndex((step) =>
    pathname.startsWith(step.path)
  );

  return (
    <div className="flex items-center gap-12 border-b bg-[#EAEAEA] px-16 py-6">

      {steps.map((step, index) => {
        const Icon = step.icon;

        const active = index <= activeIndex;

        return (
          <div key={step.id} className="flex items-center gap-2">

            {/* Circle */}
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center
              ${active
                ? "bg-primary/10"
                : "bg-gray-100"
              }`}
            >
              <Icon
                className={`w-5 h-5 shrink-0 ${
                  active
                    ? "text-primary"
                    : "text-gray-400"
                }`}
              />
            </div>

            {/* Label */}
            <span
              className={`font-medium text-sm ${
                active
                  ? "text-green-700"
                  : "text-gray-400"
              }`}
            >
              {step.label}
            </span>

            {index !== steps.length - 1 && (
              <ChevronRight className="text-gray-400" />
            )}

          </div>
        );
      })}
    </div>
  );
};

export default StepHeader;
