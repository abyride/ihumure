import { useState } from 'react';
import {
  ScrollText,
  Scale,
  HeartHandshake,
  Calendar,
  Megaphone,
  ChevronDown,
  CheckCircle,
  Sparkles,
  Users,
  Globe,
  Landmark
} from 'lucide-react';

export default function WorkProcess() {
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    {
      icon: ScrollText,
      title: 'Document the Truth',
      description: 'We collect and preserve survivor testimonies, photographs, and official records of massacres at Mudende, Gatumba, Mukoto Monastery, and beyond — ensuring history can never be denied.',
      number: '01',
      gradient: 'from-secondary-500 to-secondary-600',
      bgColor: 'bg-secondary-50',
      iconBg: 'bg-secondary-100',
      iconColor: 'text-secondary-600'
    },
    {
      icon: Scale,
      title: 'Pursue Justice',
      description: 'We support legal actions, advocate before international courts, and demand accountability for genocide, war crimes, and crimes against humanity committed against Congolese Tutsis and Hema.',
      number: '02',
      gradient: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: HeartHandshake,
      title: 'Support Survivors',
      description: 'We provide moral, educational, medical, and material aid to widows, orphans, refugees, and disabled survivors living in camps and in the diaspora.',
      number: '03',
      gradient: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: Calendar,
      title: 'Unite in Commemoration',
      description: 'Every August 8, we organize global remembrance events in refugee camps, the diaspora, and online — honoring victims and strengthening our collective voice.',
      number: '04',
      gradient: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600'
    },
   
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-10 md:py-12 px-4 md:px-8 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>

      <div className="relative mx-auto ">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-secondary-400/10 backdrop-blur-sm px-6 py-3 rounded-full border border-secondary-400/20 mb-8 shadow-lg">
            <Sparkles className="w-4 h-4 text-secondary-500" />
            <span className="text-secondary-600 font-semibold text-sm tracking-wider uppercase">
              Our Mission in Action
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Our Path to{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Justice</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="20"
                viewBox="0 0 220 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 15C30 5, 70 8, 110 10C150 12, 190 8, 215 12"
                  stroke="#643094"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Five interconnected pillars guide everything we do — from preserving memory to preventing the next genocide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Accordion */}
          <div className="space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                    isActive ? 'shadow-2xl' : 'shadow-md hover:shadow-lg'
                  }`}
                >
                  {isActive && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} p-[2px] rounded-2xl`}>
                      <div className="w-full h-full bg-white rounded-2xl"></div>
                    </div>
                  )}

                  <div className="relative bg-white rounded-2xl">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center gap-4 p-6 text-left transition-all duration-300 hover:bg-gray-50"
                    >
                      <div
                        className={`relative flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                          isActive
                            ? `bg-gradient-to-br ${step.gradient} scale-110`
                            : `${step.iconBg} scale-100`
                        }`}
                      >
                        <span className={`font-bold text-xl ${isActive ? 'text-white' : step.iconColor}`}>
                          {step.number}
                        </span>
                        {isActive && (
                          <div className="absolute inset-0 rounded-xl bg-white/30 animate-ping"></div>
                        )}
                      </div>

                      <div className="flex-1">
                        <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                          isActive ? 'text-gray-900' : 'text-gray-700'
                        }`}>
                          {step.title}
                        </h3>
                      </div>

                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive ? `bg-gradient-to-br ${step.gradient}` : 'bg-gray-100'
                      }`}>
                        <ChevronDown
                          className={`w-5 h-5 transition-all duration-300 ${
                            isActive ? 'rotate-180 text-white' : 'rotate-0 text-gray-500'
                          }`}
                        />
                      </div>
                    </button>

                    <div
                      className={`transition-all duration-500 overflow-hidden ${
                        isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-6">
                        <div
                          className={`h-[2px] bg-gradient-to-r ${step.gradient} mb-4 rounded-full transform origin-left transition-all duration-700 ${
                            isActive ? 'scale-x-100' : 'scale-x-0'
                          }`}
                        ></div>

                        <div className={`relative p-5 rounded-xl ${step.bgColor}`}>
                          <div className="flex items-start gap-3">
                            <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${step.iconBg}`}>
                              <Icon className={`w-5 h-5 ${step.iconColor}`} />
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Sticky Call-to-Action Card */}
          <div className="relative lg:sticky lg:top-24">
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-600 rounded-2xl mb-6 shadow-lg">
                  <CheckCircle className="w-9 h-9 text-white" />
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Join Us on This Journey
                </h3>
                <p className="text-gray-200 text-lg mb-8 leading-relaxed">
                  Together, we can turn memory into action, pain into prevention, and silence into a global cry of “Never Again.”
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-1">83,000+</div>
                    <div className="text-gray-400 text-sm">Survivors Represented</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-1">20 Yrs</div>
                    <div className="text-gray-400 text-sm">of Annual Commemoration</div>
                  </div>
                </div>

                <a
                  href="#take-action"
                  className="w-full block px-8 py-4 bg-secondary-600 hover:bg-secondary-700 text-white font-bold rounded-full text-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Take Action Now
                </a>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { icon: Globe, label: 'Global Diaspora' },
                { icon: Landmark, label: 'Memorial Sites' },
                { icon: Users, label: 'Unified Voice' }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-secondary-100 rounded-lg mb-2">
                      <Icon className="w-5 h-5 text-secondary-600" />
                    </div>
                    <p className="text-xs font-medium text-gray-700">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}