import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore solar design, energy engineering, maintenance, storage integration, and sustainability consulting services.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Services"
            title="Commercial energy services for planning, building, and improving performance."
            description="This page is structured for a real service business: clear offers, plain-language benefits, and an easy next step for qualified leads."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-lg bg-slate-950 p-8 text-white md:grid-cols-[1fr_0.8fr] md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
              Project workflow
            </p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              From feasibility to long-term performance reporting.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Each engagement begins with a site review, utility analysis, and
              business case. From there we support design, coordination,
              installation partners, monitoring, and maintenance planning.
            </p>
          </div>
          <div className="grid gap-4 text-sm">
            {["Assess", "Design", "Implement", "Monitor"].map((step, index) => (
              <div key={step} className="flex items-center gap-4 rounded-md bg-white/10 p-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-500 font-semibold text-slate-950">
                  {index + 1}
                </span>
                <span className="font-semibold">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-2xl text-3xl font-semibold text-slate-950">
            Need help choosing the right energy upgrade?
          </h2>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-emerald-700 px-6 text-sm font-semibold text-white transition hover:bg-emerald-800"
          >
            Request Advice
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
