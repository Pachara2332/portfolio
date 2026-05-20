import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/hero/hero";
import { TechStack } from "@/components/skills/tech-stack";
import { ProjectsSection } from "@/components/projects/projects-section";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { AboutSection } from "@/components/about/about-section";
import { ContactSection } from "@/components/contact/contact-section";
import { Footer } from "@/components/common/footer";
import { ScrollProgress } from "@/components/common/scroll-progress";
import { LanguageProvider } from "@/components/i18n/language-provider";

export default function Home() {
  return (
    <LanguageProvider>
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProjectsSection />
        <TechStack />
        <ExperienceTimeline />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
