import FadeIn from "@/components/FadeIn";
import { personal } from "@/lib/data";

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const linkedInHandle = personal.linkedin
  .replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, "")
  .replace(/\/$/, "");

const githubHandle = personal.github
  .replace(/^https?:\/\/(www\.)?github\.com\//, "")
  .replace(/\/$/, "");

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl">
          <FadeIn>
            <span className="text-xs font-medium tracking-widest text-accent uppercase">
              Contact
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4">
              Let&rsquo;s work together
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-10">
              I&rsquo;m open to internship opportunities, collaborations, and interesting
              conversations. Whether you have a project in mind or just want to say hello — my
              inbox is always open.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${personal.email}`}
                className="group flex items-center gap-3 px-6 py-4 rounded-2xl border border-border bg-card/60 hover:border-accent/35 hover:shadow-[0_0_20px_rgba(6,182,212,0.12)] transition-all duration-300"
              >
                <span className="text-text-muted group-hover:text-accent transition-colors">
                  <MailIcon />
                </span>
                <div>
                  <p className="text-xs text-text-muted mb-0.5">Email</p>
                  <p className="text-sm font-medium text-text-primary">{personal.email}</p>
                </div>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-4 rounded-2xl border border-border bg-card/60 hover:border-accent/35 hover:shadow-[0_0_20px_rgba(6,182,212,0.12)] transition-all duration-300"
              >
                <span className="text-text-muted group-hover:text-accent transition-colors">
                  <LinkedInIcon />
                </span>
                <div>
                  <p className="text-xs text-text-muted mb-0.5">LinkedIn</p>
                  <p className="text-sm font-medium text-text-primary">{linkedInHandle}</p>
                </div>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-4 rounded-2xl border border-border bg-card/60 hover:border-accent/35 hover:shadow-[0_0_20px_rgba(6,182,212,0.12)] transition-all duration-300"
              >
                <span className="text-text-muted group-hover:text-accent transition-colors">
                  <GitHubIcon />
                </span>
                <div>
                  <p className="text-xs text-text-muted mb-0.5">GitHub</p>
                  <p className="text-sm font-medium text-text-primary">{githubHandle}</p>
                </div>
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Footer */}
        <FadeIn delay={200}>
          <div className="mt-24 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-text-muted">
              &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
