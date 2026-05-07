import { Mail, Heart, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon, FacebookIcon } from "@/components/common/icons";
import { siteConfig } from "@/data/site";

function SocialIcon({ icon, className }: { icon: string; className?: string }) {
  switch (icon) {
    case "github":
      return <GithubIcon className={className} />;
    case "linkedin":
      return <LinkedinIcon className={className} />;
    case "facebook":
      return <FacebookIcon className={className} />;
    case "phone":
      return <Phone className={className} />;
    default:
      return <Mail className={className} />;
  }
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/20">
      {/* Gradient top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.65 0.25 285 / 0.3), oklch(0.78 0.15 195 / 0.3), transparent)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm font-medium text-foreground">
              <span className="text-gradient">&lt;</span>
              {siteConfig.name}
              <span className="text-gradient">/&gt;</span>
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
          </div>

          {/* Built with */}
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            Built with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> using Next.js &amp; Tailwind CSS
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {siteConfig.socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.icon !== "mail" && link.icon !== "phone" ? "_blank" : undefined}
                rel={link.icon !== "mail" && link.icon !== "phone" ? "noopener noreferrer" : undefined}
                className="rounded-full border border-border/20 bg-white/[0.02] p-2 text-muted-foreground transition-all hover:bg-white/[0.05] hover:text-foreground"
                aria-label={link.name}
              >
                <SocialIcon icon={link.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
