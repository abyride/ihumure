import React from 'react';
import { Users, Eye, HandHeart, Scale, ScrollText, HeartHandshake } from 'lucide-react';


export default function ValuesSection() {
  const values = [
    {
      icon: ScrollText,
      title: 'Truth & Memory',
      description: 'We preserve the names, stories, and testimonies of victims so that history is never erased and denial can never prevail.',
    },
    {
      icon: Scale,
      title: 'Justice & Accountability',
      description: 'We pursue legal recognition and prosecution of genocide, war crimes, and crimes against humanity committed against Congolese Tutsis and Hema communities.',
    },
    {
      icon: HeartHandshake,
      title: 'Healing & Solidarity',
      description: 'We stand with survivors, widows, orphans, and refugees — offering moral, emotional, and material support to rebuild shattered lives.',
    },
  ];

  const stats = [
    { value: '83', suffix: ',000+', label: 'Refugees & Survivors Represented' },
    { value: '20', suffix: '+', label: 'Years of Annual Commemorations' },
    { value: '5', suffix: '', label: 'Continents Where Our Voice Echoes' },
  ];

  return (
    <div className=" bg-gradient-to-br from-gray-100 via-gray-50 to-white py-10 md:px-6 px-6">
      <div className=" mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Title and Description */}
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              What We Stand for &{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Believe Together</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="24"
                  viewBox="0 0 400 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="200"
                    cy="12"
                    rx="195"
                    ry="10"
                    stroke="#808080"
                    strokeWidth="4"
                    fill="none"
                  />
                </svg>
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              As Congolese Tutsi survivors and descendants, we are bound by a shared duty: 
              to remember the victims of Mudende, Gatumba, Mukoto Monastery, and countless other massacres; 
              to fight genocide denial; and to build a future where our people live in safety, dignity, 
              and peace in our ancestral homeland.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 pt-2">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="text-4xl lg:text-5xl font-bold text-gray-800">
                    {stat.value}
                    <span className="text-secondary-500">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-gray-600 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Values Cards */}
          <div className="space-y-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-secondary-50 rounded-xl flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-secondary-600" strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}