import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CircuitBoard,
  Clock3,
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

import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const EMAIL = "mikroserwis.kostrzyn@gmail.com";
const FACEBOOK = "https://www.facebook.com/share/1BxcX3eG3N/";

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

const navigation = [
  ["Strona główna", "start"],
  ["Usługi", "uslugi"],
  ["O nas", "o-nas"],
  ["Kontakt", "kontakt"],
] as const;

const services = [
  { icon: CircuitBoard, title: "Naprawa płyt głównych", text: "Naprawy na poziomie komponentów zamiast kosztownej wymiany całych modułów.", code: "PCB_01" },
  { icon: Microscope, title: "Lutowanie SMD", text: "Precyzyjna praca z małymi elementami przy użyciu profesjonalnego sprzętu.", code: "SMD_02" },
  { icon: PlugZap, title: "Naprawa złączy", text: "Wymiana portów USB-C, HDMI, zasilania i innych uszkodzonych gniazd.", code: "PORT_03" },
  { icon: Laptop, title: "Komputery i laptopy", text: "Serwis sprzętu, usuwanie usterek, modernizacje i optymalizacja działania.", code: "PC_04" },
  { icon: Gauge, title: "Diagnoza elektroniczna", text: "Dokładne pomiary i lokalizacja źródła awarii przed rozpoczęciem naprawy.", code: "DIAG_05" },
  { icon: Smartphone, title: "Mobilne wsparcie IT", text: "Pomoc informatyczna z dojazdem do klienta w Kostrzynie nad Odrą.", code: "MOBILE_06" },
];

