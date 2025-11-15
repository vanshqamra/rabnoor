export type ProductCategory = 'white' | 'beige' | 'grey' | 'black' | 'colored';

export interface ProductImage {
  label: string;
  url: string;
}

export interface TechnicalSpec {
  label: string;
  value: string;
}

export interface Product {
  name: string;
  slug: string;
  origin: string;
  category: ProductCategory;
  description: string;
  heroTagline: string;
  imageGallery: ProductImage[];
  technicalData: TechnicalSpec[];
  applications: string[];
  pricing: {
    fob: string;
    cif: string;
  };
  availability: string;
  baseColor: string;
  veinStyle: string;
}

const imagePlaceholder = (query: string) =>
  `https://images.unsplash.com/${query}?auto=format&fit=crop&w=1200&q=80`;

export const products: Product[] = [
  {
    name: 'Makrana White',
    slug: 'makrana-white',
    origin: 'Rajasthan, India',
    category: 'white',
    description:
      'Historic Indian white marble celebrated for its pure background and timeless beauty in palaces and temples.',
    heroTagline: 'Iconic Indian white marble for heritage and contemporary luxury projects.',
    imageGallery: [
      { label: 'Slab', url: imagePlaceholder('photo-1505691938895-1758d7feb511') },
      { label: 'Texture', url: imagePlaceholder('photo-1505693416388-ac5ce068fe85') },
      { label: 'Installation', url: imagePlaceholder('photo-1523419409543-0c1df022bddb') }
    ],
    technicalData: [
      { label: 'Origin Country', value: 'India' },
      { label: 'Base Color', value: 'Brilliant White' },
      { label: 'Vein Style', value: 'Subtle feather veins' },
      { label: 'Finish Options', value: 'Polished, Honed, Leather' },
      { label: 'Thickness', value: '18mm, 20mm slabs' },
      { label: 'Typical Tile Sizes', value: '60x60, 80x80, custom' },
      { label: 'Density', value: '2.56 g/cm³' },
      { label: 'Water Absorption', value: '0.30%' },
      { label: 'Porosity', value: 'Low' }
    ],
    applications: [
      'Palatial flooring',
      'Walls & columns',
      'Sculptural elements',
      'Luxury villas',
      'Hotels & temples'
    ],
    pricing: {
      fob: 'USD 18-30/m²',
      cif: 'EUR 32-48/m²'
    },
    availability: 'Cut-to-size within 14-18 days ex Mundra/Nhava Sheva.',
    baseColor: 'White',
    veinStyle: 'Subtle'
  },
  {
    name: 'Thassos',
    slug: 'thassos',
    origin: 'Thassos, Greece',
    category: 'white',
    description:
      'Ultra-white crystalline marble favored for modern minimalist interiors and boutique hotels.',
    heroTagline: 'Greek white marble with mirror-like brightness for pristine interiors.',
    imageGallery: [
      { label: 'Slab', url: imagePlaceholder('photo-1505691723518-36a5ac3be353') },
      { label: 'Texture', url: imagePlaceholder('photo-1487412720507-e7ab37603c6f') },
      { label: 'Installation', url: imagePlaceholder('photo-1505693314120-0d443867891c') }
    ],
    technicalData: [
      { label: 'Origin Country', value: 'Greece' },
      { label: 'Base Color', value: 'Snow White' },
      { label: 'Vein Style', value: 'Virtually veinless' },
      { label: 'Finish Options', value: 'Polished, Honed' },
      { label: 'Thickness', value: '20mm, 30mm slabs' },
      { label: 'Typical Tile Sizes', value: '60x60, 60x120, custom' },
      { label: 'Density', value: '2.74 g/cm³' },
      { label: 'Water Absorption', value: '0.18%' },
      { label: 'Porosity', value: 'Very Low' }
    ],
    applications: ['Hotels', 'Retail boutiques', 'Bathrooms', 'Reception desks', 'Wall cladding'],
    pricing: {
      fob: 'USD 45-65/m²',
      cif: 'EUR 70-95/m²'
    },
    availability: 'Stock in Thessaloniki warehouse for rapid EU delivery.',
    baseColor: 'White',
    veinStyle: 'Minimal'
  },
  {
    name: 'Statuario',
    slug: 'statuario',
    origin: 'Carrara, Italy',
    category: 'white',
    description:
      'Italian classic featuring bold, dramatic grey veining on a luminous white background.',
    heroTagline: 'Statement Italian marble for iconic hotels, penthouses, and retail concepts.',
    imageGallery: [
      { label: 'Slab', url: imagePlaceholder('photo-1451976426598-a7593bd6d0b2') },
      { label: 'Texture', url: imagePlaceholder('photo-1493663284031-b7e3aefcae8e') },
      { label: 'Installation', url: imagePlaceholder('photo-1469474968028-56623f02e42e') }
    ],
    technicalData: [
      { label: 'Origin Country', value: 'Italy' },
      { label: 'Base Color', value: 'Milky White' },
      { label: 'Vein Style', value: 'Bold dramatic veins' },
      { label: 'Finish Options', value: 'Polished, Honed, Satin' },
      { label: 'Thickness', value: '20mm slabs' },
      { label: 'Typical Tile Sizes', value: '60x120, 80x80, book-matched panels' },
      { label: 'Density', value: '2.70 g/cm³' },
      { label: 'Water Absorption', value: '0.16%' },
      { label: 'Porosity', value: 'Low' }
    ],
    applications: ['Feature walls', 'Bathrooms', 'Reception desks', 'Luxury villas', 'Boutique hotels'],
    pricing: {
      fob: 'USD 120-180/m²',
      cif: 'EUR 155-220/m²'
    },
    availability: 'EU bonded warehouse stock + direct quarry blocks on request.',
    baseColor: 'White',
    veinStyle: 'Bold'
  },
  {
    name: 'Volakas',
    slug: 'volakas',
    origin: 'Drama, Greece',
    category: 'white',
    description:
      'Cloudy white marble with elegant grey-beige veins, ideal for book-matched feature walls.',
    heroTagline: 'Greek white marble balancing warmth and sophistication.',
    imageGallery: [
      { label: 'Slab', url: imagePlaceholder('photo-1505692794400-9d5ad4df9a2d') },
      { label: 'Texture', url: imagePlaceholder('photo-1481277542470-605612bd2d61') },
      { label: 'Installation', url: imagePlaceholder('photo-1505691938895-1758d7feb511') }
    ],
    technicalData: [
      { label: 'Origin Country', value: 'Greece' },
      { label: 'Base Color', value: 'White with taupe veins' },
      { label: 'Vein Style', value: 'Cloudy linear' },
      { label: 'Finish Options', value: 'Polished, Honed, Brushed' },
      { label: 'Thickness', value: '18mm, 20mm slabs' },
      { label: 'Typical Tile Sizes', value: '60x60, 60x120, custom paneling' },
      { label: 'Density', value: '2.70 g/cm³' },
      { label: 'Water Absorption', value: '0.30%' },
      { label: 'Porosity', value: 'Medium-Low' }
    ],
    applications: ['Hotel lobbies', 'Lift surrounds', 'Fireplaces', 'Luxury residences'],
    pricing: {
      fob: 'USD 45-60/m²',
      cif: 'EUR 68-85/m²'
    },
    availability: 'Ready slabs stocked in Thessaloniki and Athens depots.',
    baseColor: 'White',
    veinStyle: 'Cloudy'
  },
  {
    name: 'Carrara',
    slug: 'carrara',
    origin: 'Carrara, Italy',
    category: 'white',
    description:
      'Timeless Italian marble with soft grey veins, versatile for residential and commercial projects.',
    heroTagline: 'Classic Italian marble that balances budget and prestige.',
    imageGallery: [
      { label: 'Slab', url: imagePlaceholder('photo-1497534446932-c925b458314e') },
      { label: 'Texture', url: imagePlaceholder('photo-1481277542470-605612bd2d61') },
      { label: 'Installation', url: imagePlaceholder('photo-1469474968028-56623f02e42e') }
    ],
    technicalData: [
      { label: 'Origin Country', value: 'Italy' },
      { label: 'Base Color', value: 'Cool White' },
      { label: 'Vein Style', value: 'Feathered grey' },
      { label: 'Finish Options', value: 'Polished, Honed, Brushed' },
      { label: 'Thickness', value: '18mm, 20mm slabs' },
      { label: 'Typical Tile Sizes', value: '30x60, 60x60, large formats' },
      { label: 'Density', value: '2.71 g/cm³' },
      { label: 'Water Absorption', value: '0.24%' },
      { label: 'Porosity', value: 'Low' }
    ],
    applications: ['Countertops', 'Flooring', 'Bathrooms', 'Commercial spaces'],
    pricing: {
      fob: 'USD 60-85/m²',
      cif: 'EUR 90-120/m²'
    },
    availability: 'Direct import and stocked bundles for EU/India distribution.',
    baseColor: 'White',
    veinStyle: 'Feathered'
  },
  {
    name: 'Arna White',
    slug: 'arna-white',
    origin: 'Peloponnese, Greece',
    category: 'white',
    description:
      'Bright white marble with faint golden movement suitable for high-contrast interiors.',
    heroTagline: 'Mediterranean white marble with soft gold nuances.',
    imageGallery: [
      { label: 'Slab', url: imagePlaceholder('photo-1470246973918-29a93221c455') },
      { label: 'Texture', url: imagePlaceholder('photo-1487412720507-e7ab37603c6f') },
      { label: 'Installation', url: imagePlaceholder('photo-1505691938895-1758d7feb511') }
    ],
    technicalData: [
      { label: 'Origin Country', value: 'Greece' },
      { label: 'Base Color', value: 'Luminous White' },
      { label: 'Vein Style', value: 'Soft golden lines' },
      { label: 'Finish Options', value: 'Polished, Honed, Satin' },
      { label: 'Thickness', value: '18mm, 20mm slabs' },
      { label: 'Typical Tile Sizes', value: '60x60, 80x80, custom' },
      { label: 'Density', value: '2.68 g/cm³' },
      { label: 'Water Absorption', value: '0.25%' },
      { label: 'Porosity', value: 'Low' }
    ],
    applications: ['Boutique retail', 'Yacht interiors', 'Luxury homes'],
    pricing: {
      fob: 'USD 52-70/m²',
      cif: 'EUR 78-102/m²'
    },
    availability: 'Bulk availability through Peloponnese quarry partners.',
    baseColor: 'White',
    veinStyle: 'Soft'
  },
  {
    name: 'Crema Marfil',
    slug: 'crema-marfil',
    origin: 'Alicante, Spain',
    category: 'beige',
    description:
      'Warm beige marble with uniform appearance widely used for hospitality flooring.',
    heroTagline: 'Spain’s best-known beige marble for global hospitality chains.',
    imageGallery: [
      { label: 'Slab', url: imagePlaceholder('photo-1505691723518-36a5ac3be353') },
      { label: 'Texture', url: imagePlaceholder('photo-1470246973918-29a93221c455') },
      { label: 'Installation', url: imagePlaceholder('photo-1505691938895-1758d7feb511') }
    ],
    technicalData: [
      { label: 'Origin Country', value: 'Spain' },
      { label: 'Base Color', value: 'Cream Beige' },
      { label: 'Vein Style', value: 'Soft random veins' },
      { label: 'Finish Options', value: 'Polished, Honed, Brushed' },
      { label: 'Thickness', value: '18mm, 20mm slabs' },
      { label: 'Typical Tile Sizes', value: '60x60, 60x120, staircase sets' },
      { label: 'Density', value: '2.71 g/cm³' },
      { label: 'Water Absorption', value: '0.34%' },
      { label: 'Porosity', value: 'Medium' }
    ],
    applications: ['Hotels', 'Shopping malls', 'Residential flooring', 'Wall panels'],
    pricing: {
      fob: 'USD 40-60/m²',
      cif: 'EUR 68-85/m²'
    },
    availability: 'Consolidated shipments ex Valencia & Thessaloniki hubs.',
    baseColor: 'Beige',
    veinStyle: 'Soft'
  },
  {
    name: 'Bursa Beige',
    slug: 'bursa-beige',
    origin: 'Bursa, Turkey',
    category: 'beige',
    description:
      'Dense beige marble with darker veins ideal for commercial flooring.',
    heroTagline: 'Reliable Turkish beige marble for high-traffic applications.',
    imageGallery: [
      { label: 'Slab', url: imagePlaceholder('photo-1505691723518-36a5ac3be353') },
      { label: 'Texture', url: imagePlaceholder('photo-1481277542470-605612bd2d61') },
      { label: 'Installation', url: imagePlaceholder('photo-1505691938895-1758d7feb511') }
    ],
    technicalData: [
      { label: 'Origin Country', value: 'Turkey' },
      { label: 'Base Color', value: 'Sandy Beige' },
      { label: 'Vein Style', value: 'Linear darker streaks' },
      { label: 'Finish Options', value: 'Polished, Honed, Bush hammered' },
      { label: 'Thickness', value: '20mm, 30mm' },
      { label: 'Typical Tile Sizes', value: '60x60, 40x80, custom' },
      { label: 'Density', value: '2.71 g/cm³' },
      { label: 'Water Absorption', value: '0.45%' },
      { label: 'Porosity', value: 'Medium' }
    ],
    applications: ['Commercial malls', 'Exterior cladding', 'Columns', 'Retail stores'],
    pricing: {
      fob: 'USD 32-48/m²',
      cif: 'EUR 58-74/m²'
    },
    availability: 'Stock blocks + slabs via Turkish partners shipped to India & EU.',
    baseColor: 'Beige',
    veinStyle: 'Linear'
  },
  {
    name: 'Botticino',
    slug: 'botticino',
    origin: 'Brescia, Italy',
    category: 'beige',
    description:
      'Italian beige marble with distinctive fossilized pattern for luxurious interiors.',
    heroTagline: 'Italian beige marble with unmistakable fossil character.',
    imageGallery: [
      { label: 'Slab', url: imagePlaceholder('photo-1493663284031-b7e3aefcae8e') },
      { label: 'Texture', url: imagePlaceholder('photo-1470246973918-29a93221c455') },
      { label: 'Installation', url: imagePlaceholder('photo-1451976426598-a7593bd6d0b2') }
    ],
    technicalData: [
      { label: 'Origin Country', value: 'Italy' },
      { label: 'Base Color', value: 'Warm Beige' },
      { label: 'Vein Style', value: 'Organic fossil streaks' },
      { label: 'Finish Options', value: 'Polished, Honed, Antiqued' },
      { label: 'Thickness', value: '18mm, 20mm' },
      { label: 'Typical Tile Sizes', value: '30x60, 60x60, slabs' },
      { label: 'Density', value: '2.71 g/cm³' },
      { label: 'Water Absorption', value: '0.30%' },
      { label: 'Porosity', value: 'Medium-Low' }
    ],
    applications: ['Luxury retail', 'Hotels', 'Bathrooms', 'Custom furniture'],
    pricing: {
      fob: 'USD 55-80/m²',
      cif: 'EUR 82-110/m²'
    },
    availability: 'Supplied via Rab Noor EU hub for seamless deliveries.',
    baseColor: 'Beige',
    veinStyle: 'Organic'
  },
  {
    name: 'Pietra Grey',
    slug: 'pietra-grey',
    origin: 'Iran',
    category: 'grey',
    description:
      'Charcoal grey marble with fine white veins favored for modern minimal interiors.',
    heroTagline: 'Sophisticated dark grey marble with crisp white veining.',
    imageGallery: [
      { label: 'Slab', url: imagePlaceholder('photo-1470246973918-29a93221c455') },
      { label: 'Texture', url: imagePlaceholder('photo-1487412720507-e7ab37603c6f') },
      { label: 'Installation', url: imagePlaceholder('photo-1469474968028-56623f02e42e') }
    ],
    technicalData: [
      { label: 'Origin Country', value: 'Iran' },
      { label: 'Base Color', value: 'Deep Grey' },
      { label: 'Vein Style', value: 'Fine white linear' },
      { label: 'Finish Options', value: 'Polished, Honed, Leather' },
      { label: 'Thickness', value: '20mm slabs' },
      { label: 'Typical Tile Sizes', value: '60x60, 80x80, slabs' },
      { label: 'Density', value: '2.71 g/cm³' },
      { label: 'Water Absorption', value: '0.15%' },
      { label: 'Porosity', value: 'Low' }
    ],
    applications: ['Kitchen counters', 'Bathrooms', 'Feature walls', 'Furniture cladding'],
    pricing: {
      fob: 'USD 55-72/m²',
      cif: 'EUR 85-108/m²'
    },
    availability: 'Consolidated shipments via Nhava Sheva & Piraeus.',
    baseColor: 'Grey',
    veinStyle: 'Linear'
  },
  {
    name: 'Athens Grey',
    slug: 'athens-grey',
    origin: 'Greece',
    category: 'grey',
    description:
      'Mid-tone grey marble with soft cloudy texture blending well with metals and timber.',
    heroTagline: 'European grey marble curated for modern hospitality spaces.',
    imageGallery: [
      { label: 'Slab', url: imagePlaceholder('photo-1481277542470-605612bd2d61') },
      { label: 'Texture', url: imagePlaceholder('photo-1493663284031-b7e3aefcae8e') },
      { label: 'Installation', url: imagePlaceholder('photo-1505691723518-36a5ac3be353') }
    ],
    technicalData: [
      { label: 'Origin Country', value: 'Greece' },
      { label: 'Base Color', value: 'Mid Grey' },
      { label: 'Vein Style', value: 'Cloudy movement' },
      { label: 'Finish Options', value: 'Polished, Honed, Bush hammered' },
      { label: 'Thickness', value: '20mm' },
      { label: 'Typical Tile Sizes', value: '60x60, 60x90, slabs' },
      { label: 'Density', value: '2.70 g/cm³' },
      { label: 'Water Absorption', value: '0.32%' },
      { label: 'Porosity', value: 'Medium-Low' }
    ],
    applications: ['Lobbies', 'Staircases', 'Wall cladding', 'Exterior facades'],
    pricing: {
      fob: 'USD 42-58/m²',
      cif: 'EUR 70-90/m²'
    },
    availability: 'Available from Athens stockyard for EU dispatch.',
    baseColor: 'Grey',
    veinStyle: 'Cloudy'
  },
  {
    name: 'Picasso Grey',
    slug: 'picasso-grey',
    origin: 'Turkey',
    category: 'grey',
    description:
      'Dynamic grey marble featuring bold white streaks resembling brush strokes.',
    heroTagline: 'Expressive grey marble for feature spaces and modern art galleries.',
    imageGallery: [
      { label: 'Slab', url: imagePlaceholder('photo-1505691938895-1758d7feb511') },
      { label: 'Texture', url: imagePlaceholder('photo-1505692794400-9d5ad4df9a2d') },
      { label: 'Installation', url: imagePlaceholder('photo-1469474968028-56623f02e42e') }
    ],
    technicalData: [
      { label: 'Origin Country', value: 'Turkey' },
      { label: 'Base Color', value: 'Dark Grey' },
      { label: 'Vein Style', value: 'Bold abstract white' },
      { label: 'Finish Options', value: 'Polished, Honed' },
      { label: 'Thickness', value: '20mm' },
      { label: 'Typical Tile Sizes', value: 'Slabs + custom cut-to-size' },
      { label: 'Density', value: '2.68 g/cm³' },
      { label: 'Water Absorption', value: '0.35%' },
      { label: 'Porosity', value: 'Medium' }
    ],
    applications: ['Feature walls', 'Bars & lounges', 'Staircases', 'Artistic installations'],
    pricing: {
      fob: 'USD 50-68/m²',
      cif: 'EUR 82-104/m²'
    },
    availability: 'Special order via Turkish partners with 3-week lead time.',
    baseColor: 'Grey',
    veinStyle: 'Bold'
  },
  {
    name: 'Nero Marquina',
    slug: 'nero-marquina',
    origin: 'Basque Country, Spain',
    category: 'black',
    description:
      'Deep black marble with strong white veins perfect for striking contrasts.',
    heroTagline: 'Iconic Spanish black marble delivering dramatic contrast.',
    imageGallery: [
      { label: 'Slab', url: imagePlaceholder('photo-1470246973918-29a93221c455') },
      { label: 'Texture', url: imagePlaceholder('photo-1505692794400-9d5ad4df9a2d') },
      { label: 'Installation', url: imagePlaceholder('photo-1451976426598-a7593bd6d0b2') }
    ],
    technicalData: [
      { label: 'Origin Country', value: 'Spain' },
      { label: 'Base Color', value: 'Jet Black' },
      { label: 'Vein Style', value: 'Bold lightning veins' },
      { label: 'Finish Options', value: 'Polished, Honed' },
      { label: 'Thickness', value: '18mm, 20mm' },
      { label: 'Typical Tile Sizes', value: '30x60, 60x60, slabs' },
      { label: 'Density', value: '2.71 g/cm³' },
      { label: 'Water Absorption', value: '0.15%' },
      { label: 'Porosity', value: 'Low' }
    ],
    applications: ['Bars', 'Feature flooring', 'Bathrooms', 'Furniture accents'],
    pricing: {
      fob: 'USD 70-95/m²',
      cif: 'EUR 105-130/m²'
    },
    availability: 'Available ex Spain and via Rab Noor EU hub.',
    baseColor: 'Black',
    veinStyle: 'Bold'
  },
  {
    name: 'Black Galaxy',
    slug: 'black-galaxy',
    origin: 'Andhra Pradesh, India',
    category: 'black',
    description:
      'Speckled black granite-like marble popular for kitchen countertops worldwide.',
    heroTagline: 'Indian black stone with sparkling copper-gold flecks.',
    imageGallery: [
      { label: 'Slab', url: imagePlaceholder('photo-1470246973918-29a93221c455') },
      { label: 'Texture', url: imagePlaceholder('photo-1493663284031-b7e3aefcae8e') },
      { label: 'Installation', url: imagePlaceholder('photo-1470246973918-29a93221c455') }
    ],
    technicalData: [
      { label: 'Origin Country', value: 'India' },
      { label: 'Base Color', value: 'Black with copper flecks' },
      { label: 'Vein Style', value: 'Speckled' },
      { label: 'Finish Options', value: 'Polished, Leather' },
      { label: 'Thickness', value: '20mm, 30mm' },
      { label: 'Typical Tile Sizes', value: 'Countertops, slabs' },
      { label: 'Density', value: '2.98 g/cm³' },
      { label: 'Water Absorption', value: '0.02%' },
      { label: 'Porosity', value: 'Very Low' }
    ],
    applications: ['Kitchen countertops', 'Reception desks', 'Bathrooms', 'Outdoor kitchens'],
    pricing: {
      fob: 'USD 28-40/m²',
      cif: 'EUR 55-70/m²'
    },
    availability: 'Large inventory in India ready for export.',
    baseColor: 'Black',
    veinStyle: 'Speckled'
  },
  {
    name: 'Portoro Black',
    slug: 'portoro-black',
    origin: 'La Spezia, Italy',
    category: 'black',
    description:
      'Luxury black marble with gold veins used in ultra-premium interiors.',
    heroTagline: 'Italian black marble with golden drama.',
    imageGallery: [
      { label: 'Slab', url: imagePlaceholder('photo-1497534446932-c925b458314e') },
      { label: 'Texture', url: imagePlaceholder('photo-1493663284031-b7e3aefcae8e') },
      { label: 'Installation', url: imagePlaceholder('photo-1505691723518-36a5ac3be353') }
    ],
    technicalData: [
      { label: 'Origin Country', value: 'Italy' },
      { label: 'Base Color', value: 'Deep Black' },
      { label: 'Vein Style', value: 'Gold spider veins' },
      { label: 'Finish Options', value: 'Polished, Honed' },
      { label: 'Thickness', value: '20mm' },
      { label: 'Typical Tile Sizes', value: 'Slabs, book-matched panels' },
      { label: 'Density', value: '2.71 g/cm³' },
      { label: 'Water Absorption', value: '0.18%' },
      { label: 'Porosity', value: 'Low' }
    ],
    applications: ['Luxury hotels', 'Bars', 'VIP lounges', 'Furniture inlays'],
    pricing: {
      fob: 'USD 180-260/m²',
      cif: 'EUR 240-320/m²'
    },
    availability: 'Premium selection made-to-order with 4-week lead time.',
    baseColor: 'Black',
    veinStyle: 'Gold'
  },
  {
    name: 'Rainforest Green',
    slug: 'rainforest-green',
    origin: 'Udaipur, India',
    category: 'colored',
    description:
      'Exotic green marble with tree-branch veins, ideal for artistic surfaces.',
    heroTagline: 'Earthy Indian marble inspired by tropical forests.',
    imageGallery: [
      { label: 'Slab', url: imagePlaceholder('photo-1505691938895-1758d7feb511') },
      { label: 'Texture', url: imagePlaceholder('photo-1470246973918-29a93221c455') },
      { label: 'Installation', url: imagePlaceholder('photo-1505691723518-36a5ac3be353') }
    ],
    technicalData: [
      { label: 'Origin Country', value: 'India' },
      { label: 'Base Color', value: 'Green with brown veins' },
      { label: 'Vein Style', value: 'Tree branch pattern' },
      { label: 'Finish Options', value: 'Polished, Leather, Antique' },
      { label: 'Thickness', value: '18mm, 20mm' },
      { label: 'Typical Tile Sizes', value: 'Slabs, vanity tops, tiles' },
      { label: 'Density', value: '2.65 g/cm³' },
      { label: 'Water Absorption', value: '0.40%' },
      { label: 'Porosity', value: 'Medium' }
    ],
    applications: ['Feature walls', 'Furniture', 'Bathrooms', 'Boutique retail'],
    pricing: {
      fob: 'USD 30-45/m²',
      cif: 'EUR 58-74/m²'
    },
    availability: 'Fast availability from Rajasthan processing units.',
    baseColor: 'Green',
    veinStyle: 'Organic'
  },
  {
    name: 'Rosso Levanto',
    slug: 'rosso-levanto',
    origin: 'Liguria, Italy',
    category: 'colored',
    description:
      'Deep wine-red marble with striking white veins for bold statements.',
    heroTagline: 'Italian red marble perfect for signature bars and suites.',
    imageGallery: [
      { label: 'Slab', url: imagePlaceholder('photo-1451976426598-a7593bd6d0b2') },
      { label: 'Texture', url: imagePlaceholder('photo-1493663284031-b7e3aefcae8e') },
      { label: 'Installation', url: imagePlaceholder('photo-1470246973918-29a93221c455') }
    ],
    technicalData: [
      { label: 'Origin Country', value: 'Italy' },
      { label: 'Base Color', value: 'Wine Red' },
      { label: 'Vein Style', value: 'White spider veins' },
      { label: 'Finish Options', value: 'Polished, Honed' },
      { label: 'Thickness', value: '18mm, 20mm' },
      { label: 'Typical Tile Sizes', value: 'Slabs, 60x60 tiles' },
      { label: 'Density', value: '2.71 g/cm³' },
      { label: 'Water Absorption', value: '0.16%' },
      { label: 'Porosity', value: 'Low' }
    ],
    applications: ['Bars', 'Feature panels', 'Furniture accents', 'Boutique hotels'],
    pricing: {
      fob: 'USD 110-150/m²',
      cif: 'EUR 150-210/m²'
    },
    availability: 'Limited availability via Italian partners, pre-booking advised.',
    baseColor: 'Red',
    veinStyle: 'Spider'
  },
  {
    name: 'Emerald Black',
    slug: 'emerald-black',
    origin: 'Rajasthan, India',
    category: 'colored',
    description:
      'Dark green-black marble with emerald swirls delivering dramatic luxury.',
    heroTagline: 'Indian emerald-toned marble for lavish interiors.',
    imageGallery: [
      { label: 'Slab', url: imagePlaceholder('photo-1505691723518-36a5ac3be353') },
      { label: 'Texture', url: imagePlaceholder('photo-1505692794400-9d5ad4df9a2d') },
      { label: 'Installation', url: imagePlaceholder('photo-1451976426598-a7593bd6d0b2') }
    ],
    technicalData: [
      { label: 'Origin Country', value: 'India' },
      { label: 'Base Color', value: 'Emerald Green / Black' },
      { label: 'Vein Style', value: 'Swirling veins' },
      { label: 'Finish Options', value: 'Polished, Leather' },
      { label: 'Thickness', value: '18mm, 20mm' },
      { label: 'Typical Tile Sizes', value: 'Slabs, bespoke tiles' },
      { label: 'Density', value: '2.72 g/cm³' },
      { label: 'Water Absorption', value: '0.21%' },
      { label: 'Porosity', value: 'Low' }
    ],
    applications: ['Wall cladding', 'Luxury bathrooms', 'Furniture', 'Feature bars'],
    pricing: {
      fob: 'USD 38-55/m²',
      cif: 'EUR 62-82/m²'
    },
    availability: 'Inventory at Rab Noor Kishangarh facility with quick export.',
    baseColor: 'Green',
    veinStyle: 'Swirl'
  }
];

export const productCategories: { key: ProductCategory; title: string; description: string }[] = [
  { key: 'white', title: 'White Marble', description: 'Iconic whites for timeless luxury.' },
  { key: 'beige', title: 'Beige Marble', description: 'Warm neutrals suited for hospitality.' },
  { key: 'grey', title: 'Grey Marble', description: 'Modern greys with subtle drama.' },
  { key: 'black', title: 'Black Marble', description: 'Bold blacks for high-contrast spaces.' },
  { key: 'colored', title: 'Colored Marble', description: 'Exotic stones for statement designs.' }
];

export const marbleList = products.map((product) => ({
  value: product.slug,
  label: `${product.name} (${product.origin})`,
  category: product.category
}));
