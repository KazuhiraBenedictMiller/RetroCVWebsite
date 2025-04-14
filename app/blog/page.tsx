import Link from "next/link"
import { posts } from "../data/posts"

export default function BlogPage() {
  const categories = ["Tech", "Art", "Finance"]

  return (
    <div>
      <div className="mb-8">
        <Link href="/" className="font-pixel text-sm flex items-center hover:underline">
          <span className="mr-2">←</span> Back to Home
        </Link>
        <h2 className="text-2xl font-pixel mb-6 mt-4">Blog Posts</h2>
      </div>

      {categories.map((category) => (
        <div key={category} className="mb-8">
          <h3 className="text-xl font-pixel mb-4">{category}</h3>
          <div className="grid gap-6">
            {posts
              .filter((post) => post.category === category)
              .slice(0, 3)
              .map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/post/${post.id}`}
                  className="block p-6 bg-gray-800 dark:bg-gray-800 light-mode:bg-white light-mode:shadow-lg rounded-lg hover:bg-gray-700 dark:hover:bg-gray-700 light-mode:hover:bg-gray-50 transition-colors"
                >
                  <h4 className="text-lg font-pixel mb-2">{post.title}</h4>
                  <span className="inline-block px-2 py-1 bg-white text-black dark:bg-white dark:text-black light-mode:bg-black light-mode:text-white text-sm font-mono rounded">
                    {post.category}
                  </span>
                </Link>
              ))}
          </div>
          <Link
            href={`/blog/category/${category.toLowerCase()}`}
            className="inline-block mt-4 font-pixel text-sm underline"
          >
            See all {category} posts
          </Link>
        </div>
      ))}
    </div>
  )
}
