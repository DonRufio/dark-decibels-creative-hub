import { useState } from 'react';

const portfolioItems = [
  {
    title: 'Logo Design',
    image: '/lovable-uploads/431374db-881d-4b82-af38-1c7963d02d6c.png',
    description: 'Custom logo design for Dark Decibel'
  },
  {
    title: 'Brand Identity',
    image: '/lovable-uploads/623e11f8-51e0-484d-808c-79299edcaae1.png',
    description: 'Complete brand identity package'
  },
  {
    title: 'Print Design',
    image: '/lovable-uploads/d5ec8c3b-e770-411e-966a-9266cf4e8c90.png',
    description: 'High-quality print materials'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Sample Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-secondary hover:glow transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-white">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;