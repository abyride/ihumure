import React from 'react';

export default function CharityHero() {
  return (
    <div className="relative h-[20vh] md:h-[45vh] lg:h-[60vh] flex justify-center items-center w-full overflow-hidden">
      {/* Background Image – Congolese landscape with refugees/survivors */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1728297187213-e1a5dfb58390?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29uZ298ZW58MHx8MHx8fDA%3D')`,
          // Alternative powerful images you can swap:
          // https://images.unsplash.com/photo-1593113598332-cd288d649433 (refugee camp)
          // https://images.unsplash.com/photo-1544025166-d2b3c3e5bebd (African landscape at sunrise)
        }}
      >
        {/* Dark + subtle green overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center px-4 py-5">
        <div className="max-w-5xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl leading-tight">
            <span className="relative inline-block">
              <span className="relative z-10">Never</span>
              <svg
                className="absolute -bottom-3 left-0 w-full"
                height="20"
                viewBox="0 0 220 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 15C30 5, 70 8, 110 10C150 12, 190 8, 215 12"
                  stroke="#643094"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            Again
          </h1>

          <p className="mb-12 text-lg md:text-xl text-gray-100 mx-auto max-w-3xl leading-relaxed font-light">
            For the survivors of Mudende, Gatumba, Mukoto Monastery, and countless other massacres — 
            your voice, your support, and your solidarity can end decades of denial and help bring 
            Congolese Tutsi refugees safely home.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-10 py-4 bg-secondary-600 text-white rounded-full font-semibold text-lg hover:bg-secondary-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Stand With Survivors
            </button>
            <button className="px-10 py-4 bg-transparent text-white border-2 border-white rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}