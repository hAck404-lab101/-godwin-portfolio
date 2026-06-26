'use client';

import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Code2,
  CreditCard,
  Github,
  Hotel,
  Hospital,
  LayoutDashboard,
  Layers3,
  Mail,
  MapPin,
  MessageCircle,
  Server,
  ShieldCheck,
  ShoppingBag,
  Wheat,
} from 'lucide-react';
import type { ElementType } from 'react';

const navItems = ['About', 'Projects', 'Skills', 'Services', 'Contact'];

const projects: Array<{
  title: string;
  description: string;
  problem: string;
  tags: string[];
  icon: ElementType;
}> = [
  {
    title: 'Chiq-N-Grill Ordering System',
    description:
      'Restaurant ordering platform with website, WhatsApp-style ordering, admin/kitchen dashboard, and mobile app concept.',
    problem:
      'Helps the restaurant control direct orders and reduce confusion from fake listings or third-party order flow.',
    tags: ['Next.js', 'Supabase', 'Tailwind CSS', 'Admin Dashboard', 'Ordering System'],
    icon: ShoppingBag,
  },
  {
    title: 'Dues Management System',
    description:
      'Student dues payment and admin management system with login, payment tracking, receipts, and dashboard.',
    problem: 'Helps departments manage student dues digitally and reduce manual payment records.',
    tags: ['React', 'Node.js', 'MySQL', 'Paystack', 'Dashboard'],
    icon: LayoutDashboard,
  },
  {
    title: 'Royal Hawk Hotel Website',
    description:
      'Hotel website focused on trust, online visibility, booking interest, and business presentation.',
    problem: 'Improves the hotel’s digital presence and customer confidence.',
    tags: ['Website', 'SEO', 'Booking Flow', 'Business Website'],
    icon: Hotel,
  },
  {
    title: 'HTH Hospital Map / Intern System',
    description:
      'Hospital navigation and intern attendance concept for improving movement, tracking, and admin records.',
    problem: 'Helps users find hospital locations and helps admins manage intern records.',
    tags: ['Web App', 'Admin System', 'Navigation', 'Records'],
    icon: Hospital,
  },
  {
    title: 'AgroConnect',
    description:
      'B2B agriculture marketplace concept connecting farmers, buyers, sellers, and transporters.',
    problem: 'Helps local agriculture businesses connect and move products more efficiently.',
    tags: ['Marketplace', 'Logistics', 'Payments', 'Web App'],
    icon: Wheat,
  },
  {
    title: 'Unlimited Edge Works',
    description:
      'Digital product platform with wallet-based purchases, product codes, inventory, and admin control.',
    problem: 'Helps manage digital product sales with controlled delivery and payment records.',
    tags: ['Wallet', 'Admin Dashboard', 'Digital Products', 'Payments'],
    icon: ShieldCheck,
  },
];

