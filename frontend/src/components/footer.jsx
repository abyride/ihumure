import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const footerLinks = {
    about: [
      { label: 'Our Story', href: '#' },
      { label: 'Our Team', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' }
    ],
    getInvolved: [
      { label: 'Volunteer', href: '#' },
      { label: 'Donate', href: '#' },
      { label: 'Join Community', href: '#' },
      { label: 'Events', href: '#' }
    ],
    resources: [
      { label: 'Blog', href: '#' },
      { label: 'News', href: '#' },
      { label: 'Reports', href: '#' },
      { label: 'FAQs', href: '#' }
    ],
    support: [
      { label: 'Contact Us', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="contair mx-auto px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Raise Your Voice
              </h3>
              <p className="text-secondary-400 font-medium">Ignite Change</p>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering movements, organizations, and individuals to create lasting change 
              through collective action and unwavering commitment to justice.
            </p>
            
            {/* Contact Info */}
            
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href}
                    className="hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Get Involved</h4>
            <ul className="space-y-3">
              {footerLinks.getInvolved.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href}
                    className="hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href}
                    className="hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href}
                    className="hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-white font-bold text-2xl mb-3">Stay Connected</h4>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for updates on campaigns, events, and ways to make an impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-gray-800 border border-gray-700 focus:border-secondary-400 focus:outline-none text-white placeholder-gray-500"
              />
              <button
                onClick={handleSubscribe}
                className="px-8 py-3 bg-secondary-500 hover:bg-secondary-600 text-white font-medium rounded-full transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-secondary-500 rounded-full flex items-center justify-center transition-all hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Raise Your Voice. All rights reserved.
            </div>

            {/* Additional Links */}
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}