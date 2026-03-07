import { useState } from "react";

const packages = [
  {
    id: 1,
    title: "Premium Protection Package",
    price: 149,
    popular: true,
    features: [
      "Road Hazard Protection",
      "24/7 Roadside Assistance",
      "Free Rotation for 2 Years",
    ],
  },
  {
    id: 2,
    title: "Basic Care Package",
    price: 69,
    features: ["6-Month Road Hazard", "Free First Rotation", "Pressure Check"],
  },
];

const ProtectionPackages = () => {
  const [selected, setSelected] = useState(1);

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-8 font-montserrat">
        Protection Packages
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            onClick={() => setSelected(pkg.id)}
            className={`relative cursor-pointer rounded-lg p-6 border transition
              ${
                selected === pkg.id
                  ? "border-primary shadow-md"
                  : "border-gray-200"
              }
            `}
          >
            {/* Badge */}
            {pkg.popular && (
              <span className="absolute -top-3 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                Most popular
              </span>
            )}

            <h3 className="font-normal font-openSans text-base">{pkg.title}</h3>

            <p className="font-montserrat font-semibold text-4xl">
              ${pkg.price}
            </p>

            <ul className="mt-4 px-14">
              {pkg.features.map((f, i) => (
                <li key={i} className="flex gap-2 font-openSans text-sm">
                  <svg
                    width="14"
                    height="17"
                    viewBox="0 0 14 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.66667 16.6667C4.73611 16.1806 3.14222 15.0728 1.885 13.3433C0.627778 11.6139 -0.000555187 9.69389 3.6808e-07 7.58333V2.5L6.66667 0L13.3333 2.5V7.58333C13.3333 9.69444 12.705 11.6147 11.4483 13.3442C10.1917 15.0736 8.59778 16.1811 6.66667 16.6667ZM6.66667 14.9167C8.11111 14.4583 9.30555 13.5417 10.25 12.1667C11.1944 10.7917 11.6667 9.26389 11.6667 7.58333V3.64583L6.66667 1.77083L1.66667 3.64583V7.58333C1.66667 9.26389 2.13889 10.7917 3.08333 12.1667C4.02778 13.5417 5.22222 14.4583 6.66667 14.9167Z"
                      fill="#2E7D32"
                    />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProtectionPackages;
