import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-pixel mb-4">404 - Game Over</h1>
      <p className="font-mono mb-4">The page you're looking does not Exists!!</p>
      <Link
        href="/"
        className="font-pixel bg-white text-black dark:bg-white dark:text-black light-mode:bg-black light-mode:text-white px-4 py-2 rounded hover:opacity-80 transition-colors"
      >
        Continue?
      </Link>
    </div>
  )
}
