import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { metrics, team, values } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Green Energy Solutions, a renewable energy company helping commercial clients plan, build, and maintain sustainable energy systems.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-emerald-700">
                About us
              </p>
              <h1 className="text-4xl font-semibold tracking-normal text-slate-950 md:text-6xl">
                Practical clean energy for companies that need results.
              </h1>
            </div>
            <p className="text-lg leading-8 text-slate-600">
              Green Energy Solutions is a commercial renewable energy partner
              focused on solar design, energy engineering, sustainability
              consulting, and long-term maintenance. We help business owners
              make confident energy decisions with clear data and careful
              execution.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-lg bg-white p-6 shadow-sm">
              <p className="text-3xl font-semibold text-emerald-700">
                {metric.value}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-600">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our approach"
            title="A delivery process that makes complex projects easier to approve."
            description="Clients need more than technical ideas. They need clear numbers, risk awareness, and a partner who can translate strategy into installed performance."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article
                  key={value.title}
                  className="rounded-lg border border-slate-200 p-6"
                >
                  <Icon className="h-8 w-8 text-emerald-700" />
                  <h2 className="mt-5 text-xl font-semibold text-slate-950">
                    {value.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Leadership"
            title="A focused team with engineering, operations, and sustainability expertise."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-md bg-emerald-700 text-lg font-semibold text-white">
                  {member.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <h2 className="text-xl font-semibold text-slate-950">
                  {member.name}
                </h2>
                <p className="mt-1 text-sm font-semibold text-emerald-700">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {member.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
