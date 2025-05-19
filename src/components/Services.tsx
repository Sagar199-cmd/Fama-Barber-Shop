import React from 'react';
import { Scissors, Bean as Beard, Palette, Sparkles } from 'lucide-react';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description, price }) => {
  return (
    <div 
      className="bg-gray-900 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105 hover:border-secondary border-2 border-transparent"
      data-aos="fade-up"
    >
      <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4 mx-auto text-primary">
        {icon}
      </div>
      <h3 className="font-montserrat font-semibold text-xl text-center mb-2 text-white">{title}</h3>
      <p className="text-gray-400 text-center mb-4">{description}</p>
      <p className="text-secondary font-montserrat font-bold text-xl text-center">{price}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Haircuts",
      description: "Precision cuts customized to your face shape and style preferences.",
      price: "From $25"
    },
    {
      icon: <Beard className="w-8 h-8" />,
      title: "Beard Grooming",
      description: "Expert beard trimming, shaping, and hot towel treatments.",
      price: "From $15"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Hair Coloring",
      description: "Professional coloring services from subtle highlights to bold transformations.",
      price: "From $45"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Facials",
      description: "Rejuvenating facials tailored to your skin type and concerns.",
      price: "From $35"
    }
  ];

  return (
    <section id="services" className="py-20 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4 text-white">Our Services</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We offer a range of premium services to keep you looking your best.
            Each service is performed by our skilled professionals using high-quality products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              price={service.price}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center" data-aos="fade-up">
          <p className="text-gray-300 mb-6">
            Looking for something specific? We offer many more services in our salon.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-secondary text-primary font-medium rounded-full transition-all duration-300 hover:bg-secondary-light hover:scale-105"
          >
            View Full Service Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;