export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  location: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Farhan Rab',
    role: 'Founder & Managing Director',
    location: 'Jaipur, India',
    bio: 'Oversees quarry alliances, product strategy, and the overall Rab Noor Pvt Ltd vision for bridging India and Europe.'
  },
  {
    name: 'Noor Kaur',
    role: 'Operations Head – India',
    location: 'Kishangarh, India',
    bio: 'Leads block selection, grading, and production scheduling across Rajasthan partner factories.'
  },
  {
    name: 'Alexandros Petrou',
    role: 'Logistics & Compliance Lead',
    location: 'Athens, Greece',
    bio: 'Coordinates EU warehousing, customs documentation, and port operations across Piraeus, Rotterdam, and Antwerp.'
  },
  {
    name: 'Elena Rossi',
    role: 'EU Sales Head',
    location: 'Milan, Italy',
    bio: 'Supports architects, distributors, and hospitality brands throughout Europe with tailored sourcing plans.'
  }
];
