import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Building,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  CheckCircle,
  Sparkles,
  Globe,
  HeartHandshake
} from "lucide-react";
import Header from "../components/header";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        subject: "",
        message: ""
      });
    }, 4000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone (Rwanda & Camps)",
      details: ["+250 788 140 840", "+250 791 234 567"],
      color: "from-secondary-600 to-secondary-600",
      bgColor: "bg-secondary-50",
      iconBg: "bg-secondary-100",
      iconColor: "text-secondary-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@ihumure.org", "justice@ihumure.org"],
      color: "from-blue-600 to-indigo-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Globe,
      title: "Global Diaspora",
      details: ["North America", "Europe", "Australia", "Africa"],
      color: "from-purple-600 to-violet-600",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Clock,
      title: "We Are Always Here",
      details: ["24/7 for survivors", "Replies within 48 hours"],
      color: "from-amber-600 to-orange-600",
      bgColor: "bg-amber-50",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600"
    }
  ];

  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com/ihumure", color: "hover:text-blue-600" },
    { icon: Twitter, url: "https://twitter.com/ihumure_voice", color: "hover:text-sky-500" },
    { icon: Instagram, url: "https://instagram.com/ihumure", color: "hover:text-pink-600" },
    { icon: Linkedin, url: "https://linkedin.com/company/ihumure", color: "hover:text-blue-700" }
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <Header title="Contact Us" path="contact" />

      {/* Contact Info Cards */}
      <div className="py-5 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className=" mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-100 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${info.iconBg} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${info.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{info.title}</h3>
                    {info.details.map((d, idx) => (
                      <p key={idx} className="text-gray-700 text-sm font-medium mb-1">{d}</p>
                    ))}
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${info.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </div>
              );
            })}
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
              <div className="mb-10">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Reach Out to Survivors
                </h2>
                <p className="text-lg text-gray-600">
                  Whether you're a survivor, descendant, ally, journalist, or donor — 
                  your message matters. We respond personally within 48 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-secondary-50 border-2 border-secondary-500 rounded-3xl p-12 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary-600 rounded-full mb-6">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-secondary-700 mb-3">
                    Murakoze Cyane – Thank You!
                  </h3>
                  <p className="text-gray-700 text-lg">
                    Your message has been received. A survivor representative will reply soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7 text-black">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full pl-12 pr-5 py-4 border-2 border-gray-200 rounded-xl focus:border-secondary-600 focus:outline-none transition-colors text-gray-800 placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full pl-12 pr-5 py-4 border-2 border-gray-200 rounded-xl focus:border-secondary-600 focus:outline-none transition-colors placeholder-gray-400"
                      />
                    </div>
                  </div>


                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Phone (optional)</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                        
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+250 78..."
                          className="w-full pl-12 pr-5 py-4 border-2 border-gray-200 rounded-xl focus:border-secondary-600 focus:outline-none transition-colors placeholder-gray-400"
                        />
                      </div>
                    </div>
                  
                    

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Your Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      placeholder="Share your message, story, or how you'd like to help..."
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-secondary-600 focus:outline-none transition-colors resize-none placeholder-gray-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-5 bg-gradient-to-r from-secondary-600 to-secondary-600 hover:from-secondary-700 hover:to-secondary-700 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-3"
                  >
                    Send Message
                    <Send className="w-6 h-6" />
                  </button>
                </form>
              )}
            </div>

            {/* Right Side */}
            <div className="space-y-10">
              {/* Map – Mahama Refugee Camp */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.879888072413!2d30.283333!3d-2.316667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c2a7e5f5f5f5f5%3A0x9c9e9e9e9e9e9e9e!2sMahama%20Refugee%20Camp!5e0!3m2!1sen!2srw!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mahama Refugee Camp – Home to 50,000+ Congolese Tutsi survivors"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                  <p className="text-sm font-bold text-gray-800">Mahama Refugee Camp</p>
                  <p className="text-xs text-gray-600">Rwanda – Eastern Province</p>
                </div>
              </div>

              {/* Why Contact Card */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-black rounded-3xl p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-secondary-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-600/10 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <HeartHandshake className="w-10 h-10 text-secondary-400" />
                    Your Voice Matters
                  </h3>
                  <ul className="space-y-4 mb-8 text-gray-300">
                    {[
                      "Speak directly with survivors",
                      "Report genocide denial or threats",
                      "Partner for commemoration events",
                      "Support a refugee family",
                      "Join our global movement"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-secondary-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-white/10">
                    <p className="text-gray-400 mb-5">Connect with us globally</p>
                    <div className="flex gap-4">
                      {socialLinks.map((social, i) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={i}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-white/10 hover:bg-secondary-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gentle FAQ */}
      <div className="py-5 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Common Ways to Connect
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              { q: "I am a survivor. How can I share my testimony?", a: "Email justice@ihumure.org — your story will be preserved with dignity." },
              { q: "How do I sponsor a refugee child’s education?", a: "Write “Education Support” in subject — we’ll connect you directly." },
              { q: "Can my organization host a commemoration?", a: "Yes! Contact us and we’ll guide you every step." },
              { q: "I want to volunteer or start a chapter", a: "Amazing! Tell us your location and vision — we’ll help you begin." }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">{faq.q}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;