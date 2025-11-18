import { MapPin, Clock, Target, Users } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function CampaignsSection() {
  const campaigns = [
    {
      id: 1,
      title: "Bantuan Banjir Jawa Barat",
      location: "Bandung, Jawa Barat",
      description: "Membantu korban banjir dengan kebutuhan pokok, air bersih, dan tempat tinggal sementara.",
      image: "https://images.unsplash.com/photo-1728320764872-2eebb4f95e4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9vZCUyMGRpc2FzdGVyJTIwcmVsaWVmfGVufDF8fHx8MTc1OTE4NzQ0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      raised: 450000000,
      target: 800000000,
      donors: 1250,
      daysLeft: 15,
      progress: 56
    },
    {
      id: 2,
      title: "Gempa Lombok - Rehabilitasi Sekolah",
      location: "Lombok, NTB",
      description: "Membangun kembali sekolah-sekolah yang rusak akibat gempa untuk masa depan anak-anak.",
      image: "https://images.unsplash.com/photo-1607264469190-4abbbd14f5ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjByZWxpZWYlMjB2b2x1bnRlZXJzfGVufDF8fHx8MTc1OTE4NzQ0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      raised: 320000000,
      target: 500000000,
      donors: 890,
      daysLeft: 22,
      progress: 64
    },
    {
      id: 3,
      title: "Tsunami Palu - Bantuan Medis",
      location: "Palu, Sulawesi Tengah",
      description: "Penyediaan obat-obatan dan peralatan medis untuk korban tsunami Palu.",
      image: "https://images.unsplash.com/photo-1593113702251-272b1bc414a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb25hdGlvbiUyMGNoYXJpdHklMjBoZWxwaW5nfGVufDF8fHx8MTc1OTE4NzQ0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      raised: 680000000,
      target: 750000000,
      donors: 2100,
      daysLeft: 8,
      progress: 91
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section id="campaigns" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full mb-4">
            <Target className="h-4 w-4 mr-2" />
            Kampanye Aktif
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
            Program Bantuan Bencana
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bergabunglah dengan kampanye-kampanye bantuan bencana yang sedang berjalan. 
            Setiap kontribusi Anda akan membuat perbedaan nyata.
          </p>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-orange-600" />
                    <span className="text-sm font-medium text-gray-900">{campaign.daysLeft} hari</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Location */}
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{campaign.location}</span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {campaign.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {campaign.description}
                  </p>
                </div>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Terkumpul</span>
                    <span className="font-medium text-gray-900">{campaign.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-red-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${campaign.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">
                      {formatCurrency(campaign.raised)}
                    </span>
                    <span className="text-gray-600">
                      dari {formatCurrency(campaign.target)}
                    </span>
                  </div>
                </div>

                {/* Donors */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{campaign.donors.toLocaleString('id-ID')} donatur</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition-colors font-medium">
                  Donasi Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-xl hover:bg-red-600 hover:text-white transition-colors">
            Lihat Semua Kampanye
          </button>
        </div>
      </div>
    </section>
  );
}