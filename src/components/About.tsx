import React from 'react';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative" data-aos="fade-right">
            <img 
              src="https://images.pexels.com/photos/3998429/pexels-photo-3998429.jpeg" 
              alt="Barber team" 
              className="rounded-lg shadow-lg w-full max-w-lg"
            />
            <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 bg-white p-4 rounded-lg shadow-lg w-48 h-48 flex items-center justify-center" data-aos="fade-down" data-aos-delay="200">
              <span className="font-montserrat font-bold text-6xl text-secondary">15+</span>
              <span className="text-sm ml-2">Years of Excellence</span>
            </div>
          </div>
          
          <div data-aos="fade-left">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6 relative inline-block text-white">
              Our Story
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-secondary"></span>
            </h2>
            
            <p className="text-gray-300 mb-6">
              Welcome to Fama Barber Shop & Beauty Salon, where tradition meets innovation. Since opening our doors in Denton, we've been dedicated to providing exceptional grooming experiences for our clients. Our team of skilled barbers and stylists combine years of expertise with the latest trends to deliver results that exceed expectations.
            </p>
            
            <div className="bg-gray-900 p-6 rounded-lg relative mb-8" data-aos="fade-up" data-aos-delay="100">
              <Quote className="absolute text-secondary opacity-20 w-16 h-16 -top-6 -left-6" />
              <p className="text-gray-300 italic relative z-10">
                "We believe in personalized service and attention to detail. Every client deserves to look and feel their best when they leave our chair."
              </p>
              <p className="text-right mt-4 font-medium text-secondary">— Fama Team</p>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <div className="bg-gray-900 text-white p-4 rounded-lg flex items-center justify-center w-32 text-center">
                <div>
                  <div className="font-montserrat font-bold text-2xl text-secondary">100%</div>
                  <div className="text-sm">Satisfaction</div>
                </div>
              </div>
              <div className="bg-gray-900 text-white p-4 rounded-lg flex items-center justify-center w-32 text-center">
                <div>
                  <div className="font-montserrat font-bold text-2xl text-secondary">5K+</div>
                  <div className="text-sm">Happy Clients</div>
                </div>
              </div>
              <div className="bg-gray-900 text-white p-4 rounded-lg flex items-center justify-center w-32 text-center">
                <div>
                  <div className="font-montserrat font-bold text-2xl text-secondary">10+</div>
                  <div className="text-sm">Expert Stylists</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;