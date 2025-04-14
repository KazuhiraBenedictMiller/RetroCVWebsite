"use client"

import Link from "next/link"
import { Monitor, Palette, DollarSign, Home, Code, BookOpen, Coffee } from "lucide-react"
import { usePathname } from "next/navigation"

const NavMenu = () => {
  const pathname = usePathname()

  // Only show category navigation on blog pages
  if (pathname?.startsWith("/blog")) {
    return (
      <nav className="flex justify-center space-x-4 my-4">
        <Link
          href="/blog/category/tech"
          className="flex flex-col items-center p-2 bg-gray-800 dark:bg-gray-800 light-mode:bg-gray-100 rounded pixelated-border hover:bg-gray-700 dark:hover:bg-gray-700 light-mode:hover:bg-gray-200 transition-colors"
        >
          <Monitor className="w-6 h-6 mb-1" />
          <span className="font-pixel text-xs">Tech</span>
        </Link>
        <Link
          href="/blog/category/art"
          className="flex flex-col items-center p-2 bg-gray-800 dark:bg-gray-800 light-mode:bg-gray-100 rounded pixelated-border hover:bg-gray-700 dark:hover:bg-gray-700 light-mode:hover:bg-gray-200 transition-colors"
        >
          <Palette className="w-6 h-6 mb-1" />
          <span className="font-pixel text-xs">Art</span>
        </Link>
        <Link
          href="/blog/category/finance"
          className="flex flex-col items-center p-2 bg-gray-800 dark:bg-gray-800 light-mode:bg-gray-100 rounded pixelated-border hover:bg-gray-700 dark:hover:bg-gray-700 light-mode:hover:bg-gray-200 transition-colors"
        >
          <DollarSign className="w-6 h-6 mb-1" />
          <span className="font-pixel text-xs">Finance</span>
        </Link>
      </nav>
    )
  }

  // For other pages, show main navigation
  return (
    <nav className="flex justify-center space-x-4 my-4">
      <Link
        href="/"
        className="flex flex-col items-center p-2 bg-gray-800 dark:bg-gray-800 light-mode:bg-gray-100 rounded pixelated-border hover:bg-gray-700 dark:hover:bg-gray-700 light-mode:hover:bg-gray-200 transition-colors"
      >
        <Home className="w-6 h-6 mb-1" />
        <span className="font-pixel text-xs">Home</span>
      </Link>
      <Link
        href="/projects"
        className="flex flex-col items-center p-2 bg-gray-800 dark:bg-gray-800 light-mode:bg-gray-100 rounded pixelated-border hover:bg-gray-700 dark:hover:bg-gray-700 light-mode:hover:bg-gray-200 transition-colors"
      >
        <Code className="w-6 h-6 mb-1" />
        <span className="font-pixel text-xs">Projects</span>
      </Link>
      <Link
        href="/blog"
        className="flex flex-col items-center p-2 bg-gray-800 dark:bg-gray-800 light-mode:bg-gray-100 rounded pixelated-border hover:bg-gray-700 dark:hover:bg-gray-700 light-mode:hover:bg-gray-200 transition-colors"
      >
        <BookOpen className="w-6 h-6 mb-1" />
        <span className="font-pixel text-xs">Blog</span>
      </Link>
      <Link
        href="/misc"
        className="flex flex-col items-center p-2 bg-gray-800 dark:bg-gray-800 light-mode:bg-gray-100 rounded pixelated-border hover:bg-gray-700 dark:hover:bg-gray-700 light-mode:hover:bg-gray-200 transition-colors"
      >
        <Coffee className="w-6 h-6 mb-1" />
        <span className="font-pixel text-xs">Misc</span>
      </Link>
    </nav>
  )
}

export default NavMenu
