"use client"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo - Elegant Serif style like Blume
          <Link href="/" className="font-serif text-2xl tracking-tighter text-black">
            SHOBHA <span className="font-light italic text-gray-500">BEAUTY</span>
          </Link> */}

          <Link href="/">
            <Image src="/logo.jpeg" alt="Shobha Beauty" width={190} height={40} className="object-contain" />
          </Link>
          

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center font-sans text-xs uppercase tracking-widest font-medium">
            <Link href="/services" className="hover:text-gray-400 transition">Services</Link>
            <Link href="/gallery" className="hover:text-gray-400 transition">Gallery</Link>
            <Link href="/contact" className="hover:text-gray-400 transition">Contact</Link>
            <Link href="/BookingForm" className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition">
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-down */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full border-b border-gray-100 p-6 flex flex-col space-y-6 font-sans text-sm uppercase tracking-widest">
          <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="/BookingForm" className="bg-black text-white w-full py-4 block text-center">Book Now</Link>
        </div>
      )}
    </nav>
  )
}