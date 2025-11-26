import { ScrollText, Scale, HeartHandshake, Globe, Users, Landmark, Lightbulb, Target } from "lucide-react";
import Header from "../../components/header";
import TeamPage from "../Team";

const AboutUs = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "83,000+",
      label: "Survivors Represented",
      subtitle: "In camps and diaspora"
    },
    {
      icon: <ScrollText className="w-8 h-8" />,
      number: "20+",
      label: "Years of Commemoration",
      subtitle: "Every August 8"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "5",
      label: "Continents",
      subtitle: "Where our voice echoes"
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      number: "Never",
      label: "Again",
      subtitle: "Our promise"
    }
  ];

  const values = [
    { title: "Truth", description: "Preserving memory against denial" },
    { title: "Justice", description: "Fighting for recognition and accountability" },
    { title: "Solidarity", description: "Standing with survivors and refugees" },
    { title: "Dignity", description: "Restoring what was stolen in massacres" }
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <Header title="About Us" path="about us" />

      {/* Hero Section */}
      <div className="relative py-5 md:py-32 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl"></div>

        <div className="mx-auto  relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1632215865645-3efa9af21424?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVkdWNhdGlvbiUyMGFmcmljYXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Congolese Tutsi refugees in Mahama Camp, Rwanda"
                  className="w-full min-h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-medium opacity-90">Mahama Refugee Camp, Rwanda</p>
                  <p className="text-sm opacity-80">Home to over 50,000 Congolese Tutsi survivors</p>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <h1 className="text-4xl md:text-5xl  font-bold text-gray-800 mb-6 leading-tight">
                We Are the Voice of<br />
                <span className="relative inline-block">
                  <span className="relative z-10">Congolese Tutsi Survivors</span>
                  <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 480 30" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 20 Q 240 5, 475 20"
                      stroke="#643094"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-lg  text-gray-600 leading-relaxed mb-10">
                Ihumure — meaning “Console Them” in Kinyarwanda — was founded by survivors of the Mudende, Gatumba, and Mukoto Monastery massacres. For over two decades, we have carried the memory of our dead, the pain of our refugees, and the hope for justice.
              </p>

              {/* Vision & Mission */}
              <div className="space-y-6">
                <div className="flex gap-5 bg-secondary-50 p-6 rounded-2xl border border-secondary-100 hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0 w-14 h-14 bg-secondary-100 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-secondary-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Our Vision</h3>
                    <p className="text-gray-700">
                      A world where the genocide against Congolese Tutsis and Hema is universally recognized, 
                      survivors live in dignity and safety, and “Never Again” is more than a slogan.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 bg-secondary-50 p-6 rounded-2xl border border-secondary-100 hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0 w-14 h-14 bg-secondary-100 rounded-xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-secondary-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h3>
                    <p className="text-gray-700">
                      To preserve truth, pursue justice, support survivors, commemorate victims, 
                      and prevent the next genocide through global advocacy and solidarity.
                    </p>
                  </div>
                </div>
              </div>

              {/* Core Values */}
             <div className="mt-8 flex flex-wrap gap-3">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full hover:border-secondary-400 hover:bg-secondary-50 transition-all duration-300 cursor-pointer group"
                  >
                    <span className="font-semibold text-gray-700 group-hover:text-secondary-600">
                      {value.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-0 px-4 md:px-8 bg-gray-50">
        <div className="mx-auto ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 text-center border border-gray-100"
              >
                <div className="mb-5 text-secondary-600 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-700">{stat.label}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-5 md:py-32 px-4 md:px-8">
        <div className="mx-auto ">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-5 py-2 bg-secondary-100 rounded-full mb-6">
                <span className="text-secondary-700 font-bold text-sm uppercase tracking-wider">
                  Our Story
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8 leading-tight">
                From Massacres to Memory,<br />
                From Silence to Global Voice
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Born from the ashes of Mudende (1997), Gatumba (2004), and countless other massacres, 
                Ihumure was created by survivors who refused to let history be erased.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                For more than 20 years, we have organized annual commemorations on August 8, 
                preserved thousands of testimonies, supported refugees in camps, and fought genocide denial 
                on the global stage — all led by survivors and their descendants.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-5 p-6 bg-secondary-50 rounded-2xl hover:bg-secondary-100 transition-colors group">
                  <div className="w-12 h-12 bg-secondary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Landmark className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Memorial Preservation</h4>
                    <p className="text-gray-700 text-sm">Fighting to establish official memorials at Mudende, Gatumba, and Mukoto</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 p-6 bg-secondary-50 rounded-2xl hover:bg-secondary-100 transition-colors group">
                  <div className="w-12 h-12 bg-secondary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Scale className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Legal Advocacy</h4>
                    <p className="text-gray-700 text-sm">Supporting cases before international courts and the UN</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-xl h-64">
                  <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600" alt="Commemoration" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl h-80">
                  <img src="https://images.unsplash.com/photo-1539893867126-7ce0b48971ca?q=80&w=1097&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Refugee youth" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
              <div className="space-y-4 pt-16">
                <div className="rounded-3xl overflow-hidden shadow-xl h-80">
                  <img src="https://images.unsplash.com/photo-1666518068690-30ef49acb9f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGNvbmdvfGVufDB8fDB8fHww" alt="Survivor speaking" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl h-64">
                  <img src="https://images.unsplash.com/photo-1728297187213-e1a5dfb58390?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29uZ298ZW58MHx8MHx8fDA%3D" alt="Global solidarity" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TeamPage comp />

      {/* Final CTA */}
      <div className="py-5 px-4 md:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-600/10 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Dead Cannot Speak.<br />
            <span className="text-secondary-400">We Speak for Them.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Join survivors, descendants, and allies worldwide in saying <strong>Never Again</strong> — and meaning it.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-5 bg-secondary-600 hover:bg-secondary-700 text-white font-bold rounded-full text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Stand With Survivors
            </button>
            <button className="px-10 py-5 bg-transparent border-3 border-white text-white hover:bg-white hover:text-gray-900 font-bold rounded-full text-lg transition-all duration-300">
              Support Our Mission
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;