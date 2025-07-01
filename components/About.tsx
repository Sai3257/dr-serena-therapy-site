import { Award, Users, Heart } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 scroll-mt-24" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                About{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Dr. Serena Blake
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA,
              with eight years of experience and over 500 client sessions. She blends cognitive-behavioral
              therapy and mindfulness with compassionate, personalized care to help clients overcome anxiety,
              strengthen relationships, and heal from trauma.
            </p>
            
            {/* Stats with animation */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { Icon: Award, label: "Years Experience", value: "8+", color: "from-blue-100 to-blue-200", iconColor: "text-blue-600" },
                { Icon: Users, label: "Client Sessions", value: "500+", color: "from-green-100 to-green-200", iconColor: "text-green-600" },
                { Icon: Heart, label: "Personalized Care", value: "100%", color: "from-purple-100 to-purple-200", iconColor: "text-purple-600" }
              ].map(({ Icon, label, value, color, iconColor }, i) => (
                <div
                  key={label}
                  className={`text-center group animate-fade-in-up`}
                  style={{ animationDelay: `${i * 0.2}s`, animationFillMode: 'both' }}
                >
                  <div className={`bg-gradient-to-br ${color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all-300 shadow-soft`}>
                    <Icon className={`h-10 w-10 ${iconColor}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-1">{value}</div>
                  <div className="text-sm text-gray-600 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Content */}
          <div className="relative animate-slide-in-right">
            <div className="relative overflow-hidden shadow-2xl rounded-full lg:rounded-3xl w-[280px] h-[280px] lg:w-full lg:h-[500px] mx-auto">
              <Image
                src="/dr-serena-blake.png"
                alt="Portrait of Dr. Serena Blake"
                width={600}
                height={800}
                className="w-full h-full object-cover transition-all-300 hover:scale-105 rounded-full lg:rounded-3xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full lg:rounded-3xl"></div>
            </div>

            {/* Floating Card - Desktop */}
            <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20 animate-float hidden lg:block">
              <div className="text-sm text-gray-600 mb-2 font-medium">Licensed Clinical Psychologist</div>
              <div className="font-bold text-gray-800 text-lg">PsyD, Los Angeles</div>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3"></div>
            </div>

            {/* Floating Badge - Mobile */}
            <div className="block lg:hidden mt-6 text-center animate-float">
              <span className="inline-block bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-md text-sm text-gray-700 font-medium border border-white/30">
                PsyD • Los Angeles
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
