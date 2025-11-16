/*
  TAILWIND DIAGNOSTIC (by Codex):

  - Tailwind working? YES — after wiring up a real Tailwind build, the temporary bg-red-500 debug block renders as a red bar (it was unstyled before the fix, so it was removed once verified).
  - tailwind.config content paths: FIXED — a new tailwind.config.ts now scans ./app, ./components, ./pages, ./lib, and ./data so App Router + shared UI files are covered.
  - globals.css + import: FIXED — RootLayout already imported app/globals.css, and that file now uses @tailwind directives instead of a CDN import so Next injects the utilities.
  - Project structure / multiple apps issue: App Router is the single UI surface; /pages/api only exposes API routes, so there is no competing frontend.

  Root cause (best determination):
  - Tailwind CSS had never been installed or configured in the project. Because the app relied on a CDN @import, Next.js never compiled the Tailwind utility classes (gradients, colors, cards) used in the new design.

  Temporary debug elements:
  - None — the bg-red-500 diagnostic div was removed after confirming the compiled styles took effect.
*/
// app/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marble Studio — Premium Marble & Stone Surfaces",
  description:
    "Discover premium marble, granite, and stone surfaces for luxury homes, hotels, and commercial spaces. Curated collections, custom fabrication, and end-to-end installation.",
};

export default function HomePage() {
  return (
    <main className="flex-1 bg-gradient-to-b from-slate-50 via-stone-50 to-slate-100 text-slate-900">
      {/* HERO */}
      <section className="border-b border-stone-200 bg-gradient-to-b from-slate-50/80 via-stone-50/80 to-slate-100/80">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              Marble · Stone · Surfaces
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
              Crafted marble surfaces for
              <span className="block bg-gradient-to-r from-slate-900 via-stone-800 to-slate-700 bg-clip-text text-transparent">
                timeless interiors.
              </span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              From Italian Carrara to deep Nero Marquina, we curate, fabricate, and install
              premium stone surfaces for homes, hotels, restaurants, and architectural projects.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#collections"
                className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium bg-slate-900 text-slate-50 shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-50 transition"
              >
                View marble collections
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium border border-slate-300 bg-white/80 text-slate-800 hover:bg-slate-100 hover:border-slate-400 transition"
              >
                Book a showroom visit
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-6 text-xs text-slate-500">
              <div>
                <div className="font-semibold text-slate-800">500+</div>
                <div>Completed luxury projects</div>
              </div>
              <div>
                <div className="font-semibold text-slate-800">30+</div>
                <div>Curated marble collections</div>
              </div>
              <div>
                <div className="font-semibold text-slate-800">12</div>
                <div>Countries sourced from</div>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-md mx-auto">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-stone-200 via-slate-200 to-stone-300 shadow-xl overflow-hidden border border-stone-300">
              {/* Placeholder “slab wall” style composition */}
              <div className="grid grid-cols-2 grid-rows-3 h-full">
                <div className="bg-[radial-gradient(circle_at_top,_#f9fafb,_#e5e7eb)] border-b border-r border-stone-300" />
                <div className="bg-[radial-gradient(circle_at_top,_#f5f5f4,_#d6d3d1)] border-b border-l border-stone-300" />
                <div className="bg-[radial-gradient(circle_at_top,_#fefce8,_#e7e5e4)] border-y border-r border-stone-300" />
                <div className="bg-[radial-gradient(circle_at_top,_#e5e7eb,_#9ca3af)] border-y border-l border-stone-300" />
                <div className="bg-[radial-gradient(circle_at_top,_#fef2f2,_#e5e7eb)] border-t border-r border-stone-300" />
                <div className="bg-[radial-gradient(circle_at_top,_#e5e7eb,_#111827)] border-t border-l border-stone-300" />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white/90 px-4 py-3 shadow-lg border border-stone-200 text-xs text-slate-700">
              Calibrated slabs · Bookmatched sets · Custom edges
            </div>
          </div>
        </div>
      </section>

      {/* STATS / TRUST */}
      <section className="bg-white border-y border-stone-200">
        <div className="container mx-auto px-4 md:px-6 py-10 md:py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <StatCard
              label="Architect partners"
              value="120+"
              note="Working with leading studios and interior designers."
            />
            <StatCard
              label="Lead time"
              value="4–6 weeks"
              note="From selection to installation for most projects."
            />
            <StatCard
              label="Quality checks"
              value="3x"
              note="Sourcing, fabrication, and pre-installation inspections."
            />
            <StatCard
              label="Applications"
              value="Floors · Walls · Counters"
              note="For kitchens, baths, lobbies, and façades."
            />
          </div>
        </div>
      </section>

      {/* FEATURED MARBLES */}
      <section
        id="collections"
        className="bg-gradient-to-b from-stone-100 via-slate-100 to-stone-50 border-b border-stone-200"
      >
        <div className="container mx-auto px-4 md:px-6 py-14 md:py-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Signature marble collections
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-xl">
                Curated stones by color, veining, and finish — from bright Calacatta whites to deep,
                dramatic Nero marbles.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center self-start rounded-full border border-stone-300 bg-white/80 px-4 py-2 text-xs font-medium text-slate-800 hover:bg-stone-100 hover:border-stone-400 transition"
            >
              Share your moodboard →
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <MarbleCard
              name="Calacatta Cloud"
              tone="Warm white with bold, golden-grey veining."
              tag="Light · Statement · Luxury kitchens"
            />
            <MarbleCard
              name="Nero Notte"
              tone="Deep charcoal base with fine, silver veining."
              tag="Dark · Dramatic · Hotel lobbies"
            />
            <MarbleCard
              name="Crema Luna"
              tone="Soft beige field with gentle cloud-like movement."
              tag="Neutral · Calm · Living spaces"
            />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white border-b border-stone-200">
        <div className="container mx-auto px-4 md:px-6 py-14 md:py-16">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              A clear, architectural process
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              We support you from concept to installation, with technical drawings, samples, and a
              dedicated project coordinator.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <StepCard
              step="01"
              title="Selection & sampling"
              body="Shortlist stones by color, pattern, and application. We share physical samples and large-format photos to align with your design intent."
            />
            <StepCard
              step="02"
              title="Design & fabrication"
              body="We measure, template, and prepare shop drawings before cutting. Edges, cutouts, and joints are planned for both performance and aesthetics."
            />
            <StepCard
              step="03"
              title="Installation & aftercare"
              body="Installation is executed by trained teams using marble-safe adhesives, sealers, and grouts — with guidance on maintenance and care."
            />
          </div>
        </div>
      </section>

      {/* CORRIDORS / GALLERY STRIP */}
      <section className="bg-slate-900 text-slate-50 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-6 py-14 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Corridors, lobbies, and feature walls
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Long sightlines. Seamless bookmatching. Subtle lighting over stone. We help you
                design spaces that feel immersive the moment you walk in.
              </p>
            </div>
            <div className="text-xs text-slate-400 max-w-sm">
              Full-height cladding, recessed skirtings, and staircase details are coordinated with
              your lighting and furniture layouts.
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="h-40 sm:h-48 rounded-3xl bg-gradient-to-br from-slate-700 via-slate-800 to-black shadow-lg border border-slate-700" />
            <div className="h-40 sm:h-56 rounded-3xl bg-[radial-gradient(circle_at_top,_#e5e7eb,_#020617)] shadow-lg border border-slate-700" />
            <div className="h-40 sm:h-48 rounded-3xl bg-gradient-to-br from-zinc-900 via-slate-900 to-zinc-800 shadow-lg border border-slate-700" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-to-b from-stone-50 via-slate-50 to-white border-b border-stone-200">
        <div className="container mx-auto px-4 md:px-6 py-14 md:py-16">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              Trusted by designers and homeowners
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              We act as a project partner — aligning on timelines, budgets, and details, not just
              supplying stone.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <TestimonialCard
              quote="They didn’t just send us slabs — they helped us tune every joint, edge, and junction to match our interior concept."
              name="Principal Architect, Bangalore"
            />
            <TestimonialCard
              quote="The kitchen island became the heart of our home. The veining alignment is exactly what we had in mind."
              name="Homeowner, Athens"
            />
            <TestimonialCard
              quote="From sampling to installation, communication was clear and professional. The lobby now feels like a five-star hotel."
              name="Hotel Owner, Dubai"
            />
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section
        id="contact"
        className="bg-slate-900 text-slate-50 border-t border-slate-800"
      >
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-14">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Share your next project with us
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Send us your plans, reference images, or moodboard, and we’ll reply with a tailored
                stone shortlist and timeline estimate.
              </p>
            </div>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center rounded-full bg-slate-50 text-slate-900 px-5 py-3 text-sm font-medium shadow-sm hover:bg-slate-200 transition"
              >
                Email project details
              </a>
              <div className="text-xs text-slate-400">
                You can also attach drawings, renders, or Pinterest boards — we’ll take it from
                there.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* Small presentational subcomponents to keep JSX tidy */

type StatCardProps = {
  label: string;
  value: string;
  note: string;
};

function StatCard({ label, value, note }: StatCardProps) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-white via-stone-50 to-slate-50 border border-stone-200 shadow-sm px-4 py-5">
      <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
        {label}
      </div>
      <div className="mt-2 text-2xl font-semibold text-slate-900">{value}</div>
      <p className="mt-2 text-xs text-slate-600 leading-relaxed">{note}</p>
    </div>
  );
}

