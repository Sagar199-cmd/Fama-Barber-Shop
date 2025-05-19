import React from 'react';
import { Link } from 'react-scroll';
import { Scissors, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Scissors className="w-6 h-6 text-secondary mr-2" />
              <span className="font-montserrat font-bold text-xl">Fama</span>
            </div>
            <p className="text-gray-400 mb-6">
              Providing premium barber and beauty salon services in Denton since 2008. Your satisfaction is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-secondary bg-opacity-10 p-2 rounded-full text-secondary hover:bg-opacity-20 transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-secondary bg-opacity-10 p-2 rounded-full text-secondary hover:bg-opacity-20 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-secondary bg-opacity-10 p-2 rounded-full text-secondary hover:bg-opacity-20 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-400 hover:text-secondary transition-colors duration-300 cursor-pointer"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {['Haircuts', 'Beard Grooming', 'Hair Coloring', 'Facials', 'Hot Towel Shave', 'Hair Styling'].map((service) => (
                <li key={service}>
                  <Link
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-400 hover:text-secondary transition-colors duration-300 cursor-pointer"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Business Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9am - 7pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>9am - 6pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>10am - 4pm</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="inline-block px-6 py-2 bg-secondary text-primary font-medium rounded-full text-sm transition-all duration-300 hover:bg-secondary-light cursor-pointer"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Fama Barber Shop & Beauty Salon. All rights reserved.
          </p>
          <div className="flex space-x-4 text-gray-500 text-sm">
            <a href="#" className="hover:text-secondary transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;