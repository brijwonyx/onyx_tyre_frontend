import arrow from "../../../assets/arrow.svg";

const Button = ({
  children,
  solid = false,
  className = "",
  onClick,
  disabled,
  loading = false,
}) => {
  const isDisabled = disabled || loading;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`relative inline-flex items-center justify-center
        h-[48px] px-10
        font-montserrat text-sm font-semibold uppercase
        transition-opacity duration-300
        disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none
        ${solid ? "text-white" : "text-green-700"}
        ${className}
      `}
    >
      {/* SVG Background */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <polygon
          points="
            0,0
            100,0
            100,78
            88,100
            0,100
          "
          fill={solid ? "#2E7D32" : "transparent"}
          stroke="#2E7D32"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <span className="relative z-10 flex items-center gap-4">
        {children}

        {loading ? (
          <span
            className={`w-4 h-4 border-2 rounded-full animate-spin ${
              solid
                ? "border-white border-t-transparent"
                : "border-green-700 border-t-transparent"
            }`}
          />
        ) : (
          <img
            src={arrow}
            alt="arrow"
            className="w-2 h-2"
          />
        )}
      </span>
    </button>
  );
};

export default Button;