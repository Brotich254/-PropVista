import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Bath, BedDouble, Mail, MapPin, Phone, Ruler } from "lucide-react";
import { Nav } from "@/components/nav";
import { getPropertyBySlug, properties } from "@/lib/properties";

export function generateStaticParams() {
  return properties.map((property) => ({ id: property.slug }));
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = getPropertyBySlug(id);

  if (!property) {
    notFound();
  }

  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-6xl px-5 py-8">
        <Link className="text-sm font-black text-leaf hover:underline" href="/#listings">
          Back to listings
        </Link>
        <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="grid gap-3 md:grid-cols-[1fr_220px]">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-mist">
                <Image src={property.gallery[0]} alt={property.title} fill className="object-cover" priority sizes="(min-width: 1024px) 760px, 100vw" />
              </div>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
                {property.gallery.slice(1).map((image) => (
                  <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-mist">
                    <Image src={image} alt={property.title} fill className="object-cover" sizes="220px" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-ink/10 bg-white p-5 shadow-soft">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <p className="font-black text-clay">{property.purpose}</p>
                  <h1 className="mt-2 text-3xl font-black">{property.title}</h1>
                  <p className="mt-2 flex items-center gap-2 text-ink/60">
                    <MapPin size={18} aria-hidden="true" />
                    {property.location}, {property.country}
                  </p>
                </div>
                <p className="text-3xl font-black text-leaf">{property.price}</p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <Fact icon={<BedDouble size={18} />} label={`${property.bedrooms} bedrooms`} />
                <Fact icon={<Bath size={18} />} label={`${property.bathrooms} bathrooms`} />
                <Fact icon={<Ruler size={18} />} label={`${property.areaSqm} sqm`} />
              </div>

              <p className="mt-6 leading-8 text-ink/70">{property.description}</p>

              <div className="mt-6">
                <h2 className="text-lg font-black">Amenities</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {property.amenities.map((amenity) => (
                    <span key={amenity} className="rounded-full bg-mist px-3 py-2 text-sm font-bold text-leaf">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-xl border border-ink/10 bg-white p-5 shadow-soft">
            <p className="text-sm font-black uppercase text-leaf">Contact agent</p>
            <h2 className="mt-2 text-xl font-black">{property.agent.name}</h2>
            <p className="text-sm font-semibold text-ink/60">{property.agent.agency}</p>
            <div className="mt-4 space-y-2 text-sm font-bold text-ink/70">
              <p className="flex items-center gap-2">
                <Phone size={16} aria-hidden="true" />
                {property.agent.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} aria-hidden="true" />
                {property.agent.email}
              </p>
            </div>
            <form action="/api/inquiries" method="post" className="mt-5 space-y-3">
              <input type="hidden" name="propertyId" value={property.id} />
              <Input name="name" placeholder="Full name" />
              <Input name="email" placeholder="Email address" type="email" />
              <Input name="phone" placeholder="Phone number" />
              <textarea required name="message" className="min-h-28 w-full rounded-lg border border-ink/15 p-3 outline-none focus:border-leaf" placeholder="I would like to schedule a viewing..." />
              <button className="w-full rounded-lg bg-clay px-4 py-3 font-black text-white hover:bg-clay/90">Send inquiry</button>
            </form>
          </aside>
        </div>
      </section>
    </main>
  );
}

function Fact({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-stone p-3 font-black">
      <span className="text-clay">{icon}</span>
      {label}
    </div>
  );
}

function Input({ name, placeholder, type = "text" }: { name: string; placeholder: string; type?: string }) {
  return <input required name={name} type={type} className="h-12 w-full rounded-lg border border-ink/15 px-3 outline-none focus:border-leaf" placeholder={placeholder} />;
}
