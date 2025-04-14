
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://github.com/mahmoudnader150", Icon: Github, label: "GitHub" },
    { href: "https://linkedin.com/in/mahmoud-nader-112483228", Icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:mahnader222@gmail.com", Icon: Mail, label: "Email" },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <a href="#top" className="font-bold text-xl md:text-2xl text-primary">
            Mahmoud<span className="text-accent">Nader</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-accent transition-colors"
                  aria-label={link.label}
                >
                  <link.Icon size={20} />
                </a>
              ))}
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-background/95 backdrop-blur-sm shadow-md transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 invisible"
        } overflow-hidden`}
      >
        <nav className="container-custom py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href}
                  className="block py-2 text-foreground/80 hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 mt-6 pt-4 border-t">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-accent transition-colors"
                aria-label={link.label}
              >
                <link.Icon size={20} />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
