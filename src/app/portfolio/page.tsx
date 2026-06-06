import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "View sample commercial solar, factory optimization, and smart building retrofit projects.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected commercial energy projects."
            description="Case study pages help service businesses prove capability quickly. These examples show images, business context, and clear outcomes."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-lg bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            What a real client can add
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              "Before and after energy costs",
              "Project scope and timeline",
              "Photos, testimonials, and measurable outcomes",
            ].map((item) => (
              <div key={item} className="rounded-md border border-slate-200 p-5">
                <p className="font-semibold text-slate-950">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
