import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LanguageProvider } from "@/components/i18n/language-provider";
import { ProjectDetailPage } from "@/components/projects/project-detail-page";
import { getProjectById } from "@/data/projects";
import { siteConfig } from "@/data/site";

type PageProps = {
  params: Promise<{ id: string }> | { id: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await Promise.resolve(params);
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
    alternates: {
      canonical: `${siteConfig.url}/projects/${project.id}`,
    },
    openGraph: {
      title: `${project.title} | Case Study`,
      description: project.description,
      url: `${siteConfig.url}/projects/${project.id}`,
      images: project.coverImage ? [project.coverImage] : [siteConfig.ogImage],
    },
  };
}

export default async function ProjectDetailRoute({ params }: PageProps) {
  const { id } = await Promise.resolve(params);
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <LanguageProvider>
      <ProjectDetailPage project={project} />
    </LanguageProvider>
  );
}
