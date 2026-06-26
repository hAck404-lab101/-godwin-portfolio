import PortfolioHeader from '@/components/ui/portfolio-header';

const projects = [
  {
    title: 'Chiq-N-Grill Ordering System',
    label: 'Restaurant ordering platform',
    description: 'A direct-order system for restaurant customers, staff, kitchen teams, and admin control.',
    details: ['Website ordering', 'Kitchen workflow', 'Admin dashboard', 'WhatsApp-style order experience'],
    tags: ['Next.js', 'Supabase', 'Tailwind', 'Orders'],
    initials: 'CG',
    featured: true,
  },
  {
    title: 'Dues Management System',
    label: 'Student payment dashboard',
    description: 'A payment and record system for student dues, receipts, manual approvals, and admin reporting.',
    details: ['Student login', 'Dues assignment', 'Paystack checkout', 'Receipt records'],
    tags: ['React', 'Node.js', 'MySQL', 'Paystack'],
    initials: 'DM',
    featured: true,
  },
  {
    title: 'Royal Hawk Hotel Website',
    label: 'Hotel business website',
    description: 'A booking-focused website built to improve trust, visibility, and customer confidence.',
    details: ['Hotel presence', 'Service pages', 'Booking interest', 'SEO direction'],
    tags: ['Website', 'SEO', 'Booking', 'Brand'],
    initials: 'RH',
    featured: false,
  },
  {
    title: 'HTH Hospital Map / Intern System',
    label: 'Institution workflow tool',
    description: 'A hospital navigation and intern records concept for admin tracking and easier movement.',
    details: ['Map concept', 'Attendance', 'Admin records', 'Institution flow'],
    tags: ['Web App', 'Records', 'Map', 'Admin'],
    initials: 'HT',
    featured: false,
  },
  {
    title: 'AgroConnect',
    label: 'B2B marketplace concept',
    description: 'A local agriculture marketplace connecting farmers, buyers, sellers, and transport partners.',
    details: ['Marketplace', 'Logistics', 'Payments', 'Farmer flow'],
    tags: ['Marketplace', 'Logistics', 'Payments', 'Web App'],
    initials: 'AC',
    featured: false,
  },
  {
    title: 'Unlimited Edge Works',
    label: 'Digital product system',
    description: 'A wallet-based platform for selling digital products with inventory and controlled delivery.',
    details: ['Wallet flow', 'Code stock', 'Inventory', 'Admin control'],
    tags: ['Wallet', 'Inventory', 'Admin', 'Payments'],
    initials: 'UE',
    featured: false,
  },
];

const services = [
  ['Business websites', 'Modern websites for restaurants, hotels, schools, shops, and brands that need trust and conversion.'],
  ['Admin dashboards', 'Panels for managing orders, students, payments, users, records, approvals, and reports.'],
  ['Ordering systems', 'Restaurant and service ordering flows with customer entry, kitchen/admin handling, and tracking.'],
  ['Payment flows', 'Paystack-style checkout, receipts, records, manual approvals, and dashboard visibility.'],
];

