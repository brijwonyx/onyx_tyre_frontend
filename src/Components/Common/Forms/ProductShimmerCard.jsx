const ProductShimmerCard = ({ className = "" }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="flex gap-6">
        {/* Image */}
        <div className="w-40 h-40 bg-gray-200 rounded-xl"></div>

        {/* Content */}
        <div className="flex-1 space-y-4">
          <div className="h-5 bg-gray-200 rounded w-1/3"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>

          {/* Price row */}
          <div className="h-6 bg-gray-200 rounded w-1/4 mt-6"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductShimmerCard;
