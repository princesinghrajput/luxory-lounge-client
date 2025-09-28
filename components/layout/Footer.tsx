export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-foreground/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Luxury Lounge Salon. All rights reserved.</p>
        <p>
          Crafted with <span aria-label="love" role="img">💛</span> in Next.js
        </p>
      </div>
    </footer>
  );
}
