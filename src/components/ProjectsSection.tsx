
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio-data";

const ProjectsSection = () => {
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
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="outline" size="sm">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </Button>
                  {project.liveLink !== "#" && (
                    <Button asChild size="sm">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <span>Live Demo</span>
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  )}
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
                    <Badge variant="secondary" className="text-xs">{project.category}</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="ghost" size="sm">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                  </Button>
                  {project.liveLink !== "#" && (
                    <Button asChild variant="outline" size="sm">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        <span>Demo</span>
                        <ExternalLink size={14} />
                      </a>
                    </Button>
                  )}
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
