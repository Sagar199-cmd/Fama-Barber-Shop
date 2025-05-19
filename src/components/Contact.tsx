import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send, Check } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">Contact & Booking</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to experience the Fama difference? Book your appointment today or visit us in Denton. We look forward to serving you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="font-montserrat font-semibold text-2xl mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-secondary bg-opacity-20 p-3 rounded-full mr-4">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Address</h4>
                    <p className="text-gray-600">500 N Bell Ave #109, Denton, TX 76209</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary bg-opacity-20 p-3 rounded-full mr-4">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-gray-600">+1 940-612-9127</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary bg-opacity-20 p-3 rounded-full mr-4">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-600">info@famabarber.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary bg-opacity-20 p-3 rounded-full mr-4">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Business Hours</h4>
                    <div className="text-gray-600">
                      <p>Monday - Friday: 9am - 7pm</p>
                      <p>Saturday: 9am - 6pm</p>
                      <p>Sunday: 10am - 4pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-80 rounded-lg overflow-hidden shadow-lg" data-aos="fade-up">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.991652554141!2d-97.13146942382761!3d33.0981805761346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c4be61d40fd4f%3A0xb8fa9baf1d43c5c9!2s500%20N%20Bell%20Ave%20%23109%2C%20Denton%2C%20TX%2076209!5e0!3m2!1sen!2sus!4v1718238431429!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Fama Barber Shop & Beauty Salon location"
              ></iframe>
            </div>
          </div>
          
          <div data-aos="fade-left">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-montserrat font-semibold text-2xl mb-6">Book an Appointment</h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded flex items-center">
                  <Check className="w-5 h-5 mr-2" />
                  Thank you! Your appointment request has been received. We'll contact you shortly to confirm.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-gray-700 mb-2">Service</label>
                      <select
                        id="service"
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      >
                        <option value="">Select a service</option>
                        <option value="haircut">Haircut</option>
                        <option value="beard">Beard Grooming</option>
                        <option value="color">Hair Coloring</option>
                        <option value="facial">Facial</option>
                        <option value="combo">Haircut & Beard Combo</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="date" className="block text-gray-700 mb-2">Preferred Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formState.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="time" className="block text-gray-700 mb-2">Preferred Time</label>
                      <select
                        id="time"
                        name="time"
                        value={formState.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                      >
                        <option value="">Select a time</option>
                        <option value="9am">9:00 AM</option>
                        <option value="10am">10:00 AM</option>
                        <option value="11am">11:00 AM</option>
                        <option value="12pm">12:00 PM</option>
                        <option value="1pm">1:00 PM</option>
                        <option value="2pm">2:00 PM</option>
                        <option value="3pm">3:00 PM</option>
                        <option value="4pm">4:00 PM</option>
                        <option value="5pm">5:00 PM</option>
                        <option value="6pm">6:00 PM</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Special Requests</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 bg-secondary text-primary font-medium rounded-full flex justify-center items-center transition-all duration-300 hover:bg-secondary-light hover:scale-105 ${isSubmitting ? 'opacity-75' : ''}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="w-5 h-5 mr-2" />
                        Submit Booking Request
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;