import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Dr. Serena Blake, PsyD</h3>
            <p className="text-gray-300 leading-relaxed font-medium">
              Licensed Clinical Psychologist providing compassionate, 
              personalized therapy in Los Angeles and online.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold mb-6 text-lg">Contact Information</h4>
            <div className="space-y-3 text-gray-300 font-medium">
              <p>1287 Maplewood Drive</p>
              <p>Los Angeles, CA 90026</p>
              <p>(323) 555-0192</p>
              <p>serena@blakepsychology.com</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold mb-6 text-lg">Office Hours</h4>
            <div className="space-y-3 text-gray-300 font-medium">
              <p><strong className="text-white">In-person:</strong> Tue & Thu, 10 AM–6 PM</p>
              <p><strong className="text-white">Virtual:</strong> Mon, Wed & Fri, 1 PM–5 PM</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center font-medium mb-3">
            Made with <Heart className="h-5 w-5 mx-2 text-red-500 animate-pulse" /> for healing and growth
          </p>
          <p className="text-gray-400 text-sm">
            © 2025 Dr. Serena Blake Psychology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}