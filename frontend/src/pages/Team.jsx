import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import Header from '../components/header';

export default function TeamPage({comp=false}) {
  const teamMembers = [
    {
      name: 'May Johnson',
      role: 'Executive Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop',
      linkedin: '#',
      instagram: '#'
    },
    {
      name: 'Daniel Kim',
      role: 'Campaign Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop',
      linkedin: '#',
      instagram: '#'
    },
    {
      name: 'Sofia Alvarez',
      role: 'Program Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop',
      linkedin: '#',
      instagram: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {!comp  &&   <Header title="Our Team" path="team" />}
      
      {/* CTA Section */}
      <div className="bg-gradient-to-br from-gray-100 to-gray-50 py-5 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Be Part of the{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Change</span>
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
                  stroke="#643094"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether through volunteering, donating, or spreading awareness, your 
            contribution matters. Join us today and help create a better tomorrow.
          </p>
          <button className="bg-gray-800 text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-gray-700 transition-colors shadow-lg">
            Become a Volunteer
          </button>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-5 px-6 md:px-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto ">
          {/* Section Header */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                The{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">Force</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="24"
                    viewBox="0 0 200 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="100"
                      cy="12"
                      rx="95"
                      ry="10"
                      stroke="#643094"
                      strokeWidth="4"
                      fill="none"
                    />
                  </svg>
                </span>
                {' '}Behind<br />Our Mission
              </h2>
            </div>
            <div className="flex items-center">
              <p className="text-lg text-gray-600 leading-relaxed">
                Our dedicated team leads with vision and passion, driving 
                campaigns, empower communities, & creating lasting impact.
              </p>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[3/4]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Member Info */}
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-600">
                      {member.role}
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-2">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={member.instagram}
                      className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

     
    </div>
  );
}