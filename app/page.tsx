import { BarChart3, Home, Search, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/nav";
import { PropertyCard } from "@/components/property-card";
import { properties } from "@/lib/properties";

export default function HomePage() {
  return (
    <main>
      <Nav />
      <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-10 px-5 py-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-mist px-4 py-2 text-sm font-black text-leaf">
            <Home size={16} aria-hidden="true" />
            Real estate marketplace platform
          </p>
          <h1 className="text-5xl font-black leading-tight tracking-normal md:text-7xl">PropVista</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-ink/68">
            Search curated homes, compare listings, contact verified agents, and manage property approvals from one clean dashboard.
          </p>
          <div className="mt-8 grid gap-3 rounded-xl border border-ink/10 bg-white p-3 shadow-soft md:grid-cols-[1fr_160px_130px]">
            <label className="flex items-center gap-2 rounded-lg bg-stone px-3 py-3">
              <Search size={20} className="text-ink/50" aria-hidden="true" />
              <input className="w-full bg-transparent text-sm font-semibold outline-none" placeholder="Search city or neighborhood" />
            </label>
            <select className="rounded-lg border border-ink/10 bg-white px-3 py-3 text-sm font-bold outline-none">
              <option>Any type</option>
              <option>Apartment</option>
              <option>House</option>
              <option>Villa</option>
            </select>
            <button className="rounded-lg bg-leaf px-4 py-3 text-sm font-black text-white hover:bg-leaf/90">Search</button>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <Metric icon={<Home size={20} />} value="120+" label="Listings ready" />
            <Metric icon={<ShieldCheck size={20} />} value="Verified" label="Agent workflow" />
            <Metric icon={<BarChart3 size={20} />} value="Live" label="Admin insights" />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="md:pt-16">
            <PropertyCard property={properties[0]} />
          </div>
          <div className="space-y-4">
            <PropertyCard property={properties[1]} />
          </div>
        </div>
      </section>

      <section id="listings" className="mx-auto max-w-6xl px-5 py-10">
        <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase text-leaf">Featured listings</p>
            <h2 className="mt-2 text-3xl font-black">Properties buyers can act on today</h2>
          </div>
          <div className="flex gap-2 text-sm font-black">
            <button className="rounded-lg bg-ink px-4 py-2 text-white">All</button>
            <button className="rounded-lg border border-ink/10 bg-white px-4 py-2">Sale</button>
            <button className="rounded-lg border border-ink/10 bg-white px-4 py-2">Rent</button>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </main>
  );
}

function Metric({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="rounded-xl border border-ink/10 bg-white p-4 shadow-soft">
      <div className="text-clay">{icon}</div>
      <p className="mt-3 text-2xl font-black">{value}</p>
      <p className="text-sm font-semibold text-ink/58">{label}</p>
    </div>
  );
}
