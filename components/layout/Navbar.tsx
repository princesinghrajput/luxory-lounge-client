"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-foreground/10">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight">Luxury Lounge</Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="#about" className="hover:underline underline-offset-4">About</Link>
          <Link href="#services" className="hover:underline underline-offset-4">Services</Link>
          <Link href="#contact" className="hover:underline underline-offset-4">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
