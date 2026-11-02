import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio-data";
import SectionHeading from "@/components/comic/SectionHeading";
import { Burst, WebCorner, WebDivider } from "@/components/comic/ComicArt";

const SOUND_EFFECTS = ["POW!", "ZAP!", "BAM!", "THWIP!", "KRAK!", "BOOM!", "WHAM!"];
const sfx = (index: number) => SOUND_EFFECTS[index % SOUND_EFFECTS.length];
const issue = (index: number) => `#${String(index + 1).padStart(2, "0")}`;

const ProjectsSection = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="comic-section comic-bg-blue section-padding">
      <WebDivider className="text-white/60" />
      <WebCorner className="absolute left-0 top-0 -z-10 w-44 text-white/30 md:w-80" />
      <div className="container-custom">
        <div className="space-y-12">
          <SectionHeading
            eyebrow="Chapter 2: Collected issues"
            title="Featured Projects"
            tone="light"
            subtitle="Here are some of my notable projects. Each one presented unique challenges that helped me grow as a developer."
          />

          <div className="comic-grid grid grid-cols-1 lg:grid-cols-2 gap-10">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="comic-panel group relative flex flex-col">
                <div className={`comic-band ${index % 2 === 0 ? "comic-band-red" : "comic-band-blue"}`}>
                  <span className="font-display text-3xl tracking-wider">Issue {issue(index)}</span>
                  <Badge variant="secondary" className="comic-tag">{project.category}</Badge>
                </div>
                <Burst word={sfx(index)} className="comic-sfx absolute -right-5 -top-10 w-32" />
                <CardHeader className="flex-grow">
                  <CardTitle className="comic-panel-title text-4xl font-normal">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <Button asChild size="sm" className="comic-btn comic-btn-red">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </Button>
                  {project.liveLink !== "#" && (
                    <Button asChild size="sm" className="comic-btn comic-btn-yellow">
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

          <SectionHeading eyebrow="Also in this universe" title="Other Projects" tone="light" size="md" />

          <div className="comic-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <Card key={index} className="comic-panel group relative flex flex-col">
                <Burst word={sfx(index + featuredProjects.length)} className="comic-sfx absolute -right-4 -top-8 w-24" />
                <CardHeader className="flex-grow">
                  <CardTitle className="comic-panel-title text-3xl font-normal">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="comic-tag">{project.category}</Badge>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild size="sm" className="comic-btn comic-btn-paper">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                  </Button>
                  {project.liveLink !== "#" && (
                    <Button asChild size="sm" className="comic-btn comic-btn-yellow">
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
