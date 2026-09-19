import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CircuitBoard,
  Clock3,
  Cpu,
  Facebook,
  Gauge,
  HardDrive,
  Laptop,
  Mail,
  MapPin,
  Menu,
  Microscope,
  PlugZap,
  Send,
  ShieldCheck,
  Smartphone,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "MikroSerwis | Naprawy SMD i mobilny informatyk — Kostrzyn nad Odrą" },
      { name: "description", content: "Precyzyjne naprawy elektroniki, lutowanie SMD, serwis komputerów i mobilna pomoc IT w Kostrzynie nad Odrą." },
      { property: "og:title", content: "MikroSerwis — naprawy SMD i mobilny informatyk" },
      { property: "og:description", content: "Profesjonalna diagnostyka i naprawa elektroniki oraz komputerów w Kostrzynie nad Odrą." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const services = [
  { icon: CircuitBoard, title: "Naprawa płyt głównych", text: "Naprawy na poziomie komponentów zamiast kosztownej wymiany całych modułów.", code: "PCB_01" },
  { icon: Microscope, title: "Lutowanie SMD", text: "Precyzyjna praca z małymi elementami przy użyciu profesjonalnego sprzętu.", code: "SMD_02" },
  { icon: PlugZap, title: "Naprawa złączy", text: "Wymiana portów USB-C, HDMI, zasilania i innych uszkodzonych gniazd.", code: "PORT_03" },
  { icon: Laptop, title: "Komputery i laptopy", text: "Serwis sprzętu, usuwanie usterek, modernizacje i optymalizacja działania.", code: "PC_04" },
  { icon: Gauge, title: "Diagnoza elektroniczna", text: "Dokładne pomiary i lokalizacja źródła awarii przed rozpoczęciem naprawy.", code: "DIAG_05" },
  { icon: Smartphone, title: "Mobilne wsparcie IT", text: "Pomoc informatyczna z dojazdem do klienta w Kostrzynie nad Odrą.", code: "MOBILE_06" },
];

const benefits = [
  { icon: Microscope, title: "Precyzyjna praca", text: "Naprawy mikroskopowe i lutowanie małych komponentów SMD." },
  { icon: Clock3, title: "Sprawna diagnoza", text: "Szybkie ustalenie przyczyny problemu bez zbędnej wymiany części." },
  { icon: ShieldCheck, title: "Profesjonalne wyposażenie", text: "Narzędzia pomiarowe i serwisowe dopasowane do elektroniki." },
  { icon: Zap, title: "Mobilna wygoda", text: "Pomoc IT z dojazdem — bez wożenia sprzętu i tracenia czasu." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const submitQuote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const contact = String(data.get("contact") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Zapytanie o wycenę — ${name}`);
    const body = encodeURIComponent(`Imię i nazwisko: ${name}\nKontakt: ${contact}\n\nOpis usterki:\n${message}`);
    window.location.href = `mailto:mikroserwis.kostrzyn@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 tech-grid opacity-35" />
      <div className="scan-line pointer-events-none fixed inset-x-0 top-0 z-50 h-px bg-primary/20" />

      <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#start" className="flex items-center gap-3" aria-label="MikroSerwis — strona główna">
            <span className="grid size-9 place-items-center rounded-md border border-primary/50 bg-primary/10 text-primary shadow-signal"><Cpu size={20} /></span>
            <span className="font-display text-lg font-bold">MIKRO<span className="text-primary">SERWIS</span></span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex" aria-label="Główna nawigacja">
            <a className="transition-colors hover:text-primary" href="#uslugi">Usługi</a>
            <a className="transition-colors hover:text-primary" href="#dlaczego-my">Dlaczego my</a>
            <a className="transition-colors hover:text-primary" href="#kontakt">Kontakt</a>
          </nav>
          <Button variant="glass" size="icon" className="md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-4 md:hidden" aria-label="Menu mobilne">
            {[["Usługi", "#uslugi"], ["Dlaczego my", "#dlaczego-my"], ["Kontakt", "#kontakt"]].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-border py-3 text-sm"><span>{label}</span><ChevronRight size={16} className="text-primary" /></a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section id="start" className="relative flex min-h-[760px] items-center pt-24 md:min-h-[820px]">
          <div className="absolute right-[-12rem] top-28 size-[30rem] rounded-full bg-primary/8 blur-3xl" />
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-16 lg:grid-cols-[1.15fr_.85fr] lg:px-8">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 border border-primary/30 bg-primary/8 px-3 py-1.5 font-display text-xs font-semibold uppercase text-primary">
                <span className="size-1.5 rounded-full bg-primary shadow-signal" /> Kostrzyn nad Odrą
              </div>
              <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.03] sm:text-6xl lg:text-7xl">
                Elektronika <span className="text-primary">naprawiona.</span><br />Technologia pod kontrolą.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                Precyzyjne naprawy SMD, diagnostyka elektroniki i profesjonalne wsparcie IT — stacjonarnie lub z dojazdem do Ciebie.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button variant="signal" size="hero" asChild><a href="#kontakt"><Mail /> Skontaktuj się <ArrowRight /></a></Button>
                <Button variant="glass" size="hero" asChild><a href="#uslugi"><Wrench /> Nasze usługi</a></Button>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-primary" /> Precyzyjna diagnoza</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-primary" /> Dojazd do klienta</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={15} className="text-primary" /> Profesjonalny sprzęt</span>
              </div>
            </div>

            <div className="relative mx-auto hidden aspect-square w-full max-w-md lg:block" aria-hidden="true">
              <div className="absolute inset-8 rotate-45 border border-primary/25" />
              <div className="absolute inset-16 rotate-45 border border-border-strong" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid size-48 place-items-center rounded-full border border-primary/40 bg-surface shadow-signal-strong backdrop-blur-xl">
                  <CircuitBoard className="size-24 text-primary" strokeWidth={1} />
                </div>
              </div>
              {[["SMD", "top-5 left-6"], ["USB-C", "right-0 top-28"], ["DIAG", "bottom-12 left-0"], ["IT", "bottom-4 right-20"]].map(([label, position]) => <span key={label} className={`absolute ${position} border border-border-strong bg-surface px-3 py-2 font-display text-xs text-primary backdrop-blur-md`}>{label}</span>)}
            </div>
          </div>
        </section>

        <section id="uslugi" className="relative border-y border-border bg-surface/40 py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="font-display text-xs font-semibold uppercase text-primary">Zakres działania // 01</p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Serwis od układu scalonego<br />po cały komputer</h2>
              <p className="mt-4 text-muted-foreground">Szukamy źródła problemu, dobieramy właściwą metodę i przywracamy sprzęt do działania.</p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return <article key={service.title} className="group min-h-64 bg-background/95 p-7 transition-all hover:bg-surface-raised hover:shadow-signal">
                  <div className="flex items-start justify-between"><span className="grid size-12 place-items-center rounded-md border border-border-strong bg-primary/8 text-primary transition-colors group-hover:border-primary"><Icon size={24} /></span><span className="font-display text-[10px] text-muted-foreground">{service.code}</span></div>
                  <h3 className="mt-8 font-display text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.text}</p>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section id="dlaczego-my" className="py-24">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
            <div>
              <p className="font-display text-xs font-semibold uppercase text-primary">Standard pracy // 02</p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Precyzja, która<br />oszczędza Twój czas</h2>
              <p className="mt-5 max-w-md leading-7 text-muted-foreground">Nie zgadujemy. Mierzymy, lokalizujemy usterkę i jasno przedstawiamy możliwe rozwiązanie przed naprawą.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {benefits.map(({ icon: Icon, title, text }) => <div key={title} className="border-l border-primary/40 pl-5"><Icon className="text-primary" size={22} /><h3 className="mt-4 font-display text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div>)}
            </div>
          </div>
        </section>

        <section id="kontakt" className="border-t border-border bg-surface/40 py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
            <div>
              <p className="font-display text-xs font-semibold uppercase text-primary">Kontakt // 03</p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Opisz usterkę.<br /><span className="text-primary">Zacznijmy od diagnozy.</span></h2>
              <div className="mt-9 space-y-4">
                <a href="mailto:mikroserwis.kostrzyn@gmail.com" className="flex items-center gap-4 border-b border-border pb-4 text-sm transition-colors hover:text-primary"><Mail className="text-primary" size={20} /><span className="break-all">mikroserwis.kostrzyn@gmail.com</span></a>
                <div className="flex items-center gap-4 border-b border-border pb-4 text-sm"><MapPin className="text-primary" size={20} /><span>Kostrzyn nad Odrą</span></div>
              </div>
              <Button variant="glass" size="hero" asChild className="mt-6"><a href="https://www.facebook.com/share/1BxcX3eG3N/" target="_blank" rel="noreferrer"><Facebook /> Napisz na Facebooku <ArrowRight /></a></Button>
            </div>

            <form onSubmit={submitQuote} className="rounded-lg border border-border-strong bg-card p-6 shadow-signal backdrop-blur-xl sm:p-8">
              <div className="mb-7 flex items-center justify-between"><h3 className="font-display text-xl font-semibold">Szybka wycena</h3><HardDrive className="text-primary" size={22} /></div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-xs font-medium text-muted-foreground">Imię i nazwisko<Input required name="name" className="mt-2 h-11 bg-background/60" placeholder="Jan Kowalski" /></label>
                <label className="text-xs font-medium text-muted-foreground">E-mail lub telefon<Input required name="contact" className="mt-2 h-11 bg-background/60" placeholder="Twój kontakt" /></label>
              </div>
              <label className="mt-5 block text-xs font-medium text-muted-foreground">Opisz sprzęt i usterkę<Textarea required name="message" className="mt-2 min-h-32 resize-y bg-background/60" placeholder="Model urządzenia, objawy, kiedy pojawił się problem..." /></label>
              <Button type="submit" variant="signal" size="hero" className="mt-6 w-full"><Send /> Wyślij zapytanie</Button>
              <p className="mt-3 text-center text-[11px] leading-5 text-muted-foreground">Po kliknięciu otworzy się Twoja aplikacja pocztowa z gotową wiadomością.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>© 2026 MikroSerwis. Kostrzyn nad Odrą.</span>
          <div className="flex gap-5"><a className="hover:text-primary" href="mailto:mikroserwis.kostrzyn@gmail.com">E-mail</a><a className="hover:text-primary" href="https://www.facebook.com/share/1BxcX3eG3N/" target="_blank" rel="noreferrer">Facebook</a></div>
        </div>
      </footer>
    </div>
  );
}
