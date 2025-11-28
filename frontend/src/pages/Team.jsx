import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import Header from '../components/header';

export default function TeamPage({comp=false}) {
const teamMembers = [
  {
    name: "Bisore Ngemanyi Albert",
    role: "President",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Elie Muzungu",
    role: "Vice President",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },

  // Communication & Media
  {
    name: "Bertin Shambo",
    role: "Communication & Media Dept.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Pascal Gatabazi Gashema",
    role: "Communication & Media Dept.",
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },

  // Mobilization
  {
    name: "Jule",
    role: "Mobilization & Community Engagement",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Sakindi",
    role: "VMC",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },

  // Conflict Resolution
  {
    name: "Claude M. Ganza",
    role: "Conflict Resolution Dept.",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Ernest Kalisa Nino",
    role: "Conflict Resolution Dept.",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },

  // Social & Gender
  {
    name: "Mama Noeline",
    role: "Social & Gender Dept.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Karemera Eric Richart",
    role: "VSG",
    image: "https://images.unsplash.com/photo-1509869175650-a1d97972541a?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },

  // Youth Engagement
  {
    name: "Mutuyemungu Kumwami Pacifique",
    role: "Youth Engagement Dept.",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Niyomugabo Gad",
    role: "Youth Engagement Dept.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Makoma",
    role: "Youth Engagement Dept.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Modeste Mugwiza",
    role: "Youth Engagement Dept.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },

  // Art & Entertainment
  {
    name: "Elisabeth Kampire (Dinah)",
    role: "Art & Entertainment Dept.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Janvier Masisi",
    role: "Art & Entertainment Dept.",
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Jeannette Umwiza",
    role: "Art & Entertainment Dept.",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Rodrigue Ndayishimye",
    role: "Art & Entertainment Dept.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },

  // Orphans & Widows
  {
    name: "Mama Shyaka",
    role: "Orphan & Widows Affairs",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Niragire Amitier",
    role: "VOW",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },

  // Secretary Office
  {
    name: "Emmanue Sebagishal",
    role: "General Secretary",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },

  // Legal
  {
    name: "Fabrice Rushema Muzungu",
    role: "Legal Dept.",
    image: "https://images.unsplash.com/photo-1509869175650-a1d97972541a?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },

  // Strategic Planning
  {
    name: "Dr. Paul Muzawa",
    role: "Strategic Planning Team",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Innocent",
    role: "Strategic Planning Team",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },

  // MEA
  {
    name: "Muhirwa Janvier",
    role: "MEA",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },

  // Documentation
  {
    name: "Claude Mukiza",
    role: "Documentation & Archive Dept.",
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },

  // Fundraising
  {
    name: "Mahirwe",
    role: "Fundraising Dept.",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Yvonne",
    role: "Fundraising Dept.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },

  // Advisors Board
  {
    name: "Eng. Eric Kamanzi",
    role: "Advisory Board Chairperson",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Umulisa Sano Liliane",
    role: "Advisory Board Vice Chair",
    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },

  // Chapters
  {
    name: "Fabien",
    role: "Chapters Director",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&h=600&fit=crop",
    linkedin: "#",
    instagram: "#",
  },

  // Specific Chapters
  { name: "USA Chapter", role: "Chapter", image: "#", linkedin: "#", instagram: "#" },
  { name: "Canada Chapter", role: "Chapter", image: "#", linkedin: "#", instagram: "#" },
  { name: "EU Chapter", role: "Chapter", image: "#", linkedin: "#", instagram: "#" },
  { name: "DRC Chapter", role: "Chapter", image: "#", linkedin: "#", instagram: "#" },
  { name: "Kenya Chapter", role: "Chapter", image: "#", linkedin: "#", instagram: "#" },
  { name: "Rwanda Chapter (Micomyiza)", role: "Chapter", image: "#", linkedin: "#", instagram: "#" },
  { name: "Uganda Chapter", role: "Chapter", image: "#", linkedin: "#", instagram: "#" },
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
                  stroke="#808080"
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
                      stroke="#808080"
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