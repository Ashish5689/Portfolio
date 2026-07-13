import { Github, Linkedin, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { socialLinks } from "@/data/portfolio";

const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65%", threshold: [0.05, 0.3, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <nav className="site-header__inner" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="Ashish Jha, back to top">
          AJ<span>.</span>
        </a>

        <div className="desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={activeSection === item.id ? "is-active" : undefined}
              aria-current={activeSection === item.id ? "location" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="header-actions">
          <Button variant="ghost" size="icon" asChild className="social-button">
            <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Github />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="social-button">
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <Linkedin />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="mobile-menu-button"
            aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {isMobileMenuOpen ? (
        <div id="mobile-navigation" className="mobile-nav">
          {navItems.map((item) => (
            <a key={item.id} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="/Ashish-Jha-Resume.pdf" download onClick={() => setIsMobileMenuOpen(false)}>
            Download résumé
          </a>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
