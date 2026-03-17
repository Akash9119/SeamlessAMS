import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimateWrapper from '@/components/ScrollAnimateWrapper';
import logo from '@/assets/logo.png';
import logoWhite from '@/assets/logo-white.png';
import innerPageHeader from '@/assets/inner-page-header.png';

const ColorSwatch = ({ label, hex, hsl, className }: { label: string; hex: string; hsl: string; className: string }) => (
  <div className="flex flex-col gap-2">
    <div className={`h-24 rounded-xl border border-border/30 ${className}`} />
    <p className="font-semibold text-sm text-foreground">{label}</p>
    <p className="text-xs text-muted-foreground font-mono">{hex}</p>
    <p className="text-xs text-muted-foreground font-mono">{hsl}</p>
  </div>
);

const BrandGuidelines: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section
        className="relative min-h-[40vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${innerPageHeader})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 text-center px-6">
          <ScrollAnimateWrapper animation="fade-up">
            <h1 className="text-4xl md:text-6xl font-display text-white mb-4">Brand Guidelines</h1>
            <p className="text-white/80 text-lg max-w-xl mx-auto">
              A reference for how the Seamless brand looks, sounds, and feels across every touchpoint.
            </p>
          </ScrollAnimateWrapper>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20 max-w-5xl space-y-24">

        {/* Brand Overview */}
        <ScrollAnimateWrapper animation="fade-up">
          <section>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">01 — Overview</span>
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">Who We Are</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Seamless', desc: 'Continuity across the entire member journey — joining, renewal, events — without friction.' },
                { title: 'Unified', desc: 'A single source of truth powering both backend and frontend. No syncing, no duplication.' },
                { title: 'Adaptive', desc: 'Future-proof design that supports modern platforms and evolves without disruption.' },
              ].map(({ title, desc }) => (
                <div key={title} className="p-6 rounded-2xl border border-border bg-muted/30">
                  <h3 className="text-lg font-display text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollAnimateWrapper>

        {/* Tagline */}
        <ScrollAnimateWrapper animation="fade-up">
          <section>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">02 — Voice & Tone</span>
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">How We Speak</h2>
            <div className="p-8 rounded-2xl border border-border bg-muted/20 mb-8">
              <p className="text-2xl md:text-3xl font-display text-foreground mb-2">
                "Membership, <span className="text-gradient">without friction.</span>"
              </p>
              <p className="text-muted-foreground text-sm mt-2">Primary tagline</p>
            </div>
            <div className="p-8 rounded-2xl border border-border bg-muted/20 mb-8">
              <p className="text-lg md:text-xl font-display text-foreground">
                "A modern, unified AMS Platform built for now and what's to come."
              </p>
              <p className="text-muted-foreground text-sm mt-2">Brand positioning statement</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-border bg-muted/20">
                <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">We Are</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {['Confident and direct', 'Restrained — no buzzwords', 'Architectural and precise', 'Respectful of the reader\'s intelligence', 'Enterprise-grade, not corporate-cold'].map(t => (
                    <li key={t} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />{t}</li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl border border-border bg-muted/20">
                <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">We Are Not</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {['Salesy or pushy', 'Overly casual or playful', 'Jargon-heavy', 'Vague or abstract', 'Generic marketing-speak'].map(t => (
                    <li key={t} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0" />{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </ScrollAnimateWrapper>

        {/* Logo */}
        <ScrollAnimateWrapper animation="fade-up">
          <section>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">03 — Logo</span>
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">Logo Usage</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-10 rounded-2xl border border-border bg-background flex items-center justify-center">
                <img src={logo} alt="Seamless logo on light" className="h-12" />
              </div>
              <div className="p-10 rounded-2xl border border-border bg-[#3d3652] flex items-center justify-center">
                <img src={logoWhite} alt="Seamless logo on dark" className="h-12" />
              </div>
            </div>
            <div className="mt-6 grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <p className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">↑</span>Primary logo — use on white or light backgrounds.</p>
              <p className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">↑</span>Reversed logo — use on dark or brand-colour backgrounds.</p>
            </div>
            <div className="mt-8 p-6 rounded-2xl border border-border bg-muted/20">
              <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Logo Do's & Don'ts</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-accent font-semibold mb-2">✓ Do</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Maintain clear space equal to the logo height on all sides</li>
                    <li>Use only approved colour variants</li>
                    <li>Keep proportions locked when scaling</li>
                  </ul>
                </div>
                <div>
                  <p className="text-destructive font-semibold mb-2">✕ Don't</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Stretch, distort or rotate the logo</li>
                    <li>Apply drop shadows or effects</li>
                    <li>Place on busy or low-contrast backgrounds</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimateWrapper>

        {/* Colors */}
        <ScrollAnimateWrapper animation="fade-up">
          <section>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">04 — Colour</span>
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-2">Colour Palette</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">Our palette balances trust (blue), creativity (purple), and action (green). Green is reserved as the accent — use sparingly for maximum impact.</p>

            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Primary</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <ColorSwatch label="Brand Blue" hex="#2952D9" hsl="hsl(230, 85%, 55%)" className="bg-primary" />
                <ColorSwatch label="Brand Purple" hex="#8B3DD6" hsl="hsl(270, 70%, 55%)" className="bg-secondary" />
                <ColorSwatch label="Accent Green" hex="#0E9E65" hsl="hsl(160, 84%, 39%)" className="bg-accent" />
                <ColorSwatch label="Deep Navy" hex="#0D1526" hsl="hsl(222, 47%, 11%)" className="bg-foreground" />
              </div>
            </div>

            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Neutral / UI</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <ColorSwatch label="White" hex="#FFFFFF" hsl="hsl(0, 0%, 100%)" className="bg-background border border-border" />
                <ColorSwatch label="Surface" hex="#F3F4F8" hsl="hsl(220, 14%, 96%)" className="bg-muted" />
                <ColorSwatch label="Border" hex="#E2E5ED" hsl="hsl(220, 13%, 91%)" className="bg-border" />
                <ColorSwatch label="Brand Dark" hex="#3d3652" hsl="hsl(252, 19%, 28%)" className="bg-[#3d3652]" />
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-muted/20 text-sm text-muted-foreground">
              <strong className="text-foreground">Accent green</strong> is the brand's action colour. It appears in CTAs, highlighted keywords in headings, and key data points. Do not use it for large background fills.
            </div>
          </section>
        </ScrollAnimateWrapper>

        {/* Typography */}
        <ScrollAnimateWrapper animation="fade-up">
          <section>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">05 — Typography</span>
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-8">Type System</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="p-8 rounded-2xl border border-border bg-muted/20">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Display — Aspira Bold</p>
                <p className="font-display text-5xl text-foreground leading-tight mb-4">Aa</p>
                <p className="font-display text-xl text-foreground mb-2">Aspira Bold</p>
                <p className="text-sm text-muted-foreground">Used for all headings (H1–H6), hero text, and section titles. Weight: 700 only.</p>
                <div className="mt-6 space-y-2">
                  <p className="font-display text-4xl text-foreground">Hero Heading</p>
                  <p className="font-display text-2xl text-foreground">Section Title</p>
                  <p className="font-display text-lg text-foreground">Card Heading</p>
                </div>
              </div>
              <div className="p-8 rounded-2xl border border-border bg-muted/20">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Body — Inter</p>
                <p className="font-body text-5xl text-foreground leading-tight mb-4">Aa</p>
                <p className="font-body text-xl text-foreground mb-2">Inter Regular</p>
                <p className="text-sm text-muted-foreground">Used for all body copy, captions, labels, and UI elements. Weights: 400, 500, 600.</p>
                <div className="mt-6 space-y-2">
                  <p className="font-body text-lg text-foreground">Large body copy — 18px / 400</p>
                  <p className="font-body text-base text-muted-foreground">Standard body — 16px / 400</p>
                  <p className="font-body text-sm font-semibold text-foreground uppercase tracking-widest">Label — 12px / 600</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-muted/20 text-sm">
              <p className="font-semibold text-foreground mb-2">Type Scale Reference</p>
              <div className="overflow-x-auto">
                <table className="w-full text-muted-foreground text-sm">
                  <thead>
                    <tr className="border-b border-border text-xs uppercase tracking-wide text-foreground">
                      <th className="text-left py-2 pr-6">Role</th>
                      <th className="text-left py-2 pr-6">Size</th>
                      <th className="text-left py-2 pr-6">Font</th>
                      <th className="text-left py-2">Weight</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      ['Hero H1', '72–96px', 'Aspira', '700'],
                      ['Section H2', '48–64px', 'Aspira', '700'],
                      ['Card H3', '24–32px', 'Aspira', '700'],
                      ['Large Body', '18px', 'Inter', '400'],
                      ['Body', '16px', 'Inter', '400'],
                      ['Small / Label', '12–14px', 'Inter', '500–600'],
                    ].map(([role, size, font, weight]) => (
                      <tr key={role}>
                        <td className="py-2 pr-6 text-foreground">{role}</td>
                        <td className="py-2 pr-6 font-mono">{size}</td>
                        <td className="py-2 pr-6">{font}</td>
                        <td className="py-2">{weight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </ScrollAnimateWrapper>

        {/* Buttons */}
        <ScrollAnimateWrapper animation="fade-up">
          <section>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">06 — Components</span>
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-8">Buttons & CTAs</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-8 rounded-2xl border border-border bg-muted/20 flex flex-col items-start gap-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Primary CTA</p>
                <button className="btn-cta">Request a Demo</button>
                <p className="text-xs text-muted-foreground">Accent green gradient. Used for primary actions only. One per view.</p>
              </div>
              <div className="p-8 rounded-2xl border border-border bg-muted/20 flex flex-col items-start gap-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Outline Button</p>
                <button className="btn-outline">Learn More</button>
                <p className="text-xs text-muted-foreground">Blue border, transparent fill. Secondary actions alongside a primary CTA.</p>
              </div>
              <div className="p-8 rounded-2xl border border-border bg-muted/20 flex flex-col items-start gap-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Accent Keyword</p>
                <p className="text-2xl font-display text-foreground">Made <span className="text-gradient">simple.</span></p>
                <p className="text-xs text-muted-foreground">Gradient text used on single keywords in headings. Never full sentences.</p>
              </div>
            </div>
          </section>
        </ScrollAnimateWrapper>

        {/* Gradients */}
        <ScrollAnimateWrapper animation="fade-up">
          <section>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">07 — Gradients</span>
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-8">Gradients</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="h-32 rounded-2xl mb-3" style={{ background: 'linear-gradient(135deg, hsl(230, 85%, 55%) 0%, hsl(270, 70%, 55%) 100%)' }} />
                <p className="font-semibold text-sm text-foreground">Hero / Brand</p>
                <p className="text-xs text-muted-foreground font-mono mt-1">Blue → Purple · 135°</p>
                <p className="text-xs text-muted-foreground">Overlays, hero backgrounds</p>
              </div>
              <div>
                <div className="h-32 rounded-2xl mb-3" style={{ background: 'linear-gradient(135deg, hsl(160, 84%, 39%) 0%, hsl(160, 84%, 45%) 100%)' }} />
                <p className="font-semibold text-sm text-foreground">CTA / Action</p>
                <p className="text-xs text-muted-foreground font-mono mt-1">Green → Light Green · 135°</p>
                <p className="text-xs text-muted-foreground">Primary CTA buttons, glow effects</p>
              </div>
              <div>
                <div className="h-32 rounded-2xl mb-3" style={{ background: 'linear-gradient(180deg, hsl(270, 70%, 55%) 0%, hsl(280, 65%, 45%) 100%)' }} />
                <p className="font-semibold text-sm text-foreground">Purple Depth</p>
                <p className="text-xs text-muted-foreground font-mono mt-1">Purple → Deep Purple · 180°</p>
                <p className="text-xs text-muted-foreground">Section backgrounds, cards</p>
              </div>
            </div>
          </section>
        </ScrollAnimateWrapper>

        {/* Spacing & Radius */}
        <ScrollAnimateWrapper animation="fade-up">
          <section>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">08 — Spacing & Shape</span>
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-8">Spacing & Border Radius</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-border bg-muted/20">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">Border Radius</p>
                <div className="space-y-4">
                  {[
                    { label: 'Small (sm)', cls: 'rounded-sm', val: '6px' },
                    { label: 'Medium (md)', cls: 'rounded-md', val: '8px' },
                    { label: 'Large (lg)', cls: 'rounded-lg', val: '10px' },
                    { label: 'Extra Large', cls: 'rounded-2xl', val: '16px' },
                    { label: 'Full (pill)', cls: 'rounded-full', val: '9999px' },
                  ].map(({ label, cls, val }) => (
                    <div key={label} className="flex items-center gap-4">
                      <div className={`w-16 h-8 bg-primary/20 border border-primary/30 ${cls}`} />
                      <div>
                        <p className="text-sm text-foreground">{label}</p>
                        <p className="text-xs text-muted-foreground font-mono">{val}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-2xl border border-border bg-muted/20">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">Spacing Scale</p>
                <div className="space-y-3">
                  {[
                    ['4px', 'w-1', 'Micro — icon gaps'],
                    ['8px', 'w-2', 'XS — inline spacing'],
                    ['16px', 'w-4', 'SM — compact elements'],
                    ['24px', 'w-6', 'MD — component padding'],
                    ['48px', 'w-12', 'LG — section gaps'],
                    ['96px', 'w-24', 'XL — section padding'],
                  ].map(([val, cls, desc]) => (
                    <div key={val} className="flex items-center gap-3">
                      <div className={`h-3 bg-primary/30 ${cls} rounded flex-shrink-0`} />
                      <p className="text-xs text-muted-foreground font-mono w-10">{val}</p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimateWrapper>

      </div>

      <Footer />
    </div>
  );
};

export default BrandGuidelines;
