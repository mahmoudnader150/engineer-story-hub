import React from "react";

interface SectionHeadingProps {
  /** Comic flavour text. The title itself stays plain so recruiters can skim. */
  eyebrow?: string;
  title: string;
  subtitle?: React.ReactNode;
  /** Use "light" on the red and blue backgrounds. */
  tone?: "page" | "light";
  size?: "lg" | "md";
  center?: boolean;
}

const SectionHeading = ({ eyebrow, title, subtitle, tone = "page", size = "lg", center = false }: SectionHeadingProps) => (
  <div className={`flex flex-col gap-4 ${center ? "items-center text-center" : "items-start"}`}>
    {eyebrow && <p className="comic-caption">{eyebrow}</p>}
    <h2
      className={`comic-title ${tone === "light" ? "comic-title-light" : ""} ${
        size === "lg" ? "text-5xl md:text-7xl" : "text-4xl md:text-5xl"
      }`}
    >
      {title}
    </h2>
    {subtitle && <p className="comic-narration max-w-2xl">{subtitle}</p>}
  </div>
);

export default SectionHeading;
