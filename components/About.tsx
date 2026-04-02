import FadeIn from "@/components/FadeIn";
import { personal } from "@/lib/data";

export default function About() {
  const paragraphs = personal.about.split("\n\n");

  return (
    <section id="about" className="py-28 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
          {/* Left: heading */}
          <FadeIn direction="left">
            <div className="sticky top-24">
              <span className="text-xs font-medium tracking-widest text-accent uppercase">
                About
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-text-primary tracking-tight leading-snug">
                Professional Summary
              </h2>
            </div>
          </FadeIn>

          {/* Right: text */}
          <FadeIn delay={100}>
            <div className="space-y-5">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-base sm:text-lg text-text-secondary leading-relaxed">
                  {p}
                </p>
              ))}

              {/* Quick facts */}
              <div className="mt-8 pt-8 border-t border-border grid sm:grid-cols-3 gap-6">
                {[
                  { label: "Placement year", value: "Roche" },
                  { label: "Predicted grade", value: "1st" },
                  { label: "Graduating", value: "2027" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-text-primary">{stat.value}</p>
                    <p className="text-sm text-text-muted mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
