"use client"

export default function Feedback() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="heading-font text-5xl tracking-tight text-[var(--color-primary)]">What Our Clients Say</h2>
          <p className="text-gray-600 mt-4 text-lg">Real reviews from our valued customers.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- Testimonial 1 --> */}
          <div className="bg-[#FAF9F6] rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Client 1" className="w-16 h-16 rounded-full object-cover" />
              <div>
                <div className="font-semibold text-lg text-[var(--color-primary)]">Anjali S.</div>          <div className="text-sm text-gray-500">Bangalore</div>              </div>
            </div>
            <p className="text-gray-600 text-sm">"The Ayurvedic Glow Facial was a game-changer for my skin! I felt radiant and rejuvenated. Highly recommend!"</p>
          </div>            
            {/* <!-- Testimonial 2 --> */}
            <div className="bg-[#FAF9F6] rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-4">
                    <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="Client 2" className="w-16 h-16 rounded-full object-cover" />
                    <div>
                        <div className="font-semibold text-lg text-[var(--color-primary)]">Rahul M.</div>          <div className="text-sm text-gray-500">Mumbai</div>              </div>
                </div>
                <p className="text-gray-600 text-sm">"The Herbal Hair Rebirth treatment transformed my hair! It's been years since I've felt this healthy and strong."</p>
            </div>
            {/* <!-- Testimonial 3 --> */}
            <div className="bg-[#FAF9F6] rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-4">
                    <img src="https://randomuser.me/api/portraits/women/22.jpg" alt="Client 3" className="w-16 h-16 rounded-full object-cover" />
                    <div>
                        <div className="font-semibold text-lg text-[var(--color-primary)]">Priya K.</div>          <div className="text-sm text-gray-500">Delhi</div>              </div>
                </div>
                <p className="text-gray-600 text-sm">"I had the Body Detox treatment and it was incredible! I felt lighter and more energized. The staff was so caring."</p>
            </div>  
        </div>
      </div>
    </section>
  )
}