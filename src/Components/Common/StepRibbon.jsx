const StepRibbon = ({ step = "Step 1" }) => {
  return (
    <div
      className="
        bg-green-700
        text-white
        font-semibold
        h-10
        px-6
        flex items-center
        w-fit
        [mask:linear-gradient(135deg,transparent_14px,black_0)_top_right,
              linear-gradient(-135deg,transparent_14px,black_0)_bottom_right]
        [mask-size:51%_51%]
        [mask-repeat:no-repeat]
      "
    >
      {step}
    </div>
  );
};

export default StepRibbon;
