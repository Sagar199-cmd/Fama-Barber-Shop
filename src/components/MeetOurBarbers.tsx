import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

interface BarberProps {
  name: string;
  role: string;
  image: string;
  experience: string;
  specialties: string[];
  social: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

const BarberCard: React.FC<BarberProps> = ({ name, role, image, experience, specialties, social }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105" data-aos="fade-up">
      <div className="relative group">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-4">
            {social.instagram && (
              <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
            )}
            {social.facebook && (
              <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
            )}
            {social.twitter && (
              <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-montserrat font-semibold text-xl text-white mb-2">{name}</h3>
        <p className="text-secondary mb-4">{role}</p>
        <p className="text-gray-400 mb-4">Experience: {experience}</p>
        <div className="space-y-2">
          <p className="text-white font-medium">Specialties:</p>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <span 
                key={index}
                className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MeetOurBarbers: React.FC = () => {
  const barbers: BarberProps[] = [
    {
      name: "Michael Anderson",
      role: "Master Barber",
      image: "https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg",
      experience: "12 years",
      specialties: ["Classic Cuts", "Beard Styling", "Hot Towel Shaves"],
      social: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        twitter: "https://twitter.com"
      }
    },
    {
      name: "Sarah Martinez",
      role: "Senior Stylist",
      image: "https://images.pexels.com/photos/3993308/pexels-photo-3993308.jpeg",
      experience: "8 years",
      specialties: ["Color Specialist", "Modern Styles", "Hair Treatment"],
      social: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com"
      }
    },
    {
      name: "James Wilson",
      role: "Expert Barber",
      image: "https://images.pexels.com/photos/2076930/pexels-photo-2076930.jpeg",
      experience: "10 years",
      specialties: ["Fade Specialist", "Design Cuts", "Beard Grooming"],
      social: {
        instagram: "https://instagram.com",
        twitter: "https://twitter.com"
      }
    }
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4 text-white">Meet Our Barbers</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our team of skilled professionals brings years of experience and passion to every service. 
            Get to know the experts who will help you achieve your perfect look.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {barbers.map((barber, index) => (
            <BarberCard key={index} {...barber} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurBarbers;