import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useToast } from './ui/use-toast';

const images = [
  {
    url: '/images/Logo_Skull_sm.png',
    alt: 'Dark Decibel Skull'
  },
  {
    url: '/images/HC1_sm.jpg',
    alt: 'Design Work 1'
  },
  {
    url: '/images/HC1_sm.jpg',
    alt: 'Design Work 2'
  },
];

const HeroCarousel = () => {
  const { toast } = useToast();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % images.length);
    console.log('Next slide clicked');
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    console.log('Previous slide clicked');
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="relative h-screen w-full overflow-hidden" id="home">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={index !== currentSlide}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
      ))}

      <div className="absolute inset-x-0 top-1/2 flex items-center justify-between px-4 sm:px-6 md:px-8">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary active:scale-95"
          aria-label="Previous slide"
          disabled={isTransitioning}
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary active:scale-95"
          aria-label="Next slide"
          disabled={isTransitioning}
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setCurrentSlide(index);
                setIsTransitioning(true);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-primary glow scale-110' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="space-y-4 animate-fade-in">
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