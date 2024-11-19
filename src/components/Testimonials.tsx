import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "John Smith",
    company: "Rock Band Productions",
    text: "Dark Decibel created an amazing logo for our band. Their attention to detail and understanding of our vision was spot on!"
  },
  {
    name: "Sarah Johnson",
    company: "Event Horizon",
    text: "The social media designs they created helped us double our engagement. Couldn't be happier with the results!"
  },
  {
    name: "Mike Williams",
    company: "Digital Dreams",
    text: "Professional, creative, and responsive. Dark Decibel transformed our brand identity completely."
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          What Our Clients Say
        </h2>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8 absolute'
                }`}
              >
                <blockquote className="text-center">
                  <p className="text-xl md:text-2xl text-gray-300 mb-6">
                    "{testimonial.text}"
                  </p>
                  <footer>
                    <div className="font-semibold text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400">
                      {testimonial.company}
                    </div>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-primary glow' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;