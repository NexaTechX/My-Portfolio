"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ProjectCard from "@/components/project-card";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoUrl: string;
  githubUrl: string;
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  const projects: Project[] = [
    {
      id: "1",
      title: "ContentMagic",
      description:
        "AI-powered content repurposing SaaS that transforms long-form content into multiple formats for social media distribution.",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
      techStack: ["React", "Node.js", "MongoDB", "OpenAI API", "AWS"],
      demoUrl: "https://contentmagic.example.com",
      githubUrl: "https://github.com/example/contentmagic",
    },
    {
      id: "2",
      title: "MailSence",
      description:
        "Next-generation email automation platform with AI-driven personalization and advanced analytics for marketing campaigns.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      techStack: [
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "PostgreSQL",
        "Vercel",
      ],
      demoUrl: "https://mailsence.example.com",
      githubUrl: "https://github.com/example/mailsence",
    },
    {
      id: "3",
      title: "DocuMind AI",
      description:
        "AI-powered PDF chat agent that allows users to upload documents and have natural language conversations about their content.",
      image:
        "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=800&q=80",
      techStack: ["Python", "React", "FastAPI", "LangChain", "Google Cloud"],
      demoUrl: "https://documind.example.com",
      githubUrl: "https://github.com/example/documind",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 px-4 md:px-8 lg:px-16 w-full relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10 backdrop-blur-sm z-0"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl z-0"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent work showcasing my skills in full-stack
            development and AI integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              techStack={project.techStack}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
