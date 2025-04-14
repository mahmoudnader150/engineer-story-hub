
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/portfolio-data";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Professional Experience</h2>
            <p className="text-muted-foreground max-w-2xl">
              My professional journey includes working with diverse teams on challenging projects
              across various industries.
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {exp.company} • {exp.location}
                      </CardDescription>
                    </div>
                    <span className="text-muted-foreground text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ul className="space-y-2 text-muted-foreground ml-6 list-disc">
                      {exp.description_points.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
