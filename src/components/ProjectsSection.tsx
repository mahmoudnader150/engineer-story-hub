
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with product management, cart functionality, payment processing, and user authentication.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "MongoDB", "Stripe API"],
      liveLink: "https://example.com",
      repoLink: "https://github.com/yourusername/project",
      featured: true,
    },
    {
      title: "Task Management App",
      description: "A productivity app that helps users organize tasks, set priorities, and track progress with a clean, intuitive interface.",
      image: "/placeholder.svg",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      liveLink: "https://example.com",
      repoLink: "https://github.com/yourusername/project",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description: "A real-time weather application that provides detailed forecasts, historical data, and location-based alerts.",
      image: "/placeholder.svg",
      tags: ["JavaScript", "React", "Weather API", "Chart.js"],
      liveLink: "https://example.com",
      repoLink: "https://github.com/yourusername/project",
      featured: false,
    },
    {
      title: "Social Media Analytics Tool",
      description: "A dashboard that helps businesses track engagement metrics across multiple social media platforms.",
      image: "/placeholder.svg",
      tags: ["React", "Redux", "Express", "Social APIs"],
      liveLink: "https://example.com",
      repoLink: "https://github.com/yourusername/project",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website to showcase projects and skills, built with modern web technologies.",
      image: "/placeholder.svg",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      liveLink: "https://example.com",
      repoLink: "https://github.com/yourusername/project",
      featured: false,
    },
    {
      title: "Budget Tracker",
      description: "A financial application that helps users manage expenses, set budgets, and visualize spending patterns.",
      image: "/placeholder.svg",
      tags: ["Vue.js", "Firebase", "D3.js"],
      liveLink: "https://example.com",
      repoLink: "https://github.com/yourusername/project",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl">
              Here are some of my notable projects. Each one presented unique challenges that helped me grow as a developer.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden card-hover">
                <div className="h-52 bg-muted relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="outline" size="sm">
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </Button>
                  <Button asChild size="sm">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <span>Live Demo</span>
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Other Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="ghost" size="sm">
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <span>Demo</span>
                      <ExternalLink size={14} />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
