import { Monitor, Palette, Printer, Share2 } from 'lucide-react';

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Logo Design',
    description: 'Custom logo designs that capture your brand\'s essence and leave a lasting impression.'
  },
  {
    icon: <Printer className="w-8 h-8" />,
    title: 'Design For Print',
    description: 'High-quality print designs for all your marketing materials and merchandise.'
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: 'Web Design',
    description: 'Modern, responsive websites that engage your audience and drive results.'
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: 'Social Media',
    description: 'Eye-catching social media designs that boost your online presence.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Our Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-[#0A0A0A] rounded-lg hover:glow transition-all duration-300 group"
            >
              <div className="text-primary group-hover:text-glow mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;