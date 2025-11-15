import { testimonials } from '../../data/testimonials';

export const TestimonialStrip = () => (
  <div className="bg-white py-10">
    <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
      {testimonials.map((testimonial) => (
        <div key={testimonial.name} className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
          <p className="text-lg font-semibold text-slate-900">“{testimonial.quote}”</p>
          <p className="mt-4 text-sm font-semibold text-emerald-600">{testimonial.name}</p>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{testimonial.company}</p>
        </div>
      ))}
    </div>
  </div>
);
