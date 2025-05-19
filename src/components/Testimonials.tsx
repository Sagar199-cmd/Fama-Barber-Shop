import React, { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  rating: number;
  imageSrc: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ content, author, rating, imageSrc }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col">
      <div className="flex items-center mb-4">
        <img src={imageSrc} alt={author} className="w-16 h-16 rounded-full object-cover mr-4" />
        <div>
          <h4 className="font-montserrat font-medium">{author}</h4>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-secondary fill-secondary' : 'text-gray-300'}`}
                strokeWidth={i < rating ? 0 : 1}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic flex-grow">{content}</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "Absolutely the best barber experience I've ever had in Denton! The attention to detail and the atmosphere make it worth every penny. My go-to place for haircuts now.",
      author: "Michael P.",
      rating: 5,
      imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    {
      content: "Great service but a bit of a wait sometimes. The haircut was fantastic, though I wish they had more parking. Still, the skills of their barbers make up for it.",
      author: "Jason R.",
      rating: 4,
      imageSrc: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg"
    },
    {
      content: "I've been coming to Fama for years now and they never disappoint. The team is professional, friendly, and always up-to-date with the latest styles. Highly recommend!",
      author: "Sarah K.",
      rating: 5,
      imageSrc: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState<TestimonialProps[]>([]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setVisibleTestimonials([testimonials[activeIndex]]);
      } else if (width < 1024) {
        setVisibleTestimonials(testimonials.slice(activeIndex, activeIndex + 2));
      } else {
        setVisibleTestimonials(testimonials);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex, testimonials]);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our satisfied clients have to say about their experience with Fama Barber Shop & Beauty Salon.
          </p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 md:hidden">
            <button 
              onClick={goToPrev}
              className="mx-2 p-2 rounded-full bg-gray-200 hover:bg-secondary hover:text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={goToNext}
              className="mx-2 p-2 rounded-full bg-gray-200 hover:bg-secondary hover:text-white transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="bg-primary text-white p-8 rounded-lg inline-block max-w-3xl">
            <h3 className="font-montserrat font-semibold text-xl mb-3">Loved Your Experience?</h3>
            <p className="mb-6">
              Leave us a review and let others know about your experience at Fama. Your feedback helps us continue to provide exceptional service.
            </p>
            <a 
              href="https://google.com/review" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-secondary text-primary font-medium rounded-full transition-all duration-300 hover:bg-secondary-light"
            >
              Leave a Review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;