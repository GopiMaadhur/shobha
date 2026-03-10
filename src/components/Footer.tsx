"use client";

import Link from 'next/link'
import Image from 'next/image'
import Button from './ui/Button';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-20 pb-10 border-t border-gray-800">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-12">

          {/* ABOUT */}
          <div>
            {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Shobha Beauty" 
              width={190} 
              height={40} 
              className="object-contain" 
              style={{ marginTop: '-20px' , marginBottom: '25px' }}
              priority
            />
          </Link>

            <p className="text-sm leading-relaxed text-gray-500">
              Discover natural beauty through herbal wisdom. 
              We combine ancient Ayurvedic traditions with modern 
              aesthetics to deliver personalized treatments and 
              professional beauty training.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-sans uppercase tracking-widest font-medium text-white text-lg mb-4">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">

              <li>
                <a href="#" className="hover:text-[#6E9F3A] transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#6E9F3A] transition">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#6E9F3A] transition">
                  Academy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#6E9F3A] transition">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-sans uppercase tracking-widest font-medium text-white text-lg mb-4">
              Contact
            </h4>

            <ul className="space-y-3 text-sm">

              <li>
                Banglore, India
              </li>

              <li>
                +91 XXXXX XXXXX
              </li>

              <li>
                info@shobhabeauty.com
              </li>

            </ul>

            {/* CTA */}
            {/* <button className="mt-6 bg-[#6E9F3A] text-white px-6 py-2 rounded-lg hover:bg-[#6B8E23] transition">
              Book Appointment
            </button> */}

            <Button className="mt-6">Book Appointment</Button>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-14 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} Shobha Herbal Beauty. All rights reserved.
          </p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>

        </div>

      </div>
    </footer>
  );
}