import { createFileRoute } from "@tanstack/react-router";
import {
  Bug,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  FlaskConical,
  GraduationCap,

  Layers,
  Mail,
  MapPin,
  MonitorSmartphone,
  Network,
  Phone,
  Plug,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Venkatesh Chilukuri | Senior QA Engineer — 4 Years in Software Testing" },
      {
        name: "description",
        content:
          "QA portfolio: manual, automation (Selenium + Java), API and mobile testing for web, Android, iOS and OTT products. 1,400+ defects reported, 18+ modules tested, 10 release cycles supported.",
      },
      { property: "og:title", content: "Venkatesh Chilukuri | Senior QA Engineer" },
      {
        property: "og:description",
        content:
          "4 years of software quality: Selenium WebDriver automation, API testing with Postman & Swagger, and end-to-end testing across web, Android, iOS and OTT applications.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

const STATS = [
  { value: "4+", label: "Years in QA" },
  { value: "1,400+", label: "Defects reported" },
  { value: "18+", label: "Modules tested" },
  { value: "10", label: "Release cycles" },
];

const SKILL_GROUPS = [
  {
    icon: Code2,
    title: "Programming",
    skills: ["Core Java", "SQL"],
  },
  {
    icon: FlaskConical,
    title: "Testing Skills",
    skills: [
      "Manual Testing",
      "Functional",
      "Regression",
      "Smoke",
      "Sanity",
      "Integration",
      "System Testing",
      "UAT",
      "End-to-End",
      "Mobile (Android & iOS)",
      "Cross-Browser",
      "Responsive",
    ],
  },
  {
    icon: Workflow,
    title: "Automation",
    skills: [
      "Selenium WebDriver",
      "TestNG",
      "Maven",
      "Hybrid Framework",
      "Data-Driven Testing",
      "Page Object Model (POM)",
    ],
  },
  {
    icon: Network,
    title: "API Testing",
    skills: ["Postman", "Swagger", "Chucker / Proxyman", "HTTP Inspection"],
  },
  {
    icon: Layers,
    title: "Tools & Platforms",
    skills: ["Jira", "Eclipse", "GitHub", "MySQL", "PostgreSQL", "MS Excel", "TestFlight"],
  },
  {
    icon: Sparkles,
    title: "AI & Methodologies",
    skills: [
      "Agile Scrum",
      "SDLC",
      "STLC",
      "Defect Life Cycle",
      "AI-Assisted Test Design",
      "ChatGPT",
      "AWS Kiro",
    ],
  },
];

const EXPERIENCE = [
  {
    role: "Senior Executive — QA",
    company: "Docubay Media",
    client: "Epic Company",
    period: "Nov 2025 — Present",
    location: "Hyderabad, India",
    summary:
      "Leading QA across ShubhAstro, Epic Shorts, IPL, BCCI and Telco products — validating web, Android and iOS applications to support release quality.",
    points: [
      "Coordinated a team of 2–3 QA members: assigning testing tasks, monitoring progress and supporting timely completion of testing activities.",
      "Communicated directly with senior management to present testing status, report progress, and highlight risks and issues.",
      "Designed and executed 300+ test cases across application modules covering functional requirements, end-to-end workflows and regression scenarios.",
      "Leveraged ChatGPT for requirement analysis and edge-case discovery; manually reviewed every AI-generated output before use.",
      "Developed Selenium WebDriver (Java + TestNG) scripts validating login workflows, alerts, calendars, file uploads, multi-window handling and data-driven scenarios.",
      "Performed API testing with Postman and Swagger — validating payloads, HTTP status codes, schema structure, authentication and negative scenarios.",
      "Validated consistency between application UI data and MongoDB records to verify data integrity and backend synchronization.",
    ],
  },
  {
    role: "Software Test Engineer",
    company: "Imtac India Pvt Ltd",
    client: "Oman Medical Specialty Board (OMSB)",
    period: "Sep 2022 — Aug 2025",
    location: "Hyderabad, India · 1 year on-site in Oman",
    summary:
      "End-to-end testing of OMSB web modules — Applicant Registration, Examination, Training Programs, VEHPC, OCT and Promotions.",
    points: [
      "Created and executed test cases from business requirements across every OMSB module and sprint.",
      "Conducted UAT sessions and live demos with business stakeholders to validate requirements and improve user experience.",
      "Identified, logged and tracked defects in Jira, ensuring timely resolution with the development team.",
      "Used ChatGPT for requirement analysis and test documentation, rigorously validating all AI-generated outputs.",
      "Worked on-site in Oman for 1 year, leading UAT sessions and gathering direct customer feedback.",
    ],
  },
];

const PROJECTS = [
  {
    name: "ShubhAstro",
    website: "https://shubhastro.ai/",
    tag: "Astrology Platform",
    tags: ["Manual Testing", "API Testing", "Jira", "Automation"],
    icon: Sparkles,
    points: [
      "Primary QA for Kundli, Horoscope, Panchang, Muhurat, astrologer consultations, chat, calls, payments and report generation.",
      "Executed functional, regression, smoke, sanity, integration, UAT and exploratory testing across release cycles.",
      "Validated APIs using Postman and Swagger; documented defects in Jira with cross-functional teams.",
    ],
  },
  {
    name: "Epic Shorts",
    website: "https://epicon.in/",
    tag: "OTT / Shorts Streaming",
    tags: ["Manual Testing", "API Testing", "Postman", "Jira"],
    icon: MonitorSmartphone,
    points: [
      "End-to-end testing of Web, Android and iOS applications.",
      "Validated Registration, Login, Subscription, Search, Wishlist, Continue Watching, Profile Management and Video Playback workflows.",
      "Conducted API testing with Postman alongside functional and regression suites.",
    ],
  },
  {
    name: "Telco OTT Suite",
    website: "",
    tag: "Operator Branded OTT Apps",
    tags: ["Manual Testing", "API Testing", "Postman", "Jira"],
    icon: Rocket,
    points: [
      "Tested OTT applications including BabuShots, BhakkShots, KhatakShots and ThandaCola across Web and Mobile.",
      "Validated content streaming, subscription workflows, authentication, content discovery and profile management.",
      "Executed API and regression testing across multiple releases.",
    ],
  },
  {
    name: "OMSB Portal",
    website: "https://omsb.gov.om/",
    tag: "Medical Education Board",
    tags: ["Manual Testing", "SQL", "Postman", "Jira", "Automation"],
    icon: ShieldCheck,
    points: [
      "End-to-end testing of Applicant Registration, Training Programs and Promotions modules.",
      "Conducted UAT simulations using persona-based exploratory testing to improve usability feedback.",
      "1 year on-site in Oman: led UAT sessions, delivered live stakeholder demos and gathered customer feedback.",
    ],
  },
];

const ACHIEVEMENTS = [
  {
    icon: Bug,
    value: "1,400+",
    label: "Defects identified and reported",
    detail: "Across application modules, directly supporting improved software quality.",
  },
  {
    icon: Layers,
    value: "18+",
    label: "Application modules tested",
    detail: "Covering end-to-end workflows and functional requirements.",
  },
  {
    icon: Rocket,
    value: "10",
    label: "Release cycles supported",
    detail: "Executing planned testing activities and validating application stability.",
  },
  {
    icon: Cpu,
    value: "2 hrs",
    label: "Daily regression time saved",
    detail: "By automating repetitive test scenarios with Selenium WebDriver and Java.",
  },
];

function Portfolio() {
  return (
    <div className="bg-console min-h-screen font-body text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <EducationContact />
      </main>
      <footer className="border-t border-border py-8 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Venkatesh Chilukuri · Senior QA Engineer · Hyderabad, India
      </footer>
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-display text-sm font-bold text-primary-foreground">
            VC
          </span>
          <span className="hidden font-display font-semibold tracking-tight sm:block">
            Venkatesh Chilukuri
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Mail className="h-4 w-4" />
          Hire me
        </a>
      </div>
    </header>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-muted-foreground">{subtitle}</p> : null}
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-20 sm:px-6 sm:pt-28">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Senior QA Engineer · Manual + Automation + API</p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              Hi, I'm <span className="text-gradient-blue">Venkatesh Chilukuri</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A QA Engineer with <span className="font-semibold text-foreground">4 years of experience</span> testing
              web, Android, iOS, OTT and astrology applications — combining{" "}
              <span className="font-semibold text-foreground">deep manual testing</span> with{" "}
              <span className="font-semibold text-foreground">Selenium + Java automation</span> and rigorous{" "}
              <span className="font-semibold text-foreground">API validation</span> to ship software people can trust.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View my work
                <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Get in touch
              </a>
              <span className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Hyderabad, Telangana, India
              </span>
            </div>
          </div>

          <div className="w-full max-w-sm shrink-0">
            <div className="card-glow rounded-2xl p-6">
              <p className="eyebrow">QA Snapshot</p>
              <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-6">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-display text-3xl font-bold text-primary">{stat.value}</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border/60 pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About"
          title="Quality is a habit, not a phase"
          subtitle="From astro-tech platforms to government medical-education portals — I break software so your users never have to."
        />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card-glow rounded-2xl p-6">
            <FlaskConical className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-lg font-semibold">Manual & Functional Testing</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Functional, regression, smoke, sanity, integration, UAT and exploratory testing — planned through SDLC
              and STLC, tracked through a disciplined defect life cycle.
            </p>
          </div>
          <div className="card-glow rounded-2xl p-6">
            <Code2 className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-lg font-semibold">Test Automation</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Selenium WebDriver scripts in Java with TestNG, Maven, a Hybrid Automation Framework, Data-Driven Testing
              and the Page Object Model — cutting daily regression effort by ~2 hours.
            </p>
          </div>
          <div className="card-glow rounded-2xl p-6">
            <Plug className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-lg font-semibold">API & Backend Validation</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Postman and Swagger for payload, status-code, schema, auth and negative testing — plus SQL and MongoDB
              checks to confirm data consistency between UI and backend.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border/60 pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Toolbox"
          title="Technical skills"
          subtitle="The stack behind every test plan, automation suite and defect report I deliver."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title} className="card-glow rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <group.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display font-semibold">{group.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-secondary-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-border/60 pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Career"
          title="Professional experience"
          subtitle="Four years of hands-on quality engineering across product companies and enterprise clients."
        />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />
          <div className="space-y-10">
            {EXPERIENCE.map((job) => (
              <div key={job.role} className="relative pl-10">
                <span
                  className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-primary bg-background"
                  aria-hidden="true"
                />
                <div className="card-glow rounded-2xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold">{job.role}</h3>
                    <span className="font-mono text-xs text-primary">{job.period}</span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {job.company} · <span className="text-muted-foreground">Client: {job.client}</span>
                  </p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{job.location}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{job.summary}</p>
                  <ul className="mt-4 space-y-2">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-border/60 pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I've tested"
          subtitle="End-to-end quality ownership across astrology, OTT streaming and government platforms."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <article key={project.name} className="card-glow flex flex-col rounded-2xl p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <project.icon className="h-6 w-6" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">{project.tag}</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">{project.name}</h3>
              {project.website ? (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex w-fit items-center gap-1 font-mono text-xs text-primary transition-colors hover:text-glow"
                >
                  {project.website}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ) : null}
              <ul className="mt-4 flex-1 space-y-2">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-secondary-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-20 border-t border-border/60 pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Impact"
          title="Achievements"
          subtitle="Numbers that show what four years of disciplined QA looks like."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENTS.map((item) => (
            <div key={item.label} className="card-glow rounded-2xl p-6 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <item.icon className="h-6 w-6" />
              </span>
              <p className="mt-4 font-display text-4xl font-bold text-gradient-blue">{item.value}</p>
              <p className="mt-2 text-sm font-semibold">{item.label}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationContact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border/60 pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Education & Contact"
          title="Let's build quality together"
          subtitle="Open to Senior QA Engineer roles, automation projects and consulting conversations."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="card-glow rounded-2xl p-6 lg:col-span-1">
            <GraduationCap className="h-8 w-8 text-primary" />
            <p className="eyebrow mt-4">Education</p>
            <h3 className="mt-2 font-display text-lg font-semibold">
              Bachelor of Science in Computer Science
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">Seshadripuram First Grade College</p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              Bangalore, Karnataka, India · Jun 2018 — Jul 2021
            </p>
          </div>

          <a
            href="mailto:venkatesh.qatesting@gmail.com"
            className="card-glow rounded-2xl p-6 lg:col-span-1"
          >
            <Mail className="h-8 w-8 text-primary" />
            <p className="eyebrow mt-4">Email</p>
            <p className="mt-2 break-all font-display text-lg font-semibold">venkatesh.qatesting@gmail.com</p>
            <p className="mt-2 text-sm text-muted-foreground">Best way to reach me — I reply within a day.</p>
          </a>

          <div className="card-glow flex flex-col rounded-2xl p-6 lg:col-span-1">
            <Phone className="h-8 w-8 text-primary" />
            <p className="eyebrow mt-4">Phone & LinkedIn</p>
            <p className="mt-2 font-display text-lg font-semibold">+91 70268 68217</p>
            <a
              href="https://www.linkedin.com/in/venky-ch/"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex w-fit items-center gap-2 rounded-lg border border-border bg-secondary/60 px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
            >
              linkedin.com/in/venky-ch
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl text-center">
          <Database className="mx-auto h-5 w-5 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
