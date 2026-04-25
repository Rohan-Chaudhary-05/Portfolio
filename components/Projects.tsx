import FadeIn from "@/components/FadeIn";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="mb-14">
            <span className="text-xs font-medium tracking-widest text-accent uppercase">
              Building
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
              What I ship
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 90}>
              <article className="group h-full rounded-2xl p-6 flex flex-col border border-[rgba(6,182,212,0.12)] bg-[rgba(6,182,212,0.04)] backdrop-blur-sm hover:border-[rgba(6,182,212,0.35)] hover:bg-[rgba(6,182,212,0.08)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(6,182,212,0.13)] transition-all duration-300">
                <div className="flex-1">
                  <h3 className="font-semibold text-text-primary text-base mb-2 group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full border border-white/30 text-white/90 bg-surface/60 transition-all duration-200 hover:border-accent/40 hover:text-accent hover:shadow-[0_0_12px_rgba(6,182,212,0.25)] cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
