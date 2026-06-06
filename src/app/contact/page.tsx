import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { company } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Green Energy Solutions to discuss commercial solar, energy engineering, maintenance, or sustainability consulting.",
};

export default function ContactPage() {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Tell us about your energy goals."
            description="Use this page to capture business inquiries, project context, and contact details. The current demo form can be connected to an email or database service."
          />

          <div className="grid gap-4">
            <div className="flex gap-4 rounded-lg bg-white p-5 shadow-sm">
              <Mail className="h-6 w-6 text-emerald-700" />
              <div>
                <h2 className="font-semibold text-slate-950">Email</h2>
                <p className="mt-1 text-sm text-slate-600">{company.email}</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-lg bg-white p-5 shadow-sm">
              <Phone className="h-6 w-6 text-emerald-700" />
              <div>
                <h2 className="font-semibold text-slate-950">Phone</h2>
                <p className="mt-1 text-sm text-slate-600">{company.phone}</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-lg bg-white p-5 shadow-sm">
              <MapPin className="h-6 w-6 text-emerald-700" />
              <div>
                <h2 className="font-semibold text-slate-950">Office</h2>
                <p className="mt-1 text-sm text-slate-600">{company.address}</p>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
