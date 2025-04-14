import { notFound } from "next/navigation"
import Link from "next/link"
import CommentSection from "../../../components/CommentSection"
import SocialShare from "../../../components/SocialShare"
import { posts } from "../../../data/posts"

export default function Post({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id === Number.parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <article className="prose prose-invert dark:prose-invert light-mode:prose-black max-w-none">
      <div className="mb-8">
        <Link href="/blog" className="font-pixel text-sm flex items-center hover:underline no-underline">
          <span className="mr-2">←</span> Back to Blog
        </Link>
      </div>

      <h1 className="font-pixel">{post.title}</h1>
      <span className="inline-block px-2 py-1 bg-white text-black dark:bg-white dark:text-black light-mode:bg-black light-mode:text-white text-sm font-mono rounded mb-4">
        {post.category}
      </span>
      <div className="font-mono text-lg leading-relaxed">{post.content}</div>
      <SocialShare url={`https://yourdomain.com/blog/post/${post.id}`} title={post.title} />
      <CommentSection />
    </article>
  )
}
