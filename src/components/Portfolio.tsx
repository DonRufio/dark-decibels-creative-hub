import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const portfolioItems = [
  {
    title: 'Logo Design',
    image: `${import.meta.env.BASE_URL}images/Logo_Skull_sm.png`,  // Correct image path with BASE_URL
    description: 'Custom logo design for Dark Decibel'
  },
  {
    title: 'Brand Identity',
    image: `${import.meta.env.BASE_URL}images/DD_Logo1.png`,  // Correct image path with BASE_URL
    description: 'Complete brand identity package'
  },
  {
    title: 'Print Design',
    image: `${import.meta.env.BASE_URL}images/DD_Logo2.png`,  // Correct image path with BASE_URL
    description: 'High-quality print materials'
  }
];


const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-[#141414]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Sample Work
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="relative">
            <CarouselContent>
              {portfolioItems.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 top-1/2 transform -translate-y-1/2" />
            <CarouselNext className="absolute -right-12 top-1/2 transform -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;