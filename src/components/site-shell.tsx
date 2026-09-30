import { Link } from "@tanstack/react-router";
import { ArrowRight, Facebook, Mail, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { EMAIL, FACEBOOK, navigation } from "@/lib/site";

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 technical-paper" />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/92 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link to="/" aria-label="MikroSerwis — strona główna"><BrandLogo /></Link>
          <nav className="hidden h-full items-center md:flex" aria-label="Główna nawigacja">
            {navigation.map((item) => (
              <Link key={item.to} to={item.to} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }} activeOptions={{ exact: item.to === "/" }}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Button variant="signal" size="sm" asChild className="hidden md:inline-flex"><Link to="/kontakt"><Mail /> Skontaktuj się</Link></Button>
          <Button variant="glass" size="icon" className="md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="animate-menu-in border-t border-border bg-background px-5 py-2 md:hidden" aria-label="Menu mobilne">
            {navigation.map((item, index) => (
              <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)} className="mobile-nav-link" activeProps={{ className: "mobile-nav-link text-primary" }} activeOptions={{ exact: item.to === "/" }}>
                <span className="font-display text-[10px] text-muted-foreground">0{index + 1}</span><span>{item.label}</span><ArrowRight size={16} className="ml-auto" />
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main className="relative pt-[72px]">{children}</main>

      <footer className="relative border-t border-border bg-background py-12">
        <div className="mx-auto grid max-w-7xl gap-9 px-5 md:grid-cols-[1fr_auto] md:items-end lg:px-8">
          <div><BrandLogo /><p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">Precyzyjna elektronika i konkretne wsparcie IT — lokalnie, w Kostrzynie nad Odrą.</p></div>
          <div className="md:text-right">
            <div className="flex flex-wrap gap-5 text-sm md:justify-end"><a className="footer-link" href={`mailto:${EMAIL}`}><Mail size={15} /> E-mail</a><a className="footer-link" href={FACEBOOK} target="_blank" rel="noreferrer"><Facebook size={15} /> Facebook</a></div>
            <p className="mt-5 font-display text-[10px] text-muted-foreground">© 2026 MIKROSERWIS / KOSTRZYN NAD ODRĄ</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageIntro({ index, eyebrow, title, description }: { index: string; eyebrow: string; title: ReactNode; description: string }) {
  return (
    <header className="page-intro">
      <div className="service-index">{index}</div>
      <div>
        <p className="section-kicker">{eyebrow}</p>
        <h1 className="page-title">{title}</h1>
      </div>
      <p className="max-w-xl self-end text-base leading-7 text-muted-foreground md:text-lg">{description}</p>
    </header>
  );
}