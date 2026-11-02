
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="comic-footer py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-3xl tracking-wider text-pow-yellow">To be continued…</p>
            <p className="text-sm text-white/80 mt-1">
              © {new Date().getFullYear()} MAHMOUD NADER ALI. All rights reserved.
            </p>
            <p className="text-xs text-white/70 mt-1">
              Egypt, Giza
            </p>
          </div>
          <Button
            size="icon"
            className="comic-icon-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
