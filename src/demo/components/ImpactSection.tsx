import { Heart, Users, MapPin, Package, TrendingUp, Shield } from "lucide-react";

export default function ImpactSection() {
  const stats = [
    {
      icon: Heart,
      value: "2.5M+",
      label: "Total Donasi",
      description: "Rupiah terkumpul",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Users,
      value: "125K+",
      label: "Jiwa Terbantu",
      description: "Korban bencana",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: MapPin,
      value: "34",
      label: "Provinsi",
      description: "Di seluruh Indonesia",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Package,
      value: "50K+",
      label: "Bantuan Disalurkan",
      description: "Paket kebutuhan pokok",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const achievements = [
    {
      icon: TrendingUp,
      title: "Pertumbuhan Berkelanjutan",
      description: "Jumlah donatur dan bantuan yang disalurkan terus meningkat setiap tahunnya.",
      value: "+250%"
    },
    {
      icon: Shield,
      title: "Transparansi 100%",
      description: "Semua aliran dana dapat dilacak secara real-time oleh para donatur.",
      value: "100%"
    },
    {
      icon: Users,
      title: "Jaringan Volunteer",
      description: "Tim volunteer berpengalaman di seluruh Indonesia siap membantu.",
      value: "500+"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full mb-4">
            <TrendingUp className="h-4 w-4 mr-2" />
            Dampak & Pencapaian
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
            Bersama Kita Membuat Perbedaan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Melihat dampak nyata dari kepedulian dan kemurahan hati para donatur 
            dalam membantu sesama yang terdampak bencana.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-gray-600 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-xl">
                  <achievement.icon className="h-6 w-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">
                      {achievement.title}
                    </h3>
                    <span className="text-2xl font-bold text-red-600">
                      {achievement.value}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Jadilah Bagian dari Perubahan
            </h3>
            <p className="text-gray-600 mb-6">
              Setiap donasi, sekecil apapun, memiliki dampak besar. Bergabunglah dengan 
              komunitas peduli dan bantu sesama yang membutuhkan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-white px-8 py-3 rounded-xl hover:bg-red-700 transition-colors">
                Mulai Berdonasi
              </button>
              <button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-xl hover:bg-red-600 hover:text-white transition-colors">
                Jadi Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}