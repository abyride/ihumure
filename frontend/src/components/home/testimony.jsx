import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marie Kankwanzi",
    role: "Mudende Massacre Survivor, Mahama Camp",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
    text: "For 27 years I carried this pain in silence. Thanks to Ihumure, my story is finally heard and my children can go to school. I am no longer just a refugee — I am a survivor with a voice.",
    rating: 5
  },
  {
    id: 2,
    name: "Jean-Pierre Niyonzima",
    role: "Gatumba Survivor, Resettled in Canada",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    text: "Ihumure gave us August 8 — a day the world cannot ignore. Because of this organization, my children know their grandparents were not forgotten.",
    rating: 5
  },
  {
    id: 3,
    name: "Esperance Uwamariya",
    role: "Orphan of Mukoto Monastery Massacre",
    image: "https://images.unsplash.com/photo-1580489940927-4777c7c5e3c5?w=150&q=80",
    text: "I was 9 when they killed my parents in the church. Today, thanks to Ihumure’s scholarship, I am studying law to fight for justice for all of us.",
    rating: 5
  },
  {
    id: 4,
    name: "Dr. Rachel Goldstein",
    role: "Genocide Prevention Advocate, USA",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80",
    text: "As a Jewish descendant of Holocaust survivors, I stand with Congolese Tutsis. Ihumure’s work against denial and for memorial sites is sacred and urgent.",
    rating: 5
  },
  {
    id: 5,
    name: "Pastor Samuel Mugisha",
    role: "Rwandan Host Community Leader",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    text: "For two decades we’ve opened our hearts to Congolese Tutsi refugees. Ihumure coordinates the annual commemoration with dignity — it heals both refugee and host communities.",
    rating: 5
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const timeoutRef = useRef(null);

  // Responsive logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play
  useEffect(() => {
    timeoutRef.current = setTimeout(() => handleNext(), 6000);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [currentIndex]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex >= testimonials.length) setCurrentIndex(0);
    if (currentIndex < 0) setCurrentIndex(testimonials.length - 1);
  };

  const getExtendedTestimonials = () => [
    ...testimonials.slice(-slidesToShow),
    ...testimonials,
    ...testimonials.slice(0, slidesToShow)
  ];

  const extendedTestimonials = getExtendedTestimonials();
  const translateX = -((currentIndex + slidesToShow) * (100 / slidesToShow));

  return (
    <div className="py-10 md:py-12 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary-400/10 backdrop-blur-sm px-6 py-3 rounded-full border border-secondary-400/20 mb-8 shadow-lg">
            <Quote className="w-4 h-4 text-secondary-600" />
            <span className="text-secondary-600 font-semibold text-sm tracking-wider uppercase">
              Voices of Survivors & Allies
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            What Survivors{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Say</span>
              <span className="absolute inset-x-0 bottom-2 h-4 bg-secondary-400 -z-10 opacity-30"></span>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from those who lived the massacres, their children, and the global allies who stand with them.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <button
            onClick={handlePrev}
            disabled={isTransitioning}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-14 h-14 bg-white hover:bg-secondary-600 rounded-full flex items-center justify-center transition-all shadow-xl hover:shadow-2xl disabled:opacity-50 group"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800 group-hover:text-white transition-colors" />
          </button>
          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-14 h-14 bg-white hover:bg-secondary-600 rounded-full flex items-center justify-center transition-all shadow-xl hover:shadow-2xl disabled:opacity-50 group"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-gray-800 group-hover:text-white transition-colors" />
          </button>

          <div className="overflow-hidden">
            <div
              className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-out' : ''}`}
              style={{ transform: `translateX(${translateX}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedTestimonials.map((t, index) => (
                <div
                  key={`${t.id}-${index}`}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                    <div className="mb-6">
                      <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                        <Quote className="w-7 h-7 text-secondary-600" />
                      </div>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6 flex-grow italic">
                      "{t.text}"
                    </p>

                    <div className="flex gap-1 mb-6">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-14 h-14 rounded-full object-cover border-4 border-secondary-500/20"
                      />
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg">{t.name}</h4>
                        <p className="text-gray-500 text-sm">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => !isTransitioning && setCurrentIndex(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === (currentIndex % testimonials.length) || 
                  (currentIndex < 0 && i === testimonials.length - 1) ||
                  (currentIndex >= testimonials.length && i === 0)
                    ? 'w-12 h-3 bg-secondary-600 shadow-lg'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { value: "83,000+", label: "Survivors Represented" },
            { value: "20+", label: "Years of Commemoration" },
            { value: "5", label: "Continents United" },
            { value: "Never", label: "Again" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;