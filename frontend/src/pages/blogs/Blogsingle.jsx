import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  User,
  Calendar,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  Check,
  ArrowRight,
  HeartHandshake,
  ScrollText
} from 'lucide-react';

export default function BlogPostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data — in real app, fetch by id
  const post = {
    id: parseInt(id || '1'),
    category: 'Survivor Stories',
    title: 'I Survived Mudende: My Story 27 Years Later',
    author: 'Marie-Claire Mukamana',
    authorRole: 'Mudende Massacre Survivor, Ihumure Youth Leader',
    date: 'November 20, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1400&h=700&fit=crop',
    content: [
      {
        type: 'intro',
        text: 'On December 11, 1997, I was 12 years old when armed militias attacked Mudende Refugee Camp in Rwanda. Over 300 Congolese Tutsi refugees — mostly women and children — were massacred in one night. I hid under bodies to survive. This is my story.'
      },
      {
        type: 'section',
        heading: 'The Night Everything Changed',
        text: 'We had fled violence in Masisi, Congo, only to face it again in a place meant to be safe. The attackers came with machetes and guns. They shouted that all Tutsis must die. My mother pushed me into a ditch and covered me with her body. She never moved again.'
      },
      {
        type: 'section',
        heading: 'Living in Silence, Then Finding Voice',
        text: 'For years, I couldn’t speak. The world forgot Mudende. Gatumba happened in 2004 — 166 killed. Mukoto in 2008. Still no memorials. No justice. But in 2015, I joined Ihumure. For the first time, I told my story publicly. And people listened.'
      },
      {
        type: 'quote',
        text: '“The dead cannot cry out for justice. It is the duty of the living to do so for them.”',
        author: '– Marie-Claire, August 8, 2025 Commemoration'
      },
      {
        type: 'section',
        heading: 'Why We Must Never Stop Speaking',
        text: 'Today, over 83,000 Congolese Tutsi survivors live in refugee camps. Many children born after the massacres still face discrimination. Genocide denial grows online. That’s why every August 8, we gather — in Mahama Camp, in Brussels, in Toronto — to say: We remember. We are still here. Never Again.'
      },
      {
        type: 'section',
        heading: 'From Pain to Purpose',
        text: 'Through Ihumure, I now mentor orphaned youth. We provide scholarships, trauma counseling, and leadership training. Every time a refugee child graduates, I see my mother smiling. This is how we turn pain into power.'
      }
    ],
    tags: ['Mudende Massacre', 'Survivor Testimony', 'Refugee Youth', 'Never Again', 'August 8']
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });

  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Murakoze! Your message of solidarity has been received.');
    setFormData({ name: '', email: '', comment: '' });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const relatedPosts = [
    {
      id: 2,
      category: 'Commemoration',
      title: 'August 8, 2025: A Day of Unity and Healing',
      date: 'August 15, 2025',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      category: 'Justice Updates',
      title: 'UN Expert Warns of Ongoing Genocide Risk',
      date: 'October 28, 2025',
      image: 'https://images.unsplash.com/photo-1582213782179-1e1e4d5e9e0e?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      category: 'Youth Voices',
      title: 'From Refugee to University Graduate',
      date: 'October 10, 2025',
      image: 'https://images.unsplash.com/photo-1497638578941-549b6f2d21cc?w=600&h=400&fit=crop'
    }
  ];

  const shareLinks = [
    { icon: Facebook, color: 'hover:bg-blue-600', label: 'Facebook' },
    { icon: Twitter, color: 'hover:bg-sky-500', label: 'Twitter' },
    { icon: Linkedin, color: 'hover:bg-blue-700', label: 'LinkedIn' },
    { icon: Link2, color: 'hover:bg-secondary-600', label: 'Copy Link', onClick: handleCopyLink }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8 xl:px-12">
        <div className="grid xl:grid-cols-4 gap-10">
          {/* Main Content */}
          <article className="xl:col-span-3">
            {/* Header */}
            <header className="text-center mb-10">
              <span className="inline-block px-5 py-2 bg-secondary-100 text-secondary-800 text-sm font-bold rounded-full mb-6">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600">
                <div className="flex items-center gap-3">
                  <User size={18} className="text-secondary-600" />
                  <div>
                    <p className="font-semibold text-gray-800">{post.author}</p>
                    <p className="text-sm text-gray-500">{post.authorRole}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-secondary-600" />
                  <span>{post.date}</span>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="rounded-3xl overflow-hidden mb-12 shadow-2xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-96 md:h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <p className="text-white text-sm opacity-90">Mahama Refugee Camp, Rwanda — Home to survivors of multiple massacres</p>
              </div>
            </div>

            {/* Share Section */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-8 border-b border-gray-200">
              <span className="text-gray-700 font-bold flex items-center gap-2">
                <Share2 size={20} /> Share This Story:
              </span>
              <div className="flex gap-3">
                {shareLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <button
                      key={i}
                      onClick={social.onClick || (() => alert(`Shared on ${social.label}`))}
                      className={`w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center transition-all ${social.color} shadow-lg hover:scale-110`}
                    >
                      {social.label === 'Copy Link' && copied ? <Check size={20} /> : <Icon size={20} />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Content */}
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-10">
              {post.content.map((section, i) => (
                <div key={i}>
                  {section.type === 'intro' && (
                    <p className="text-xl text-gray-800 font-medium leading-relaxed">
                      {section.text}
                    </p>
                  )}
                  {section.type === 'section' && (
                    <>
                      <h2 className="text-3xl font-bold text-gray-900 mb-5 mt-12 flex items-center gap-3">
                        <ScrollText className="text-secondary-600" size={28} />
                        {section.heading}
                      </h2>
                      <p className="text-lg">{section.text}</p>
                    </>
                  )}
                  {section.type === 'quote' && (
                    <blockquote className="border-l-4 border-secondary-600 pl-6 py-4 my-12 bg-secondary-50 rounded-r-lg italic text-xl text-gray-800">
                      {section.text}
                      <footer className="mt-4 text-secondary-700 font-bold not-italic">
                        {section.author}
                      </footer>
                    </blockquote>
                  )}
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="my-12">
              <span className="text-gray-700 font-bold mr-4">Tags:</span>
              <div className="inline-flex flex-wrap gap-3 mt-3">
                {post.tags.map((tag, i) => (
                  <span key={i} className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-secondary-100 transition">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Leave a Message of Solidarity */}
            <section className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 mt-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <HeartHandshake className="text-secondary-600" size={32} />
                Leave a Message of Solidarity
              </h3>
              <p className="text-gray-600 mb-8 text-lg">
                Your words mean the world to survivors. Let them know they are not forgotten.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-secondary-600 focus:outline-none transition"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email *"
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-secondary-600 focus:outline-none transition"
                  />
                </div>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Your message of support, prayer, or solidarity..."
                  required
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-secondary-600 focus:outline-none transition resize-none"
                />
                <button
                  type="submit"
                  className="px-10 py-4 bg-gradient-to-r from-secondary-600 to-secondary-600 hover:from-secondary-700 hover:to-secondary-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Send Message of Solidarity
                </button>
              </form>
            </section>
          </article>

          {/* Sidebar - Related Stories */}
          <aside className="xl:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">More Survivor Stories</h3>
              <div className="space-y-8">
                {relatedPosts.map((blog) => (
                  <div
                    key={blog.id}
                    onClick={() => navigate(`/blogs/${blog.id}`)}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-bold text-secondary-600">{blog.category}</span>
                      <h4 className="text-lg font-bold text-gray-900 mt-3 mb-2 line-clamp-2 group-hover:text-secondary-700 transition">
                        {blog.title}
                      </h4>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar size={14} />
                          <span>{blog.date}</span>
                        </div>
                        <ArrowRight size={18} className="text-gray-400 group-hover:text-secondary-600 group-hover:translate-x-2 transition-all" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}