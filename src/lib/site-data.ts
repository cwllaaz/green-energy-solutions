import {
  BatteryCharging,
  Bolt,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  Leaf,
  LineChart,
  ShieldCheck,
  SunMedium,
  Wrench,
} from "lucide-react";

export const company = {
  name: "Green Energy Solutions",
  tagline: "We help businesses build a sustainable future.",
  email: "hello@greenenergysolutions.co",
  phone: "+1 (415) 555-0198",
  address: "420 Mission Street, San Francisco, CA",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const metrics = [
  { value: "120+", label: "Projects delivered" },
  { value: "10+", label: "Years of expertise" },
  { value: "38%", label: "Average energy savings" },
  { value: "24/7", label: "Monitoring support" },
];

export const services = [
  {
    title: "Solar Design",
    description:
      "Site assessments, production modeling, permitting support, and system layouts for commercial solar projects.",
    icon: SunMedium,
  },
  {
    title: "Energy Engineering",
    description:
      "Technical planning for battery storage, microgrids, load analysis, and efficiency upgrades.",
    icon: Bolt,
  },
  {
    title: "Maintenance",
    description:
      "Preventive maintenance, remote monitoring, performance audits, and rapid issue resolution.",
    icon: Wrench,
  },
  {
    title: "Sustainability Consulting",
    description:
      "Carbon reduction roadmaps, incentive research, and executive-ready reports for growing companies.",
    icon: Leaf,
  },
  {
    title: "Storage Integration",
    description:
      "Battery sizing, backup strategy, interconnection guidance, and resilience planning.",
    icon: BatteryCharging,
  },
  {
    title: "Compliance Reporting",
    description:
      "Energy data review, documentation, and reporting workflows for regulated facilities.",
    icon: ClipboardCheck,
  },
];

export const projects = [
  {
    title: "Commercial Solar Installation",
    category: "Retail Campus",
    description:
      "A 540 kW rooftop solar system that lowered daytime grid demand and improved utility cost predictability.",
    result: "31% lower annual electricity cost",
    image: "/images/solar-field.jpg",
  },
  {
    title: "Factory Energy Optimization",
    category: "Manufacturing",
    description:
      "A full energy audit and controls upgrade for a production facility with high peak-load charges.",
    result: "18 months projected payback",
    image: "/images/factory-energy.jpg",
  },
  {
    title: "Smart Building Retrofit",
    category: "Office Portfolio",
    description:
      "Sensor-led lighting, HVAC scheduling, and energy dashboards across three office buildings.",
    result: "42% reduction in after-hours waste",
    image: "/images/smart-building.jpg",
  },
];

export const values = [
  {
    title: "Practical Engineering",
    description:
      "Every recommendation is modeled around real site constraints, operating schedules, and budgets.",
    icon: Factory,
  },
  {
    title: "Transparent Delivery",
    description:
      "Clients see timelines, tradeoffs, incentives, and expected return before committing to work.",
    icon: CheckCircle2,
  },
  {
    title: "Long-Term Reliability",
    description:
      "We stay involved after installation with monitoring, reporting, and maintenance support.",
    icon: ShieldCheck,
  },
  {
    title: "Measurable Results",
    description:
      "Energy savings, emissions impact, and operating performance are tracked in clear monthly reports.",
    icon: LineChart,
  },
];

export const team = [
  {
    name: "Maya Chen",
    role: "Principal Energy Engineer",
    bio: "Leads technical design and feasibility studies for commercial solar and storage projects.",
  },
  {
    name: "Daniel Brooks",
    role: "Operations Director",
    bio: "Coordinates delivery partners, maintenance schedules, and client reporting programs.",
  },
  {
    name: "Sofia Ramirez",
    role: "Sustainability Consultant",
    bio: "Builds carbon reduction roadmaps and incentive strategies for growing companies.",
  },
];
