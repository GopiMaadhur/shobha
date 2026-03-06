"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSlider() {
  return (
    <section className="relative w-full h-[90vh] bg-black text-white overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-full w-full flex items-center">
            
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('/hero1.png')",
                    }}
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />

                  {/* Content */}
                  <div className="relative z-10 max-w-6xl mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
                      Where Herbal Beauty <br />
                      Meets Professional Excellence
                    </h1>

                      <div className="flex gap-4">
                        <button className="px-6 py-3 rounded-md bg-emerald-700 hover:bg-emerald-800 transition-all duration-300 shadow-lg">
                          Book Appointment
                        </button>

                        <button className="px-6 py-3 rounded-md bg-orange-500 hover:bg-orange-600 transition-all duration-300 shadow-lg">
                          Know More
                        </button>
                      </div>
                  </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-full w-full flex items-center">
            <div
              className="absolute inset-0 bg-cover bg-[30%_40%]"
              style={{
                backgroundImage:
                  "url('/hero3.png')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />

            <div className="relative z-10 max-w-6xl mx-auto px-6">
              <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
                Pure Herbal Treatments <br />
                For Radiant Skin
              </h1>

              <div className="flex gap-4">
                <button className="px-6 py-3 rounded-md bg-emerald-700 hover:bg-emerald-800 transition-all duration-300 shadow-lg">
                  Explore Services
                </button>

                <button className="px-6 py-3 rounded-md bg-orange-500 hover:bg-orange-600 transition-all duration-300 shadow-lg">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}