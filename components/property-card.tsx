import Image from "next/image";
import Link from "next/link";
import { Bath, BedDouble, MapPin, Ruler } from "lucide-react";
import type { Property } from "@/lib/properties";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/properties/${property.slug}`} className="group overflow-hidden rounded-xl border border-ink/10 bg-white shadow-soft transition hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
        <Image src={property.image} alt={property.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" />
        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-black text-leaf">{property.purpose}</span>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-black">{property.title}</h3>
            <p className="mt-1 flex items-center gap-1 text-sm text-ink/60">
              <MapPin size={15} aria-hidden="true" />
              {property.location}
            </p>
          </div>
          <p className="shrink-0 text-lg font-black text-leaf">{property.price}</p>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-sm font-bold text-ink/70">
          <span className="flex items-center gap-1">
            <BedDouble size={16} aria-hidden="true" />
            {property.bedrooms}
          </span>
          <span className="flex items-center gap-1">
            <Bath size={16} aria-hidden="true" />
            {property.bathrooms}
          </span>
          <span className="flex items-center gap-1">
            <Ruler size={16} aria-hidden="true" />
            {property.areaSqm}m2
          </span>
        </div>
      </div>
    </Link>
  );
}
