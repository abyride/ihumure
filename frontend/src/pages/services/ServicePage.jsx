import {
  ScrollText,
  Scale,
  HeartHandshake,
  GraduationCap,
  Calendar,
  Megaphone,
  Globe,
  ArrowRight,
  CheckCircle,
  Sparkles
} from "lucide-react";
import Header from "../../components/header";

const ServicesPage = () => {
  const services = [
    {
      icon: ScrollText,
      title: "Preserve Truth & Memory",
      description: "We collect, archive, and protect survivor testimonies and historical evidence so that the massacres of Mudende, Gatumba, and Mukoto can never be denied.",
      features: [
        "Digital testimony archive",
        "Documentary production",
        "Memorial site advocacy",
        "Educational resources"
      ],
      color: "from-secondary-600 to-secondary-600",
      bgColor: "bg-secondary-50",
      iconBg: "bg-secondary-100",
      iconColor: "text-secondary-600"
    },
    {
      icon: Scale,
      title: "Pursue Justice & Recognition",
      description: "We fight for legal recognition of the genocide against Congolese Tutsis and support international prosecutions of perpetrators.",
      features: [
        "Legal advocacy & briefs",
        "UN & ICC engagement",
        "Genocide recognition campaigns",
        "Support for survivor lawsuits"
      ],
      color: "from-blue-600 to-indigo-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: HeartHandshake,
      title: "Support Survivors & Refugees",
      description: "Direct aid to widows, orphans, and families living in refugee camps — providing education, healthcare, food, and hope.",
      features: [
        "Scholarships for refugee students",
        "Medical & trauma support",
        "Emergency relief in camps",
        "Psychosocial programs"
      ],
      color: "from-rose-600 to-pink-600",
      bgColor: "bg-rose-50",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600"
    },
    {
      icon: Calendar,
      title: "Global Commemoration",
      description: "Every August 8, we unite survivors, diaspora, and allies worldwide to honor victims and declare 'Never Again'.",
      features: [
        "Annual global events",
        "Live broadcasts from camps",
        "Youth remembrance programs",
        "Memorial ceremonies"
      ],
      color: "from-purple-600 to-violet-600",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Megaphone,
      title: "Counter Denial & Educate",
      description: "We combat genocide denial and educate new generations about the ongoing threat to Congolese Tutsis.",
      features: [
        "Social media truth campaigns",
        "School & university programs",
        "Public speaker network",
        "Anti-denial fact sheets"
      ],
      color: "from-amber-600 to-orange-600",
      bgColor: "bg-amber-50",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600"
    },
    {
      icon: Globe,
      title: "Build Global Solidarity",
      description: "We connect survivors with allies on five continents to amplify our voice and prevent the next genocide.",
      features: [
        "International chapters",
        "Parliamentary advocacy",
        "Interfaith coalitions",
        "Genocide prevention networks"
      ],
      color: "from-cyan-600 to-blue-600",
      bgColor: "bg-cyan-50",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Listen",
      description: "We hear directly from survivors and refugees"
    },
    {
      number: "02",
      title: "Document",
      description: "Preserve evidence and testimonies with dignity"
    },
    {
      number: "03",
      title: "Act",
      description: "Advocate, support, and commemorate without pause"
    },
    {
      number: "04",
      title: "Unite",
      description: "Bring the world together to say Never Again"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <Header title="What We Do" path="what-we-do" />

      {/* Services Grid Section */}
      <div className="py-5 md:py-32 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="mx-auto lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Six Pillars of<br />
              <span className="relative inline-block">
                <span className="relative z-10">Remembrance & Resistance</span>
                <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 500 30" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 20 Q 250 5, 495 20" stroke="#643094" strokeWidth="8" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything we do is led by survivors — for truth, justice, healing, and prevention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-100 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${service.iconBg} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-9 h-9 ${service.iconColor}`} />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${service.iconColor}`} />
                          <span className="text-gray-700 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="group/btn flex items-center gap-2 text-gray-800 font-bold hover:gap-4 transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>

                  <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-5 md:py-32 px-4 md:px-8 bg-white">
        <div className="mx-auto lg:px-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-secondary-100 rounded-full mb-6">
              <span className="text-secondary-700 font-bold text-sm uppercase tracking-wider">
                Our Approach
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Survivor-Led, Every Step of the Way
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-14 left-full w-full h-0.5 bg-gradient-to-r from-secondary-400 to-secondary-200 -translate-x-1/2 z-0" />
                )}

                <div className="relative bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary-600 to-secondary-600 rounded-xl text-white font-bold text-2xl mb-5 shadow-xl">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero CTA */}
      <div className="relative py-28 md:py-36 px-4 md:px-8 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1800&q=80&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-700/95 via-secondary-800/90 to-black/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl  font-bold text-white mb-8 leading-tight">
            The Dead Cannot Cry Out.<br />
            <span className="text-secondary-300">We Do It for Them.</span>
          </h2>
          <p className="text-xl  text-secondary-100 mb-12 max-w-3xl mx-auto">
            Join survivors and allies worldwide in preserving truth, supporting refugees, and preventing the next genocide.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-5 bg-white text-secondary-700 font-bold rounded-full text-lg hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105">
              Stand With Us Now
            </button>
            <button className="px-10 py-5 bg-transparent border-3 border-white text-white hover:bg-white hover:text-secondary-700 font-bold rounded-full text-lg transition-all">
              Support a Survivor
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-5 px-4 md:px-8 bg-gray-50">
        <div className="mx-auto lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: "83,000+", label: "Survivors Represented" },
              { value: "20+", label: "Years of Commemoration" },
              { value: "5", label: "Continents United" },
              { value: "Never", label: "Again" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl  font-bold text-gray-800 mb-3">
                  {stat.value}
                </div>
                <div className="text-lg text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;