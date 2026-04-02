import FadeIn from "@/components/FadeIn";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-card/40">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="mb-14">
            <span className="text-xs font-medium tracking-widest text-accent uppercase">
              Toolkit
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
              Skills
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.category} delay={i * 80}>
              <div>
                <h3 className="text-xs font-semibold tracking-widest text-text-muted uppercase mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1.5 rounded-full border border-border text-text-secondary bg-surface/60 transition-all duration-200 hover:border-accent/40 hover:text-accent hover:shadow-[0_0_12px_rgba(6,182,212,0.25)] cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
