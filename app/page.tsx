import { ProfilePage } from "@/components/profile/profile-page";
import { ContactSection } from "@/components/contact/contact-section";
import { Footer } from "@/components/common/footer";
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
      <ProfilePage />
      <ContactSection />
      <Footer />
    </LanguageProvider>
  );
}
