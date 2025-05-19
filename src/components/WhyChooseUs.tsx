import React from 'react';
import { Award, Scissors, Shield } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105 border-b-4 border-transparent hover:border-secondary"
      data-aos="fade-up"
    >
      <div className="w-14 h-14 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center mb-4">
        <div className="text-secondary">{icon}</div>
      </div>
      <h3 className="font-montserrat font-semibold text-xl mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Award className="w-7 h-7" />,
      title: "Expert Barbers",
      description: "Our team consists of experienced professionals who are passionate about their craft and stay updated with the latest trends and techniques."
    },
    {
      icon: <Scissors className="w-7 h-7" />,
      title: "Premium Tools",
      description: "We use only the finest tools and products in the industry to ensure that you receive the best service and results possible."
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Clean Environment",
      description: "Our salon maintains the highest standards of cleanliness and hygiene. Your safety and comfort are our top priorities."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Fama, we strive to provide exceptional service and experience that sets us apart.
            Here's why our clients choose us time and again.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-primary text-white p-8 rounded-lg" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-montserrat font-semibold text-2xl mb-4">First Time Visitor?</h3>
              <p className="mb-6">
                Enjoy 15% off your first service with us. Experience the Fama difference and see why our clients keep coming back.
              </p>
              <a 
                href="#contact" 
                className="inline-block px-6 py-3 bg-secondary text-primary font-medium rounded-full transition-all duration-300 hover:bg-secondary-light hover:scale-105"
              >
                Claim Offer
              </a>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg" 
                alt="Barbershop interior" 
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;