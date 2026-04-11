const ShimmerCard = ({ className = "" }) => {
  return (
    <div className={`animate-pulse`}>
      <div className={`${className} bg-gray-200`}></div>
    </div>
  );
};

export default ShimmerCard;
