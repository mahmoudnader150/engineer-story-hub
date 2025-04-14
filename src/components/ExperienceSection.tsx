
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Company Inc.",
      period: "Jan 2022 - Present",
      location: "San Francisco, CA",
      description: [
        "Lead developer for a team of 5 engineers building a cloud-based financial platform",
        "Implemented microservices architecture using Node.js and Docker, improving system scalability by 40%",
        "Developed CI/CD pipeline with GitHub Actions, reducing deployment times from hours to minutes",
        "Mentored junior developers through pair programming and code reviews"
      ],
      technologies: ["React", "Node.js", "Docker", "AWS", "MongoDB"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "Mar 2019 - Dec 2021",
      location: "Austin, TX",
      description: [
        "Built and maintained multiple client web applications using React and Django",
        "Optimized database queries, reducing load times by 60%",
        "Integrated third-party APIs for payment processing and data analysis",
        "Collaborated with design team to implement responsive UI components"
      ],
      technologies: ["React", "Django", "PostgreSQL", "Redis", "AWS"]
    },
    {
      title: "Frontend Developer",
      company: "Creative Web Agency",
      period: "Jun 2017 - Feb 2019",
      location: "Remote",
      description: [
        "Developed responsive websites for various clients in retail and hospitality industries",
        "Implemented animations and interactive elements using JavaScript and CSS",
        "Converted design mockups into pixel-perfect web interfaces",
        "Optimized web performance and accessibility"
      ],
      technologies: ["JavaScript", "HTML/CSS", "SASS", "jQuery", "Webpack"]
    },
    {
      title: "Software Engineering Intern",
      company: "Startup Innovations",
      period: "May 2016 - Aug 2016",
      location: "Seattle, WA",
      description: [
        "Assisted in developing features for a mobile application using React Native",
        "Fixed bugs and improved UI components",
        "Participated in daily stand-ups and sprint planning",
        "Learned software development lifecycle in an agile environment"
      ],
      technologies: ["React Native", "JavaScript", "Firebase"]
    }
  ];

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
                      {exp.description.map((item, idx) => (
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
