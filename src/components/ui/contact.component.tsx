import { motion } from "framer-motion";
import { contacts } from "@/data/contacts.data";
import contactMockup from "@/assets/contact-mockup.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section className="px-6 md:px-12 py-16 border-t border-border grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-4xl md:text-5xl leading-none">
            LET'S WORK
            <br />
            TOGETHER
            <Sparkles className="inline h-6 w-6 ml-3 text-accent-red" />
          </h3>
          <p className="mt-6 text-sm text-muted-foreground max-w-sm">
            I'm currently open for new projects and collaborations. Let's create something amazing
            that drives results.
          </p>
          <a
            href="mailto:Arielrt20@gmail.com"
            className="mt-8 inline-flex items-center gap-3 group"
          >
            <span className="h-10 w-10 rounded-full bg-accent-red flex items-center justify-center transition-transform group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="text-xs tracking-widest font-semibold">AVAILABLE FOR FREELANCE</span>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-3"
        >
          {contacts.map((c) => (
            <a
              key={c.text}
              href={c.href}
              target={c.href ? "_blank" : undefined}
              rel={c.href ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 rounded-md border border-border px-4 py-3 hover:border-accent-red transition-colors"
            >
              <span className="h-10 w-10 rounded-full border border-accent-red flex items-center justify-center shrink-0">
                <c.icon className="h-4 w-4 text-accent-red" />
              </span>

              <span className="text-sm truncate">{c.text}</span>
            </a>
          ))}
        </motion.div>{" "}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img
            src={contactMockup}
            alt="Portfolio mockup"
            loading="lazy"
            className="w-full rounded-md object-cover"
          />
        </motion.div>
      </section>

      <footer className="px-6 md:px-12 py-8 border-t border-border text-[10px] tracking-widest text-muted-foreground flex justify-between">
        <span>© {new Date().getFullYear()} ARIEL RODRIGUEZ</span>
        <span>ALL RIGHTS RESERVED</span>
      </footer>
    </>
  );
}