const stack = [
  ['Frontend', 'React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
  ['Backend', 'Node.js', 'Express', 'Supabase', 'MySQL'],
  ['Systems', 'Dashboards', 'Payments', 'Student portals', 'Ordering flows'],
  ['Tools', 'GitHub', 'Vercel', 'Railway', 'Figma', 'cPanel'],
];

const stats = [
  ['Godwin', 'portfolio identity'],
  ['DiMiles', 'company/domain brand'],
  ['6+', 'real project directions'],
];

function SectionHeader({ label, title, copy }: { label: string; title: string; copy: string }) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">{label}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.045em] text-white md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-zinc-400 md:text-lg">{copy}</p>
    </div>
  );
}

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <main className="site-grid min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_34rem)]" />
      <PortfolioHeader />

      <section id="home" className="relative z-10 px-4 pb-16 pt-36 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-6xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300 shadow-2xl shadow-black/20 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#c3e41d] shadow-[0_0_24px_rgba(195,228,29,0.8)]" />
              Personal portfolio by Godwin · Domain brand by DiMiles
            </div>

            <h1 className="text-balance text-[4.2rem] font-black uppercase leading-[0.8] tracking-[-0.09em] text-[#c3e41d] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]">
              Godwin Sozo Kumah
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400 md:text-xl">
              Front-end and full-stack developer building business websites, dashboards, ordering systems, payment flows, and admin tools under the DiMiles company brand.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-1 hover:bg-zinc-200">
                View selected work <span className="ml-2">↗</span>
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10">
                Work with DiMiles
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {stats.map(([value, label]) => (
              <div key={label} className="card-glow rounded-[2rem] bg-white/[0.035] p-6">
                <p className="text-4xl font-semibold tracking-[-0.05em] text-white">{value}</p>
                <p className="mt-2 text-sm text-zinc-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="relative z-10 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="card-glow rounded-[2rem] bg-white p-8 text-black">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">What I do</p>
              <h2 className="mt-8 text-4xl font-semibold tracking-[-0.06em] md:text-5xl">Software that supports business operations.</h2>
              <p className="mt-6 text-base leading-8 text-zinc-600">
                My focus is not only beautiful UI. I care about the flow behind the interface: who uses it, what they manage, how payments move, and how admins control the system.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {['Business websites', 'Admin dashboards', 'Ordering flows', 'Payment records'].map((item, index) => (
                <div key={item} className="card-glow rounded-[2rem] bg-white/[0.035] p-6">
                  <p className="text-sm text-zinc-600">0{index + 1}</p>
                  <h3 className="mt-12 text-2xl font-semibold tracking-[-0.04em] text-white">{item}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-500">Built with structure, clean UI, and real workflow thinking.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative z-10 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader label="Selected work" title="Projects that show how I solve real workflow problems." copy="Each project is framed around what the system does for people, staff, admins, or businesses." />

          <div className="grid gap-4 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <article key={project.title} className="card-glow group relative min-h-[520px] overflow-hidden rounded-[2.4rem] bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-2 hover:bg-white/[0.06] md:p-8">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                <div className="flex items-center justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-sm font-black text-black">{project.initials}</div>
                  <span className="text-zinc-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white">↗</span>
                </div>

                <p className="mt-10 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">{project.label}</p>
                <h3 className="mt-4 text-4xl font-semibold tracking-[-0.055em] text-white">{project.title}</h3>
                <p className="mt-5 max-w-xl text-base leading-8 text-zinc-400">{project.description}</p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {project.details.map((detail) => (
                    <div key={detail} className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm font-medium text-zinc-300">
                      {detail}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {otherProjects.map((project) => (
              <article key={project.title} className="card-glow rounded-[2rem] bg-white/[0.035] p-6 transition hover:-translate-y-2 hover:bg-white/[0.06]">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-xs font-black text-black">{project.initials}</div>
                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">{project.label}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.035em] text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-500">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="relative z-10 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader label="Services" title="What I can build for clients and teams." copy="Clear offers for businesses that need practical software, not just random pages." />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map(([title, copy], index) => (
              <div key={title} className="card-glow rounded-[2rem] bg-white p-6 text-black transition hover:-translate-y-2">
                <p className="text-sm font-semibold text-zinc-400">0{index + 1}</p>
                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.04em]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="relative z-10 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader label="Stack" title="Tools I use to ship fast and clean." copy="A practical stack for modern UI, dashboards, APIs, payments, and Vercel deployment." />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stack.map(([title, ...items]) => (
              <div key={title} className="card-glow rounded-[2rem] bg-white/[0.035] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">{title}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-black/25 px-3 py-2 text-xs font-medium text-zinc-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 px-4 py-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.4rem] border border-white/10 bg-white p-2 text-black shadow-2xl shadow-black/40">
          <div className="rounded-[2rem] bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.14),transparent_26rem),#ffffff] p-8 md:p-14">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-zinc-500">Contact</p>
                <h2 className="text-balance mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.055em] md:text-6xl">
                  Have a project, job opportunity, or business idea?
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
                  Let’s build something clean, useful, and ready for real users with Godwin / DiMiles.
                </p>
              </div>

              <div className="grid gap-3">
                <a href="mailto:kumahgodwin32@gmail.com" className="flex items-center justify-between rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1">
                  Email Me <span>↗</span>
                </a>
                <a href="https://wa.me/233000000000" className="flex items-center justify-between rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-1 hover:bg-zinc-100">
                  WhatsApp <span>↗</span>
                </a>
                <a href="https://github.com/hAck404-lab101" className="flex items-center justify-between rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-1 hover:bg-zinc-100">
                  GitHub <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 px-4 pb-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row">
          <p>Godwin Sozo Kumah</p>
          <p>DiMiles · Front-End & Full-Stack Developer</p>
        </div>
      </footer>
    </main>
  );
}
