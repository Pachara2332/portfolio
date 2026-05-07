import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/hero/hero";
import { TechStack } from "@/components/skills/tech-stack";
import { ProjectsSection } from "@/components/projects/projects-section";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { ContactSection } from "@/components/contact/contact-section";
import { Footer } from "@/components/common/footer";
import { ScrollProgress } from "@/components/common/scroll-progress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TechStack />
        <ProjectsSection />
        <ExperienceTimeline />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
