"use client";

import { useState } from "react";
import { Send, Mail, CheckCircle2, Loader2, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeUp } from "@/components/common/motion-wrapper";
import { SectionHeading } from "@/components/common/section-heading";
import { siteConfig } from "@/data/site";

function SocialIcon({ icon, className, style }: { icon: string; className?: string; style?: React.CSSProperties }) {
  switch (icon) {
    case "github":
      return <GithubIcon className={className} />;
    case "linkedin":
      return <LinkedinIcon className={className} />;
    case "facebook":
      return <FacebookIcon className={className} />;
    case "phone":
      return <Phone className={className} style={style} />;
    default:
      return <Mail className={className} style={style} />;
  }
}

export function ContactSection() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormState("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormState("idle"), 5000);
      } else {
        setFormState("error");
        setTimeout(() => setFormState("idle"), 3000);
      }
    } catch {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-28">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full opacity-10 blur-[120px]"
          style={{ background: "oklch(0.65 0.25 285)" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <SectionHeading
            title="Get in Touch"
            subtitle="Have a project idea or want to collaborate? I'd love to hear from you"
          />
        </FadeUp>

        <div className="grid gap-10 md:grid-cols-5">
          {/* Contact Info */}
          <FadeUp delay={0.1} className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Let&apos;s build something amazing
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Whether you need a web application, IoT system, or mobile app —
                I&apos;m here to help bring your vision to life.
              </p>
            </div>

            <div className="space-y-3">
              {siteConfig.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.icon !== "mail" && link.icon !== "phone" ? "_blank" : undefined}
                  rel={link.icon !== "mail" && link.icon !== "phone" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 rounded-lg border border-border/30 bg-white/[0.02] p-3 text-sm text-muted-foreground transition-all hover:bg-white/[0.05] hover:text-foreground hover:border-border/50"
                >
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                    style={{
                      background: "oklch(0.65 0.25 285 / 0.1)",
                    }}
                  >
                    <SocialIcon icon={link.icon} className="h-4 w-4" style={{ color: "oklch(0.65 0.25 285)" }} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{link.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {link.url.replace("mailto:", "").replace("https://", "").replace("tel:", "")}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </FadeUp>

          {/* Contact Form */}
          <FadeUp delay={0.2} className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-xl border border-border/30 bg-card/30 p-6 backdrop-blur-sm"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <Input
                    id="contact-name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="border-border/30 bg-white/[0.03] placeholder:text-muted-foreground/50"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="border-border/30 bg-white/[0.03] placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="contact-message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="border-border/30 bg-white/[0.03] placeholder:text-muted-foreground/50 resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full text-white"
                style={{ backgroundColor: "oklch(0.65 0.25 285)" }}
                disabled={formState === "loading" || formState === "success"}
              >
                {formState === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : formState === "success" ? (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
              {formState === "error" && (
                <p className="text-sm text-destructive text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
