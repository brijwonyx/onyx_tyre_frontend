const Button = ({ children, solid = false ,onClick,className  }) => {
  return (
    <button className={`btn-primary relative px-4 py-[10px] text-sm font-semibold font-montserrat uppercase 
      ${solid ? " text-white" : " text-primary"} ${className}
    `} onClick={onClick}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 38"
        preserveAspectRatio="none"
      >
        <polygon
          points="
            0.75,0.75
            99.25,0.75
            99.25,29
            88,37.25
            0.75,37.25
          "
          fill={solid ? "#2E7D32" : "white"}
          stroke="#2E7D32"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
