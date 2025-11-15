import { PageHeader } from '../../components/shared/PageHeader';
import { Section } from '../../components/shared/Section';
import { BlogPostCard } from '../../components/cards/BlogPostCard';
import { blogPosts } from '../../data/blogPosts';

export default function BlogPage() {
  return (
    <div>
      <PageHeader title="Blog & Resources" description="Insights for sourcing, specifying, and installing premium marble." />
      <Section eyebrow="Latest" title="Guides & articles">
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>
    </div>
  );
}
