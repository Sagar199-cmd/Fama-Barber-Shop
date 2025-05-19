import React from 'react';

interface GalleryImageProps {
  src: string;
  alt: string;
  delay?: number;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, delay = 0 }) => {
  return (
    <div 
      className="overflow-hidden rounded-lg group relative"
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <h3 className="text-white font-montserrat font-medium text-lg">{alt}</h3>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg",
      alt: "Classic Haircut"
    },
    {
      src: "https://images.pexels.com/photos/3998416/pexels-photo-3998416.jpeg",
      alt: "Beard Trim"
    },
    {
      src: "https://images.pexels.com/photos/3356170/pexels-photo-3356170.jpeg",
      alt: "Modern Styling"
    },
    {
      src: "https://images.pexels.com/photos/3993323/pexels-photo-3993323.jpeg",
      alt: "Professional Shave"
    },
    {
      src: "https://images.pexels.com/photos/4947277/pexels-photo-4947277.jpeg",
      alt: "Hair Color"
    },
    {
      src: "https://images.pexels.com/photos/2068672/pexels-photo-2068672.jpeg",
      alt: "Luxury Facial"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Our Gallery</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our finest work. Our skilled barbers and stylists pride themselves on creating personalized looks that enhance each client's unique style.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <GalleryImage
              key={index}
              src={image.src}
              alt={image.alt}
              delay={index * 100}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center" data-aos="fade-up">
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 border-2 border-secondary text-secondary font-medium rounded-full transition-all duration-300 hover:bg-secondary hover:text-white"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;