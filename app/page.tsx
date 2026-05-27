import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/hero/hero";
import { TechStack } from "@/components/skills/tech-stack";
import { ProjectsSection } from "@/components/projects/projects-section";
import { CertificatesSection } from "@/components/certificates/certificates-section";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { AboutSection } from "@/components/about/about-section";
import { ContactSection } from "@/components/contact/contact-section";
import { Footer } from "@/components/common/footer";
import { ScrollProgress } from "@/components/common/scroll-progress";
import { LanguageProvider } from "@/components/i18n/language-provider";
import { siteConfig } from "@/data/site";

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  url: siteConfig.url,
  email: siteConfig.email,
  sameAs: siteConfig.socialLinks
    .filter((item) => item.name !== "Email" && item.name !== "Phone")
    .map((item) => item.url),
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.title,
  url: siteConfig.url,
  description: siteConfig.description,
};

export default function Home() {
  return (
    <LanguageProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProjectsSection />
        <CertificatesSection />
        <TechStack />
        <ExperienceTimeline />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
