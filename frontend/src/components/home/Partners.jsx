import React, { useEffect } from "react";
import { ChevronLeft, ChevronRight, Award, TrendingUp } from "lucide-react";

// Partner logos - using placeholder images
const partners = [
  { 
    name: "AbyRide", 
    logo: "https://via.placeholder.com/200x80/4F46E5/FFFFFF?text=AbyRide",
    category: "Transportation"
  },
  { 
    name: "Rent By Aby", 
    logo: "https://via.placeholder.com/200x80/06B6D4/FFFFFF?text=RentByAby",
    category: "Real Estate"
  },
  { 
    name: "Aby Inventory", 
    logo: "https://via.placeholder.com/200x80/8B5CF6/FFFFFF?text=AbyInventory",
    category: "Technology"
  },
  { 
    name: "Tech Solutions", 
    logo: "https://via.placeholder.com/200x80/3B82F6/FFFFFF?text=TechSolutions",
    category: "Technology"
  },
  { 
    name: "Global Ventures", 
    logo: "https://via.placeholder.com/200x80/10B981/FFFFFF?text=GlobalVentures",
    category: "Investment"
  },
  { 
    name: "Innovation Labs", 
    logo: "https://via.placeholder.com/200x80/F59E0B/FFFFFF?text=InnovationLabs",
    category: "Research"
  },
];

export default function Partners() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % partners.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
    setIsAutoPlaying(false);
  };

  const getVisiblePartners = () => {
    const visible = [];
    for (let i = 0; i < 5; i++) {
      visible.push(partners[(currentIndex + i) % partners.length]);
    }
    return visible;
  };

  return (
    <section className="py-5 md:py-32 px-4 md:px-8 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-secondary-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-400 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Badge with Icon */}
          <div className="inline-flex items-center gap-2 bg-secondary-400/10 backdrop-blur-sm px-6 py-3 rounded-full border border-secondary-400/20 mb-8 shadow-lg">
            <TrendingUp className="w-5 h-5 text-secondary-400" />
            <span className="text-secondary-400 font-semibold text-sm tracking-wider uppercase">Trusted Partnerships</span>
          </div>

          {/* Title with Highlight Effect */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Strategic{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-white">Partners</span>
             <svg 
                  className="absolute -bottom-2 left-0 w-full stroke-secondary-500" 
                  viewBox="0 0 300 20" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M5 15 Q 150 5, 295 15" 
                    // stroke="#14b8a6" 
                    strokeWidth="6" 
                    fill="none" 
                    strokeLinecap="round"
                  />
                </svg>
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Collaborating with innovative organizations across industries to deliver 
            exceptional value and drive meaningful impact.
          </p>
        </div>

        {/* Partners Carousel */}
        <div className="relative mb-16">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white hover:bg-secondary-400 rounded-full flex items-center justify-center transition-all shadow-xl hover:scale-110 group"
            aria-label="Previous partners"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white hover:bg-secondary-400 rounded-full flex items-center justify-center transition-all shadow-xl hover:scale-110 group"
            aria-label="Next partners"
          >
            <ChevronRight className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors" />
          </button>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-20">
            {getVisiblePartners().map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="group relative"
              >
                {/* Card */}
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-secondary-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/10 h-44 flex flex-col items-center justify-center relative overflow-hidden">
                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary-400/0 to-blue-400/0 group-hover:from-secondary-400/10 group-hover:to-blue-400/10 transition-all duration-300"></div>
                  
                  {/* Logo */}
                  <div className="mb-4 relative z-10">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-16 w-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Category Badge */}
                  <span className="text-xs text-secondary-400 font-semibold px-3 py-1.5 bg-secondary-400/10 rounded-full border border-secondary-400/20 relative z-10">
                    {partner.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-10 h-3 bg-secondary-400 shadow-lg shadow-secondary-400/50'
                    : 'w-3 h-3 bg-white/30 hover:bg-white/50 hover:scale-125'
                }`}
                aria-label={`Go to partner group ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section with Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
          {[
            { value: "50+", label: "Active Partners" },
            { value: "15+", label: "Countries" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "10+", label: "Years Experience" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-secondary-400/30 transition-all duration-300 hover:scale-105 text-center group"
            >
              <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:text-secondary-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <button className="px-10 py-4 bg-secondary-400 hover:bg-secondary-500 text-gray-900 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-secondary-400/50 hover:scale-105">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
}