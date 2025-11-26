import { ArrowRight, Sparkles } from "lucide-react";

const journeys = [
  {
    id: 1,
    category: "Activism Basics",
    title: "From Every Little Local Voices to Global Impact",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
  {
    id: 2,
    category: "Fundraising & Support",
    title: "Fundraising Change for Every Contribution",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
  },
  {
    id: 3,
    category: "Digital Advocacy",
    title: "Digital Activism: Spreading Awareness",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  }
];

export default function JourneysSection() {
  return (
    <section className="py-2 md:py-10 px-4 md:px-8 bg-gradient-to-br from-gray-50 via-purple-50/30 to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-10">
          <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" style={{ color: '#643094' }} />
            <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: '#643094' }}>
              Our Impact Stories
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Our{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Journeys</span>
              <span 
                className="absolute inset-x-0 bottom-2 h-4 -z-0"
                style={{ backgroundColor: '#643094', opacity: 0.2 }}
              ></span>
            </span>
            <br />
            That Matter
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Every movement begins with courage and hope. Discover stories showing how unity creates lasting impact.
          </p>
        </div>

        {/* Journey Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journeys.map((journey, index) => (
            <div
              key={journey.id}
              className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              style={{
                boxShadow: '0 4px 20px rgba(100, 48, 148, 0.1)'
              }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={journey.image}
                  alt={journey.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(to top, rgba(100, 48, 148, 0.7), transparent)'
                  }}
                ></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span 
                    className="inline-block px-4 py-2 rounded-full text-xs font-bold text-white backdrop-blur-sm"
                    style={{
                      backgroundColor: 'rgba(100, 48, 148, 0.9)',
                      boxShadow: '0 4px 12px rgba(100, 48, 148, 0.3)'
                    }}
                  >
                    {journey.category}
                  </span>
                </div>

                {/* Number Badge */}
                <div 
                  className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg backdrop-blur-sm"
                  style={{
                    backgroundColor: 'rgba(100, 48, 148, 0.9)',
                    boxShadow: '0 4px 12px rgba(100, 48, 148, 0.3)'
                  }}
                >
                  {journey.id}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 space-y-4">
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight group-hover:text-purple-900 transition-colors duration-300">
                  {journey.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  {journey.description}
                </p>

                {/* Read More Button */}
                <div className="pt-4">
                  <button 
                    className="inline-flex items-center gap-2 font-semibold text-gray-800 group-hover:gap-4 transition-all duration-300"
                    style={{
                      color: '#643094'
                    }}
                  >
                    <span className="relative">
                      Read More
                      <span 
                        className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                        style={{ backgroundColor: '#643094' }}
                      ></span>
                    </span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div 
                className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-full opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                style={{ backgroundColor: '#643094' }}
              ></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #643094 0%, #7c3aad 100%)'
            }}
          >
            <span>View All Journeys</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}