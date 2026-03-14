import Image from "next/image";
import Button from "./ui/Button";

interface WhiteBgProps {
  title: string;
  description: string;
  image: string;
  imagePosition?: "left" | "right";
  buttonText?: string;
  imageClass?: string;
}

export default function WhiteBg({
  title,
  description,
  image,
  imagePosition = "left",
  buttonText = "BOOK NOW",
  imageClass = "",
}: WhiteBgProps) {
  return (
    <section className="bg-[#efefef] overflow-hidden py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 items-center gap-10">

  {/* Image */}
  <div
    className={`relative w-full h-[380px] md:col-span-2 order-2 md:order-none ${
      imagePosition === "right" ? "md:order-2" : ""
    }`}
  >
    <Image
      src={image}
      alt={title}
      fill
      className={`object-contain ${imageClass}`}
    />
  </div>

  {/* Content */}
  <div className={`md:col-span-2 order-1 md:order-none ${imagePosition === "right" ? "md:order-1" : ""}`}>
    <h2 className="text-black text-3xl md:text-3xl font-extrabold tracking-widest mb-4">
      {title}
    </h2>

    <div className="w-16 h-[2px] bg-[var(--color-primary)] mb-6"></div>

    <p className="text-black leading-relaxed mb-10">
      {description}
    </p>

    <Button href="/cotact">Book Now</Button>
  </div>
</div>
    </section>
  );
}