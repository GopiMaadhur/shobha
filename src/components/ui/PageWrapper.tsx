import Footer from "@/components/Footer"

export function PageWrapper({ title, children }: { title: string; children: React.ReactNode }) {
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
      <div className="max-w-4xl mx-auto p-10 bg-black/60 shadow-lg mb-20">
        <h1 className="text-3xl font-bold text-white text-center mb-4 uppercase tracking-widest">
          {title}
        </h1>
        <p className="text-white/50 text-xs text-center uppercase tracking-widest mb-16">
          Last updated: March 2026
        </p>

        <div className="flex flex-col gap-10">
          {children}
        </div>
      </div>

      <Footer />
    </section>
  )
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-[var(--color-primary)] text-sm uppercase tracking-widest font-semibold mb-3">
        {title}
      </h2>
      <div className="w-8 h-[1px] bg-[var(--color-primary)]/40 mb-4" />
      <p className="text-white/70 text-sm leading-relaxed">
        {children}
      </p>
    </div>
  )
}