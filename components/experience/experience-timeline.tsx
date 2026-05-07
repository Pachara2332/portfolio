"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experience";
import { FadeUp } from "@/components/common/motion-wrapper";
import { SectionHeading } from "@/components/common/section-heading";
import { Briefcase, CheckCircle2, Code2, GraduationCap } from "lucide-react";

const typeIcons = {
  work: Briefcase,
  freelance: Code2,
  internship: GraduationCap,
};

export function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <SectionHeading
            title="Experience"
            subtitle="My professional journey and career milestones"
          />
        </FadeUp>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-px md:left-1/2 md:-translate-x-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, oklch(0.65 0.25 285 / 0.3) 10%, oklch(0.78 0.15 195 / 0.3) 90%, transparent)",
            }}
          />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = typeIcons[exp.type];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                    ease: [0.25, 0.4, 0.25, 1] as const,
                  }}
                  className={`relative flex items-start gap-6 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot on timeline */}
                  <div className="absolute left-4 -translate-x-1/2 md:left-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: index * 0.15 + 0.2,
                      }}
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 bg-background"
                      style={{
                        borderColor: "oklch(0.65 0.25 285 / 0.5)",
                      }}
                    >
                      <Icon
                        className="h-3.5 w-3.5"
                        style={{ color: "oklch(0.65 0.25 285)" }}
                      />
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-12 flex-1 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isEven ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="rounded-xl border border-border/30 bg-card/50 p-5 backdrop-blur-sm transition-all hover:border-border/50 hover:bg-card/70">
                      {/* Period */}
                      <p
                        className="mb-1 text-xs font-medium uppercase tracking-wider"
                        style={{ color: "oklch(0.65 0.25 285)" }}
                      >
                        {exp.period}
                      </p>

                      {/* Role & Company */}
                      <h3 className="text-base font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {exp.company}
                      </p>

                      {/* Description */}
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {exp.description}
                      </p>

                      {exp.highlights && (
                        <ul className="mt-3 space-y-2">
                          {exp.highlights.map((item) => (
                            <li
                              key={item}
                              className="flex gap-2 text-xs leading-relaxed text-muted-foreground"
                            >
                              <CheckCircle2
                                className="mt-0.5 h-3.5 w-3.5 shrink-0"
                                style={{ color: "oklch(0.65 0.25 285)" }}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Tech badges */}
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {exp.techStack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-border/30 bg-white/[0.03] text-xs text-muted-foreground"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
