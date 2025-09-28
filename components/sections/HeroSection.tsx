import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32 grid gap-8">
        <div className="flex flex-col items-start gap-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Indulge in Luxury. Elevate Your Glow.
          </h1>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl">
            Experience premium salon services with personalized care. From hair to skin, our experts ensure you look and feel your best.
          </p>
          <div className="flex items-center gap-3">
            <Button asChild>
              <a href="#services">Book an Appointment</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#about">Explore More</a>
            </Button>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15),transparent_60%)]" />
    </section>
  );
}
