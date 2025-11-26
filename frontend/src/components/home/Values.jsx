import { 
  Heart, 
  Users, 
  Target, 
  Shield, 
  Lightbulb, 
  Globe,
  Sparkles
} from "lucide-react";

const ValuesPage = () => {
  const coreValues = [
    {
      icon: Heart,
      title: "Compassion First",
      description: "Leading with empathy and understanding in everything we do"
    },
    {
      icon: Shield,
      title: "Integrity Always",
      description: "Operating with transparency, honesty, and ethical practices"
    },
    
 
  ];

  return (
    <div className="w-full  bg-white">
      
      
      {/* Main Values Section */}
      <div className="relative overflow-hidden py-5 md:py-10 px-4 md:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-violet-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-violet-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-violet-400/30 shadow-lg shadow-violet-500/20">
                <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
                <span className="text-violet-300 font-semibold text-sm tracking-wider uppercase">
                  Our Value Proposition
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                What Makes Us{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">Different</span>
                  <span className="absolute inset-x-0 bottom-2 h-3 bg-violet-500 -z-0"></span>
                </span>
              </h2>

              {/* Description */}
              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
                We combine passionate activism, innovative strategies, and proven methodologies 
                to deliver transformative solutions that drive real social change and community empowerment.
              </p>

              {/* Core Values List */}
              <div className="space-y-6 pt-4">
                {coreValues.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={index} className="flex gap-4 group">
                      <div 
                        className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: 'rgba(100, 48, 148, 0.1)',
                          borderColor: 'rgba(100, 48, 148, 0.3)',
                          boxShadow: '0 4px 14px rgba(100, 48, 148, 0.15)'
                        }}
                      >
                        <Icon 
                          className="w-7 h-7 transition-colors" 
                          style={{ color: '#643094' }}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 transition-colors" style={{ 
                          transitionProperty: 'color',
                          transitionDuration: '300ms'
                        }}>
                          {value.title}
                        </h3>
                        <p className="text-gray-400">{value.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white/10 backdrop-blur-sm transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Community activists collaborating"
                  className="w-full object-cover min-h-[520px]"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                
                {/* Decorative icon in top-left */}
                <div 
                  className="absolute top-4 left-4 w-14 h-14 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20"
                  style={{
                    backgroundColor: '#643094',
                    boxShadow: '0 10px 25px rgba(100, 48, 148, 0.3)'
                  }}
                >
                  <Heart className="w-7 h-7 text-white" />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full blur-2xl" style={{ backgroundColor: 'rgba(100, 48, 148, 0.2)' }}></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full blur-2xl" style={{ backgroundColor: 'rgba(139, 92, 246, 0.2)' }}></div>
            </div>
          </div>
        </div>
      </div>

 
    </div>
  );
};

export default ValuesPage;