import FadeIn from "@/components/FadeIn";
import { timeline, type TimelineEntry } from "@/lib/data";

const typeConfig: Record<
  TimelineEntry["type"],
  { dot: string; badge: string; label: string }
> = {
  work: {
    dot: "bg-accent shadow-[0_0_8px_rgba(6,182,212,0.7)]",
    badge: "bg-accent/10 text-accent border border-accent/20",
    label: "Work",
  },
  education: {
    dot: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]",
    badge: "bg-emerald-400/10 text-emerald-400 border border-emerald-400/20",
    label: "Education",
  },
  programme: {
    dot: "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]",
    badge: "bg-amber-400/10 text-amber-400 border border-amber-400/20",
    label: "Programme",
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
          {/* Left: heading */}
          <FadeIn direction="left">
            <div className="sticky top-24">
              <span className="text-xs font-medium tracking-widest text-accent uppercase">
                Background
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-text-primary tracking-tight leading-snug">
                Work &amp; Education
              </h2>

              {/* Legend */}
              <div className="mt-8 flex flex-col gap-3">
                {(Object.keys(typeConfig) as TimelineEntry["type"][]).map((type) => (
                  <div key={type} className="flex items-center gap-2.5">
                    <span className={`w-2 h-2 rounded-full ${typeConfig[type].dot}`} />
                    <span className="text-sm text-text-secondary">{typeConfig[type].label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right: timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

            <div className="flex flex-col gap-10">
              {timeline.map((entry, i) => {
                const config = typeConfig[entry.type];
                return (
                  <FadeIn key={i} delay={i * 100}>
                    <div className="relative pl-8">
                      {/* Dot */}
                      <span
                        className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-surface ${config.dot}`}
                      />

                      {/* Content */}
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span
                            className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${config.badge}`}
                          >
                            {config.label}
                          </span>
                          <span className="text-xs text-text-muted">{entry.period}</span>
                        </div>

                        <h3 className="text-base font-semibold text-text-primary">
                          {entry.title}
                        </h3>
                        <p className="text-sm font-medium text-accent mb-2">
                          {entry.organisation}
                        </p>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {entry.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
