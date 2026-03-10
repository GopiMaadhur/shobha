import Image from "next/image";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import Feedback from "@/components/Feedback";
import WhyChooseUs from "@/components/WhyChooseUs";
import HeroSlider from "@/components/HeroSlider";
import ServiceSlider from "@/components/ServiceSlider";
import Footer from "@/components/Footer";

const services = [
  {
    title: "CUT / COLOUR / STYLE",
    icon: "/pngegg (8).png",
    description:
      "Craving a refresh? Our stylists provide the latest in hair colour techniques including balayage, highlights and ombre. We help you discover a style that is unique and beautiful.",
  },
  {
    title: "HAIR EXTENSIONS",
    icon: "/pngegg (9).png",
    description:
      "Select from a wide range of human hair extensions including tape-in, clip-in and fusion. Our experts help you choose the best solution for your hair type.",
  },
  {
    title: "EYELASH EXTENSION",
    icon: "/pngegg (6).png",
    description:
      "Enhance your natural beauty with luxurious lashes. Choose from classic, volume or hybrid styles for a dramatic yet natural look.",
  },
];

export default function Services() {
  return (
    <>
      
      <section className="relative py-24 text-white">

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/menubg.png"
          alt="services"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[var(--color-primary)] tracking-widest">
            What We Do
          </p>
          <h2 className="text-4xl font-heading mt-2">
            OUR SERVICES
          </h2>
        </div>

        {/* Services */}
        <div className="space-y-14">
          {services.map((service, index) => (
            <div key={index}>

              <div className="grid grid-cols-[100px_1fr] gap-8 items-start">

                {/* Icon */}
                <div className="flex justify-center">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={80}
                    height={80}
                    className="opacity-90"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-2xl font-semibold tracking-widest mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

              </div>

              {/* Divider */}
              {index !== services.length - 1 && (
                <div className="mt-10 border-b border-yellow-500/40"></div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>

      <Footer />
          
    </>
  );
}
