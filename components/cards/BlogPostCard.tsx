import Link from 'next/link';
import { BlogPost } from '../../data/blogPosts';

export const BlogPostCard = ({ post }: { post: BlogPost }) => (
  <article className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
    <div>
      <p className="text-xs uppercase tracking-[0.4em] text-emerald-500">{post.date}</p>
      <h3 className="mt-3 text-2xl font-semibold text-slate-900">{post.title}</h3>
      <p className="mt-3 text-slate-600">{post.excerpt}</p>
    </div>
    <div className="mt-6">
      <Link href={`/blog/${post.slug}`} className="font-semibold text-emerald-600">
        Read more →
      </Link>
    </div>
  </article>
);
