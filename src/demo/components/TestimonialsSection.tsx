import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sari Andini",
      role: "Donatur Setia",
      location: "Jakarta",
      comment: "Platform yang sangat transparan. Saya bisa melihat langsung kemana donasi saya disalurkan. Tim BantuCare sangat profesional dalam menangani setiap bantuan.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9ba6598?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Ahmad Rizki",
      role: "Korban Bencana",
      location: "Lombok, NTB",
      comment: "Bantuan yang diberikan sangat membantu keluarga kami setelah gempa. Proses penyalurannya cepat dan tepat sasaran. Terima kasih BantuCare dan para donatur.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Dr. Maya Putri",
      role: "Volunteer Medis",
      location: "Bandung",
      comment: "Sebagai volunteer, saya sangat terkesan dengan sistem koordinasi BantuCare. Mereka memastikan bantuan medis sampai ke tempat yang benar-benar membutuhkan.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Budi Santoso",
      role: "Pengusaha",
      location: "Surabaya",
      comment: "Saya percaya pada misi BantuCare. Platform ini memudahkan perusahaan kami untuk berkontribusi dalam program CSR dengan dampak yang terukur dan jelas.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Rina Kusuma",
      role: "Ibu Rumah Tangga",
      location: "Yogyakarta",
      comment: "Interface yang mudah digunakan membuat saya bisa berdonasi kapan saja. Laporan yang diberikan juga detail, saya tahu persis bantuan saya digunakan untuk apa.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Fajar Rahman",
      role: "Mahasiswa",
      location: "Malang",
      comment: "Meski sebagai mahasiswa dana terbatas, BantuCare memungkinkan saya tetap bisa membantu dengan nominal yang sesuai kemampuan. Setiap rupiah berarti!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full mb-4">
            <Quote className="h-4 w-4 mr-2" />
            Testimoni
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
            Suara dari Komunitas Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mendengar langsung dari para donatur, penerima bantuan, dan volunteer 
            tentang pengalaman mereka bersama BantuCare.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="h-8 w-8 text-red-600 opacity-20" />
              </div>

              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Comment */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.comment}"
              </p>

              {/* Profile */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <ImageWithFallback
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-red-600">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Rating Kepuasan</div>
            <div className="flex justify-center mt-2">
              <StarRating rating={5} />
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">95%</div>
            <div className="text-gray-600">Donatur Merekomendasikan</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">1000+</div>
            <div className="text-gray-600">Testimoni Positif</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Bergabunglah dengan Mereka
            </h3>
            <p className="text-gray-600 mb-6">
              Ribuan orang telah merasakan kepuasan membantu sesama melalui platform kami. 
              Saatnya Anda menjadi bagian dari komunitas peduli ini.
            </p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-xl hover:bg-red-700 transition-colors">
              Mulai Berdonasi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}