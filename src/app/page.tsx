import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { metrics, projects, services, values } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/solar-field.jpg"
            alt="Solar panels at sunset"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20" />
        </div>

        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center px-5 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div className="w-[calc(100vw-2.5rem)] min-w-0 max-w-3xl sm:w-auto">
            <p className="mb-5 inline-flex rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-emerald-100 ring-1 ring-white/15">
              Renewable energy for modern business
            </p>
            <h1 className="max-w-[11ch] text-4xl font-semibold tracking-normal sm:text-5xl md:text-7xl">
              Green Energy Solutions
            </h1>
            <p className="mt-6 max-w-[20rem] text-base leading-8 text-slate-200 sm:max-w-xl sm:text-lg md:text-xl">
              We help businesses build a sustainable future with commercial
              solar design, energy engineering, and reliable maintenance.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 w-full max-w-[20rem] items-center justify-center gap-2 rounded-md bg-emerald-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 sm:w-auto sm:max-w-none"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 w-full max-w-[20rem] items-center justify-center rounded-md border border-white/30 px-6 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto sm:max-w-none"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="border-l-4 border-emerald-600 pl-5">
              <p className="text-3xl font-semibold text-slate-950">
                {metric.value}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-600">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What we do"
            title="Energy services built around commercial outcomes."
            description="From initial feasibility to long-term monitoring, our team helps companies reduce energy waste, control operating costs, and meet sustainability goals."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative min-h-[420px] overflow-hidden rounded-lg">
              <Image
                src="/images/wind-solar.jpg"
                alt="Wind turbines and solar infrastructure"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="Why choose us"
                title="Clear engineering, transparent delivery, measurable savings."
                description="Green energy projects work best when strategy, numbers, and execution stay connected. Our process keeps every stakeholder aligned from proposal to performance report."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {values.map((value) => (
                  <div key={value.title} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-700" />
                    <div>
                      <h3 className="font-semibold text-slate-950">
                        {value.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects that turn sustainability into operating value."
            description="These sample case studies show the type of business impact this website template can present for a real client."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-5 py-16 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
              Start your energy project
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold md:text-4xl">
              Ready to reduce costs and build a cleaner operation?
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-emerald-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            Book a Consultation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
