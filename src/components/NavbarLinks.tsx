
import React from "react";
import { Link } from "react-router-dom";

interface NavbarLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, label, onClick }) => {
  return (
    <Link
      to={href}
      className="text-foreground/70 hover:text-foreground transition-colors px-3 py-2"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default NavbarLink;
