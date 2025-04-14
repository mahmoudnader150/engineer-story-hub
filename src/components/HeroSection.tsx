
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="top" className="min-h-screen flex items-center pt-16 pb-0">
      <div className="container-custom">
        <div className="flex flex-col gap-6 max-w-3xl animate-fade-in">
          <p className="text-accent font-medium">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            Your Name
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground/80">
            Software Engineer
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            I build exceptional digital experiences with clean, efficient code. Specializing in
            full-stack development with a focus on user-centered design and scalable solutions.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <Button asChild className="bg-accent hover:bg-accent/90">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <a href="#about" aria-label="Scroll to About section">
            <ChevronDown size={28} className="text-accent" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
