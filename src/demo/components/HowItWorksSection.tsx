import { Search, CreditCard, Users, BarChart3 } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Search,
      title: "Pilih Kampanye",
      description: "Temukan kampanye bantuan bencana yang sesuai dengan kepedulian Anda",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: CreditCard,
      title: "Berdonasi",
      description: "Lakukan donasi dengan berbagai metode pembayaran yang aman dan mudah",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Users,
      title: "Bantuan Disalurkan",
      description: "Tim kami menyalurkan bantuan langsung kepada korban bencana",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: BarChart3,
      title: "Laporan Transparan",
      description: "Dapatkan laporan penggunaan donasi secara real-time dan transparan",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section id="works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full mb-4">
            <Users className="h-4 w-4 mr-2" />
            Cara Kerja
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
            Mudah dan Transparan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Proses donasi yang sederhana namun berdampak besar. Setiap langkah dirancang 
            untuk memastikan bantuan Anda sampai ke tangan yang tepat.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-300 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>
              )}
              
              {/* Step Card */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 z-10">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <step.icon className="h-8 w-8" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Siap Membantu?
            </h3>
            <p className="text-gray-600 mb-6">
              Bergabunglah dengan ribuan donatur lainnya dan mulai membuat perbedaan hari ini.
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