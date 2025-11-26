import { ChevronRight, Home } from "lucide-react";

const Header = ({ title, path }) => {
  return (
    <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&q=80')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-900/80"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full justify-center items-center px-4 text-center">
        {/* Title with Highlight Effect */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="relative inline-block">
            <span className="relative z-10">{title}</span>
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
        </h1>

        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-lg">
          <a 
            href="/" 
            className="flex items-center gap-2 text-gray-300 hover:text-secondary-400 transition-colors duration-300 group"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-medium">Home</span>
          </a>
          
          <ChevronRight className="w-5 h-5 text-gray-500" />
          
          <span className="text-secondary-400 font-semibold capitalize">
            {path}
          </span>
        </div>

        {/* Decorative Line */}
        <div className="mt-8 w-24 h-1 bg-gradient-to-r from-transparent via-secondary-400 to-transparent rounded-full"></div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-16 md:h-20"
        >
          <path 
            d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" 
            className="fill-white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;