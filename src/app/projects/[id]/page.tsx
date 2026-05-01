import { notFound } from "next/navigation";
import { projects } from "@/data";
import { ProjectDetail } from "@/components/projects/ProjectDetail";
import type { Metadata } from "next";

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return {};
  return {
    title: `${project.title} — Clarence Gio Bolonia`,
    description: project.overview,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
