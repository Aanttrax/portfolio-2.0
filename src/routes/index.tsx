import { createFileRoute, Link } from "@tanstack/react-router";
import { experiences } from "@/data/experiences.data";
import { skills } from "@/data/skills.data";
import { process } from "@/data/processes.data";
import { projects } from "@/data/projects.data";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Sparkles } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.webp";
import Navbar from "@/components/ui/navbar.component";
import Contact from "@/components/ui/contact.component";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ariel Rodriguez — Full Stack & DevOps Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Ariel Rodriguez, Full Stack Engineer focused on scalable architectures, cloud infrastructure, and exceptional user experiences.",
      },
      { property: "og:title", content: "Ariel Rodriguez — Full Stack & DevOps Engineer" },
      {
        property: "og:description",
        content: "Turning ideas into powerful digital experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Caveat:wght@500&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: Portfolio,
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
} as const;

function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <Navbar />
      {/* HERO */}
      <section className="relative px-6 md:px-12 pb-20">
        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.1fr_1fr] gap-8 items-end min-h-[80vh]">
          {/* Giant PORTFOLIO backdrop */}
          <motion.h1
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none select-none absolute inset-x-0 top-0 text-center font-display leading-[0.85] tracking-tight text-accent-red text-[24vw] md:text-[25vw]"
            style={{
              WebkitTextStroke: "0",
              background:
                "linear-gradient(180deg, oklch(0.62 0.24 27) 0%, oklch(0.35 0.15 25) 55%, oklch(0.14 0.005 20) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            PORTFOLIO
          </motion.h1>

          {/* Left column: name + bio */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="relative z-10 pt-[20vw] lg:pt-[10vw] max-w-md"
          >
            <p className="font-script text-5xl text-foreground/90 mb-2">Hello, I'm</p>
            <h2 className="font-display text-6xl md:text-7xl leading-none tracking-tight">
              ARIEL
              <br />
              RODRIGUEZ
            </h2>
            <p className="mt-6 text-accent-red font-bold text-sm tracking-widest">
              FULL STACK & <br />
              DEVOPS ENGINEER
            </p>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              I build modern digital products that combine clean architecture, intuitive user
              experiences, and scalable cloud infrastructure. My goal is to deliver reliable,
              high-performance solutions with clean code, long-term maintainability, and real
              business value.
            </p>
            <div className="mt-8 flex items-center gap-3 text-xs tracking-widest font-semibold">
              <Globe className="h-4 w-4 text-accent-red" />
              AVAILABLE WORLDWIDE
            </div>
          </motion.div>

          {/* Center: portrait */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative z-10 mx-auto"
          >
            <img
              src={heroPortrait}
              alt="Ariel F. Rodriguez Ticona"
              width={1024}
              height={1280}
              className="relative z-10 max-h-[90vh] w-auto object-contain scale-110"
              style={{
                filter: `
    drop-shadow(0 20px 40px rgba(0,0,0,.55))
  `,
              }}
            />
          </motion.div>

          {/* Right: stats */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.6 }}
            className="relative z-10 pt-[0vw] lg:pt-[10vw] space-y-8 lg:justify-self-end"
          >
            <div className="flex items-center gap-3 max-w-[220px]">
              <Sparkles className="h-4 w-4 text-accent-red shrink-0" />
              <p className="text-xs text-muted-foreground">
                Turning ideas into powerful digital experiences.
              </p>
            </div>
            {[
              { n: "5+", l1: "YEARS", l2: "EXPERIENCE" },
              { n: "20+", l1: "PROJECTS", l2: "COMPLETED" },
              { n: "10+", l1: "HAPPY", l2: "CLIENTS" },
            ].map((s) => (
              <div
                key={s.n}
                className="flex items-center gap-4 border-t border-border pt-4 min-w-[180px]"
              >
                <div className="font-display text-5xl text-accent-red leading-none">{s.n}</div>
                <div className="text-[10px] tracking-widest font-semibold">
                  <div>{s.l1}</div>
                  <div>{s.l2}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section className="px-6 md:px-12 py-16 border-t border-border">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h3 className="font-display text-3xl md:text-4xl tracking-wide">SELECTED PROJECTS</h3>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Showing {Math.min(3, projects.length)} of {projects.length} projects
            </p>
          </div>
          <Link
            to="/projects"
            className="hidden md:flex items-center gap-2 text-xs tracking-widest font-semibold text-accent-red hover:gap-4 transition-all"
          >
            VIEW ALL PROJECTS <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {projects.slice(0, 3).map((p, i) => (
            <motion.a
              key={p.n}
              href={p.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group block"
            >
              <div className="overflow-hidden rounded-md bg-surface aspect-[4/3]">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="font-display text-2xl text-accent-red">{p.n}</span>
                  <div>
                    <div className="font-bold tracking-wide text-sm">{p.title.toUpperCase()}</div>
                    <div className="text-[10px] tracking-widest text-muted-foreground uppercase">
                      {p.cat}
                    </div>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-accent-red transition-transform group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* EDU / PROCESS / QUOTE */}
      <section className="px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-[1fr_1fr_0.7fr] gap-8 border-t border-border">
        {/* Education & Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-2xl md:text-3xl tracking-wide">EXPERIENCE & SKILLS</h3>
          <div className="mt-8">
            <div className="text-accent-red text-xs tracking-widest font-bold mb-4">EXPERIENCE</div>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div
                  key={`${exp.company_name}-${exp.date}`}
                  className="border-b border-border pb-1"
                >
                  <div className="flex justify-between gap-2">
                    <div>
                      <div className="font-semibold text-sm">{exp.title}</div>
                      <div className="text-xs text-muted-foreground">{exp.company_name}</div>
                    </div>
                    <div className="text-xs text-accent-red font-semibold shrink-0">{exp.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <div className="text-accent-red text-xs tracking-widest font-bold mb-4">SKILLS</div>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="text-[10px] tracking-widest font-semibold uppercase border border-border px-3 py-2 rounded-sm hover:border-accent-red hover:text-accent-red transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Work Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h3 className="font-display text-2xl md:text-3xl tracking-wide mb-8">WORK PROCESS</h3>
          <div className="space-y-6 relative">
            {process.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4"
              >
                <span className="font-display text-xl text-accent-red w-8 shrink-0">{step.n}</span>
                <div className="h-10 w-10 rounded-full border-2 border-accent-red flex items-center justify-center shrink-0">
                  <step.icon className="h-4 w-4 text-accent-red" />
                </div>
                <div>
                  <div className="text-accent-red font-bold text-sm tracking-wider">
                    {step.title.toUpperCase()}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 max-w-[280px]">
                    {step.text}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-md p-8 flex flex-col justify-between"
          style={{
            background:
              "linear-gradient(160deg, oklch(0.35 0.15 25) 0%, oklch(0.22 0.08 25) 60%, oklch(0.18 0.03 20) 100%)",
          }}
        >
          <div>
            <div className="text-5xl text-accent-red font-serif leading-none">"</div>
            <p className="font-display text-2xl leading-tight mt-4">
              Good design
              <br />
              is not just how
              <br />
              it looks, but how
              <br />
              it works.
            </p>
            <p className="font-script text-3xl mt-6 text-foreground/90">Ariel Rodriguez</p>
          </div>
          <div className="mt-8 text-xs tracking-widest font-semibold">
            LET'S CREATE
            <br />
            SOMETHING GREAT
            <br />
            TOGETHER.
            <Sparkles className="inline h-3 w-3 ml-2 text-accent-red" />
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <Contact />
    </main>
  );
}
