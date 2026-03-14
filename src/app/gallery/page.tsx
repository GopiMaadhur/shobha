import GallerySection from "@/components/GallerySection"
import Footer from "@/components/Footer"
import Button from "@/components/ui/Button"

export default function Gallery() {
  return (
    <section className="min-h-screen bg-black mt-6 pt-20"
    style={{
                      backgroundImage:
                        "url('/menubg.png')",
                      backgroundAttachment: "fixed",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover"
                    }}>
      
      <div className="max-w-5xl mx-auto p-10 bg-black/80 shadow-lg mb-20 ">

        <h1 className="text-3xl font-bold text-white text-center mb-16 uppercase tracking-widest">
          Gallery
        </h1>

            <GallerySection
  
  items={[
    {  image: "/pngegg (1).png" },
    {  image: "/pngegg (2).png" },
    {  image: "/pngegg (3).png" },
    {  image: "/pngegg (4).png" },
    {  image: "/pngegg (5).png" },
    {  image: "/pngegg (6).png" },
    {  image: "/pngegg (7).png" },
  ]}
/>

          <div className="max-w-7xl mx-auto px-6 text-center">

                <Button href="/contact" className=" uppercase tracking-widest">
                  Book Now</Button>
          </div>
      </div>
<Footer />
    </section>

    
  )
}