type MarbleCardProps = {
  name: string;
  tone: string;
  tag: string;
};

function MarbleCard({ name, tone, tag }: MarbleCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-stone-200 bg-white/90 shadow-sm hover:shadow-md hover:-translate-y-1 transition">
      <div className="h-40 bg-[radial-gradient(circle_at_top,_#f9fafb,_#e5e7eb)] border-b border-stone-200" />
      <div className="p-4 sm:p-5">
        <h3 className="text-base font-semibold text-slate-900">{name}</h3>
        <p className="mt-1 text-xs text-slate-600">{tone}</p>
        <p className="mt-3 inline-flex rounded-full bg-stone-100 px-3 py-1 text-[11px] font-medium text-slate-700">
          {tag}
        </p>
      </div>
    </article>
  );
}

type StepCardProps = {
  step: string;
  title: string;
  body: string;
};

function StepCard({ step, title, body }: StepCardProps) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-gradient-to-br from-white via-stone-50 to-slate-50 px-4 py-5 shadow-sm">
      <div className="inline-flex items-center rounded-full bg-slate-900 text-slate-50 px-3 py-1 text-[11px] font-medium tracking-[0.18em]">
        {step}
      </div>
      <h3 className="mt-3 text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-xs text-slate-600 leading-relaxed">{body}</p>
    </div>
  );
}

type TestimonialCardProps = {
  quote: string;
  name: string;
};

function TestimonialCard({ quote, name }: TestimonialCardProps) {
  return (
    <figure className="rounded-3xl border border-stone-200 bg-white/90 px-4 py-5 shadow-sm">
      <p className="text-xs text-slate-700 leading-relaxed">“{quote}”</p>
      <figcaption className="mt-3 text-xs font-medium text-slate-500">{name}</figcaption>
    </figure>
  );
}
