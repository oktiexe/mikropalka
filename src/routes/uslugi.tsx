import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageIntro, SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/uslugi")({
  component: ServicesPage,
  head: () => ({ meta: [
    { title: "Usługi SMD i serwis sprzętu | MikroSerwis" },
    { name: "description", content: "Wylutowywanie i montaż elementów SMD, naprawa płyt głównych, diagnostyka elektroniki oraz serwis komputerów i konsol." },
    { property: "og:title", content: "Usługi naprawy elektroniki — MikroSerwis" },
    { property: "og:description", content: "Konkretne usługi SMD, diagnostyka oraz serwis komputerów i konsol w Kostrzynie nad Odrą." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
});

const services = [
  { code: "SMD.01", title: "Wylutowywanie elementów SMD", text: "Bezpiecznie demontujemy uszkodzone układy, gniazda i drobne komponenty z kontrolą temperatury, chroniąc pola lutownicze i laminat.", meta: "hot-air / mikroskop", size: "feature" },
  { code: "SMD.02", title: "Przylutowywanie elementów SMD", text: "Montujemy nowe rezystory, kondensatory, układy scalone i złącza. Precyzyjnie ustawiamy element i kontrolujemy każde połączenie.", meta: "montaż / inspekcja", size: "tall" },
  { code: "PCB.03", title: "Naprawa płyt głównych", text: "Szukamy zwarć, uszkodzonych sekcji zasilania i przerwanych połączeń. Naprawiamy płytę na poziomie elementów zamiast wymieniać cały moduł.", meta: "laptopy / konsole / elektronika", size: "wide" },
  { code: "DIA.04", title: "Diagnostyka elektroniki", text: "Pomiary napięć, poboru prądu i sygnałów pozwalają ustalić rzeczywistą przyczynę usterki przed wyceną naprawy.", meta: "pomiary / lokalizacja", size: "standard" },
  { code: "PORT.05", title: "Wymiana złączy", text: "Wymieniamy wyrwane lub zużyte porty USB-C, HDMI, gniazda zasilania i inne złącza montowane na płycie.", meta: "USB-C / HDMI / DC", size: "standard" },
  { code: "SYS.06", title: "Serwis komputerów i konsol", text: "Diagnozujemy problemy z uruchamianiem, temperaturami i stabilnością. Czyścimy, modernizujemy i przywracamy sprzęt do działania.", meta: "PC / laptop / PlayStation / Xbox", size: "wide" },
];

function ServicesPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-14 lg:px-8 lg:pt-20">
        <PageIntro index="01" eyebrow="Zakres prac / usługi" title={<>Od pojedynczego lutu<br /><span className="text-primary">po cały układ.</span></>} description="Każdą naprawę zaczynamy od diagnozy. Poniżej konkretny zakres prac wykonywanych przy stanowisku serwisowym." />
        <div className="service-ledger mt-16">
          {services.map((service) => (
            <article key={service.code} className={`editorial-service ${service.size}`}>
              <div className="flex items-center justify-between"><span className="service-code">{service.code}</span><span className="service-node" /></div>
              <div><h2 className="font-display text-xl font-bold leading-tight sm:text-2xl">{service.title}</h2><p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">{service.text}</p></div>
              <div className="mt-auto border-t border-border pt-4 font-display text-[9px] uppercase text-muted-foreground">{service.meta}</div>
            </article>
          ))}
        </div>
        <aside className="mt-14 flex flex-col justify-between gap-6 border-l-2 border-primary px-6 py-2 sm:flex-row sm:items-center"><div><p className="font-display text-lg font-bold">Nie widzisz swojej usterki?</p><p className="mt-1 text-sm text-muted-foreground">Opisz sprzęt i objawy — sprawdzimy, czy możemy pomóc.</p></div><Button variant="signal" asChild><Link to="/kontakt">Zapytaj o naprawę <ArrowRight /></Link></Button></aside>
      </div>
    </SiteShell>
  );
}