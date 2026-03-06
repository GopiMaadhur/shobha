export default function Hero() {
  return (
    // <section className="w-full bg-black text-white">
    //   <div className="max-w-6xl mx-auto px-6 py-24 text-center">

    //     {/* Heading */}
    //     <h1 className="text-4xl md:text-6xl font-serif font-semibold leading-tight">
    //       Discover natural <br />
    //       beauty through <br />
    //       herbal wisdom
    //     </h1>

    //     {/* Subtext */}
    //     <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
    //       At Shobha, we blend ancient ayurvedic traditions with modern aesthetics.
    //       Experience personalized herbal treatments and professional training in
    //       Hyderabad’s most trusted beauty sanctuary.
    //     </p>

    //     {/* Buttons */}
    //     <div className="mt-8 flex justify-center gap-4">
    //       <button className="bg-primary hover:bg-green-700 transition px-6 py-3 rounded-md font-medium">
    //         Book now
    //       </button>

    //       <button className="bg-gray-800 hover:bg-gray-700 transition px-6 py-3 rounded-md font-medium">
    //         Learn more
    //       </button>
    //     </div>
    //   </div>

    //   {/* Video Section */}
    //   <div className="max-w-6xl mx-auto px-6 pb-20">
    //     <div className="overflow-hidden rounded-xl">
    //       <video
    //         className="w-full h-full object-cover"
    //         autoPlay
    //         muted
    //         loop
    //         playsInline
    //       >
    //         <source src="/hero-video.mp4" type="video/mp4" />
    //         Your browser does not support the video tag.
    //       </video>
    //     </div>
    //   </div>
    // </section>

     <section className="w-full bg-black text-white">

      {/* Content */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 pt-20 pb-12 text-center">

        {/* Heading */}
        <h1 className="
          font-serif font-semibold leading-tight
          text-3xl 
          sm:text-4xl 
          md:text-6xl
        ">
          Discover natural <br className="hidden sm:block" />
          beauty through <br className="hidden sm:block" />
          herbal wisdom
        </h1>

        {/* Subtext */}
        <p className="
          mt-5 
          text-gray-300 
          text-base 
          sm:text-lg
          max-w-xl 
          mx-auto 
          leading-relaxed
        ">
          At Shobha, we blend ancient ayurvedic traditions with modern aesthetics.
          Experience personalized herbal treatments and professional training in
          Hyderabad’s most trusted beauty sanctuary.
        </p>

        {/* Buttons */}
        <div className="
          mt-8 
          flex 
          flex-col 
          sm:flex-row 
          gap-4 
          justify-center
        ">
          <button className="
            bg-[#6E9F3A] 
            hover:bg-[#6B8E23]
            transition 
            px-6 
            py-3 
            rounded-md 
            font-medium
            w-full 
            sm:w-auto
          ">
            Book now
          </button>

          <button className="
            bg-gray-800 
            hover:bg-gray-700 
            transition 
            px-6 
            py-3 
            rounded-md 
            font-medium
            w-full 
            sm:w-auto
          ">
            Learn more
          </button>
        </div>
      </div>

      {/* Video Section */}
      <div className="px-5 sm:px-6 pb-16">
        <div className="
          max-w-6xl 
          mx-auto 
          overflow-hidden 
          rounded-xl
        ">
          <video
            className="
              w-full 
              h-[240px] 
              sm:h-[400px] 
              md:h-[520px] 
              object-cover
            "
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

    </section>
  )
}