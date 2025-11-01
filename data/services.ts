export interface Service {
  slug: string;
  name: string;
  description: string;
  highlights: string[];
}

export const services: Service[] = [
  {
    slug: 'upper-gi-endoscopy',
    name: 'Upper GI Endoscopy (Gastroscopy)',
    description: 'Diagnostic and therapeutic evaluation of the esophagus, stomach, and duodenum.',
    highlights: ['Sedation for comfort', 'Biopsy and rapid urease testing', 'Treatment of bleeding lesions'],
  },
  {
    slug: 'colonoscopy',
    name: 'Colonoscopy',
    description: 'Comprehensive colon evaluation for screening, diagnosis, and therapy.',
    highlights: ['High-definition imaging', 'Polyp detection and removal', 'Post-procedure counseling'],
  },
  {
    slug: 'polypectomy',
    name: 'Polypectomy',
    description: 'Safe removal of colonic polyps during colonoscopy to prevent colorectal cancer.',
    highlights: ['Snare polypectomy', 'Endoscopic mucosal resection', 'Histologic analysis coordination'],
  },
  {
    slug: 'capsule-endoscopy',
    name: 'Capsule Endoscopy',
    description: 'Non-invasive evaluation of the small bowel using video capsule technology.',
    highlights: ['Small bowel bleeding workup', 'Crohn’s disease assessment', 'Outpatient procedure'],
  },
  {
    slug: 'ercp',
    name: 'ERCP (Endoscopic Retrograde Cholangiopancreatography)',
    description: 'Advanced endoscopic procedure for biliary and pancreatic disorders.',
    highlights: ['Stone extraction', 'Stent placement', 'Collaboration with surgical teams'],
  },
  {
    slug: 'abdominal-ultrasound',
    name: 'Abdominal Ultrasound',
    description: 'Ultrasound imaging for liver, biliary, pancreatic, and abdominal conditions.',
    highlights: ['Point-of-care imaging', 'Liver fibrosis assessment', 'Monitoring of chronic conditions'],
  },
];
