import FadeIn from "@/components/FadeIn";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="mb-14">
            <span className="text-xs font-medium tracking-widest text-accent uppercase">
              Work
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
              Selected Projects
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 90}>
              <article className="group h-full rounded-2xl p-6 flex flex-col border border-[rgba(99,102,241,0.12)] bg-[rgba(21,21,26,0.65)] backdrop-blur-sm hover:border-[rgba(99,102,241,0.35)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(99,102,241,0.13)] transition-all duration-300">
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
                      className="text-xs px-2.5 py-1 rounded-full text-text-muted border border-border/60 bg-surface/50"
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
