import Head from 'next/head';
import Link from 'next/link';
import { blogPosts } from '../../data/blogPosts';
import { textContent } from '../../data/strings';

const BlogPage = () => (
  <>
    <Head>
      <title>{textContent.seo.blogTitle}</title>
      <meta name="description" content={textContent.blog.intro} />
    </Head>
    <section className="section">
      <div className="container">
        <h1 className="section-title">{textContent.blog.title}</h1>
        <p>{textContent.blog.intro}</p>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.slug} className="blog-card" aria-labelledby={`${post.slug}-title`}>
              <span className="badge">{post.category}</span>
              <h2 id={`${post.slug}-title`}>{post.title}</h2>
              <p>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="button secondary">
                {textContent.common.readMore}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default BlogPage;
