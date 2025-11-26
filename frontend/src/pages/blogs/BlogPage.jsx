import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- Added this
import Header from '../../components/header';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate(); // <-- For navigation

  const blogPosts = [
    {
      id: 1,
      category: 'Survivor Stories',
      title: 'I Survived Mudende: My Story 27 Years Later',
      description: 'Marie shares how she escaped the massacre at age 12, lived in refugee camps, and now helps other orphans through Ihumure.',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop',
      date: 'November 20, 2025',
      readTime: '6 min read'
    },
    {
      id: 2,
      category: 'Commemoration',
      title: 'August 8, 2025: A Day of Unity and Healing',
      description: 'Over 50,000 joined us across refugee camps and 12 countries to honor victims of Gatumba, Mukoto, and Mudende massacres.',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=400&fit=crop',
      date: 'August 15, 2025',
      readTime: '5 min read'
    },
    {
      id: 3,
      category: 'Justice Updates',
      title: 'UN Expert Warns of Genocide Risk Against Congolese Tutsis',
      description: 'Alice Nderitu’s latest report confirms rising hate speech and calls for urgent action. Here’s what it means for us.',
      image: 'https://images.unsplash.com/photo-1582213782179-1e1e4d5e9e0e?w=600&h=400&fit=crop',
      date: 'October 28, 2025',
      readTime: '7 min read'
    },
    {
      id: 4,
      category: 'Youth Voices',
      title: 'From Refugee to University Graduate: My Journey',
      description: 'Thanks to Ihumure scholarships, I am the first in my family to attend university. This is for every orphan who dreams.',
      image: 'https://images.unsplash.com/photo-1497638578941-549b6f2d21cc?w=600&h=400&fit=crop',
      date: 'October 10, 2025',
      readTime: '4 min read'
    },
    {
      id: 5,
      category: 'Global Solidarity',
      title: 'Jewish Community in Canada Hosts Gatumba Remembrance',
      description: '200 people gathered in Toronto to stand with Congolese Tutsi survivors. “Your pain is our pain,” said the rabbi.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop',
      date: 'September 5, 2025',
      readTime: '5 min read'
    },
    {
      id: 6,
      category: 'Justice Updates',
      title: 'Why We Still Fight for Memorial Sites',
      description: 'Three decades after Mudende, there is still no official memorial. Here’s how you can help change that.',
      image: 'https://images.unsplash.com/photo-1600880292203-5e7ed85ec9f8?w=600&h=400&fit=crop',
      date: 'August 22, 2025',
      readTime: '6 min read'
    }
  ];

  const categories = ['All', 'Survivor Stories', 'Commemoration', 'Justice Updates', 'Youth Voices', 'Global Solidarity'];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.slice(0, 2);

  const handlePostClick = (id) => {
    navigate(`/blogs/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Stories & Updates" path="stories" />

      {/* Main Content */}
      <main className=" mx-auto px-4 py-12 sm:px-8 lg:px-16">
        {/* Featured Posts */}
        <div className="mb-16 flex flex-col lg:flex-row gap-8">
          {featuredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => handlePostClick(post.id)}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <span className="inline-block bg-secondary-100 text-secondary-800 text-sm px-3 py-1 rounded-full mb-4">
                    Featured
                  </span>
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 hover:text-secondary-700 transition">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-sm text-gray-500">{post.date} • {post.readTime}</span>
                    <button className="bg-secondary-600 text-white px-6 py-2 rounded-lg hover:bg-secondary-700 transition">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition ${
                  selectedCategory === category
                    ? 'bg-secondary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article
              key={post.id}
              onClick={() => handlePostClick(post.id)}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <span className="inline-block bg-secondary-100 text-secondary-800 text-xs px-3 py-1 rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-secondary-700 transition">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{post.date} • {post.readTime}</span>
                  <button className="text-secondary-600 font-medium hover:text-secondary-700 transition flex items-center gap-1">
                    Read More <span>→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white text-secondary-600 border-2 border-secondary-600 px-10 py-3 rounded-lg font-medium hover:bg-secondary-600 hover:text-white transition shadow-md">
            Load More Stories
          </button>
        </div>
      </main>

     
    </div>
  );
};

export default BlogPage;