export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 bg-black/20 z-10" />
      <img 
        src="/salon-hero.jpg" 
        className="absolute inset-0 object-cover w-full h-full"
        alt="Shobha Beauty Salon"
      />
      
      {/* Content */}
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="font-serif text-5xl md:text-7xl mb-6">
          Passion • Reliability • Service
        </h1>
        <p className="font-sans text-lg md:text-xl mb-8 tracking-widest uppercase">
          Your Hair and Beauty Destination
        </p>
        <button className="bg-white text-black px-10 py-4 font-semibold uppercase tracking-widest hover:bg-gray-200 transition-all">
          Book Now
        </button>
      </div>
    </section>
  )
}