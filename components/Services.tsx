import { Card, CardContent } from '@/components/ui/card';
import { Brain, Heart, Shield } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    icon: Brain,
    title: "Anxiety & Stress Management",
    description: "Learn effective coping strategies and evidence-based techniques to manage anxiety, reduce stress, and regain control over your daily life. I provide personalized approaches that help you understand your triggers and develop lasting skills for emotional regulation.",
    image: "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50"
  },
  {
    icon: Heart,
    title: "Relationship Counseling",
    description: "Strengthen your connections through improved communication, conflict resolution, and deeper understanding. Whether you're working on romantic relationships, family dynamics, or friendships, I help you build healthier, more fulfilling relationships.",
    image: "https://images.pexels.com/photos/7180607/pexels-photo-7180607.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    gradient: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-50 to-rose-50"
  },
  {
    icon: Shield,
    title: "Trauma Recovery",
    description: "Heal from past experiences in a safe, supportive environment using trauma-informed approaches. I help you process difficult experiences, develop resilience, and reclaim your sense of safety and empowerment in your life.",
    image: "https://images.pexels.com/photos/6932529/pexels-photo-6932529.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            How I Can{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Help
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Specialized therapy services tailored to your unique needs and goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all-300 border-0 shadow-soft hover:-translate-y-3 bg-white/80 backdrop-blur-sm overflow-hidden">
              <div className="relative overflow-hidden">
                <Image 
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-all-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-20`}></div>
                <div className={`absolute top-4 left-4 p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {service.description}
                </p>
                <div className={`w-16 h-1 bg-gradient-to-r ${service.gradient} rounded-full mt-4`}></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}