import React from 'react';
import { Megaphone, Users, Heart, Globe, Leaf, Scale } from 'lucide-react';

export default function ActivistLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className=" mx-auto px-6 md:px-8 py-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Raise Your{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Voice</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="20"
                  viewBox="0 0 200 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 15C30 5, 70 8, 100 10C130 12, 170 8, 195 12"
                    stroke="#643094"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
              {' '}for Congolese Tutsi Survivors
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Congolese Tutsi Survivors' Voice – Ihumure is the unified global platform for survivors 
              of massacres, genocide, and ethnic persecution in the Democratic Republic of Congo. 
              Together we commemorate the victims, fight denial, pursue justice, and prevent the next genocide.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-secondary-600 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-700 transition-colors">
                Join the Movement
              </button>
              <button className="text-gray-800 px-8 py-3 font-medium hover:text-gray-600 transition-colors border-b-2 border-transparent hover:border-gray-800">
                Learn Our Story
              </button>
            </div>
            
            {/* Partner / Community Logos */}
            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center gap-2 text-gray-400">
                <div className="flex items-center gap-1">
                  <div className="w-8 h-8 rounded-full border-2 border-gray-300"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-gray-300 -ml-3"></div>
                </div>
                <span className="font-medium">Ihumure</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <span className="font-medium">Never Again</span>
              </div>
            </div>
          </div>
          
          {/* Right Image with Tags */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1744809463771-dca1b7bf46ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGVkdWNhdGlvbiUyMGFmcmljYXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Congolese Tutsi survivors and advocates raising their voices"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Floating Tags */}
              <div className="absolute top-12 left-8 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-pulse">
                <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">End Genocide Denial</span>
              </div>
              
              <div className="absolute top-24 right-8 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-pulse" style={{animationDelay: '0.5s'}}>
                <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Justice for Victims</span>
              </div>
              
              <div className="absolute bottom-32 right-12 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-pulse" style={{animationDelay: '1s'}}>
                <div className="w-2 h-2 bg-secondary-600 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Remember Mudende · Gatumba · Mukoto</span>
              </div>
              
              <div className="absolute bottom-48 left-12 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-pulse" style={{animationDelay: '1.5s'}}>
                <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Safe Return Home</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats / Impact Section */}
      <div className="containe mx-auto px-6 py-2">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Users, label: 'Survivors & Refugees Represented', value: '83,000+' },
            { icon: Globe, label: 'Countries & Diaspora', value: '20+' },
            { icon: Heart, label: 'Annual Commemorations Since', value: '2005' },
            { icon: Megaphone, label: 'Voices Amplified Worldwide', value: 'Global' }
          ].map((stat, idx) => (
            <div 
              key={idx} 
              className="text-center space-y-3 p-6 rounded-xl bg-white transition-all duration-300 hover:scale-105"
              style={{
                boxShadow: '0 4px 20px rgba(100, 48, 148, 0.15)'
              }}
            >
              <div 
                className="w-16 h-16 mx-auto rounded-xl flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(100, 48, 148, 0.1)',
                  boxShadow: '0 4px 14px rgba(100, 48, 148, 0.2)'
                }}
              >
                <stat.icon 
                  className="w-8 h-8" 
                  style={{ color: '#643094' }}
                />
              </div>
              <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}