const benefits = [
  { icon: Microscope, number: "01", title: "Precyzyjna praca", text: "Naprawiamy na poziomie pojedynczych elementów, pod mikroskopem i bez drogi na skróty." },
  { icon: Clock3, number: "02", title: "Sprawna diagnoza", text: "Najpierw mierzymy i lokalizujemy przyczynę. Dopiero potem proponujemy właściwe rozwiązanie." },
  { icon: ShieldCheck, number: "03", title: "Profesjonalne zaplecze", text: "Korzystamy z narzędzi pomiarowych i serwisowych dopasowanych do współczesnej elektroniki." },
  { icon: Zap, number: "04", title: "Mobilna wygoda", text: "Wsparcie IT może przyjechać do Ciebie — w domu albo w firmie na terenie Kostrzyna." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("start");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65%", threshold: [0, 0.2, 0.5] },
    );
    navigation.forEach(([, id]) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  const submitQuote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const contact = String(data.get("contact") ?? "");
    const message = String(data.get("message") ?? "");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Zapytanie o wycenę — ${name}`)}&body=${encodeURIComponent(`Imię i nazwisko: ${name}\nKontakt: ${contact}\n\nOpis usterki:\n${message}`)}`;
  };

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 tech-grid opacity-25" />
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/82 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#start" aria-label="MikroSerwis — strona główna"><BrandLogo /></a>
          <nav className="hidden h-full items-center gap-1 md:flex" aria-label="Główna nawigacja">
            {navigation.map(([label, id]) => (
              <a key={id} href={`#${id}`} className={`nav-link ${activeSection === id ? "nav-link-active" : ""}`}>{label}</a>
            ))}
          </nav>
          <Button variant="signal" size="sm" asChild className="hidden md:inline-flex"><a href={`mailto:${EMAIL}`}><Mail /> Skontaktuj się</a></Button>
          <Button variant="glass" size="icon" className="md:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="animate-menu-in border-t border-border bg-background/95 px-5 py-3 backdrop-blur-xl md:hidden" aria-label="Menu mobilne">
            {navigation.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className={`flex items-center justify-between border-b border-border py-4 text-sm ${activeSection === id ? "text-primary" : "text-foreground"}`}><span>{label}</span><ChevronRight size={16} /></a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section id="start" className="section-anchor relative flex min-h-[min(900px,100svh)] items-center pt-[72px]">
          <div className="circuit-field pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block" />
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 py-20 lg:grid-cols-[1.12fr_.88fr] lg:px-8">
            <div className="animate-reveal">
              <p className="section-kicker"><span className="status-dot" /> Kostrzyn nad Odrą · Serwis lokalny</p>
              <h1 className="mt-7 max-w-4xl font-display text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-[76px]">
                Elektronika <span className="text-primary">naprawiona.</span><br />Technologia pod kontrolą.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Precyzyjne naprawy SMD, diagnostyka elektroniki i profesjonalne wsparcie IT — stacjonarnie lub z dojazdem do Ciebie.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button variant="signal" size="hero" asChild><a href={`mailto:${EMAIL}`}><Mail /> Skontaktuj się <ArrowRight /></a></Button>
                <Button variant="glass" size="hero" asChild><a href="#uslugi"><Wrench /> Poznaj usługi</a></Button>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-xs text-muted-foreground">
                {['Precyzyjna diagnoza', 'Dojazd do klienta', 'Profesjonalny sprzęt'].map((item) => <span key={item} className="flex items-center gap-2"><CheckCircle2 size={15} className="text-primary" />{item}</span>)}
              </div>
            </div>
            <div className="hero-device relative mx-auto hidden aspect-square w-full max-w-[480px] lg:grid lg:place-items-center" aria-hidden="true">
              <div className="hero-orbit hero-orbit-outer" /><div className="hero-orbit hero-orbit-inner" />
              <div className="grid size-52 place-items-center rounded-full border border-primary/40 bg-background/90 shadow-signal-strong backdrop-blur-xl"><BrandLogo compact className="scale-[2.4]" /></div>
              {[['SMD', 'top-5 left-8'], ['USB-C', 'right-0 top-28'], ['DIAG', 'bottom-16 left-0'], ['IT', 'bottom-8 right-20']].map(([label, position]) => <span key={label} className={`absolute ${position} border border-border-strong bg-surface px-3 py-2 font-display text-[10px] text-primary`}>{label}</span>)}
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 items-center gap-3 pb-6 text-[10px] uppercase text-muted-foreground lg:flex"><span className="h-px w-12 bg-border-strong" /> Przewiń, aby poznać serwis</div>
        </section>

        <section id="uslugi" className="section-anchor relative border-y border-border bg-surface/35 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-14 grid gap-6 md:grid-cols-2 md:items-end">
              <div><p className="section-kicker">Zakres działania // 01</p><h2 className="section-title">Od układu scalonego<br />po cały komputer.</h2></div>
              <p className="max-w-lg text-base leading-7 text-muted-foreground md:justify-self-end">Szukamy źródła problemu, dobieramy właściwą metodę i przywracamy sprzęt do działania — bez zgadywania i zbędnej wymiany części.</p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, title, text, code }) => <article key={title} className="service-card group min-h-72 bg-background/95 p-7 sm:p-8"><div className="flex items-start justify-between"><span className="icon-tile"><Icon size={23} /></span><span className="font-display text-[10px] text-muted-foreground">{code}</span></div><h3 className="mt-10 font-display text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p><span className="mt-7 flex items-center gap-2 text-xs text-primary opacity-0 transition-opacity group-hover:opacity-100">Dowiedz się więcej <ArrowRight size={14} /></span></article>)}
            </div>
          </div>
        </section>

        <section id="o-nas" className="section-anchor py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[.82fr_1.18fr]">
              <div className="lg:sticky lg:top-32 lg:self-start"><p className="section-kicker">Standard pracy // 02</p><h2 className="section-title">Precyzja, która<br /><span className="text-primary">oszczędza czas.</span></h2><p className="mt-6 max-w-md leading-7 text-muted-foreground">Nie zgadujemy. Mierzymy, lokalizujemy usterkę i jasno przedstawiamy możliwe rozwiązanie przed naprawą.</p><div className="mt-8 inline-flex items-center gap-3 border-l border-primary pl-4 text-sm"><MapPin size={18} className="text-primary" /> Stacjonarnie i z dojazdem</div></div>
              <div className="divide-y divide-border border-y border-border">
                {benefits.map(({ icon: Icon, number, title, text }) => <article key={title} className="benefit-row group grid gap-5 py-8 sm:grid-cols-[48px_1fr_1.35fr] sm:items-start"><span className="font-display text-xs text-primary">{number}</span><div><Icon className="mb-4 text-primary" size={22} /><h3 className="font-display text-xl font-semibold">{title}</h3></div><p className="text-sm leading-6 text-muted-foreground">{text}</p></article>)}
              </div>
            </div>
          </div>
        </section>

        <section id="kontakt" className="section-anchor border-t border-border bg-surface/35 py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
            <div><p className="section-kicker">Kontakt // 03</p><h2 className="section-title">Opisz usterkę.<br /><span className="text-primary">Zacznijmy od diagnozy.</span></h2><p className="mt-5 max-w-md leading-7 text-muted-foreground">Napisz, jaki sprzęt wymaga pomocy i co się dzieje. Odpowiemy z propozycją kolejnego kroku.</p>
              <div className="mt-10 space-y-1"><a href={`mailto:${EMAIL}`} className="contact-row"><Mail size={20} /><span className="break-all">{EMAIL}</span><ArrowRight size={17} className="ml-auto" /></a><div className="contact-row"><MapPin size={20} /><span>Kostrzyn nad Odrą</span></div><a href={FACEBOOK} target="_blank" rel="noreferrer" className="contact-row"><Facebook size={20} /><span>Facebook MikroSerwis</span><ArrowRight size={17} className="ml-auto" /></a></div>
            </div>
            <form onSubmit={submitQuote} className="rounded-lg border border-border-strong bg-card p-6 shadow-signal backdrop-blur-xl sm:p-9">
              <div className="mb-8 flex items-center justify-between"><div><p className="font-display text-[10px] uppercase text-primary">Formularz kontaktowy</p><h3 className="mt-2 font-display text-2xl font-semibold">Szybka wycena</h3></div><HardDrive className="text-primary" size={24} /></div>
              <div className="grid gap-5 sm:grid-cols-2"><label className="field-label">Imię i nazwisko<Input required name="name" className="mt-2 h-12 bg-background/60" placeholder="Jan Kowalski" /></label><label className="field-label">E-mail lub telefon<Input required name="contact" className="mt-2 h-12 bg-background/60" placeholder="Twój kontakt" /></label></div>
              <label className="field-label mt-5 block">Opisz sprzęt i usterkę<Textarea required name="message" className="mt-2 min-h-36 resize-y bg-background/60" placeholder="Model urządzenia, objawy, kiedy pojawił się problem..." /></label>
              <Button type="submit" variant="signal" size="hero" className="mt-6 w-full"><Send /> Wyślij zapytanie</Button><p className="mt-3 text-center text-[11px] leading-5 text-muted-foreground">Otworzymy Twoją aplikację pocztową z gotową wiadomością.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background py-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:grid-cols-2 sm:items-end lg:px-8"><div><BrandLogo /><p className="mt-4 max-w-sm text-xs leading-5 text-muted-foreground">Serwis elektroniki i komputerów w Kostrzynie nad Odrą. Diagnostyka SMD i mobilne wsparcie IT.</p></div><div className="sm:text-right"><div className="flex flex-wrap gap-5 text-xs sm:justify-end"><a className="footer-link" href={`mailto:${EMAIL}`}>E-mail</a><a className="footer-link" href={FACEBOOK} target="_blank" rel="noreferrer">Facebook</a><a className="footer-link" href="#start">Wróć na górę ↑</a></div><p className="mt-5 text-[11px] text-muted-foreground">© 2026 MikroSerwis · Kostrzyn nad Odrą</p></div></div>
      </footer>
    </div>
  );
}