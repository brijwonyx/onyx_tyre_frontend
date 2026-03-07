import Button from "../../common/forms/Button";

const TyreSizeOption = ({size,front,rear}) => {
  return (
    <>
      <div className="mb-10">
        <h5 className="font-montserrat text-2xl font-semibold mb-6">
          {size}<span className="font-openSans text-base">Wheels</span>
        </h5>
        <div className="[&_p]:font-openSans [&_p]:text-sm [&_h6]:font-montserrat [&_h6]:font-semibold [&_h6]:text-base flex flex-col gap-4">
          <div className="grid grid-cols-3 [&_div]:bg-[#E6E6E6] [&_div]:p-3 ">
            <div className="flex flex-col ">
              <p className="">Front</p>
              <h6>{front}</h6>
            </div>
            <div className="flex flex-col">
              <p>Rear</p>
              <h6>{rear}</h6>
            </div>
            <Button solid className="h-full whitespace-nowrap">
              Shop Both tyres
            </Button>
          </div>
          {/* sub Div */}
          <div className="flex gap-3">
            <div className="h-auto bg-primary w-1 ml-2"></div>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-[max-content_1fr_1fr_1fr]">
                <div className="bg-primary text-white py-6 px-3">
                  <p>Only Front</p>
                </div>
                <div className="flex flex-col bg-[#E6E6E6] col-span-2 p-3">
                  <p>Front</p>
                  <h6>{front}</h6>
                </div>
                <Button solid className="h-full whitespace-nowrap">
                  Shop Front
                </Button>
              </div>
              <div className="grid grid-cols-[max-content_1fr_1fr_1fr]">
                <div className="bg-primary text-white py-6 px-3">
                  <p>Only Rear</p>
                </div>
                <div className="flex flex-col bg-[#E6E6E6] col-span-2 p-3">
                  <p>Rear</p>
                  <h6>{rear}</h6>
                </div>
                <Button solid className="h-full whitespace-nowrap">
                  Shop Front
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default TyreSizeOption;
