"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        scrolled
      ? "bg-black/60  shadow-lg"
      : "bg-black/60"
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 lg:px-12 relative">
        <div className="flex justify-between items-center h-25">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.jpeg" 
              alt="Shobha Beauty" 
              width={190} 
              height={40} 
              className="object-contain" 
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center font-sans text-sm uppercase tracking-widest font-medium text-white">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/services" className="nav-link">Services</Link>
            <Link href="/menu" className="nav-link">Menu</Link> 
            <Link href="/" className="nav-link">Gallery</Link>
            <Link href="/" className="nav-link">Contact</Link>
            <Link href="/" className="bg-[#6E9F3A] text-white px-6 py-3 rounded-lg hover:bg-[#6B8E23] transition">
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              {isOpen ? <X size={24} className="text-gray-800"/> : <Menu size={24} className="text-gray-800"/>}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-black shadow-lg overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[500px] p-6 flex flex-col space-y-6" : "max-h-0 p-0"
          } font-sans text-sm uppercase tracking-widest text-white`}
        >
          <Link href="/" onClick={() => setIsOpen(false)} className="nav-link">Home</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="nav-link">Services</Link>
          <Link href="/menu" onClick={() => setIsOpen(false)} className="nav-link">Menu</Link>
          <Link href="/gallery" onClick={() => setIsOpen(false)} className="nav-link">Gallery</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="nav-link">Contact</Link>
          <Link href="/BookingForm" onClick={() => setIsOpen(false)} className="bg-[#6E9F3A] text-white px-6 py-3 rounded-lg text-center hover:bg-[#6B8E23] transition">Book Now</Link>
        </div>
      </div>
    </nav>
  )
}