import { MapPin, Phone, Mail, Clock, Send, Heart, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full mb-4">
            <Mail className="h-4 w-4 mr-2" />
            Kontak Kami
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
            Mari Terhubung
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Punya pertanyaan atau ingin bergabung sebagai volunteer? 
            Tim kami siap membantu Anda 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Informasi Kontak
              </h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Alamat Kantor</h4>
                    <p className="text-gray-600">
                      Jl. Kemanusiaan No. 123<br />
                      Jakarta Selatan 12345<br />
                      Indonesia
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telepon</h4>
                    <p className="text-gray-600">+62 21 1234 5678</p>
                    <p className="text-gray-600">+62 812 3456 7890 (WhatsApp)</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@bantucare.org</p>
                    <p className="text-gray-600">volunteer@bantucare.org</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Jam Operasional</h4>
                    <p className="text-gray-600">Senin - Jumat: 08:00 - 17:00</p>
                    <p className="text-gray-600">Sabtu: 08:00 - 14:00</p>
                    <p className="text-gray-600">Emergency: 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Ikuti Media Sosial Kami
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-600 p-3 rounded-lg text-white hover:bg-blue-700 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-pink-600 p-3 rounded-lg text-white hover:bg-pink-700 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-blue-400 p-3 rounded-lg text-white hover:bg-blue-500 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-red-600 p-3 rounded-lg text-white hover:bg-red-700 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Kirim Pesan
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="nama@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Nomor Telepon</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="+62 812 3456 7890"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Subjek</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                  <option>Pilih subjek</option>
                  <option>Pertanyaan Umum</option>
                  <option>Informasi Donasi</option>
                  <option>Bergabung sebagai Volunteer</option>
                  <option>Kerjasama</option>
                  <option>Laporan Program</option>
                  <option>Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Pesan</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                  placeholder="Tulis pesan Anda disini..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Kirim Pesan</span>
              </button>
            </form>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-red-50 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-red-600 p-3 rounded-full">
              <Heart className="h-8 w-8 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Butuh Bantuan Darurat?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Jika Anda adalah korban bencana atau mengetahui adanya bencana yang membutuhkan 
            bantuan segera, hubungi hotline darurat kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+62211234567"
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Hotline Darurat</span>
            </a>
            <a
              href="https://wa.me/6281234567890"
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>WhatsApp 24/7</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}