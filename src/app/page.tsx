const navItems = ['Work', 'Projects', 'Stack', 'Services', 'Contact'];

const projects = [
  {
    title: 'Chiq-N-Grill Ordering System',
    category: 'Restaurant system',
    description: 'Website ordering, WhatsApp-style flow, staff/admin control, kitchen workflow, and mobile app direction.',
    outcome: 'Direct orders without forcing website customers through WhatsApp.',
    tags: ['Next.js', 'Supabase', 'Orders', 'Dashboard'],
    initials: 'CG',
  },
  {
    title: 'Dues Management System',
    category: 'Student payment platform',
    description: 'Student login, dues assignment, Paystack payment, receipts, manual approvals, and admin tracking.',
    outcome: 'A cleaner way for departments to manage dues and payment records.',
    tags: ['React', 'Node.js', 'MySQL', 'Paystack'],
    initials: 'DM',
  },
  {
    title: 'Royal Hawk Hotel Website',
    category: 'Hospitality website',
    description: 'Booking-focused hotel presence built around trust, rooms, services, contact flow, and visibility.',
    outcome: 'A more professional digital front desk for hotel customers.',
    tags: ['Website', 'SEO', 'Booking', 'Business'],
    initials: 'RH',
  },
  {
    title: 'HTH Hospital Map / Intern System',
    category: 'Institution workflow',
    description: 'Hospital map concept and intern attendance/records system for easier movement and admin tracking.',
    outcome: 'Better navigation and cleaner intern record management.',
    tags: ['Web App', 'Records', 'Map', 'Admin'],
    initials: 'HT',
  },
  {
    title: 'AgroConnect',
    category: 'Marketplace concept',
    description: 'B2B agriculture marketplace connecting farmers, buyers, sellers, and transport/logistics partners.',
    outcome: 'A local-first agriculture flow for trade, logistics, and payments.',
    tags: ['Marketplace', 'Logistics', 'Payments', 'Web App'],
    initials: 'AC',
  },
  {
    title: 'Unlimited Edge Works',
    category: 'Digital product system',
    description: 'Wallet-based product purchase flow with product codes, inventory, admin control, and payment records.',
    outcome: 'Controlled delivery for digital products and tools.',
    tags: ['Wallet', 'Inventory', 'Admin', 'Payments'],
    initials: 'UE',
  },
];

