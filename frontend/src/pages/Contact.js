import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Store",
      details: [
        "Factory Price Mobile Store",
        "123 Tech Street, Electronics Market",
        "Mumbai, Maharashtra 400001"
      ]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+91 98765 43210",
        "+91 87654 32109",
        "Toll Free: 1800-123-4567"
      ]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "info@factoryprice.com",
        "support@factoryprice.com",
        "sales@factoryprice.com"
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Saturday: 9:00 AM - 8:00 PM",
        "Sunday: 10:00 AM - 6:00 PM",
        "24/7 Online Support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="display-large mb-6">Get in Touch</h1>
          <p className="body-large text-white/80 max-w-3xl mx-auto">
            Have questions about our products or need assistance? We're here to help. 
            Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="text-center space-y-6 p-8 rounded-lg border border-white/10 bg-zinc-800/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-400/10 border border-cyan-400/20">
                  <info.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="heading-3">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-white/70 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="display-medium">Send us a Message</h2>
                <p className="text-white/70">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center space-y-6 py-12">
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto" />
                  <h3 className="heading-2 text-green-400">Message Sent Successfully!</h3>
                  <p className="text-white/70">
                    Thank you for contacting us. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-800 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-800 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-zinc-800 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-800 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                      >
                        <option value="">Select a subject</option>
                        <option value="product-inquiry">Product Inquiry</option>
                        <option value="order-support">Order Support</option>
                        <option value="technical-support">Technical Support</option>
                        <option value="bulk-order">Bulk Order</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-zinc-800 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button type="submit" className="btn-primary w-full">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="display-medium">Find Our Store</h2>
                <p className="text-white/70">
                  Visit our physical store for hands-on experience with our products.
                </p>
              </div>

              <div className="w-full h-96 bg-zinc-800 rounded-lg overflow-hidden relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9993636464896!2d72.8776559145785!3d19.076090399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b8c3f1b3b7%3A0x2f4f4f4f4f4f4f4f!2sElectronics%20Market%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1629780000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale contrast-125"
                ></iframe>
                <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 bg-zinc-800/30 rounded-lg border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Store Hours</h4>
                  <p className="text-white/70 text-sm">Mon-Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-white/70 text-sm">Sunday: 10:00 AM - 6:00 PM</p>
                </div>
                <div className="p-6 bg-zinc-800/30 rounded-lg border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Parking</h4>
                  <p className="text-white/70 text-sm">Free parking available</p>
                  <p className="text-white/70 text-sm">Easy access from main road</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="display-medium">Frequently Asked Questions</h2>
            <p className="body-medium text-white/70">
              Quick answers to common questions about our products and services.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Do you offer warranty on your products?",
                answer: "Yes, all our products come with manufacturer warranty ranging from 6 months to 2 years depending on the product category."
              },
              {
                question: "What is your return policy?",
                answer: "We offer 7-day return policy for unopened products and 30-day replacement warranty for defective items."
              },
              {
                question: "Do you provide cash on delivery?",
                answer: "Yes, we offer cash on delivery for orders within India. Additional charges may apply based on location."
              },
              {
                question: "How long does shipping take?",
                answer: "Standard shipping takes 3-5 business days within India. Express shipping is available for 1-2 day delivery."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-white/10 rounded-lg bg-zinc-800/30 p-6">
                <h3 className="heading-3 mb-3">{faq.question}</h3>
                <p className="text-white/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;