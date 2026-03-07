"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "./ui/Button";

const services = [
  {
    title: "EYELASH EXTENSION",
    image: "/services/pngegg (1).png",
  },
  {
    title: "SEMI PERMANENT EYEBROW",
    image: "/services/pngegg (5).png",
  },
  {
    title: "MAKEUP ART",
    image: "/services/pngegg (2).png",
  },
  {
    title: "BRIDAL/WEDDING SERVICES",
    image: "/services/pngegg (3).png",
  },
  {
    title: "CUT/COLOUR/STYLE",
    image: "/services/pngegg (4).png",
  },
  {
    title: "CUT/COLOUR/STYLE",
    image: "/services/pngegg (5).png",
  },
  {
    title: "CUT/COLOUR/STYLE",
    image: "/services/pngegg (6).png",
  },
];

export default function ServiceSlider() {
  return (
    <section className="bg-black text-white py-24">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Title */}
        <p className="text-[var(--color-primary)] tracking-widest text-sm uppercase">
          Our Service
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-14">
          WHAT WE DO
        </h2>

        
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}

            spaceBetween={20}
            slidesPerView={4}
            slidesPerGroup={1}

            loop={true}
            loopAdditionalSlides={services.length}

            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
            }}

            speed={900}

            watchSlidesProgress={true}
            observer={true}
            observeParents={true}

            navigation

            pagination={{
                el: ".custom-pagination",
                clickable: true,
                renderBullet: (index, className) => {
                return `<span class="${className} swiper-rect"></span>`;
                },
            }}

            breakpoints={{
                320: { slidesPerView: 1.2 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
            }}
        >
          {services.map((service, i) => (
            <SwiperSlide key={i}>

              <div className="w-[250px] h-[300px] relative group">

                <img
                  src={service.image}
                  className="w-[250px] h-[300px] object-cover"
                />

                {/* Label */}
                <div className="absolute bottom-6 left-0 w-full bg-black/90 text-center py-3 text-xs tracking-widest">
                  {service.title}
                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination flex justify-center mt-10"></div>

        {/* Button */}
        {/* <button className="mt-12 bg-[#c69c6d] text-black px-8 py-3 tracking-widest text-sm">
          LEARN MORE
        </button> */}
        <Button className="mt-12 px-8 py-3 tracking-widest">Learn More</Button>

      </div>
    </section>
  );
}