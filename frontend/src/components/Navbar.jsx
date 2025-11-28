import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Logo from '../assets/banners/logo.png'
function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pagesDropdown, setPagesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
        setPagesDropdown(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Our Services", path: "/services" },
    { name: "Our Members", path: "/team-member" },
    { name: "News And Update", path: "/blogs" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const socialLinks = [
    { icon: Facebook, url: "#", label: "Facebook" },
    { icon: Twitter, url: "#", label: "Twitter" },
    { icon: Linkedin, url: "#", label: "LinkedIn" },
    { icon: Instagram, url: "#", label: "Instagram" },
  ];

  return (
    <>
      {/* Top Header Bar - Not Sticky */}
      <div 
        className="w-full py-2 px-6 lg:px-6"
        style={{
          background: 'linear-gradient(135deg, #808080 0%, #808080 100%)',
          boxShadow: '0 2px 10px rgba(100, 48, 148, 0.2)'
        }}
      >
        <div className="mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          {/* Left Side - Contact Info */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <a 
              href="tel:+250788123456" 
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">+250 788 123 456</span>
            </a>
            
            <div className="hidden md:block w-px h-6 bg-white/30"></div>
            
            <a 
              href="mailto:info@raiseyourvoice.org" 
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">info@raiseyourvoice.org</span>
            </a>
          </div>

          {/* Right Side - Location & Social Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Kigali, Rwanda</span>
            </div>
            
            <div className="hidden md:block w-px h-6 bg-white/30"></div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white hover:scale-110 flex items-center justify-center transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4 text-white group-hover:text-purple-600 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Sticky */}
      <header className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <nav className="px-6 lg:px-6 mx-auto md:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2 group ">
           <img src={Logo} alt="" srcset=""  className="w-24"/>
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <li key={index} className="relative group">
                  {link.hasDropdown ? (
                    <div className="relative">
                      <button 
                        className="flex items-center space-x-1 text-gray-700 font-medium transition-colors duration-200 py-2"
                        style={{
                          color: pagesDropdown ? '#808080' : undefined
                        }}
                        onMouseEnter={() => setPagesDropdown(true)}
                        onClick={() => setPagesDropdown(!pagesDropdown)}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${pagesDropdown ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Dropdown Menu */}
                      {pagesDropdown && (
                        <div 
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border py-2 animate-fadeIn"
                          style={{ borderColor: 'rgba(100, 48, 148, 0.2)' }}
                          onMouseLeave={() => setPagesDropdown(false)}
                        >
                          {link.subLinks.map((subLink, subIndex) => (
                            <a
                              key={subIndex}
                              href={subLink.path}
                              className="block px-4 py-2 text-gray-700 hover:bg-purple-50 transition-colors duration-200"
                              style={{
                                ':hover': { color: '#808080' }
                              }}
                              onClick={() => setPagesDropdown(false)}
                            >
                              {subLink.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={link.path}
                      className="text-gray-700 font-medium transition-colors duration-200 relative group"
                    >
                      {link.name}
                      <span 
                        className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                        style={{ backgroundColor: '#808080' }}
                      ></span>
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* Donate Button */}
            <div className="hidden lg:block">
              <a
                href="/donate"
                className="px-6 py-3 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #808080 0%, #808080 100%)',
                }}
              >
                Donate Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-gray-700 transition-colors"
              style={{
                color: menuOpen ? '#808080' : undefined
              }}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <>
            <div
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setMenuOpen(false)}
            />
            <div className="lg:hidden fixed top-20 left-0 right-0 bg-white shadow-2xl z-50 max-h-[calc(100vh-5rem)] overflow-y-auto">
              <ul className="py-4">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    {link.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setPagesDropdown(!pagesDropdown)}
                          className="flex items-center justify-between w-full px-6 py-4 text-gray-700 hover:bg-purple-50 font-medium transition-colors"
                        >
                          <span>{link.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${pagesDropdown ? 'rotate-180' : ''}`} />
                        </button>
                        {pagesDropdown && (
                          <div className="bg-gray-50">
                            {link.subLinks.map((subLink, subIndex) => (
                              <a
                                key={subIndex}
                                href={subLink.path}
                                className="block px-10 py-3 text-gray-600 hover:bg-purple-50 transition-colors"
                                onClick={() => setMenuOpen(false)}
                              >
                                {subLink.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href={link.path}
                        className="block px-6 py-4 text-gray-700 hover:bg-purple-50 font-medium transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
                <li className="px-6 py-4">
                  <a
                    href="/donate"
                    className="block w-full text-center px-6 py-3 text-white font-semibold rounded-full transition-all duration-300 shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #808080 0%, #808080 100%)',
                    }}
                    onClick={() => setMenuOpen(false)}
                  >
                    Donate Now
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}
      </header>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </>
  );
}

export default NavBar;