export const DealCard = ({image,title,description,titleClass,descriptionClass}) => {
  return (
    <>
      <div>
        <img src={image} alt={title} className="w-full h-[316px] mb-[30px]" />
        <h5 className={`font-montserrat font-semibold text-2xl tracking-normal text-left mb-2 ${titleClass}`}>
          {title}
        </h5>
        <p className={`font-openSans font-normal text-base tracking-normal text-left leading-6 ${descriptionClass}`}>
          {description} 
        </p>
      </div>
    </>
  );
};
