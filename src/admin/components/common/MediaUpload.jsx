import { useRef, useState } from "react";

export default function MediaUpload() {
  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    console.log(files); // frontend dev will handle upload
  };

  const handleChange = (e) => {
    const files = e.target.files;
    console.log(files);
  };

  return (
    <div className="w-full">
      
      {/* Label */}
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Media
      </label>

      {/* Upload Box */}
      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          w-full h-[140px]
          border-2 border-dashed rounded-md
          flex flex-col items-center justify-center
          cursor-pointer
          transition-colors
          box-shadow-[0_0_0_1px_#00000014,0_1px_2px_0px_#0000001F] 
          ${
            isDragging
              ? "border-black bg-gray-50"
              : "border-[#D4D4D8] bg-[#FAFAFA]"
          }
        `}
      >
        
        <div className="flex items-center gap-2">
        <svg
          className="w-6 h-6 text-gray-400 mb-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 16V4m0 0l-4 4m4-4l4 4M4 20h16" />
        </svg>
                {/* Text */}
        <p className="text-sm font-medium text-gray-700">
          Upload Images
        </p>
        </div>




        <p className="text-sm text-gray-400">
          Drag and drop files here or click to upload
        </p>

        {/* Hidden input */}
        <input
          ref={inputRef}
          type="file"
          multiple
          className="hidden"
          onChange={handleChange}
        />

      </div>

    </div>
  );
}
