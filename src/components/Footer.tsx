
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-foreground/70 text-sm">
              © {new Date().getFullYear()} Mahmoud Nader. All rights reserved.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button
              size="icon"
              variant="ghost"
              className="rounded-full"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
