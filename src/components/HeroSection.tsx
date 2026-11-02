
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Burst, CaughtBug, WebCorner } from "@/components/comic/ComicArt";

const HeroSection = () => {
  const handleScroll = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="top" className="comic-bg-cover relative isolate min-h-screen overflow-hidden pb-20 pt-24 lg:flex lg:items-center">
      <WebCorner className="absolute right-0 top-14 -z-10 w-64 -scale-x-100 text-white/60 md:w-[28rem]" />
      <WebCorner className="absolute bottom-0 left-0 -z-10 w-48 -scale-y-100 text-white/40 md:w-80" />

      <div className="container-custom grid w-full items-center gap-12 lg:grid-cols-12">
        <div className="flex flex-col items-start gap-5 lg:col-span-7">
          <p className="comic-caption text-base md:text-lg">Hello, I'm</p>
          <h1 className="comic-cover-title">
            <span className="block">MAHMOUD</span>
            <span className="block">NADER ALI</span>
          </h1>
          <h2 className="comic-cover-subtitle">
            Software Engineer
          </h2>
          <p className="comic-narration max-w-2xl text-lg">
            A software engineer passionate about problem-solving, learning, and building scalable projects.
            I specialize in building robust software applications including web and mobile applications and
            enjoy tackling complex programming challenges. I create efficient solutions that solve real-world problems.
          </p>
          <div className="mt-2 flex flex-wrap gap-5">
            <Button
              className="comic-btn comic-btn-yellow"
              onClick={() => handleScroll("#projects")}
            >
              View My Work
            </Button>
            <Button
              className="comic-btn comic-btn-paper"
              onClick={() => handleScroll("#contact")}
            >
              Contact Me
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div className="comic-panel tilt-r relative aspect-square" aria-hidden="true">
            <CaughtBug />
            <p className="comic-caption absolute -left-3 -top-4 max-w-[75%]">
              Meanwhile, in production…
            </p>
            <p className="comic-caption absolute -bottom-4 -right-3 max-w-[80%]">
              Another bug, caught in the web!
            </p>
          </div>
          <Burst word="THWIP!" className="comic-wobble absolute -right-3 top-8 w-32 md:w-40" fill="#fff" />
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 animate-bounce motion-reduce:animate-none lg:block">
        <button
          onClick={() => handleScroll("#about")}
          aria-label="Scroll to About section"
          className="comic-icon-btn"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