const stack = [
  ['Frontend', 'React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'UI Implementation'],
  ['Backend', 'Node.js', 'Express', 'Supabase', 'MySQL', 'API Integration'],
  ['Systems', 'Admin Dashboards', 'Payments', 'Student Portals', 'Restaurant Orders', 'Booking Flows'],
  ['Tools', 'GitHub', 'Vercel', 'Railway', 'cPanel', 'Figma', 'WordPress'],
];

const services = [
  {
    title: 'Business websites',
    copy: 'Modern websites for restaurants, hotels, schools, shops, and brands that need trust and conversion.',
  },
  {
    title: 'Admin dashboards',
    copy: 'Internal panels for users, payments, orders, records, reports, and staff workflows.',
  },
  {
    title: 'Ordering systems',
    copy: 'Restaurant and service ordering flows with customer entry, kitchen/admin handling, and tracking.',
  },
  {
    title: 'Payment flows',
    copy: 'Paystack-style checkout, receipts, records, manual approvals, and dashboard visibility.',
  },
];

const metrics = [
  ['6', 'Featured builds'],
  ['4', 'Core service areas'],
  ['100%', 'Business-first UI'],
];

function SectionHeader({ label, title, copy }: { label: string; title: string; copy: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div className="mx-auto mb-4 w-fit rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.26em] text-zinc-400">
        {label}
      </div>
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-zinc-400 md:text-lg">{copy}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="site-grid min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_34rem)]" />

      <header className="fixed left-0 right-0 top-4 z-50 px-4">
        <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 shadow-2xl shadow-black/30 md:px-6">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-sm font-black text-black">G</span>
            <span className="hidden text-sm font-semibold text-white sm:inline">s3yram</span>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/10 hover:text-white">
                {item}
              </a>
            ))}
          </div>

          <a href="#contact" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-zinc-200">
            Start a build
          </a>
        </nav>
      </header>

      <section id="home" className="relative z-10 px-4 pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300 shadow-2xl shadow-black/20 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_24px_rgba(52,211,153,0.8)]" />
              Ghana-based developer building real business systems
            </div>

            <h1 className="text-balance max-w-5xl text-5xl font-semibold tracking-[-0.065em] text-white md:text-7xl lg:text-8xl">
              Product-grade portfolio for practical software builds.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
              I’m Godwin Sozo Kumah, also known as s3yram. I build modern websites, dashboards, ordering systems, payment flows, and admin tools for real businesses.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-1 hover:bg-zinc-200">
                Explore work <span className="ml-2">↗</span>
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10">
                Contact me
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'Node.js', 'Dashboards', 'Payments'].map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="card-glow relative rounded-[2rem] bg-white/[0.035] p-3 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="rounded-[1.55rem] border border-white/10 bg-[#09090b]/90 p-4">
              <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-medium text-zinc-500">portfolio.interface</span>
              </div>

              <div className="rounded-[1.35rem] bg-white p-5 text-black">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Featured system</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">Chiq-N-Grill order control</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  A restaurant ordering flow designed around direct orders, staff visibility, kitchen handling, and admin control.
                </p>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {['Menu', 'Orders', 'Kitchen'].map((item) => (
                    <div key={item} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-3 text-center text-xs font-semibold text-zinc-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {metrics.map(([value, label]) => (
                  <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-2xl font-semibold tracking-tight text-white">{value}</p>
                    <p className="mt-1 text-xs leading-5 text-zinc-500">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.03] p-5">
                <div className="mb-3 flex items-center justify-between text-xs text-zinc-500">
                  <span>system focus</span>
                  <span>ready for Vercel</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[82%] rounded-full bg-white" />
                </div>
                <p className="mt-4 text-sm leading-6 text-zinc-300">Clean UI, admin logic, payments, records, and business workflows.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="relative z-10 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="card-glow overflow-hidden rounded-[2rem] bg-white/[0.035] p-1 shadow-2xl shadow-black/30">
            <div className="grid gap-px rounded-[1.8rem] bg-white/10 md:grid-cols-3">
              {[
                ['01', 'Business-first', 'Every section is written to sell trust, not just list skills.'],
                ['02', 'System thinking', 'Projects are framed around workflows, users, admins, and outcomes.'],
                ['03', 'Premium UI', 'Dark visual system, soft depth, glass navigation, and strong component cards.'],
              ].map(([num, title, copy]) => (
                <div key={title} className="bg-[#08080a] p-7 md:p-8">
                  <p className="text-sm text-zinc-500">{num}</p>
                  <h3 className="mt-8 text-2xl font-semibold tracking-tight text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative z-10 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader label="Projects" title="A curated wall of business systems and product experiments." copy="The layout now treats your work like a premium component collection: clear categories, strong outcomes, and clean tags." />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="card-glow group relative flex min-h-[430px] flex-col overflow-hidden rounded-[2rem] bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-2 hover:bg-white/[0.06]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                <div className="mb-7 flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white text-sm font-black text-black shadow-xl shadow-white/10">
                    {project.initials}
                  </div>
                  <span className="text-zinc-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white">↗</span>
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500">{project.category}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{project.description}</p>

                <div className="mt-5 rounded-3xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">Outcome</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">{project.outcome}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>

                <a href="#contact" className="mt-auto inline-flex pt-8 text-sm font-semibold text-white">
                  Request case study <span className="ml-2">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="relative z-10 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader label="Stack" title="The tools behind the builds." copy="A practical stack for shipping fast, clean, and deployable products on Vercel." />

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

      <section id="services" className="relative z-10 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader label="Services" title="What I can build for clients and teams." copy="Focused services for real businesses that need practical software, not random pages." />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={service.title} className="card-glow rounded-[2rem] bg-white p-6 text-black transition hover:-translate-y-2">
                <p className="text-sm font-semibold text-zinc-400">0{index + 1}</p>
                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.04em]">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600">{service.copy}</p>
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
                  Let’s build something clean, useful, and ready for real users.
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
          <p>Godwin Sozo Kumah / s3yram</p>
          <p>Front-End & Full-Stack Developer</p>
        </div>
      </footer>
    </main>
  );
}
