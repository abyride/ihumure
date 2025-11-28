import React from 'react';
import { 
  Users, 
  HeartHandshake, 
  Share2, 
  Scale, 
  Calendar, 
  ScrollText 
} from 'lucide-react';

export default function StepForwardSection() {
  const actions = [
    {
      icon: HeartHandshake,
      title: 'Stand With Survivors',
      description: 'Join thousands worldwide in solidarity with Congolese Tutsi refugees, widows, orphans, and survivors of massacres.',
    },
    {
      icon: Users,
      title: 'Support a Refugee Family',
      description: 'Your monthly or one-time gift provides food, medical care, education, and hope to families still living in camps after decades.',
    },
    {
      icon: Share2,
      title: 'Break the Silence',
      description: 'Share the truth about Mudende, Gatumba, Mukoto Monastery, and ongoing atrocities — counter genocide denial on social media and beyond.',
    },
    {
      icon: Scale,
      title: 'Demand Justice',
      description: 'Sign petitions, contact leaders, and support legal efforts to hold perpetrators accountable and end impunity.',
    },
    {
      icon: Calendar,
      title: 'Commemorate With Us',
      description: 'Join our annual global commemoration on August 8 — in person in Rwanda’s camps or online with the diaspora — to honor the victims and say “Never Again.”',
    },
    {
      icon: ScrollText,
      title: 'Preserve Their Stories',
      description: 'Help document survivor testimonies, build digital archives, and support the creation of official memorial sites in Mudende, Gatumba, and Mukoto.',
    },
  ];

  return (
    <div className=" bg-gradient-to-b from-gray-50 to-white py-10 px-6">
      <div className=" mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4">
            Step Forward and<br />
            Say{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Never Again</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="24"
                viewBox="0 0 280 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="140"
                  cy="12"
                  rx="135"
                  ry="10"
                  stroke="#808080"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Every action — no matter how small — helps break the cycle of denial, 
            supports survivors, and prevents the next genocide against the Congolese Tutsi people.
          </p>
        </div>

        {/* Action Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-8 mb-16">
          {actions.map((action, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary-50 transition-colors">
                <action.icon className="w-8 h-8 text-gray-700 group-hover:text-secondary-600 transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {action.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {action.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-secondary-600 text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl">
            Take Action Today
          </button>
        </div>
      </div>
    </div>
  );
}