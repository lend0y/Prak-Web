import { Target, Eye, Award, Users2, Heart } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1697665387559-253e7a645e96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWxwaW5nJTIwaGFuZHMlMjBjb21tdW5pdHklMjBzdXBwb3J0fGVufDF8fHx8MTc1OTA4NDYzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Tim BantuCare membantu korban bencana"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full">
                <Heart className="h-4 w-4 mr-2" />
                Tentang BantuCare
              </div>
              <h2 className="text-3xl md:text-4xl text-gray-900">
                Platform Donasi Terpercaya untuk Indonesia
              </h2>
              <p className="text-gray-600 leading-relaxed">
                BantuCare adalah platform donasi digital yang didedikasikan untuk membantu korban bencana alam 
                di seluruh Indonesia. Kami berkomitmen untuk menyalurkan bantuan secara transparan, cepat, 
                dan tepat sasaran kepada mereka yang membutuhkan.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Target className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Misi Kami</h3>
                  <p className="text-gray-600">Membantu korban bencana dengan bantuan yang tepat sasaran dan transparan.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Eye className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Visi Kami</h3>
                  <p className="text-gray-600">Menjadi platform donasi terdepan yang menghubungkan kemurahan hati dengan kebutuhan.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Transparansi</h3>
                  <p className="text-gray-600">Setiap donasi dilacak dan dilaporkan secara real-time kepada donatur.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Users2 className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Komunitas</h3>
                  <p className="text-gray-600">Membangun jaringan solid antara donatur, volunteer, dan penerima bantuan.</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-6">
              <button className="bg-red-600 text-white px-8 py-3 rounded-xl hover:bg-red-700 transition-colors">
                Bergabung dengan Kami
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}