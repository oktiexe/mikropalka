import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Facebook, Mail, MapPin, Send } from "lucide-react";
import type { FormEvent } from "react";

import { PageIntro, SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EMAIL, FACEBOOK } from "@/lib/site";

export const Route = createFileRoute("/kontakt")({
  component: ContactPage,
  head: () => ({ meta: [
    { title: "Kontakt i wycena | MikroSerwis Kostrzyn nad Odrą" },
    { name: "description", content: "Skontaktuj się z MikroSerwis w sprawie diagnostyki SMD, naprawy elektroniki, komputera lub konsoli." },
    { property: "og:title", content: "Kontakt — MikroSerwis" },
    { property: "og:description", content: "Opisz usterkę i rozpocznij diagnozę sprzętu w MikroSerwis." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
});

function ContactPage() {
  const submitQuote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const contact = String(data.get("contact") ?? "");
    const message = String(data.get("message") ?? "");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Zapytanie o wycenę — ${name}`)}&body=${encodeURIComponent(`Imię i nazwisko: ${name}\nKontakt: ${contact}\n\nOpis urządzenia i usterki:\n${message}`)}`;
  };

  return (
    <SiteShell>
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-14 lg:px-8 lg:pt-20">
        <PageIntro index="03" eyebrow="Kontakt / zgłoszenie" title={<>Opisz usterkę.<br /><span className="text-primary">Resztę sprawdzimy.</span></>} description="Napisz, jaki sprzęt wymaga pomocy i co się z nim dzieje. Odpowiemy z propozycją następnego kroku." />
        <div className="mt-16 grid gap-12 lg:grid-cols-[.78fr_1.22fr]">
          <aside>
            <p className="font-display text-[10px] uppercase text-muted-foreground">Bezpośredni kontakt</p>
            <div className="mt-5 border-t border-border">
              <a href={`mailto:${EMAIL}`} className="contact-row"><Mail size={19} /><span className="break-all">{EMAIL}</span><ArrowRight size={16} className="ml-auto" /></a>
              <div className="contact-row"><MapPin size={19} /><span>Kostrzyn nad Odrą</span></div>
              <a href={FACEBOOK} target="_blank" rel="noreferrer" className="contact-row"><Facebook size={19} /><span>Facebook MikroSerwis</span><ArrowRight size={16} className="ml-auto" /></a>
            </div>
            <div className="mt-10 border-l border-primary pl-5"><p className="font-display text-sm font-bold">Stacjonarnie lub z dojazdem</p><p className="mt-2 text-sm leading-6 text-muted-foreground">W zgłoszeniu napisz, gdzie znajduje się sprzęt. Dobierzemy najwygodniejszą formę pomocy.</p></div>
          </aside>
          <form onSubmit={submitQuote} className="quote-sheet">
            <div className="mb-9 flex items-start justify-between border-b border-border pb-6"><div><p className="font-display text-[10px] uppercase text-primary">Karta zgłoszenia / 001</p><h2 className="mt-2 font-display text-2xl font-bold">Szybka wycena</h2></div><span className="service-node mt-2" /></div>
            <div className="grid gap-5 sm:grid-cols-2"><label className="field-label">Imię i nazwisko<Input required name="name" className="mt-2 h-12 bg-background/70" placeholder="Jan Kowalski" /></label><label className="field-label">E-mail lub telefon<Input required name="contact" className="mt-2 h-12 bg-background/70" placeholder="Twój kontakt" /></label></div>
            <label className="field-label mt-5 block">Sprzęt i opis usterki<Textarea required name="message" className="mt-2 min-h-40 resize-y bg-background/70" placeholder="Model urządzenia, objawy, kiedy pojawił się problem..." /></label>
            <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"><p className="max-w-xs text-[11px] leading-5 text-muted-foreground">Przycisk otworzy gotową wiadomość w Twojej aplikacji pocztowej.</p><Button type="submit" variant="signal" size="hero"><Send /> Wyślij zapytanie</Button></div>
          </form>
        </div>
      </div>
    </SiteShell>
  );
}