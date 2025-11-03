import React, { useState } from 'react';
import prevIcon from '../assets/images/icon-previous.svg';
import nextIcon from '../assets/images/icon-next.svg';


const ProductGallery = ({ images, onImageClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="lg:p-6">
      <div className="relative">
        <button
          onClick={() => onImageClick(activeIndex)}
          className="hidden lg:block w-full rounded-2xl overflow-hidden custom-focus-ring"
          aria-label="View larger image"
        >
          <img
            src={images[activeIndex].full}
            alt={`Product image ${activeIndex + 1}`}
            className="w-full object-cover transition-opacity duration-300"
          />
        </button>
        {/* Mobile carousel */}
        <div className="lg:hidden relative h-[300px] sm:h-[400px]">
            {images.map((image, index) => (
                 <img
                    key={image.id}
                    src={image.full}
                    alt={`Product image ${index + 1}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                />
            ))}
        </div>
        <div className="lg:hidden absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
          <button onClick={handlePrev} className="bg-white w-10 h-10 rounded-full flex items-center justify-center custom-focus-ring" aria-label="Previous image">
            <img src={prevIcon} alt="Previous image" />
          </button>
          <button onClick={handleNext} className="bg-white w-10 h-10 rounded-full flex items-center justify-center custom-focus-ring" aria-label="Next image">
            <img src={nextIcon} alt="Next image" />
          </button>
        </div>
      </div>
      <div className="hidden lg:flex mt-8 gap-8">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setActiveIndex(index)}
            className={`relative rounded-xl overflow-hidden group custom-focus-ring ${
              index === activeIndex ? 'ring-2 ring-[hsl(26,100%,55%)]' : ''
            }`}
            aria-label={`View image ${index + 1}`}
          >
            <img src={image.thumbnail} alt={`Thumbnail ${index + 1}`} />
            <div
              className={`absolute inset-0 bg-white transition-opacity duration-200 ${
                index === activeIndex ? 'opacity-70' : 'opacity-0 group-hover:opacity-50'
              }`}
            ></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;