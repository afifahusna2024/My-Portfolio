import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, isOpen, onClose, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Gallery Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4">
        {/* Image Container */}
        <div className="relative flex items-center justify-center w-full max-w-5xl">
          <div className="relative bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-4 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -top-2 -right-2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-all duration-200 hover:scale-110 shadow-lg z-10"
              title="Close gallery"
            >
              <X size={20} />
            </button>
            
            {/* Title */}
            <div className="text-center mb-4">
              <h3 className="text-white text-xl font-semibold">{title}</h3>
            </div>
            
            {/* Image */}
            <img
              src={images[currentIndex]}
              alt={`${title} - Screenshot ${currentIndex + 1}`}
              className="w-full max-w-4xl h-auto max-h-[50vh] md:max-h-[70vh] object-contain rounded-lg"
            />
          </div>
          
        </div>
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-200 hover:scale-110 border border-white/30"
              title="Previous image"
            >
              <ChevronLeft size={20} className="md:w-6 md:h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-200 hover:scale-110 border border-white/30"
              title="Next image"
            >
              <ChevronRight size={20} className="md:w-6 md:h-6" />
            </button>
          </>
        )}

        {/* Image Counter and Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3">
            {/* Counter */}
            <div className="bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full border border-white/30">
              {currentIndex + 1} / {images.length}
            </div>
            
            {/* Dots */}
            <div className="flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-purple-500 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  title={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
