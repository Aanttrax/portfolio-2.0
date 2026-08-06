import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/data/projects.data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/ui/navbar.component";
import Contact from "@/components/ui/contact.component";

export const Route = createFileRoute("/projects")({
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
  component: Projects,
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
} as const;

function Projects() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <Navbar />
      <Link
        to="/"
        className="px-6 md:px-12 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-accent-red transition-colors"
      >
        <ArrowRight className="h-4 w-4 rotate-180" />
        Back Home
      </Link>
      {/* SELECTED PROJECTS */}
      <section className="px-6 md:px-12 py-16 border-t border-border">
        <div className="mx-auto lg:w-[80%]">
          <div className="flex items-center justify-between mb-10">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ delay: 0.3 }}
            >
              <h2 className="font-display text-3xl md:text-5xl tracking-wide text-accent-red">
                SELECTED PROJECTS
              </h2>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Showing {Math.max(1, projects.length)} of {projects.length} projects
              </p>
            </motion.div>
          </div>
          <div className="space-y-16">
            {projects.map((p, i) => (
              <motion.a
                key={p.n}
                href={p.link}
                className="group grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* Imagen */}
                <div className="overflow-hidden rounded-xl bg-surface aspect-[16/10]">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Información */}
                <div>
                  <span className="font-display text-5xl text-accent-red">{p.n}</span>

                  <h2 className="mt-4 text-3xl font-bold tracking-wide">{p.title}</h2>

                  <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {p.cat}
                  </p>

                  <p className="mt-6 text-base leading-8 text-muted-foreground">{p.description}</p>

                  <div className="mt-8 inline-flex items-center gap-3 text-accent-red font-semibold group-hover:gap-5 transition-all">
                    View project
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      <div className="flex justify-center py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-accent-red hover:gap-5 transition-all"
        >
          <ArrowRight className="h-5 w-5 rotate-180" />
          Return Home
        </Link>
      </div>
      {/* CONTACT */}
      <Contact />
    </main>
  );
}
