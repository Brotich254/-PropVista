import { Building2, CircleCheck, Clock, Eye, MessageSquare, TrendingUp } from "lucide-react";
import { Nav } from "@/components/nav";
import { properties } from "@/lib/properties";

export default function DashboardPage() {
  const pending = properties.filter((property) => property.status === "Pending").length;

  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-6xl px-5 py-8">
        <div className="flex flex-col justify-between gap-4 border-b border-ink/10 pb-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase text-leaf">Agent dashboard</p>
            <h1 className="mt-2 text-3xl font-black">Listings and inquiries</h1>
          </div>
          <button className="w-fit rounded-lg bg-leaf px-4 py-3 font-black text-white shadow-soft hover:bg-leaf/90">Add listing</button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <Stat icon={<Building2 size={22} />} label="Listings" value={String(properties.length)} />
          <Stat icon={<Clock size={22} />} label="Pending review" value={String(pending)} />
          <Stat icon={<MessageSquare size={22} />} label="New inquiries" value="14" />
          <Stat icon={<TrendingUp size={22} />} label="Monthly views" value="3.8k" />
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-ink/10 bg-white shadow-soft">
          <div className="grid grid-cols-[1.2fr_120px_120px_120px] gap-3 border-b border-ink/10 bg-mist px-4 py-3 text-sm font-black text-ink/70">
            <span>Listing</span>
            <span>Purpose</span>
            <span>Status</span>
            <span>Views</span>
          </div>
          <div className="divide-y divide-ink/10">
            {properties.map((property, index) => (
              <div key={property.id} className="grid grid-cols-1 gap-3 px-4 py-4 text-sm md:grid-cols-[1.2fr_120px_120px_120px] md:items-center">
                <div>
                  <p className="font-black">{property.title}</p>
                  <p className="text-ink/55">{property.location}</p>
                </div>
                <span className="font-bold">{property.purpose}</span>
                <span className={`w-fit rounded-full px-3 py-1 text-xs font-black ${property.status === "Approved" ? "bg-mist text-leaf" : "bg-sun/25 text-amber-800"}`}>
                  {property.status}
                </span>
                <span className="flex items-center gap-2 font-black">
                  <Eye size={16} className="text-clay" aria-hidden="true" />
                  {920 + index * 270}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-ink/10 bg-white p-5 shadow-soft">
      <div className="text-clay">{icon}</div>
      <p className="mt-4 text-3xl font-black">{value}</p>
      <p className="flex items-center gap-1 text-sm font-bold text-ink/60">
        <CircleCheck size={14} aria-hidden="true" />
        {label}
      </p>
    </div>
  );
}
