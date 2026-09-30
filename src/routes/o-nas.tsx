import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MapPin } from "lucide-react";

import { PageIntro, SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/o-nas")({
  component: AboutPage,
  head: () => ({ meta: [
    { title: "O MikroSerwis | Precyzja i lokalna pomoc IT" },
    { name: "description", content: "Poznaj sposób pracy MikroSerwis: rzetelna diagnostyka, precyzyjne naprawy SMD i pomoc IT w Kostrzynie nad Odrą." },
    { property: "og:title", content: "O nas — MikroSerwis Kostrzyn nad Odrą" },
    { property: "og:description", content: "Lokalny serwis, konkretna diagnoza i naprawy elektroniki bez zgadywania." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
});

const standards = [
  ["01", "Najpierw pomiar", "Zanim wymienimy część, sprawdzamy źródło problemu i stan całego obwodu."],
  ["02", "Jasna informacja", "Mówimy, co znaleźliśmy, jaki jest zakres pracy i czy naprawa ma sens."],
  ["03", "Precyzja wykonania", "Pracujemy pod mikroskopem i kontrolujemy połączenia po zakończeniu lutowania."],
  ["04", "Pomoc blisko Ciebie", "Obsługujemy Kostrzyn nad Odrą stacjonarnie oraz z dojazdem do domu lub firmy."],
];

function AboutPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-14 lg:px-8 lg:pt-20">
        <PageIntro index="02" eyebrow="O MikroSerwis / sposób pracy" title={<>Mniej zgadywania.<br /><span className="text-primary">Więcej konkretu.</span></>} description="MikroSerwis łączy precyzję stanowiska elektronicznego z normalnym, zrozumiałym kontaktem lokalnego serwisu." />
        <section className="mt-16 grid border-y border-border lg:grid-cols-[.78fr_1.22fr]">
          <div className="relative border-b border-border py-10 lg:border-b-0 lg:border-r lg:py-14 lg:pr-14">
            <div className="about-instrument"><span className="absolute left-4 top-4 font-display text-[9px] text-muted-foreground">INSPEKCJA / 10×</span><div className="crosshair"><span /></div><span className="absolute bottom-4 right-4 font-display text-[9px] text-primary">OSTROŚĆ: OK</span></div>
            <p className="mt-7 flex items-center gap-2 text-sm"><MapPin size={17} className="text-primary" /> Kostrzyn nad Odrą i okolice</p>
          </div>
          <div className="divide-y divide-border lg:pl-14">
            {standards.map(([number, title, text]) => <article key={number} className="standard-row"><span className="font-display text-xs text-primary">{number}</span><h2 className="font-display text-lg font-bold">{title}</h2><p className="text-sm leading-6 text-muted-foreground">{text}</p></article>)}
          </div>
        </section>
        <section className="mt-14 grid gap-8 bg-surface/45 p-7 sm:p-10 md:grid-cols-[1fr_auto] md:items-center"><div><p className="section-kicker"><Check size={14} /> Stacjonarnie i mobilnie</p><h2 className="mt-3 font-display text-2xl font-bold">Sprzęt na stół albo serwis do Ciebie.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">Naprawy wymagające stanowiska wykonujemy stacjonarnie. Wsparcie komputerowe możemy zapewnić także na miejscu u klienta.</p></div><Button variant="signal" asChild><Link to="/kontakt">Umów kontakt <ArrowRight /></Link></Button></section>
      </div>
    </SiteShell>
  );
}