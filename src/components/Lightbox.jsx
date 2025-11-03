import React, { useState } from 'react';
import closeIcon from '../assets/images/icon-close.svg';
import prevIcon from '../assets/images/icon-previous.svg';
import nextIcon from '../assets/images/icon-next.svg';

const Lightbox = ({ images, startIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="hidden lg:flex fixed inset-0 bg-black/75 z-50 items-center justify-center" onClick={onClose}>
      <div className="relative w-full max-w-xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-10 right-0 text-white hover:text-[hsl(26,100%,55%)] transition-colors" aria-label="Close lightbox">
          <img src={closeIcon} alt="Close lightbox" />
        </button>

        <div className="relative mb-6">
          <img
            src={images[currentIndex].full}
            alt={`Product image ${currentIndex + 1}`}
            className="w-full rounded-2xl"
          />
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -translate-y-1/2 -left-6 bg-white w-12 h-12 rounded-full flex items-center justify-center hover:text-[hsl(26,100%,55%)] custom-focus-ring"
            aria-label="Previous image"
          >
            <img src={prevIcon} alt="Previous image" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -translate-y-1/2 -right-6 bg-white w-12 h-12 rounded-full flex items-center justify-center hover:text-[hsl(26,100%,55%)] custom-focus-ring"
            aria-label="Next image"
          >
            <img src={nextIcon} alt="Next image" />
          </button>
        </div>

        <div className="flex justify-center gap-6 px-10">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative rounded-xl overflow-hidden group custom-focus-ring ${
                index === currentIndex ? 'ring-2 ring-[hsl(26,100%,55%)]' : ''
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <img src={image.thumbnail} alt={`Thumbnail ${index + 1}`} className="w-20" />
              <div
                className={`absolute inset-0 bg-white transition-opacity duration-200 ${
                  index === currentIndex ? 'opacity-70' : 'opacity-0 group-hover:opacity-50'
                }`}
              ></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;