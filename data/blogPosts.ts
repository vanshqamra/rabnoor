export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'before-colonoscopy-checklist',
    title: 'What to Do Before a Colonoscopy',
    excerpt:
      'Understand the preparation steps, diet recommendations, and tips to ensure a successful colonoscopy experience.',
    category: 'Screening',
  },
  {
    slug: 'gastroscopy-preparation',
    title: 'How to Prepare for Gastroscopy',
    excerpt:
      'Learn why fasting is important, what medications to adjust, and how to plan your day for gastroscopy.',
    category: 'Procedures',
  },
  {
    slug: 'when-bloating-is-serious',
    title: 'When Bloating Deserves a Specialist Visit',
    excerpt:
      'Persistent bloating can signal digestive conditions such as IBS, celiac disease, or bacterial overgrowth. Know the warning signs.',
    category: 'Symptoms',
  },
];
