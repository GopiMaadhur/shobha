import MenuSection from "@/components/MenuSection"
import Footer from "@/components/Footer"
import Button from "@/components/ui/Button"

export default function Menu() {
  return (
    <section className="min-h-screen bg-black mt-6 pt-20"
    style={{
                      backgroundImage:
                        "url('/menubg.png')",
                      backgroundAttachment: "fixed",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover"
                    }}>
      
      <div className="max-w-5xl mx-auto p-10 bg-black/60 shadow-lg mb-20 ">

        <h1 className="text-3xl font-bold text-white text-center mb-16 uppercase tracking-widest">
          Lounge Menu
        </h1>

        <MenuSection
          title="Threading"
          items={[
            { name: "Face Threading", price: "₹50" },
            { name: "Eyebrow", price: "₹50" },
            { name: "Upper Lip", price: "₹20" },
            { name: "Lower Lip", price: "₹20" },
            { name: "Chin", price: "₹50 & UP" },
            { name: "Forehead", price: "₹20" },
            { name: "Full Face Threading", price: "₹250 & UP" },
          ]}
        />

        <MenuSection
          title="Face Waxing"
          items={[
            { name: "Forehead", price: "₹30 & UP" },
            { name: "Upper Lip", price: "₹30 & UP" },
            { name: "Chin", price: "₹100 & UP" },
            { name: "Full Face Wax", price: "₹400" },
            { name: "Rica Wax", price: "₹400" },
            { name: "Normal Wax", price: "₹300" },
          ]}
        />

        <MenuSection
          title="Hair Cuts"
          items={[
            { name: "Straight Hair Cut", price: "₹150 & UP" },
            { name: "U Cut", price: "₹250" },
            { name: "V Cut", price: "₹250 & UP" },
            { name: "Step Cut", price: "₹500 & UP" },
            { name: "Layer Cut", price: "₹500 & UP" },
            { name: "Feather Cut", price: "₹500 & UP" },
          ]}
        />

        <MenuSection
          title="Facials"
          items={[
            { name: "Fruits Facial", price: "₹650" },
            { name: "Wine Facial", price: "₹750 & UP" },
            { name: "Papaya Facial", price: "₹900 & UP" },
            { name: "Lotus Pearl Facial", price: "₹1200 & UP" },
            { name: "Gold Facial", price: "₹1500 & UP" },
            { name: "Diamond Facial", price: "₹1700 & UP" },
          ]}
        />

        <MenuSection
          title="Waxing"
          items={[
            { name: "Hands", price: "₹300" },
            { name: "Hands + Underarms", price: "₹350 & UP" },
            { name: "Underarms", price: "₹100" },
            { name: "Half Leg", price: "₹350 & UP" },
            { name: "Full Leg", price: "₹650 & UP" },
          ]}
        />

        <MenuSection
          title="Hair Care"
          items={[
            { name: "Hair Wash", price: "₹350" },
            { name: "Temporary Hair Straight", price: "₹400 & UP" },
            { name: "Hair Spa Normal", price: "₹1500 & UP" },
            { name: "Loreal Hair Spa Special", price: "₹1800 & UP" },
            { name: "Hair Smoothing", price: "₹5000 & UP" },
            { name: "Hair Straightening", price: "₹6000 & UP" },
          ]}
        />

        <MenuSection
          title="Massage"
          items={[
            { name: "Head Massage (Coconut Oil)", price: "₹450 & UP" },
            { name: "Head Massage (Almond Oil)", price: "₹550 & UP" },
            { name: "Head Massage (Olive Oil)", price: "₹650 & UP" },
            { name: "Back Massage Oil", price: "₹350 & UP" },
            { name: "Back Massage Cream", price: "₹350 & UP" },
          ]}
        />
          <div className="max-w-7xl mx-auto px-6 text-center">

                <Button className=" uppercase tracking-widest">
                  Book Now</Button>
          </div>
      </div>
<Footer />
    </section>

    
  )
}