import { ArrowRight, Users, Heart, Shield } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function HeroSection() {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-red-50 to-orange-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900">
                Bersama Membangun 
                <span className="text-red-600 block">Harapan Baru</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Platform donasi terpercaya untuk membantu korban bencana alam di Indonesia. 
                Setiap rupiah Anda akan disalurkan langsung kepada mereka yang membutuhkan.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-600 text-white px-8 py-4 rounded-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg">
                <Heart className="h-5 w-5" />
                <span>Donasi Sekarang</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-xl hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Pelajari Lebih Lanjut</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <div className="text-2xl font-semibold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Donatur</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <div className="text-2xl font-semibold text-gray-900">100K+</div>
                <div className="text-sm text-gray-600">Terbantu</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <div className="text-2xl font-semibold text-gray-900">5 Tahun</div>
                <div className="text-sm text-gray-600">Terpercaya</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758204054848-f053e83095fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNhc3RlciUyMHJlbGllZiUyMGh1bWFuaXRhcmlhbiUyMGFpZHxlbnwxfHx8fDE3NTkxODc0NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Bantuan kemanusiaan"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-red-100 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-orange-100 rounded-2xl -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}