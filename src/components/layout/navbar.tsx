"use client";

import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Briefcase, Code, HomeIcon, Github, Linkedin } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { portfolioData } from '@/data/portfolio-data';

const navLinks = [
  { href: '/', label: 'Home', icon: <HomeIcon className="h-5 w-5" /> },
  { href: '/resume', label: 'Resume', icon: <Briefcase className="h-5 w-5" /> },
  { href: '/projects', label: 'Projects', icon: <Code className="h-5 w-5" /> },
];

const socialLinks = [
  { href: portfolioData.githubUrl, label: 'GitHub', icon: <Github className="h-5 w-5" />, ariaLabel: "Visit GitHub profile" },
  { href: portfolioData.linkedinUrl, label: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, ariaLabel: "Visit LinkedIn profile" },
];

export default function Navbar() {
  const pathname = usePathname();

  const NavLinkItems = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {navLinks.map((link) => (
        <Link key={link.href} href={link.href} legacyBehavior>
          <a
            className={cn(
              "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
              pathname === link.href ? "bg-accent/75 text-accent-foreground" : "text-foreground/70",
              mobile ? "w-full justify-start text-base" : ""
            )}
          >
            {link.icon}
            {link.label}
          </a>
        </Link>
      ))}
      {mobile && socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground text-foreground/70",
            "w-full justify-start text-base"
          )}
          aria-label={link.ariaLabel}
        >
          {link.label} 
          {link.icon}
        </a>
      ))}
    </>
  );
  
  // Render the Navbar component
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" legacyBehavior>
          <a className="text-xl font-bold text-primary font-headline">
            David Xiong
          </a>
        </Link>

        <nav className="hidden items-center space-x-1 md:flex">
          <NavLinkItems />
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-1">
            {socialLinks.map((link) => (
              <Button key={link.label} variant="ghost" size="sm" asChild>
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.ariaLabel}>
                  {link.label}
                  {link.icon}
                </a>
              </Button>
            ))}
          </div>
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="w-9 h-9">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-background p-6 rounded-lg">
                <div className="flex flex-col space-y-3">
                  <NavLinkItems mobile />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
