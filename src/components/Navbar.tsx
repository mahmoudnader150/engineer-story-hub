
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Link, useLocation } from "react-router-dom";
import NavbarLink from "./NavbarLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

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

  // Section links (hash links)
  const sectionLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  // Page links
  const pageLinks = [
    { href: "/projects", label: "All Projects" }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-bold text-xl md:text-2xl text-primary">
            MAHMOUD<span className="text-accent">NADER</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6">
              {/* Section links - only show on home page */}
              {sectionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={location.pathname === "/" ? link.href : `/${link.href}`}
                    className="text-foreground/80 hover:text-accent transition-colors px-3 py-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              
              {/* Page links */}
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <NavbarLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="rounded-full"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="rounded-full"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container-custom py-4">
            <ul className="flex flex-col gap-2">
              {/* Section links */}
              {sectionLinks.map((link) => (
                <li key={link.href} onClick={() => setIsOpen(false)}>
                  <Link
                    to={location.pathname === "/" ? link.href : `/${link.href}`}
                    className="text-foreground/80 hover:text-accent transition-colors px-3 py-2 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              
              {/* Page links */}
              {pageLinks.map((link) => (
                <li key={link.href} onClick={() => setIsOpen(false)}>
                  <NavbarLink href={link.href} label={link.label} onClick={() => setIsOpen(false)} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
