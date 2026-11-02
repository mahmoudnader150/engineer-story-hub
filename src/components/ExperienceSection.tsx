import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/portfolio-data";
import SectionHeading from "@/components/comic/SectionHeading";
import { Burst, WebDivider } from "@/components/comic/ComicArt";

const ExperienceSection = () => {
  return (
    <section id="experience" className="comic-section comic-bg-paper section-padding">
      <WebDivider className="comic-web-line" />
      <div className="container-custom">
        <div className="space-y-12">
          <SectionHeading
            eyebrow="Chapter 3: The story so far"
            title="Professional Experience"
            subtitle="My professional journey includes working with diverse teams on challenging projects across various industries."
          />

          <div className="comic-grid grid gap-x-8 gap-y-12 md:grid-cols-2">
            {experiences.map((exp, index) => (
              <Card key={index} className={`comic-panel relative pt-4 ${index % 3 === 0 ? "comic-panel-wide md:col-span-2" : ""}`}>
                <p className="comic-caption absolute -top-4 left-4">{exp.period}</p>
                {/present/i.test(exp.period) && (
                  <Burst word="NOW!" className="comic-wobble absolute -right-3 -top-9 w-24 md:w-28" />
                )}
                <CardHeader>
                  <CardTitle className="comic-panel-title pr-16 text-3xl font-normal md:text-4xl">{exp.title}</CardTitle>
                  <CardDescription className="mt-1 text-base">
                    {exp.company} • {exp.location}
                  </CardDescription>
                </CardHeader>
                {(exp.description_points.length > 0 || exp.technologies.length > 0) && (
                  <CardContent>
                    <div className="space-y-4">
                      <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                        {exp.description_points.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="comic-tag">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
