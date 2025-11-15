import { GetStaticPaths, GetStaticProps } from 'next';
import { PageHeader } from '../../components/shared/PageHeader';
import { Section } from '../../components/shared/Section';
import { blogPosts, BlogPost } from '../../data/blogPosts';

interface Props {
  post: BlogPost;
}

export default function BlogPostPage({ post }: Props) {
  const blocks = post.content.split('\n\n');
  return (
    <div>
      <PageHeader title={post.title} description={`${post.author} · ${post.date}`} />
      <Section>
        <article className="prose max-w-none prose-h2:text-slate-800 prose-p:text-slate-700">
          {blocks.map((block, index) => {
            const trimmed = block.trim();
            if (trimmed.startsWith('## ')) {
              return (
                <h2 key={index} className="text-slate-800">
                  {trimmed.replace('## ', '')}
                </h2>
              );
            }
            if (trimmed.startsWith('### ')) {
              return (
                <h3 key={index} className="text-slate-700">
                  {trimmed.replace('### ', '')}
                </h3>
              );
            }
            if (trimmed.startsWith('- ')) {
              const items = trimmed.split('\n').filter(Boolean);
              return (
                <ul key={index} className="list-disc pl-6">
                  {items.map((item) => (
                    <li key={item}>{item.replace('- ', '')}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} className="text-slate-700">
                {trimmed}
              </p>
            );
          })}
        </article>
      </Section>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: blogPosts.map((post) => ({ params: { slug: post.slug } })),
  fallback: false
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = blogPosts.find((entry) => entry.slug === params?.slug);
  if (!post) return { notFound: true };
  return { props: { post } };
};