const skillGroups = [
  {
    title: 'Frontend',
    icon: Code2,
    items: ['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'UI/UX Implementation'],
  },
  {
    title: 'Backend & Database',
    icon: Server,
    items: ['Node.js', 'Express', 'Supabase', 'MySQL', 'API Integration'],
  },
  {
    title: 'Business Systems',
    icon: Layers3,
    items: ['Admin Dashboards', 'Payment Flows', 'Restaurant Ordering', 'Student Portals', 'Booking Systems'],
  },
  {
    title: 'Tools',
    icon: Github,
    items: ['GitHub', 'Vercel', 'Railway', 'cPanel', 'Figma', 'WordPress', 'WooCommerce'],
  },
];

const services = [
  {
    title: 'Business Websites',
    description: 'Clean, modern websites for restaurants, hotels, schools, shops, and local brands.',
    icon: Layers3,
  },
  {
    title: 'Admin Dashboards',
    description: 'Custom dashboards for managing users, payments, orders, records, and reports.',
    icon: LayoutDashboard,
  },
  {
    title: 'Ordering & Booking Systems',
    description: 'Restaurant ordering, hotel booking flows, WhatsApp-style orders, and kitchen/admin workflows.',
    icon: ShoppingBag,
  },
  {
    title: 'Payment Integration',
    description: 'Paystack, MoMo-style flows, receipts, payment records, and admin tracking.',
    icon: CreditCard,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-90px' },
  transition: { duration: 0.6, ease: 'easeOut' },
};

function SectionHeader({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <motion.div {...fadeUp} className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{copy}</p>
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="noise min-h-screen overflow-hidden">
      <header className="fixed left-0 right-0 top-4 z-50 px-4">
        <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 shadow-soft md:px-6">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-sm font-bold text-white">
              GS
            </span>
            <span className="hidden text-sm font-semibold text-slate-950 sm:inline">Godwin Sozo Kumah</span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Contact
          </a>
        </nav>
      </header>

      <section id="home" className="relative px-4 pb-24 pt-36 md:pb-32 md:pt-44">
        <div className="absolute left-1/2 top-32 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur">
              <MapPin className="h-4 w-4" /> Ghana-based developer building real systems
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-slate-950 md:text-7xl lg:text-8xl">
              I build clean, functional digital products for real businesses.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              I’m Godwin Sozo Kumah, a front-end and full-stack developer focused on modern web apps,
              dashboards, business systems, restaurant ordering platforms, and payment-driven products.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lift transition hover:-translate-y-1 hover:bg-slate-800"
              >
                View Projects <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                Contact Me
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {['React', 'Next.js', 'Supabase', 'Node.js', 'Tailwind CSS', 'Payments', 'Dashboards'].map((tag) => (
                <span key={tag} className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-600">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-slate-200 bg-white/85 p-4 shadow-lift backdrop-blur">
              <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Portfolio Preview</p>
                    <h3 className="mt-1 text-2xl font-semibold">s3yram.dev</h3>
                  </div>
                  <div className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">Live-ready</div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-3xl bg-white p-5 text-slate-950">
                    <p className="text-sm font-medium text-slate-500">Featured build</p>
                    <h4 className="mt-2 text-2xl font-semibold">Restaurant order control</h4>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Web ordering, kitchen/admin dashboard, WhatsApp-style experience, and direct order management.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-3xl bg-white/10 p-5">
                      <p className="text-3xl font-semibold">6</p>
                      <p className="mt-2 text-sm text-slate-300">Featured projects</p>
                    </div>
                    <div className="rounded-3xl bg-white/10 p-5">
                      <p className="text-3xl font-semibold">4</p>
                      <p className="mt-2 text-sm text-slate-300">Service areas</p>
                    </div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-slate-300">Focus</p>
                    <p className="mt-2 font-medium">Dashboards, payments, ordering systems, and business websites.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="px-4 py-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-soft backdrop-blur md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div {...fadeUp}>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">About</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                I turn business problems into structured digital systems.
              </h2>
            </motion.div>
            <motion.div {...fadeUp} className="space-y-6 text-lg leading-9 text-slate-600">
              <p>
                I’m an HND ICT student and developer from Ghana with a strong interest in building real-world software
                for businesses, schools, restaurants, hotels, and organizations.
              </p>
              <p>
                My work focuses on turning business problems into clean digital systems — from ordering platforms and
                dashboards to payment systems, admin panels, and mobile-friendly web apps.
              </p>
              <p>
                I enjoy building products that are not only beautiful, but useful, structured, and ready for real users.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="projects" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Featured Projects"
            title="Practical systems built around real business workflows."
            copy="These projects show how I think through user needs, admin control, payments, records, and clean interfaces."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.article
                  key={project.title}
                  {...fadeUp}
                  transition={{ duration: 0.55, delay: index * 0.04 }}
                  className="group flex min-h-[420px] flex-col rounded-[2rem] border border-slate-200 bg-white/85 p-6 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-2 hover:shadow-lift"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-slate-950" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>
                  <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Problem solved</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{project.problem}</p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-slate-950"
                  >
                    View Case Study <ArrowUpRight className="h-4 w-4" />
                  </a>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="skills" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Skills"
            title="Tools and workflows I use to build complete products."
            copy="My skill set is focused on front-end quality, database-backed apps, dashboards, and business-ready product flows."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.title}
                  {...fadeUp}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className="rounded-[2rem] border border-slate-200 bg-white/85 p-6 shadow-soft backdrop-blur"
                >
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-950">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Services"
            title="What I can build for clients and teams."
            copy="I focus on practical builds that help businesses look better, work faster, collect payments, and manage operations."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  {...fadeUp}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className="group rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-soft transition hover:-translate-y-2 hover:shadow-lift"
                >
                  <div className="mb-8 grid h-12 w-12 place-items-center rounded-2xl bg-white text-slate-950">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-20">
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] bg-slate-950 p-8 text-white shadow-lift md:p-14"
        >
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-400">Contact</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
                Have a project, job opportunity, or business idea?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Let’s build something clean, useful, and ready for real users.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <a
                href="mailto:kumahgodwin32@gmail.com"
                className="inline-flex items-center justify-between rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-1"
              >
                Email Me <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/233000000000"
                className="inline-flex items-center justify-between rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                WhatsApp <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/hAck404-lab101"
                className="inline-flex items-center justify-between rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                GitHub <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="px-4 pb-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 md:flex-row">
          <p>Godwin Sozo Kumah / s3yram</p>
          <p>Front-End & Full-Stack Developer</p>
        </div>
      </footer>
    </main>
  );
}
