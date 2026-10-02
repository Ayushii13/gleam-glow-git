import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Flower2, Heart, Leaf, Menu, Sparkles } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/button";
import heroImage from "@/assets/nature-goodies-hero.jpg";
import lipBalmImage from "@/assets/lip-balm.jpg";
import soapImage from "@/assets/glycerin-soap.jpg";
import aloeImage from "@/assets/aloe-gel.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Nature Goodies — Natural Beauty, Made Simple" },
      { name: "description", content: "Small-batch botanical skincare made in Bangalore, with transparent ingredients and honest ₹99–₹199 pricing." },
      { property: "og:title", content: "Nature Goodies — Natural Beauty, Made Simple" },
      { property: "og:description", content: "Meet the first hand-poured botanical trio from Nature Goodies." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const products = [
  { formula: "ND—01", name: "Organic-Inspired Lip Balm", description: "Apricot oil and beeswax for a silky, never-sticky melt.", price: "Under ₹149", image: lipBalmImage, alt: "Natural apricot lip balm surrounded by petals" },
  { formula: "ND—02", name: "Herbal Glycerin Bar", description: "A translucent gentle cleanse with sage and rosemary.", price: "Under ₹129", image: soapImage, alt: "Translucent botanical glycerin soap with herbs" },
  { formula: "ND—03", name: "Soothing Aloe Gel", description: "Crystal-clear cooling care for warm, tired skin.", price: "Under ₹199", image: aloeImage, alt: "Clear aloe vera gel with fresh aloe leaves" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setJoined(true);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
          <a href="#top" className="flex items-center gap-2 font-display text-2xl leading-none" aria-label="Nature Goodies home">
            Nature Goodies <span className="text-primary">•</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm md:flex" aria-label="Main navigation">
            <a className="text-muted-foreground transition-colors hover:text-foreground" href="#collection">Collection</a>
            <a className="text-muted-foreground transition-colors hover:text-foreground" href="#ingredients">Ingredients</a>
            <a className="text-muted-foreground transition-colors hover:text-foreground" href="#standards">Standards</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#waitlist" className="hidden min-h-10 items-center rounded-full bg-secondary px-4 text-sm font-medium text-secondary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex">Join waitlist <ArrowRight className="ml-2 size-4" /></a>
            <button type="button" onClick={() => setMenuOpen((open) => !open)} className="grid size-10 place-items-center rounded-full border border-border md:hidden" aria-label="Toggle menu" aria-expanded={menuOpen}><Menu className="size-5" /></button>
          </div>
        </div>
        {menuOpen && <nav className="grid gap-1 border-t border-border bg-background px-5 py-4 md:hidden"><a href="#collection" onClick={() => setMenuOpen(false)} className="py-2">Collection</a><a href="#ingredients" onClick={() => setMenuOpen(false)} className="py-2">Ingredients</a><a href="#standards" onClick={() => setMenuOpen(false)} className="py-2">Standards</a></nav>}
      </header>

      <main id="top">
        <section className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-secondary text-secondary-foreground">
          <img src={heroImage} alt="Nature Goodies botanical skincare arranged in a sunlit garden" width={1920} height={1000} className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-end gap-10 px-5 pb-20 pt-20 sm:px-6 md:grid-cols-12 md:pb-24">
            <div className="md:col-span-8">
              <p className="animate-rise mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-accent"><Flower2 className="size-4" /> Bangalore botanical lab · batch 01</p>
              <h1 className="animate-rise max-w-[11ch] font-display text-6xl leading-[0.9] text-balance sm:text-7xl md:text-8xl">Natural beauty, <em className="text-primary">made simple.</em></h1>
              <p className="animate-rise mt-6 max-w-[47ch] text-base leading-relaxed text-secondary-foreground/80 sm:text-lg">Everyday skincare with ingredients you understand. Hand-poured in small batches, honestly priced from ₹99–₹199.</p>
              <div className="animate-rise mt-9 flex flex-wrap gap-3"><a href="#waitlist" className="inline-flex min-h-12 items-center rounded-full bg-primary px-6 font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-accent">Get early access <ArrowRight className="ml-2 size-4" /></a><a href="#collection" className="inline-flex min-h-12 items-center rounded-full border border-secondary-foreground/40 px-6 font-medium transition-colors hover:bg-secondary-foreground/10">See the collection <ArrowDown className="ml-2 size-4" /></a></div>
            </div>
            <div className="md:col-span-4">
              <div className="border border-secondary-foreground/25 bg-secondary/55 p-6 backdrop-blur-lg">
                <p className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-accent">Founding trio</p>
                <ul className="space-y-4 text-sm">{products.map((product) => <li key={product.formula} className="flex justify-between gap-4 border-b border-secondary-foreground/15 pb-3 last:border-0 last:pb-0"><span>{product.name}</span><span className="shrink-0 text-accent">{product.price}</span></li>)}</ul>
              </div>
            </div>
          </div>
        </section>

        <div className="overflow-hidden bg-primary py-4 text-primary-foreground"><div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap text-xs font-medium uppercase tracking-[0.16em]">{[...Array(2)].map((_, i) => <div key={i} className="flex items-center gap-8" aria-hidden={i === 1}><span>Small batch botanicals</span><Sparkles className="size-4" /><span>₹99–₹199 everyday</span><Flower2 className="size-4" /><span>Hand-poured in Bangalore</span><Leaf className="size-4" /><span>100% transparent ingredients</span><Heart className="size-4" /></div>)}</div></div>

        <section id="collection" className="relative py-24 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-primary">Inaugural specimens 01—03</p>
            <h2 className="max-w-[13ch] font-display text-5xl leading-none sm:text-6xl">The botanical <em className="text-primary">three.</em></h2>
            <p className="mt-4 max-w-[54ch] text-muted-foreground">One protect, one cleanse, one cool-down. Simple essentials made for real everyday rituals.</p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {products.map((product, index) => <article key={product.formula} className="product-card group overflow-hidden border border-border bg-card p-4 transition-transform duration-300 hover:-translate-y-1"><div className="overflow-hidden"><img src={product.image} alt={product.alt} loading="lazy" width={816} height={816} className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" /></div><div className="px-1 pb-2 pt-5"><div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground"><span>{product.formula}</span><span>Step 0{index + 1}</span></div><h3 className="mt-4 font-display text-3xl leading-none">{product.name}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.description}</p><div className="mt-5 flex items-center justify-between border-t border-border pt-4"><span className="font-medium text-primary">{product.price}</span><a href="#waitlist" aria-label={`Join waitlist for ${product.name}`} className="grid size-9 place-items-center rounded-full bg-secondary text-secondary-foreground transition-transform hover:translate-x-1"><ArrowRight className="size-4" /></a></div></div></article>)}
            </div>
          </div>
        </section>

        <section id="ingredients" className="bg-secondary py-24 text-secondary-foreground sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 md:grid-cols-12">
            <div className="md:col-span-5"><p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">Formulation archive</p><h2 className="mt-4 font-display text-5xl leading-none sm:text-6xl">You can read the <em className="text-primary">whole label.</em></h2><p className="mt-6 max-w-[42ch] leading-relaxed text-secondary-foreground/70">We choose biologically active plant extracts that work with your skin—not against it. No fear-mongering, no mystery ingredients.</p></div>
            <div className="grid gap-px overflow-hidden border border-secondary-foreground/20 bg-secondary-foreground/20 md:col-span-7 sm:grid-cols-2">
              {[{title:"What goes in",copy:"Inner-leaf aloe, cold-pressed apricot oil, plant glycerin, clary sage and rosemary.",icon:Leaf},{title:"What never does",copy:"No parabens, artificial dyes, phthalates, SLS/SLES or synthetic fragrance clouds.",icon:Sparkles}].map(({title,copy,icon:Icon}) => <div key={title} className="bg-secondary p-8"><Icon className="size-7 text-accent" /><h3 className="mt-8 font-display text-3xl text-accent">{title}</h3><p className="mt-3 leading-relaxed text-secondary-foreground/75">{copy}</p></div>)}
            </div>
          </div>
        </section>

        <section id="standards" className="py-24 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-6"><p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">The quality floor</p><h2 className="mt-3 max-w-[16ch] font-display text-5xl leading-none sm:text-6xl">Made by hand, priced for <em className="text-primary">real living.</em></h2><div className="mt-12 grid border-y border-border md:grid-cols-3">{[{value:"₹99–₹199",copy:"Accessible pricing without vanity packaging markups."},{value:"100%",copy:"Transparent ingredients printed in plain language."},{value:"Small batch",copy:"Artisan-formulated to keep every product fresh."}].map((item) => <div key={item.value} className="border-b border-border py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"><p className="font-display text-4xl text-primary">{item.value}</p><p className="mt-2 max-w-[30ch] text-sm leading-relaxed text-muted-foreground">{item.copy}</p></div>)}</div></div></section>

        <section id="waitlist" className="relative overflow-hidden bg-primary py-24 text-primary-foreground sm:py-28"><div className="botanical-mark botanical-mark-left" aria-hidden="true">✿</div><div className="botanical-mark botanical-mark-right" aria-hidden="true">❋</div><div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6"><p className="text-xs font-medium uppercase tracking-[0.18em]">Batch 01 · limited to 500 units</p><h2 className="mt-4 font-display text-5xl leading-none sm:text-7xl">The first poured batch is almost ready.</h2><p className="mx-auto mt-5 max-w-[48ch] text-primary-foreground/80">Join the priority waitlist for guaranteed allocation and an exclusive 20% founding discount.</p>{joined ? <div className="mx-auto mt-8 max-w-md border border-primary-foreground/30 bg-primary-foreground/10 p-5 font-medium">You’re on the list. We’ll save you a jar.</div> : <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@email.com" className="min-h-12 flex-1 rounded-full border border-primary-foreground/30 bg-primary-foreground/15 px-5 text-primary-foreground outline-none placeholder:text-primary-foreground/60 focus:border-primary-foreground" /><Button type="submit" className="shrink-0 bg-secondary text-secondary-foreground hover:bg-accent">Save my jar</Button></form>}<p className="mt-4 text-xs text-primary-foreground/65">No spam, just petals. Unsubscribe anytime.</p></div></section>
      </main>

      <footer className="bg-secondary py-10 text-secondary-foreground"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 text-sm sm:px-6 md:flex-row"><span className="font-display text-2xl">Nature Goodies</span><p className="text-secondary-foreground/60">Natural beauty, made simple in Bangalore.</p><div className="flex gap-6"><a href="#collection" className="hover:text-accent">Collection</a><a href="#waitlist" className="hover:text-accent">Early access</a></div></div></footer>
    </div>
  );
}
