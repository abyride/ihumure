import { HeartHandshake, Scale, GraduationCap, ScrollText, Home, Users } from 'lucide-react';

export default function HopeChangeSection() {
  const causes = [
    {
      title: 'Support Survivors & Refugees',
      description: 'Provide food, medical care, education, and shelter to widows, orphans, and families still living in refugee camps after decades of displacement.',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600&fit=crop', // Refugee camp / African community
      icon: HeartHandshake,
    },
    {
      title: 'Justice & Accountability',
      description: 'Fight genocide denial and pursue legal recognition and prosecution of the massacres at Mudende, Gatumba, Mukoto Monastery, and ongoing atrocities.',
      image: 'https://images.unsplash.com/photo-1676181739500-e1291b113370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGp1c3RpY2V8ZW58MHx8MHx8fDA%3D', // Powerful advocacy image
      icon: Scale,
      featured: true, // This one stays tall and prominent
    },
    {
      title: 'Education for the Next Generation',
      description: 'Sponsor schooling and university studies for refugee children and youth so they can rebuild their lives and lead the future of the community.',
      image: 'https://images.unsplash.com/photo-1627423893729-3a79f48ff473?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVkdWNhdGlvbiUyMGFmcmljYXxlbnwwfHwwfHx8MA%3D%3D', // Children learning
      icon: GraduationCap,
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto px-6 md:px-8 ">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
            Give Survivors Hope,
            <br />
            <span className="relative inline-block mt-2">
              Create Lasting{' '}
              <span className="relative">
                Justice
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 15 Q 150 5, 295 15"
                    stroke="#14b8a6"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every contribution directly supports Congolese Tutsi survivors of genocide and ethnic persecution.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {causes.map((cause, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                cause.featured ? 'md:row-span-2' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${cause.featured ? 'h-96' : 'h-64'}`}>
                <img
                  src={cause.image}
                  alt={cause.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent"></div>

                {/* Icon Badge */}
                <div className="absolute top-6 right-6 w-14 h-14 bg-secondary-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white/30">
                  <cause.icon className="text-white" size={28} />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {cause.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {cause.description}
                </p>
                <button className="group/btn inline-flex items-center text-secondary-600 font-semibold hover:text-secondary-700 transition-colors text-lg">
                  Support This Cause
                  <svg
                    className="ml-2 w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="ml-3 w-0 group-hover/btn:w-16 h-0.5 bg-secondary-600 transition-all duration-300"></div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-secondary-50 rounded-full shadow-lg">
            <Users className="text-secondary-600" size={28} />
            <p className="text-gray-700 text-lg">
              Join <span className="font-bold text-secondary-600">thousands worldwide</span> standing with Congolese Tutsi survivors
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}