import Footer from "@/components/Footer"
import ContactForm from "@/components/ContactForm"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section
      className="min-h-screen bg-black mt-6 pt-20"
      style={{
        backgroundImage: "url('/menubg.png')",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-5xl mx-auto p-10 bg-black/80 shadow-lg mb-20">
        <h1 className="text-3xl font-bold text-white text-center mb-16 uppercase tracking-widest">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left — Contact Details */}
          <div className="flex flex-col gap-8">
            <p className="text-white text-sm leading-relaxed tracking-wide">
              We'd love to hear from you. Reach out to us through any of the
              channels below or fill in the form and we'll get back to you shortly.
            </p>

            <div className="flex flex-col gap-6">
              <ContactDetail
                icon={<Phone size={18} />}
                label="Phone"
                value=" +91 9731 920 789"
                href="tel:+919731920789"
              />
              <ContactDetail
                icon={<Mail size={18} />}
                label="Email"
                value="shobhaparlour2110@gmail.com"
                href="mailto:shobhaparlour2110@gmail.com"
              />
              <ContactDetail
                icon={<MapPin size={18} />}
                label="Address"
                value="123, MG Road, Bengaluru, Karnataka - 560001"
              />
            </div>
          </div>

          {/* Right — Form */}
          <ContactForm />
        </div>
      </div>

      <Footer />
    </section>
  )
}

function ContactDetail({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}) {
  return (
  <div className="flex items-start gap-4 group">
    <div className="mt-0.5 text-[var(--color-primary)] transition-transform duration-300 group-hover:scale-110">
      {icon}
    </div>
    <div>
      <p className="text-white/80 text-xs uppercase tracking-widest mb-1">{label}</p>
      {href ? (
        
         <a href={href}
          className="text-white text-sm hover:text-[var(--color-primary)] transition-colors duration-300"
        >
          {value}
        </a>
      ) : (
        <p className="text-white text-sm">{value}</p>
      )}
    </div>
  </div>
)
}