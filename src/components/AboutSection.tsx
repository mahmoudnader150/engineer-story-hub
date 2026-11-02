
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Layers, Globe } from "lucide-react";
import SectionHeading from "@/components/comic/SectionHeading";
import { WebCorner, WebDivider } from "@/components/comic/ComicArt";

const AboutSection = () => {
  const skills = [
    { 
      category: "Programming Languages", 
      items: ["C/C++", "Java", "Python", "JavaScript", "TypeScript", "Dart", "Kotlin", "PHP"],
      icon: <Code className="h-8 w-8" />,
    },
    { 
      category: "Frontend & Mobile", 
      items: ["React.js", "HTML/CSS", "Tailwind CSS", "Flutter", "Figma"],
      icon: <Globe className="h-8 w-8" />,
    },
    { 
      category: "Backend Development", 
      items: ["Node.js", "Python - Django/Flask", "Java Spring Boot", "Firebase", "RESTful APIs"],
      icon: <Server className="h-8 w-8" />,
    },
    { 
      category: "Tools & Databases", 
      items: ["Git/GitHub", "MongoDB", "PostgreSQL", "SQL", "Postman", "Linux"],
      icon: <Layers className="h-8 w-8" />,
    },
  ];

  return (
    <section id="about" className="comic-section comic-bg-paper section-padding">
      <WebDivider className="comic-web-line" />
      <WebCorner className="comic-web-line absolute right-0 top-0 -z-10 w-40 -scale-x-100 md:w-72" />
      <div className="container-custom">
        <div className="flex flex-col gap-16">
          <div className="space-y-8">
            <SectionHeading eyebrow="Chapter 1: The origin story" title="About Me" />
            <div className="comic-grid grid md:grid-cols-2 gap-10">
              <div className="comic-panel space-y-4 p-6 md:p-8">
                <p className="text-muted-foreground">
                  I'm a passionate software engineer specializing in building web and mobile applications. 
                  I enjoy solving complex problems and turning ideas into reality through elegant and efficient code.
                </p>
                <p className="text-muted-foreground">
                  My journey in tech started with a strong foundation in algorithms and data structures,
                  which I've applied in competitive programming contests. This experience has honed my
                  problem-solving abilities and analytical thinking.
                </p>
                <p className="text-muted-foreground">
                  I'm fluent in multiple programming languages and frameworks, allowing me to choose
                  the right tools for each project. I'm constantly learning and expanding my skill set
                  to stay current with the latest technologies and best practices.
                </p>
              </div>
              <div className="comic-panel p-6 md:p-8">
                <h3 className="comic-panel-title mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Bachelor of Science in Computer and Artificial Intelligence</p>
                    <p className="text-muted-foreground">Cairo University, 2020-2024</p>
                    <p className="text-muted-foreground">GPA: 3.34/4.00</p>
                  </div>
                </div>
                
                <h3 className="comic-panel-title mt-8 mb-4">Languages</h3>
                <div className="space-y-2">
                  <p>Arabic: First language</p>
                  <p>English: Proficient</p>
                  <p>German: Beginner</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <SectionHeading eyebrow="Powers & abilities" title="Skills & Expertise" />
            <div className="comic-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <Card key={index} className="comic-panel">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <span className="comic-icon-chip">{skill.icon}</span>
                        <h3 className="comic-panel-title text-2xl">{skill.category}</h3>
                      </div>
                      <ul className="flex flex-wrap gap-2">
                        {skill.items.map((item, idx) => (
                          <li key={idx} className="comic-tag">
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
