export interface Testimonial {
  name: string;
  company: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Anastasia V.',
    company: 'Cycladic Hospitality Group',
    quote: 'Rab Noor delivered pre-booked Thassos slabs to our Santorini resort right on schedule despite a packed summer season.'
  },
  {
    name: 'Marco D.',
    company: 'Milano Atelier',
    quote: 'The team sourced Portoro Black and coordinated polishing in Italy before shipping to our Paris boutique.'
  },
  {
    name: 'Arjun S.',
    company: 'Skyline Developers',
    quote: 'Makrana and Rainforest slabs arrived perfectly graded with ISPM 15 crates, making installation seamless.'
  }
];
