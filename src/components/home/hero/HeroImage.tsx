import Image from "next/image";

export function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Background Glow */}
      <div className="absolute h-[420px] w-[420px] rounded-full bg-blue-200/20 blur-3xl" />

      <div className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/40 shadow-[0_25px_80px_rgba(15,23,42,0.18)] backdrop-blur-sm transition-all duration-500 lg:hover:shadow-[0_35px_90px_rgba(15,23,42,0.25)]">
        <Image
          src="/images/india-gate.png"
          alt="India Gate"
          width={700}
          height={900}
          priority
          className="w-full max-w-[600px] object-cover transition-transform duration-500 lg:hover:scale-[1.015]"
        />
      </div>

    </div>
  );
}
