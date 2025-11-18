import { Menu, X, Heart } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-red-500 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">BantuCare</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors">
              Beranda
            </a>
            <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors">
              Tentang
            </a>
            <a href="#works" className="text-gray-700 hover:text-red-600 transition-colors">
              Cara Kerja
            </a>
            <a href="#campaigns" className="text-gray-700 hover:text-red-600 transition-colors">
              Kampanye
            </a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">
              Kontak
            </a>
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
              Donasi Sekarang
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-red-600">
                Beranda
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-red-600">
                Tentang
              </a>
              <a href="#works" className="block px-3 py-2 text-gray-700 hover:text-red-600">
                Cara Kerja
              </a>
              <a href="#campaigns" className="block px-3 py-2 text-gray-700 hover:text-red-600">
                Kampanye
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-red-600">
                Kontak
              </a>
              <button className="w-full mt-2 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Donasi Sekarang
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}