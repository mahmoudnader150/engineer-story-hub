
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";

const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="comic-bg-paper">
          <div className="container-custom py-10">
            <h1 className="comic-title text-6xl md:text-7xl">Projects</h1>
          </div>
        </div>
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
