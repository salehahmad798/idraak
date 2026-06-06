'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/gemstones', label: 'Gemstones' },
    { href: '/horoscope', label: 'Horoscope' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#0B0C10]/95 backdrop-blur-md border-b border-[#C9A962]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/idraak-logo.png" 
              alt="IDRAAK Spiritual Guidance" 
              width={50} 
              height={50}
              className="h-12 w-12 rounded-full object-cover border border-[#C9A962]/30"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  pathname === link.href
                    ? 'text-[#C9A962] bg-[#1F2833]/70 border-b-2 border-[#C9A962]'
                    : 'text-[#BDC3C7] hover:text-[#C9A962] hover:bg-[#1F2833]/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/92" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#C9A962] text-[#0B0C10] font-semibold rounded-lg hover:bg-[#DDB86F] transition-all duration-200 hover:shadow-lg hover:shadow-[#C9A962]/30"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#BDC3C7] hover:text-[#C9A962] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  pathname === link.href
                    ? 'text-[#C9A962] bg-[#1F2833]/70 border-l-2 border-[#C9A962]'
                    : 'text-[#BDC3C7] hover:text-[#C9A962] hover:bg-[#1F2833]/50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/92"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-[#C9A962] text-[#0B0C10] font-semibold rounded-lg hover:bg-[#DDB86F] transition-all duration-200 text-center"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
