import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { cardSurface, sectionSubheading, smallLabel } from '@/components/layout/styles';
import { blogPosts } from '@/data/blogPosts';

export const metadata: Metadata = {
  title: 'Marble Insights & Blog | Rab Noor Pvt Ltd',
  description: 'Deep dives on specification, sourcing, logistics, and maintenance for premium marble projects.',
  openGraph: {
    title: 'Rab Noor Pvt Ltd — Marble Insights',
    description: 'Expert commentary on choosing, shipping, and maintaining marble across continents.'
  }
};

const formatDate = (date: string) => new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

export default function BlogPage() {
  return (
    <>
      <PageHeader title="Insights & Blog" description="Updates on marble sourcing, logistics, and design." />
      <Container className="space-y-10 py-16 sm:py-20 lg:py-24">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
        <p className={sectionSubheading}>Editorial-style notes replace photography with structured layouts until final imagery is ready.</p>
        <div className="grid gap-8 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.slug} className={`${cardSurface} flex flex-col space-y-4`}>
              <div className="h-48 rounded-2xl bg-slate-100" aria-hidden />
              <p className={smallLabel}>
                {formatDate(post.date)} · {post.readingTime}
              </p>
              <h2 className="text-2xl font-semibold text-slate-900">{post.title}</h2>
              <p className="text-base text-slate-700 flex-1">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-semibold text-slate-900">
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </>
  );
}
