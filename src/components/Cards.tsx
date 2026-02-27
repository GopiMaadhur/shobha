"use client"

export default function Cards() {
  return (
            <section className="py-24 bg-[#FAF9F6]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="uppercase text-xs tracking-widest text-[#4A7043]">Signature Experiences</span>
                            <h2 className="heading-font text-5xl tracking-tight text-[#4A7043]">Our Herbal Rituals</h2>
                        </div>
                        <a href="#" className="hidden md:flex items-center gap-3 text-sm font-medium group text-[#4A7043]">
                            VIEW FULL MENU 
                            <span className="block w-8 h-px bg-[#4A7043] group-hover:w-12 transition-all"></span>
                        </a>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                       {/* <!-- Card 1 -->  */}
                        <div className="bg-white rounded-3xl overflow-hidden card-hover">
                            <img src="/pngegg (2).png" alt="Herbal Facial" className="w-full h-64 object-cover" />
                            <div className="p-8">
                                <div className="flex justify-between">
                                    <div>
                                        <div className="font-semibold text-xl text-[#4A7043]">Ayurvedic Glow Facial</div>
                                        <div className="text-[#4A7043] text-sm">60 min • ₹2,800</div>
                                    </div>
                                    <div className="text-3xl">🌿</div>
                                </div>
                                <p className="text-gray-600 text-sm mt-4 line-clamp-3">Turmeric, sandalwood & rose water ritual for radiant, blemish-free skin.</p>
                                <button onClick={() => alert('Added to booking!')} 
                                        className="mt-8 w-full py-4 bg-[#4A7043] hover:bg-[#3A5A36] text-white rounded-2xl text-sm font-semibold">
                                    BOOK THIS RITUAL
                                </button>
                            </div>
                        </div>

                        {/* <!-- Card 2 --> */}
                        <div className="bg-white rounded-3xl overflow-hidden card-hover">
                            <img src="/pngegg (3).png" alt="Hair Ritual" className="w-full h-64 object-cover" />
                            <div className="p-8">
                                <div className="flex justify-between">
                                    <div>
                                        <div className="font-semibold text-xl text-[#4A7043]">Herbal Hair Rebirth</div>
                                        <div className="text-[#4A7043] text-sm">90 min • ₹3,500</div>
                                    </div>
                                    <div className="text-3xl">🌱</div>
                                </div>
                                <p className="text-gray-600 text-sm mt-4 line-clamp-3">Amla, hibiscus & fenugreek scalp therapy for thicker, stronger hair.</p>
                                <button onClick={() => alert('Added to booking!')} 
                                        className="mt-8 w-full py-4 bg-[#4A7043] hover:bg-[#3A5A36] text-white rounded-2xl text-sm font-semibold">
                                    BOOK THIS RITUAL
                                </button>
                            </div>
                        </div>

                        {/* <!-- Card 3 --> */}
                        <div className="bg-white rounded-3xl overflow-hidden card-hover">
                            <img src="/pngegg (4).png" alt="Body Detox" className="w-full h-64 object-cover" />
                            <div className="p-8">
                                <div className="flex justify-between">
                                    <div>
                                        <div className="font-semibold text-xl text-[#4A7043]">The Neem Body Detox</div>
                                        <div className="text-[#4A7043] text-sm">75 min • ₹4,200</div>
                                    </div>
                                    <div className="text-3xl">🍃</div>
                                </div>
                                <p className="text-gray-600 text-sm mt-4 line-clamp-3">Full-body herbal scrub & wrap for deep detoxification and silky skin.</p>
                                <button onClick={() => alert('Added to booking!')} 
                                        className="mt-8 w-full py-4 bg-[#4A7043] hover:bg-[#3A5A36] text-white rounded-2xl text-sm font-semibold">
                                    BOOK THIS RITUAL
                                </button>
                            </div>
                        </div>

                        {/* <!-- Card 4 --> */}
                        <div className="bg-white rounded-3xl overflow-hidden card-hover">
                            <img src="/pngegg (5).png" alt="Bridal" className="w-full h-64 object-cover" />
                            <div className="p-8">
                                <div className="flex justify-between">
                                    <div>
                                        <div className="font-semibold text-xl text-[#4A7043]">Bridal Herbal Glow</div>
                                        <div className="text-[#4A7043] text-sm">120 min • ₹7,500</div>
                                    </div>
                                    <div className="text-3xl">💍</div>
                                </div>
                                <p className="text-gray-600 text-sm mt-4 line-clamp-3">Ultimate pre-wedding ritual for radiant bride-to-be skin & hair.</p>
                                <button onClick={() => alert('Added to booking!')} 
                                        className="mt-8 w-full py-4 bg-[#4A7043] hover:bg-[#3A5A36] text-white rounded-2xl text-sm font-semibold">
                                    BOOK THIS RITUAL
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

     )
}