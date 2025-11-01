import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { blogPosts, BlogPost } from '../../data/blogPosts';
import { textContent } from '../../data/strings';

type BlogDetailsProps = {
  post: BlogPost;
};

const BlogDetailsPage = ({ post }: BlogDetailsProps) => {
  if (!post) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{`${post.title} | ${textContent.brand.name}`}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <section className="section">
        <div className="container">
          <nav aria-label="breadcrumb" style={{ marginBottom: '1rem' }}>
            <Link href="/blog">{textContent.blog.title}</Link> / {post.title}
          </nav>
          <article className="card">
            <span className="badge">{post.category}</span>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
            <p>
              {textContent.common.contactCta}:{' '}
              <Link href="/contact">{textContent.navigation.contact}</Link>
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: blogPosts.map((post) => ({ params: { slug: post.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<BlogDetailsProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
  };
};

export default BlogDetailsPage;
