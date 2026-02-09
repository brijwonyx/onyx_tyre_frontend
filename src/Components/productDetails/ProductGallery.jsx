import { useState } from "react";

const ProductGallery = ({ images = [] }) => {

  // Default main image
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4">

      {/* MAIN IMAGE */}
      <div className="w-full h-[530px] bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={activeImage}
          alt="product"
          className="w-full h-full object-contain"
        />
      </div>

      {/* THUMBNAILS */}
      <div className="flex gap-4">

        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setActiveImage(img)}
            className={`cursor-pointer border-2 rounded-md overflow-hidden
              ${
                activeImage === img
                  ? "border-green-600"
                  : "border-transparent"
              }`}
          >
            <img
              src={img}
              alt="thumb"
              className="w-[80px] h-[80px] object-contain"
            />
          </div>
        ))}

      </div>
    </div>
  );
};

export default ProductGallery;
