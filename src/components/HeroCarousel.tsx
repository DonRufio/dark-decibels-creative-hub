import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: '/lovable-uploads/05ff8150-6481-4c13-bc0c-d4e5a18b55ae.png',
    alt: 'Dark Decibel Skull'
  },
  {
    url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    alt: 'Design Work 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    alt: 'Design Work 2'
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden" id="home">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
      ))}

      <div className="absolute inset-x-0 top-1/2 flex items-center justify-between px-4 sm:px-6 md:px-8">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-primary glow' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-glow">
            Dark Decibel Designs
          </h1>
          <p className="text-xl md:text-2xl text-white">
            Creating Powerful Visual Experiences
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;