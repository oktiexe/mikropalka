import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MapPin } from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: HomePage,
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Mikroserwis — naprawa komputerów i elektroniki Kostrzyn" },
      { name: "description", content: "Naprawa komputerów, laptopów i elektroniki SMD w Kostrzynie nad Odrą. Dojeżdżamy też do Dąbroszyna, Kamienia Małego, Witnicy i Białcza." },
      { property: "og:title", content: "Mikroserwis — elektronika pod kontrolą" },
      { property: "og:description", content: "Lokalny serwis elektroniki SMD i wsparcie IT w Kostrzynie nad Odrą." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mikroserwis-kostrzyn.pl/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://mikroserwis-kostrzyn.pl/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Mikroserwis",
          url: "https://mikroserwis-kostrzyn.pl",
          telephone: "+48727718888",
          email: "mikroserwis.kostrzyn@gmail.com",
          areaServed: ["Kostrzyn nad Odrą", "Dąbroszyn", "Kamień Mały", "Witnica", "Białcz"],
        }),
      },
    ],
  }),
});

const entryPoints = [
  { code: "SMD / 01", title: "Mikrolutowanie", text: "Wymiana i montaż elementów na płytach." },
  { code: "PCB / 02", title: "Naprawa płyt", text: "Diagnoza torów zasilania i uszkodzeń." },
  { code: "IT / 03", title: "Komputery i konsole", text: "Serwis sprzętu oraz pomoc z dojazdem." },
];

function HomePage() {
  return (
    <SiteShell>
      <section className="relative mx-auto grid min-h-[calc(100svh-72px)] max-w-7xl content-center gap-14 px-5 py-16 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:py-20">
        <div className="animate-reveal self-center">
          <p className="section-kicker"><span className="status-dot" /> Kostrzyn nad Odrą / serwis lokalny</p>
          <h1 className="mt-7 max-w-3xl font-display text-[clamp(2.7rem,6.7vw,5.5rem)] font-bold leading-[.98]">
            Naprawiamy to,<br /><span className="text-primary">co ma znaczenie.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">Diagnostyka i lutowanie SMD, naprawa płyt głównych oraz wsparcie IT — stacjonarnie i z dojazdem.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="signal" size="hero" asChild><Link to="/kontakt">Skontaktuj się <ArrowRight /></Link></Button>
            <Button variant="glass" size="hero" asChild><Link to="/uslugi">Poznaj usługi</Link></Button>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-xs text-muted-foreground">
            {["Diagnoza przed naprawą", "Praca pod mikroskopem", "Dojazd w okolicy"].map((item) => <span key={item} className="flex items-center gap-2"><Check size={14} className="text-primary" />{item}</span>)}
          </div>
        </div>

        <div className="workbench-panel relative self-center" aria-label="Specjalizacje MikroSerwis">
          <div className="workbench-head"><span>STANOWISKO / 01</span><span className="text-primary">GOTOWE</span></div>
          <div className="workbench-core"><BrandLogo compact className="scale-[2.65]" /></div>
          <div className="trace trace-a" /><div className="trace trace-b" />
          <div className="absolute bottom-6 left-6 flex items-center gap-2 font-display text-[10px] text-muted-foreground"><MapPin size={13} className="text-primary" />52.587°N / 14.649°E</div>
          <span className="board-label left-5 top-24">USB-C</span><span className="board-label bottom-24 right-5">SMD</span>
        </div>
      </section>

      <section className="relative border-y border-border bg-surface/35">
        <div className="mx-auto grid max-w-7xl md:grid-cols-[.8fr_1.2fr]">
          <div className="border-b border-border px-5 py-10 md:border-b-0 md:border-r lg:px-8"><p className="section-kicker">Szybki wybór / 01</p><h2 className="mt-3 font-display text-2xl font-bold">Z czym możemy pomóc?</h2></div>
          <div className="grid sm:grid-cols-3">
            {entryPoints.map((item) => <Link key={item.code} to="/uslugi" className="entry-link"><span className="font-display text-[9px] text-primary">{item.code}</span><h3 className="mt-5 font-display text-base font-bold">{item.title}</h3><p className="mt-2 text-xs leading-5 text-muted-foreground">{item.text}</p><ArrowRight className="mt-5 text-primary" size={16} /></Link>)}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}