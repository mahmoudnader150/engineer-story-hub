
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Layers, Globe } from "lucide-react";

const AboutSection = () => {
  const skills = [
    { 
      category: "Frontend Development", 
      items: ["JavaScript", "TypeScript", "React.js", "Next.js", "HTML/CSS", "Tailwind CSS"],
      icon: <Code className="h-8 w-8 text-accent" />,
    },
    { 
      category: "Backend Development", 
      items: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL"],
      icon: <Server className="h-8 w-8 text-accent" />,
    },
    { 
      category: "DevOps & Tools", 
      items: ["Git", "Docker", "CI/CD", "AWS", "Linux", "Agile Methodologies"],
      icon: <Layers className="h-8 w-8 text-accent" />,
    },
    { 
      category: "Other Skills", 
      items: ["Database Design", "System Architecture", "Test-Driven Development", "UI/UX Principles"],
      icon: <Globe className="h-8 w-8 text-accent" />,
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="flex flex-col gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">About Me</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  I'm a passionate software engineer with 5+ years of experience building web applications 
                  and digital products. I enjoy solving complex problems and turning ideas into reality through 
                  elegant and efficient code.
                </p>
                <p className="text-muted-foreground">
                  My journey in tech started when I was a teenager, building simple websites and experimenting 
                  with different programming languages. This curiosity evolved into a professional career 
                  where I've had the opportunity to work on a diverse range of projects - from e-commerce platforms 
                  to data-intensive applications.
                </p>
                <p className="text-muted-foreground">
                  When I'm not coding, you'll find me hiking, reading about new technologies, or contributing to 
                  open-source projects. I'm always looking to learn and grow, both personally and professionally.
                </p>
              </div>
              <div className="border-l pl-10 hidden md:block">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Master of Science in Computer Science</p>
                    <p className="text-muted-foreground">University Name, 2018-2020</p>
                  </div>
                  <div>
                    <p className="font-medium">Bachelor of Science in Computer Engineering</p>
                    <p className="text-muted-foreground">University Name, 2014-2018</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mt-8 mb-4">Certifications</h3>
                <div className="space-y-2">
                  <p>AWS Certified Developer</p>
                  <p>Google Cloud Professional Engineer</p>
                  <p>MongoDB Certified Developer</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        {skill.icon}
                        <h3 className="font-semibold">{skill.category}</h3>
                      </div>
                      <ul className="space-y-1">
                        {skill.items.map((item, idx) => (
                          <li key={idx} className="text-muted-foreground text-sm">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
