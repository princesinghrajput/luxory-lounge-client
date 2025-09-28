import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/data";

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-20 grid gap-10">
      <div className="grid gap-2">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Our Services</h2>
        <p className="text-foreground/70 max-w-3xl">Discover a curated selection of premium salon treatments.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((svc) => (
          <Card key={svc.id}>
            <CardHeader>
              <CardTitle>{svc.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/70">{svc.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
