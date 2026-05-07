"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const floatingIcons = [
  { icon: "⚛️", x: "10%", y: "20%", delay: 0 },
  { icon: "🔧", x: "85%", y: "15%", delay: 0.5 },
  { icon: "📡", x: "75%", y: "70%", delay: 1 },
  { icon: "🐍", x: "15%", y: "75%", delay: 1.5 },
  { icon: "💻", x: "90%", y: "45%", delay: 0.8 },
  { icon: "🚀", x: "5%", y: "50%", delay: 1.2 },
];

function SocialIcon({ icon, className }: { icon: string; className?: string }) {
  switch (icon) {
    case "github":
      return <GithubIcon className={className} />;
    case "linkedin":
      return <LinkedinIcon className={className} />;
    default:
      return <Mail className={className} />;
  }
}

export function Hero() {
  const handleScroll = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-16"
    >
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "oklch(0.65 0.25 285)" }}
        />
        <div
          className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full opacity-15 blur-[120px]"
          style={{ background: "oklch(0.78 0.15 195)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full opacity-10 blur-[100px]"
          style={{ background: "oklch(0.65 0.25 285)" }}
        />
      </div>

      {/* Floating emoji icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute text-2xl opacity-20 hidden lg:block"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            repeatType: "loop",
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants} className="mb-6 inline-block">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-white/5 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Available for new opportunities
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="block text-foreground">Hi, I&apos;m</span>
          <span className="mt-2 block text-gradient">
            {siteConfig.name}
          </span>
        </motion.h1>

        {/* Title */}
        <motion.div variants={itemVariants} className="mt-4 md:mt-6">
          <p className="text-lg font-medium text-muted-foreground sm:text-xl md:text-2xl">
            <Sparkles className="mr-2 inline-block h-5 w-5" style={{ color: "oklch(0.65 0.25 285)" }} />
            Full Stack Developer &amp; IoT Engineer
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          I craft premium digital experiences with modern web technologies,
          build intelligent IoT systems, and turn creative ideas into
          production-ready solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden px-8 text-white"
            style={{
              backgroundColor: "oklch(0.65 0.25 285)",
            }}
            onClick={() => handleScroll("#projects")}
          >
            <span className="relative z-10">View Projects</span>
            <div
              className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.65 0.25 285), oklch(0.78 0.15 195))",
              }}
            />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border/50 bg-white/5 backdrop-blur-sm hover:bg-white/10"
            onClick={() => handleScroll("#contact")}
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex items-center justify-center gap-4"
        >
          {siteConfig.socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.icon !== "mail" ? "_blank" : undefined}
              rel={link.icon !== "mail" ? "noopener noreferrer" : undefined}
              className="rounded-full border border-border/30 bg-white/5 p-3 text-muted-foreground transition-all hover:bg-white/10 hover:text-foreground hover:border-border/60"
              aria-label={link.name}
            >
              <SocialIcon icon={link.icon} className="h-5 w-5" />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <motion.button
            onClick={() => handleScroll("#tech-stack")}
            className="mx-auto flex flex-col items-center gap-2 text-muted-foreground/50 transition-colors hover:text-muted-foreground"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            aria-label="Scroll to tech stack"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
