"use client"


import { Leaf, GraduationCap, Award, Star } from 'lucide-react';

const features = [
  {
    title: "100% Herbal",
    desc: "We use pure, natural ingredients for all our herbal beauty treatments.",
    icon: <Leaf className="text-emerald-600" size={32} />,
  },
  {
    title: "Certified Trainers",
    desc: "Learn from industry experts at our academy with years of hands-on experience.",
    icon: <GraduationCap className="text-teal-600" size={32} />,
  },
  {
    title: "10 Years Experience",
    desc: "Over a decade of excellence in herbal beauty and professional training.",
    icon: <Star className="text-blue-600" size={32} />,
  },
  {
    title: "Professional Certification",
    desc: "Get recognized certifications upon completion of our beauty courses.",
    icon: <Award className="text-cyan-600" size={32} />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 overflow-hidden bg-black">
      {/* Wave Decorative Background (Top) */}
      {/* <div className="absolute top-0 left-0 w-full leading-none z-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-emerald-50 h-32 w-full opacity-50">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white">
            Why <span className="text-[var(--color-primary)]">Choose</span> Us
          </h2>
          <div className="mt-4 flex justify-center">
             <Leaf className="text-[var(--color-primary)]" size={40} />
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 text-center bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6 flex justify-center transition-transform duration-500 group-hover:scale-110">
                <div className="p-4 rounded-full bg-emerald-50">
                  {item.icon}
                </div>
              </div>
              <h3 className="font-serif text-xl mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Dark Curved Section (Bottom) */}
      <div className="mt-20 top-20 relative bg-[var(--color-primary)] py-25 text-white overflow-hidden">
        {/* Decorative Wave Overlay */}
        <div className="absolute top-57 left-0 w-full rotate-180">
           <svg viewBox="0 0 1000 120" preserveAspectRatio="none" className="fill-white h-20 w-full">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="font-serif italic text-2xl md:text-3xl">
            "Combining ancient herbal wisdom with modern professional techniques."
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <div className="h-1 w-50 bg-white"></div>
            <div className="h-1 w-2 bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
}