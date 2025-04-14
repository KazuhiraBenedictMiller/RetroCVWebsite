import Link from "next/link"
import { ArrowRight, Code, BookOpen, Coffee } from "lucide-react"
import Terminal from "./components/Terminal"

export default function EntryPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <div className="max-w-2xl mx-auto mb-12 w-full">
        <h2 className="text-3xl font-pixel mb-6">Welcome to My Digital Space</h2>

        <p className="font-mono text-lg mb-8">
          I'm Andrea Serravalle, a developer and digital creator passionate about technology, art, and finance. This is
          my corner of the internet where I share my thoughts, projects, and experiences.
        </p>

        <Terminal />

        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/projects"
            className="group flex flex-col items-center p-6 bg-gray-800 dark:bg-gray-800 light-mode:bg-white light-mode:shadow-lg rounded-lg hover:bg-gray-700 dark:hover:bg-gray-700 light-mode:hover:bg-gray-50 transition-colors pixelated-border"
          >
            <Code className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-pixel mb-2">Projects</h3>
            <p className="font-mono text-sm mb-4">Check out my latest work and experiments</p>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/blog"
            className="group flex flex-col items-center p-6 bg-gray-800 dark:bg-gray-800 light-mode:bg-white light-mode:shadow-lg rounded-lg hover:bg-gray-700 dark:hover:bg-gray-700 light-mode:hover:bg-gray-50 transition-colors pixelated-border"
          >
            <BookOpen className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-pixel mb-2">Blog</h3>
            <p className="font-mono text-sm mb-4">Read my thoughts on tech, art, and finance</p>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/misc"
            className="group flex flex-col items-center p-6 bg-gray-800 dark:bg-gray-800 light-mode:bg-white light-mode:shadow-lg rounded-lg hover:bg-gray-700 dark:hover:bg-gray-700 light-mode:hover:bg-gray-50 transition-colors pixelated-border"
          >
            <Coffee className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-pixel mb-2">Misc</h3>
            <p className="font-mono text-sm mb-4">Other interesting things I want to share</p>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}
