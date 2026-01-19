import { Section } from "@/components/section";
import { blogPosts } from "@/lib/content";

export default function BlogPage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <Section title="Blog" kicker="Writing">
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="space-y-3 border-b border-neutral-200 pb-4 dark:border-neutral-800">
              <p className="text-sm uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">{post.date ?? ""}</p>
              <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">{post.title}</h3>
              <p className="text-neutral-700 dark:text-neutral-200">{post.summary}</p>
              <p className="text-neutral-700 dark:text-neutral-200">{post.body}</p>
              {post.tags?.length ? (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-black/5 px-3 py-1 text-sm font-medium text-neutral-700 dark:bg-white/10 dark:text-neutral-100">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
