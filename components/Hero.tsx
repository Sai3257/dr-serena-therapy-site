"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden animate-gradient bg-gradient-to-r from-blue-100 via-purple-100 to-indigo-100 scroll-mt-24">
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in-up">
          <div className="relative w-48 h-48 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
            <div className="relative w-full h-full p-2">
              <Image
                src="/dr-serena-blake.png"
                alt="Dr. Serena Blake"
                width={192}
                height={192}
                className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white"
                priority
              />
            </div>
          </div>
        </div>

        <div className="animate-slide-in-left">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-800">
            Therapy That Supports Your{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Healing Journey
            </span>
          </h1>
        </div>

        <div className="animate-slide-in-right">
          <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed font-medium">
            Dr. Serena Blake, PsyD — Personalized care in Los Angeles & Online
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 text-lg font-semibold rounded-full transition-all-300 hover:scale-105 shadow-glow hover:shadow-xl transform"
          >
            Book a Free Consult
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>

      {/* Optional: Animated SVG Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 z-0">
        <svg
          className="relative block w-[calc(150%+1.3px)] h-[150px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39 56.19C234.74 42.31 147.1 28.44 59.45 33.6 39.63 34.76 19.82 38.55 0 42.35V120h1200V0c-27.36 13.63-54.73 27.27-88.49 37.04-74.79 22.65-160.24 25.84-239.93 15.67-93.41-11.83-182.11-37.26-275.53-41.21C495.83 9.4 408.57 21.73 321.39 56.19z"
            fill="#c7d2fe"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M321.39 56.19C234.74 42.31 147.1 28.44 59.45 33.6 ...;
                M321.39 40.19C240.74 56.31 160.1 38.44 80.45 30.6 ...;
                M321.39 56.19C234.74 42.31 147.1 28.44 59.45 33.6 ...
              "
            />
          </path>
        </svg>
      </div>
    </section>
  );
}
