import Tyre from "../../../assets/tyre-item.png";

const NoTyreState = ({
  title = "No Stock Available",
  description = "We couldn’t find tyres for your selected configuration.",
  //   image = Tyre,
  className = "",
}) => {
  return (
    <div className={`flex items-center gap-6 py-10 ${className}`}>
      {/* Left Image */}
      {/* <div className="bg-[#ececec] p-4 flex items-center justify-center">
        <img
          src={image}
          alt="No Tyres"
          className="max-w-[160px] object-contain"
        />
      </div> */}

      {/* Right Content */}
      <div className="flex flex-col justify-center items-center w-full">
        <h3 className="font-montserrat font-bold text-xl leading-[32px]">
          {title}
        </h3>
        <p className="font-openSans text-base text-gray-500 mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default NoTyreState;
