"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  Mail,
  MapPin,
  Moon,
  Sparkles,
  Sun,
} from "lucide-react";
import {
  awards,
  education,
  experience,
  profile,
  projects,
  publications,
  skillClusters,
} from "@/lib/profile";
import { Section } from "@/components/section";

type Theme = "light" | "dark";

const fadeUp = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

function AnimatedBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[var(--page-bg)]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_78%)]" />
      <div className="premium-orbit premium-orbit-one absolute -left-24 top-16 h-72 w-72 rounded-full opacity-70 blur-3xl" />
      <div className="premium-orbit premium-orbit-two absolute right-0 top-24 h-96 w-96 rounded-full opacity-60 blur-3xl" />
      <div className="aurora-field absolute inset-x-[-18%] top-[-30%] h-[60rem] opacity-80 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--top-glow),transparent_48%),linear-gradient(to_bottom,transparent,var(--page-bg)_74%)]" />
    </div>
  );
}

function Header({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
  const nextThemeLabel = theme === "light" ? "Switch to dark mode" : "Switch to light mode";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[var(--border)] bg-[var(--nav-bg)] px-4 py-3 shadow-2xl shadow-black/10 backdrop-blur-xl">
        <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Back to top">
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] text-sm font-bold text-[var(--accent-strong)]">
            {profile.initials}
          </span>
          <span className="hidden truncate text-sm font-semibold text-[var(--text-primary)] sm:inline">
            {profile.name}
          </span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {profile.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--text-muted)] transition hover:text-[var(--text-primary)]"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            aria-label={nextThemeLabel}
            title={nextThemeLabel}
            onClick={onToggleTheme}
            className="grid size-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--panel-subtle)] text-[var(--text-primary)] transition hover:border-[var(--accent-border)] hover:bg-[var(--accent-soft)]"
          >
            {theme === "light" ? (
              <Moon className="size-4" aria-hidden="true" />
            ) : (
              <Sun className="size-4" aria-hidden="true" />
            )}
          </button>
          <a
            href={`mailto:${profile.email}`}
            className="premium-button inline-flex h-10 items-center gap-2 rounded-full border border-[var(--accent-border)] px-4 text-sm font-semibold text-[var(--accent-text)] transition"
          >
            <Mail className="size-4" aria-hidden="true" />
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative px-5 pb-10 pt-32 sm:px-8 lg:pb-14 lg:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-2xl border border-[var(--accent-border)] bg-[var(--accent-soft)] px-3 py-2 text-sm font-medium text-[var(--accent-strong)]">
            <Sparkles className="size-4" aria-hidden="true" />
            {profile.availability}
          </div>
          <h1 className="gradient-title max-w-5xl text-5xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-6xl lg:text-7xl">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)] sm:text-xl">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="premium-button inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold text-[var(--accent-text)] shadow-lg shadow-black/10 transition"
            >
              <Mail className="size-4" aria-hidden="true" />
              Contact Amrutha
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--panel-subtle)] px-5 py-3 text-sm font-bold text-[var(--text-primary)] backdrop-blur transition hover:border-[var(--accent-border)] hover:bg-[var(--panel)]"
            >
              View Projects
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-[var(--text-secondary)]">
            <span className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--panel-subtle)] px-3 py-2">
              <MapPin className="size-4 text-[var(--success)]" aria-hidden="true" />
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--panel-subtle)] px-3 py-2">
              <Briefcase className="size-4 text-[var(--accent-strong)]" aria-hidden="true" />
              Full-time AI roles in Germany
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          className="glass-panel premium-card relative overflow-hidden rounded-3xl p-5"
        >
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--text-muted)]">
                Candidate signal
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">
                AI + Computer Vision
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-2xl bg-[var(--success-soft)] px-3 py-2 text-sm font-semibold text-[var(--success)]">
              <span className="size-2 rounded-full bg-[var(--success)]" aria-hidden="true" />
              Available
            </span>
          </div>
          <div className="grid gap-3">
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-[var(--border)] bg-[var(--panel-strong)] p-4"
              >
                <p className="text-2xl font-semibold text-[var(--text-primary)]">{stat.value}</p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-3xl border border-[var(--accent-border)] bg-[var(--accent-soft)] p-4">
            <p className="text-sm font-semibold text-[var(--accent-strong)]">Professional fit</p>
            <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
              Best aligned with AI engineer, ML engineer, computer vision engineer, and applied
              software engineering roles.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="An applied AI profile shaped by research and engineering."
      description="Amrutha combines computer vision research with software engineering experience, making the portfolio useful for technical hiring managers, product teams, and recruiters."
    >
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="glass-panel premium-card rounded-3xl p-6">
          <h3 className="text-xl font-semibold text-[var(--text-primary)]">Professional focus</h3>
          <p className="mt-4 leading-7 text-[var(--text-secondary)]">
            MSc Artificial Intelligence background with current applied research at Fraunhofer IGD
            and thesis work around region-aware hybrid face inpainting using exemplar-based pre-fill
            and latent diffusion refinement.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {education.map((item) => (
            <article key={item.degree} className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-5">
              <GraduationCap className="mb-4 size-6 text-[var(--accent-strong)]" aria-hidden="true" />
              <h3 className="font-semibold text-[var(--text-primary)]">{item.degree}</h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">{item.institution}</p>
              <p className="mt-3 text-sm text-[var(--text-muted)]">
                {item.period} | {item.location}
              </p>
              {item.detail ? <p className="mt-2 text-sm text-[var(--success)]">{item.detail}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ExperienceTimeline() {
  return (
    <div className="grid gap-4">
      {experience.map((item) => {
        const Icon = item.icon;

        return (
          <article key={`${item.company}-${item.role}`} className="group grid gap-5 rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-5 transition hover:border-[var(--accent-border)] hover:bg-[var(--panel-strong)] md:grid-cols-[14rem_1fr]">
            <div>
              <div className="mb-4 grid size-11 place-items-center rounded-2xl border border-[var(--accent-border)] bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <p className="text-sm font-semibold text-[var(--accent-strong)]">{item.period}</p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">{item.location}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">{item.role}</h3>
              <p className="mt-1 text-base text-[var(--text-secondary)]">{item.company}</p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--text-secondary)]">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--success)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const Icon = project.icon;

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-5 transition hover:-translate-y-1 hover:border-[var(--accent-border)] hover:bg-[var(--panel-strong)]">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="grid size-12 place-items-center rounded-2xl bg-[linear-gradient(135deg,var(--accent-soft),var(--success-soft),var(--steel-soft))] text-[var(--accent-strong)]">
          <Icon className="size-6" aria-hidden="true" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
          {project.eyebrow}
        </p>
      </div>
      <h3 className="text-xl font-semibold text-[var(--text-primary)]">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-[var(--text-secondary)]">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-2xl border border-[var(--border)] bg-[var(--panel-subtle)] px-2.5 py-1 text-xs font-medium text-[var(--text-secondary)]"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-[var(--border)] pt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
        <span>Project signal</span>
        <ArrowUpRight className="size-4 text-[var(--accent-strong)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
      </div>
    </article>
  );
}

function SkillCluster({ cluster }: { cluster: (typeof skillClusters)[number] }) {
  const Icon = cluster.icon;

  return (
    <article className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-5">
      <div className="mb-4 flex items-center gap-3">
        <Icon className="size-5 text-[var(--accent-strong)]" aria-hidden="true" />
        <h3 className="font-semibold text-[var(--text-primary)]">{cluster.title}</h3>
        <span className="ml-auto rounded-full border border-[var(--border)] bg-[var(--panel-subtle)] px-2 py-0.5 text-xs font-semibold text-[var(--text-muted)]">
          {cluster.skills.length}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {cluster.skills.map((skill) => (
          <span key={skill} className="rounded-2xl bg-[var(--chip-bg)] px-3 py-2 text-sm text-[var(--text-secondary)]">
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

function Proof() {
  return (
    <Section
      id="proof"
      eyebrow="Recognition"
      title="Publications and awards that round out the technical story."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="grid gap-4">
          {publications.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-5">
                <Icon className="mb-4 size-5 text-[var(--success)]" aria-hidden="true" />
                <p className="font-semibold text-[var(--text-primary)]">{item.title}</p>
              </article>
            );
          })}
        </div>
        <div className="grid gap-4">
          {awards.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-3xl border border-[var(--border)] bg-[var(--panel)] p-5">
                <Icon className="mb-4 size-5 text-[var(--accent-strong)]" aria-hidden="true" />
                <h3 className="font-semibold text-[var(--text-primary)]">{item.title}</h3>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{item.period}</p>
                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function ContactPanel() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Available for full-time AI opportunities in Germany."
      description="The fastest path is email or phone. The page is designed to give recruiters and hiring teams the relevant signal directly on the site."
    >
      <div className="glass-panel grid gap-6 rounded-3xl p-6 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <h3 className="text-2xl font-semibold text-[var(--text-primary)]">Get in touch</h3>
          <p className="mt-4 max-w-2xl leading-7 text-[var(--text-secondary)]">
            Interested in applied AI, ML engineering, computer vision, or software engineering roles
            where research-quality thinking meets production-minded delivery.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="premium-button inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold text-[var(--accent-text)] transition"
            >
              <Mail className="size-4" aria-hidden="true" />
              Send Email
            </a>
          </div>
        </div>
        <div className="grid gap-3">
          {profile.contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                className="rounded-3xl border border-[var(--border)] bg-[var(--panel-subtle)] p-4 transition hover:border-[var(--accent-border)] hover:bg-[var(--panel)]"
              >
                <span className="flex items-center gap-3 text-sm font-semibold text-[var(--text-muted)]">
                  <Icon className="size-4 text-[var(--accent-strong)]" aria-hidden="true" />
                  {link.label}
                </span>
                <span className="mt-2 block break-words text-[var(--text-primary)]">{link.value}</span>
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export function PortfolioPage() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const requestedTheme = new URLSearchParams(window.location.search).get("theme");

    if (requestedTheme === "light") {
      const timer = window.setTimeout(() => setTheme("light"), 0);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "light" ? "dark" : "light";
      return nextTheme;
    });
  };

  return (
    <div
      data-theme={theme}
      className="min-h-screen bg-[var(--page-bg)] text-[var(--text-primary)]"
    >
      <AnimatedBackdrop />
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Section
          id="experience"
          eyebrow="Experience"
          title="Research, API engineering, and early full-stack practice."
          description="A compact track record that shows applied AI implementation and software delivery experience."
        >
          <ExperienceTimeline />
        </Section>
        <Section
          id="projects"
          eyebrow="Projects"
          title="Selected work across computer vision, NLP, web systems, and chatbots."
          description="Projects are written for recruiter scanning first, with enough technical detail for engineering teams to quickly see the fit."
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>
        <Section
          id="skills"
          eyebrow="Skills"
          title="A practical toolset for applied AI work."
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {skillClusters.map((cluster) => (
              <SkillCluster key={cluster.title} cluster={cluster} />
            ))}
          </div>
        </Section>
        <Proof />
        <ContactPanel />
      </main>
    </div>
  );
}
