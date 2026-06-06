import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, navItems } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-600 text-sm font-bold">
              GE
            </span>
            <span className="font-semibold tracking-wide">{company.name}</span>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-300">
            Commercial solar, energy engineering, and maintenance services for
            companies ready to lower costs and operate more responsibly.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-emerald-300">
            Pages
          </h2>
          <div className="grid gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-emerald-300">
            Contact
          </h2>
          <div className="grid gap-3 text-sm text-slate-300">
            <span className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-emerald-300" />
              {company.email}
            </span>
            <span className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-emerald-300" />
              {company.phone}
            </span>
            <span className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-emerald-300" />
              {company.address}
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-slate-400">
        © 2026 {company.name}. Portfolio demo website.
      </div>
    </footer>
  );
}
