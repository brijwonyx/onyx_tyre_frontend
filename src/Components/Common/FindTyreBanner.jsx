export default function FindTyreBanner() {
  return (
    <div className="">
      <div
        className="
          bg-[#2E7D32]
          text-white
          pt-[75px]
          pb-12
          px-16
          relative
          [clip-path:polygon(0_0,92%_0,100%_35%,100%_100%,0_100%)]
        "
      >
        {/* Small text */}
        <p className="font-openSans font-normal text-xl">
          Not Sure Which Tyres Fit Best?
        </p>

        {/* Heading */}
        <h2 className="font-montserrat font-semibold text-[80px]">
          Let’s Find Out Together
        </h2>

        {/* Arrow */}
        <div className="mt-6 text-4xl">
          <svg
            width="48"
            height="33"
            viewBox="0 0 48 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_357_1698)">
              <path
                d="M46.0003 15.7842C37.2829 15.7842 30.2158 22.8511 30.2158 31.5685"
                stroke="white"
                stroke-width="3.9"
              />
              <path
                d="M46.0003 15.7845C37.2829 15.7845 30.2158 8.71754 30.2158 0"
                stroke="white"
                stroke-width="3.9"
              />
              <path d="M40.5888 15.7842H0" stroke="white" stroke-width="3.9" />
            </g>
            <defs>
              <clipPath id="clip0_357_1698">
                <rect width="48" height="33" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
