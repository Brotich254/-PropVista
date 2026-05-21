import Link from "next/link";
import { Building2 } from "lucide-react";

export function Nav() {
  return (
    <header className="border-b border-ink/10 bg-stone/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-black">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-leaf text-white">
            <Building2 size={22} aria-hidden="true" />
          </span>
          PropVista
        </Link>
        <div className="flex items-center gap-2 text-sm font-bold">
          <Link className="rounded-lg px-3 py-2 text-ink/70 hover:bg-mist hover:text-ink" href="/dashboard">
            Dashboard
          </Link>
          <Link className="rounded-lg bg-clay px-4 py-2 text-white shadow-soft hover:bg-clay/90" href="/#listings">
            Browse
          </Link>
        </div>
      </nav>
    </header>
  );
}
