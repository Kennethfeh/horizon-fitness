import SectionHeading from "../../components/SectionHeading";

const sitemap = [
  { label: "Home", items: ["Hero", "Programs", "Schedule", "Coaches", "Testimonials"] },
  { label: "Blueprint", items: ["Sitemap", "Responsive grids", "Motion specs", "Dev checklist"] },
  { label: "App", items: ["Feed", "Calendar", "Coach chat"] },
];

const grids = [
  { module: "Hero", grid: "12-col fluid", notes: "Split columns (60/40)" },
  { module: "Program cards", grid: "3-up", notes: "Auto height with shared min" },
  { module: "Schedule", grid: "2-col", notes: "Stacked cards on <1024px" },
];

export const metadata = {
  title: "Horizon Fitness Blueprint",
  description: "Wireframes, grids, and motion specs for the Horizon Fitness concept.",
};

export default function Blueprint() {
  return (
    <main className="px-6 py-16 max-w-5xl mx-auto space-y-16">
      <SectionHeading
        eyebrow="Blueprint"
        title="Structural + interaction notes"
        description="Use this page alongside the Figma file to confirm layout, spacing, and flow mappings."
        align="left"
      />

      <section className="grid gap-6 md:grid-cols-3">
        {sitemap.map((node) => (
          <article key={node.label} className="card-surface p-5">
            <p className="text-sm font-semibold text-rose-500">{node.label}</p>
            <ul className="mt-3 space-y-1 text-sm text-slate-600">
              {node.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section>
        <h3 className="text-lg font-semibold">Responsive grids</h3>
        <table className="mt-4 w-full text-sm">
          <thead className="text-slate-500">
            <tr>
              <th className="py-2 text-left">Module</th>
              <th className="py-2 text-left">Grid</th>
              <th className="py-2 text-left">Notes</th>
            </tr>
          </thead>
          <tbody>
            {grids.map((row) => (
              <tr key={row.module} className="border-t border-slate-200">
                <td className="py-3 font-medium">{row.module}</td>
                <td className="py-3">{row.grid}</td>
                <td className="py-3 text-slate-600">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h3 className="text-lg font-semibold">Motion + content notes</h3>
        <ul className="mt-4 space-y-3 text-sm text-slate-600">
          <li>• Buttons use 200ms ease-out scale and drop shadow, documented in globals.</li>
          <li>• Card hover states lift by 4px with gradient border highlight.</li>
          <li>• Schedule ticker can animate via CSS `scroll-snap` when expanded.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold">Developer checklist</h3>
        <ol className="mt-4 space-y-2 text-sm text-slate-600">
          <li>1. Import global tokens from `app/globals.css`.</li>
          <li>2. Mirror grid behavior documented above for the marketing site.</li>
          <li>3. Reference README for deployment and docs/design-system.md for tokens.</li>
          <li>4. Swap in real imagery before production.</li>
        </ol>
      </section>
    </main>
  );
}
