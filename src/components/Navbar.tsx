
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavbarLink from "./NavbarLinks";
import SoundToggle from "./SoundToggle";
import MusicToggle from "./MusicToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { resolvedTheme, setTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

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

  // Highlights the section crossing a line 40% down the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );
    document.querySelectorAll("#top, #about, #projects, #experience, #contact").forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      setActiveSection(null);
    };
  }, [location.pathname]);

  const handleLogoClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0 });
  };

  const handleNavigation = (sectionId: string) => {
    setIsOpen(false);
    
    // Check if we're already on the home page
    if (location.pathname === "/") {
      // We're on home page, just scroll to the section
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // We're on another page, navigate to home and then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  // Section links (hash links)
  const sectionLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  // Page links (no All Projects now)
  const pageLinks: any[] = [];

  return (
    <header 
      className={`comic-navbar fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "is-scrolled" : ""
      }`}
    >
      <div className="container-custom py-2">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="comic-logo"
            onClick={handleLogoClick}
          >
            MAHMOUD<span>NADER</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex gap-3">
              {/* Section links */}
              {sectionLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className={`comic-nav-link ${activeSection === link.href ? "is-active" : ""}`}
                    aria-current={activeSection === link.href ? "true" : undefined}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              
              {/* Page links */}
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <NavbarLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-3">
            <MusicToggle />
            <SoundToggle />
            {/* Theme Toggle */}
            <Button
              size="icon"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="comic-icon-btn"
            >
              {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <MusicToggle />
            <SoundToggle />
            <Button
              size="icon"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="comic-icon-btn"
            >
              {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            
            <Button
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="comic-icon-btn"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-white/30">
          <div className="container-custom py-4">
            <ul className="flex flex-col gap-2">
              {/* Section links */}
              {sectionLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className={`comic-nav-link block w-full text-left ${activeSection === link.href ? "is-active" : ""}`}
                    aria-current={activeSection === link.href ? "true" : undefined}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              
              {/* Page links (now empty) */}
              {pageLinks.map((link) => (
                <li key={link.href}>
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
