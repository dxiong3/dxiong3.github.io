"use client";

import Link from 'next/link';
import { Briefcase, Code, HomeIcon, Github, Linkedin } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { portfolioData } from '@/data/portfolio-data';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Home', icon: <HomeIcon className="h-4 w-4" /> },
  { href: '/resume', label: 'Resume', icon: <Briefcase className="h-4 w-4" /> },
  { href: '/projects', label: 'Projects', icon: <Code className="h-4 w-4" /> },
];

const socialLinks = [
  { href: portfolioData.githubUrl, label: 'GitHub', icon: <Github className="h-5 w-5" />, ariaLabel: "Visit GitHub profile" },
  { href: portfolioData.linkedinUrl, label: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, ariaLabel: "Visit LinkedIn profile" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 py-8 sm:flex-row">
        <nav className="mb-4 flex items-center space-x-2 sm:mb-0 sm:space-x-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} legacyBehavior>
              <a
                className={cn(
                  "flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                  pathname === link.href ? "bg-accent/75 text-accent-foreground" : "text-foreground/70"
                )}
              >
                {link.icon}
                {link.label}
              </a>
            </Link>
          ))}
        </nav>
        <div className="mb-4 flex flex-wrap justify-center gap-2 sm:mb-0 sm:flex-nowrap">
          {socialLinks.map((link) => (
            <Button key={link.label} variant="ghost" size="sm" asChild>
              <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.ariaLabel}>
                {link.label}
                {link.icon}
              </a>
            </Button>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-4 sm:mt-0 text-center sm:text-left">
          David Xiong {currentYear}
        </p>
      </div>
    </footer>
  );
}
