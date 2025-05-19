import React from 'react';
import { Link } from 'react-scroll';
import { Clock, Phone, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-16 bg-cover bg-center"
      style={{ backgroundImage: 'url(https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg)' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white" data-aos="fade-right">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
              Fama <span className="text-secondary">Barber Shop</span> & Beauty Salon
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-200">Modern Cuts, Timeless Style</p>
            
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4].map((star) => (
                <Star key={star} className="w-5 h-5 text-secondary fill-secondary" />
              ))}
              <Star className="w-5 h-5 text-secondary fill-secondary" strokeWidth={0.5} />
              <span className="ml-2 text-gray-300">4.6 from 116+ reviews</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-secondary" />
                <span className="text-gray-200">Open ⋅ Closes 7pm</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-secondary" />
                <a href="tel:+19406129127" className="text-gray-200 hover:text-secondary transition-colors">+1 940-612-9127</a>
              </div>
            </div>
            
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="inline-block px-8 py-3 bg-secondary text-primary font-medium rounded-full text-lg transition-all duration-300 hover:bg-secondary-light hover:scale-105 animate-pulse"
            >
              Book an Appointment
            </Link>
          </div>
          
          <div className="hidden lg:block" data-aos="fade-left">
            <div className="relative">
              
              <div className="absolute -bottom-6 -left-6 bg-secondary text-primary p-4 rounded-lg shadow-lg font-montserrat font-semibold transform rotate-6 hover:rotate-0 transition-transform duration-300">
                Premium Services
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;