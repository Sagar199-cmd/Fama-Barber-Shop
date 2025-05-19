import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Scissors } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', target: 'hero' },
    { name: 'About', target: 'about' },
    { name: 'Services', target: 'services' },
    { name: 'Gallery', target: 'gallery' },
    { name: 'Testimonials', target: 'testimonials' },
    { name: 'Contact', target: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex items-center cursor-pointer"
          >
            <Scissors className={`w-8 h-8 ${isScrolled ? 'text-secondary' : 'text-white'} mr-2`} />
            <span className={`font-montserrat font-bold text-xl ${isScrolled ? 'text-white' : 'text-white'}`}>
              Fama
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.target}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`px-4 py-2 mx-1 font-medium text-sm transition-all duration-300 cursor-pointer hover:text-secondary ${
                  isScrolled ? 'text-white' : 'text-white'
                }`}
                activeClass="text-secondary"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="ml-4 px-6 py-2 bg-secondary text-primary font-medium text-sm rounded-full transition-all duration-300 hover:bg-secondary-light hover:scale-105"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.target}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block px-4 py-2 text-white hover:text-secondary transition-colors duration-300"
                activeClass="text-secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block mx-4 mt-4 px-6 py-2 bg-secondary text-primary font-medium text-center rounded-full hover:bg-secondary-light transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;