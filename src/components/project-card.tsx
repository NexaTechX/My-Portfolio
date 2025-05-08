import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface TechStack {
  name: string;
  icon: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: TechStack[];
  demoUrl: string;
  githubUrl: string;
}

const ProjectCard = ({
  title = "ContentMagic",
  description = "AI-powered content repurposing tool that transforms long-form content into social media posts, emails, and more.",
  image = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  techStack = [
    { name: "React", icon: "react" },
    { name: "Node.js", icon: "nodejs" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Tailwind", icon: "tailwind" },
  ],
  demoUrl = "https://example.com",
  githubUrl = "https://github.com",
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 h-full flex flex-col hover:translate-y-[-4px]">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <CardContent className="flex-grow p-6 bg-gradient-to-br from-transparent to-secondary/5 dark:to-primary/5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100/80 dark:bg-gray-700/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/30 rounded-md text-xs font-medium shadow-sm"
            >
              {tech.name}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="border-t border-white/20 dark:border-gray-700/30 p-6 flex justify-between gap-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <Button
          variant="outline"
          className="flex-1 flex items-center gap-2"
          asChild
        >
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        </Button>

        <Button
          variant="outline"
          className="flex-1 flex items-center gap-2"
          asChild
        >
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
