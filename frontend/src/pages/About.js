import React from 'react';
import { Award, Users, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "We source only the highest quality products from trusted manufacturers, ensuring every item meets our strict standards."
    },
    {
      icon: Users,
      title: "Customer Focused", 
      description: "Our customers are at the heart of everything we do. We listen, adapt, and continuously improve based on your feedback."
    },
    {
      icon: Target,
      title: "Fair Pricing",
      description: "By eliminating middlemen and working directly with manufacturers, we pass the savings directly to you."
    },
    {
      icon: Heart,
      title: "Trusted Service",
      description: "With over 50,000 satisfied customers, we've built our reputation on reliability, transparency, and exceptional service."
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to make premium mobile accessories accessible to everyone at factory prices."
    },
    {
      year: "2021", 
      title: "First 1000 Customers",
      description: "Reached our first milestone with 1000 happy customers and established direct manufacturer partnerships."
    },
    {
      year: "2022",
      title: "Product Expansion",
      description: "Expanded our product range to include wireless chargers, power banks, and premium audio accessories."
    },
    {
      year: "2023",
      title: "50K+ Customer Base",
      description: "Crossed 50,000 satisfied customers across India with a 99% satisfaction rate and growing."
    },
    {
      year: "2024",
      title: "Innovation Focus",
      description: "Launching cutting-edge products with latest technology while maintaining our commitment to factory pricing."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <h1 className="display-large">About Factory Price Mobile Store</h1>
            <p className="body-large max-w-4xl mx-auto text-white/80">
              We're revolutionizing the mobile accessories market by connecting customers 
              directly with manufacturers, eliminating markup and delivering premium quality 
              at factory prices.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="display-medium">Our Mission</h2>
              <div className="space-y-6">
                <p className="body-medium text-white/80">
                  To democratize access to premium mobile accessories by offering 
                  factory-direct pricing without compromising on quality or service.
                </p>
                <p className="body-medium text-white/80">
                  We believe everyone deserves access to high-quality mobile accessories 
                  without paying premium brand markups. By working directly with manufacturers, 
                  we cut out the middleman and pass those savings to our customers.
                </p>
                <p className="body-medium text-white/80">
                  Our commitment extends beyond just pricing - we ensure every product 
                  meets rigorous quality standards and provide exceptional customer service 
                  that builds lasting relationships.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-lg flex items-center justify-center border border-white/10">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-black font-bold text-3xl">FP</span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-semibold">
                      <span className="text-white">factory</span>
                      <span className="text-cyan-400 ml-2">Price</span>
                    </div>
                    <div className="text-white/70 tracking-wider">Mobile Store</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="display-large">Our Values</h2>
            <p className="body-medium text-white/70 max-w-2xl mx-auto">
              These core values guide every decision we make and every interaction we have.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center space-y-6 p-8 rounded-lg border border-white/10 bg-zinc-800/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-400/10 border border-cyan-400/20">
                  <value.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="heading-2">{value.title}</h3>
                <p className="text-white/70 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="display-large">Our Journey</h2>
            <p className="body-medium text-white/70 max-w-2xl mx-auto">
              From a small startup to a trusted brand serving thousands of customers across India.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 hidden lg:block"></div>
            
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 space-y-4">
                    <div className="inline-block bg-cyan-400 text-black px-4 py-2 rounded-full font-bold">
                      {item.year}
                    </div>
                    <h3 className="heading-2">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:block w-6 h-6 bg-cyan-400 rounded-full border-4 border-black relative z-10"></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="display-large">Join Our Community</h2>
            <p className="body-large max-w-3xl mx-auto text-white/80">
              Be part of the Factory Price family and experience the difference of 
              premium quality at fair prices. Your trust drives our innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400">50K+</div>
                <div className="text-white/70">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400">100+</div>
                <div className="text-white/70">Products</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400">99%</div>
                <div className="text-white/70">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400">24/7</div>
                <div className="text-white/70">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;