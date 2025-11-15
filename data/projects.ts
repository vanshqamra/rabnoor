export interface Project {
  slug: string;
  name: string;
  location: string;
  marblesUsed: string[];
  description: string;
  area: string;
  images: string[];
}

export const projects: Project[] = [
  {
    slug: 'athens-luxury-villa',
    name: 'Luxury Villa in Athens',
    location: 'Athens, Greece',
    marblesUsed: ['Thassos', 'Volakas'],
    area: '1,850 m² of interiors and terraces',
    description:
      'A hillside villa overlooking the Aegean featuring book-matched Volakas feature walls and radiant-heated floors finished in Thassos.',
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    slug: 'santorini-boutique-hotel',
    name: 'Boutique Hotel, Santorini',
    location: 'Santorini, Greece',
    marblesUsed: ['Statuario'],
    area: '120 guestrooms + spa',
    description:
      'Infinity pools and suites wrapped in Statuario marble, balancing Cycladic minimalism with Italian glamour.',
    images: [
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    slug: 'dubai-commercial-tower',
    name: 'Commercial Tower, Dubai',
    location: 'Dubai, UAE',
    marblesUsed: ['Crema Marfil', 'Nero Marquina'],
    area: '28,000 m² public areas',
    description:
      'A high-rise lobby with Crema Marfil flooring contrasted by Nero Marquina reception desks and elevator portals.',
    images: [
      'https://images.unsplash.com/photo-1472220625704-91e1462799b2?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    slug: 'rajasthan-heritage-villa',
    name: 'Heritage Villa, Rajasthan',
    location: 'Kishangarh, India',
    marblesUsed: ['Makrana White'],
    area: '2,400 m² courtyard palace',
    description:
      'A restored haveli featuring hand-carved Makrana White jalis, arches, and mirror-finished floors.',
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    slug: 'hamburg-design-hotel',
    name: 'Design Hotel, Hamburg',
    location: 'Hamburg, Germany',
    marblesUsed: ['Pietra Grey', 'Carrara'],
    area: '210 rooms + lobby',
    description:
      'Modern German hospitality concept featuring Pietra Grey lobby floors with Carrara-clad bathroom pods shipped via our EU warehouse.',
    images: [
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    slug: 'athens-seafront-spa',
    name: 'Seafront Spa, Athens Riviera',
    location: 'Athens, Greece',
    marblesUsed: ['Volakas', 'Rainforest Green'],
    area: '4,500 m² wellness center',
    description:
      'Mediterranean wellness resort combining soft Volakas reception areas with Rainforest Green hammam chambers.',
    images: [
      'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];
