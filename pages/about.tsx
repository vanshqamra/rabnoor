import { Section } from '../components/shared/Section';
import { PageHeader } from '../components/shared/PageHeader';
import { teamMembers } from '../data/team';

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About Rab Noor Pvt Ltd"
        description="Bridging Indian quarry networks and European buyers through marblesnearme.com, an always-on marble sourcing and logistics platform."
      />
      <Section eyebrow="Our Story" title="From Rajasthan quarries to European studios">
        <p className="text-lg text-slate-600">
          Rab Noor Pvt Ltd was founded to give global architects a single partner for Indian and European marble. With teams in
          Kishangarh and Athens, we combine on-ground quarry relationships, factory partnerships, and digital collaboration tools
          to deliver marble that feels near you, wherever your project is located.
        </p>
      </Section>
      <Section eyebrow="Vision & Mission" title="Transparency, reliability, and design-forward sourcing">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-2xl font-semibold">Vision</h3>
            <p className="mt-3 text-slate-600">
              Make premium marble from India and Europe accessible to every serious project through agile logistics and B2B
              collaboration.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-2xl font-semibold">Mission</h3>
            <p className="mt-3 text-slate-600">
              Provide honest grading, ethical sourcing, and dependable shipping schedules so our partners can specify marble with
              confidence.
            </p>
          </div>
        </div>
      </Section>
      <Section eyebrow="Leadership" title="Meet the Rab Noor team">
        <div className="grid gap-6 md:grid-cols-2">
          {teamMembers.map((member) => (
            <div key={member.name} className="rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">{member.location}</p>
              <h3 className="mt-2 text-2xl font-semibold">{member.name}</h3>
              <p className="text-sm font-semibold text-slate-500">{member.role}</p>
              <p className="mt-3 text-slate-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section eyebrow="Quarries & factory partners" title="Deep roots in India + Europe">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold">Rajasthan Quarry Belt</h3>
            <p className="mt-2 text-slate-600">
              Makrana, Kishangarh, Rajsamand, and Udaipur partners provide steady access to Makrana White, Rainforest, and Emerald
              Black. Dedicated QC teams inspect each block before cutting.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold">European Collaborations</h3>
            <p className="mt-2 text-slate-600">
              Partnerships across Italy (Carrara, Botticino, Portoro), Greece (Thassos, Volakas, Arna White), Spain (Crema Marfil,
              Nero Marquina), and Turkey (Bursa Beige, Picasso Grey) allow multi-origin consolidation.
            </p>
          </div>
        </div>
      </Section>
      <Section eyebrow="Certifications & compliance" title="Quality and safety assurance">
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>ISPM 15 treated wooden crates with heat-treatment certificates.</li>
          <li>CE, ISO, and radiation compliance documentation prepared per shipment.</li>
          <li>Ethical sourcing policy with worker safety audits and PPE verification.</li>
        </ul>
      </Section>
      <Section eyebrow="Sustainability & Ethics" title="Responsible sourcing is non-negotiable">
        <p className="text-lg text-slate-600">
          From optimized cutting plans that minimize waste to container stuffing that reduces breakage, every Rab Noor workflow is
          designed for resource efficiency. We invest in training quarry teams on safety, ensure compliance with Indian labour
          codes, and offset carbon via multimodal routing when possible.
        </p>
      </Section>
    </div>
  );
}
