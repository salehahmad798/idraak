import Link from 'next/link'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1F2833] border-t border-[#C9A962]/20 text-[#BDC3C7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Image 
              src="/idraak-logo.png" 
              alt="IDRAAK Spiritual Guidance" 
              width={80} 
              height={80}
              className="h-20 w-20 rounded-full object-cover mb-4 border border-[#C9A962]/30"
            />
            <p className="text-sm text-[#BDC3C7]">
              Spiritual Guidance & Astrological Consultancy
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#C9A962] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-[#C9A962] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#C9A962] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[#C9A962] transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-[#C9A962] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-[#C9A962] mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services#astrology" className="hover:text-[#C9A962] transition-colors">Astrology</Link></li>
              <li><Link href="/services#numerology" className="hover:text-[#C9A962] transition-colors">Numerology</Link></li>
              <li><Link href="/services#palmistry" className="hover:text-[#C9A962] transition-colors">Palmistry</Link></li>
              <li><Link href="/services#gemstones" className="hover:text-[#C9A962] transition-colors">Gemstones</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-[#C9A962] mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#C9A962]" />
                <a href="tel:+923001769159" className="hover:text-[#C9A962] transition-colors">+92 300 176 9159</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#C9A962]" />
                <a href="mailto:idraak.official136@gmail.com" className="hover:text-[#C9A962] transition-colors">idraak.official136@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} className="text-[#C9A962]" />
                <a href="https://wa.me/923001769159" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A962] transition-colors">WhatsApp</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-[#C9A962]" />
                <span>Lahore, Kasur</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#2D3748] pt-8 text-center text-sm text-[#BDC3C7]">
          <p>&copy; {currentYear} IDRAAK Spiritual Guidance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
