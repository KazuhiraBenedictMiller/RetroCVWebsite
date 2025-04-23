import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Alfredo",
    description: "A Personal AI Chef to Give you the Best Recipes - With an Hilarious Italian Accent.",
    tags: ["Next.js", "TypeScript", "AI Agent", "Prompt Engineering"],
    github: "https://github.com/KazuhiraBenedictMiller/Alfredo-AIChef",
    demo: "https://alfredo-ai-chef.vercel.app/",
  },
  {
    id: 2,
    title: "Linux Snippet Dungeon",
    description: "A Collection of Reusable Code Snippets for All Thing ML on a Debian Machine.",
    tags: ["Too Many to Count"],
    github: "https://github.com/KazuhiraBenedictMiller/LinuxMLOpsSnippetsDungeon",
    demo: "https://github.com/KazuhiraBenedictMiller/LinuxMLOpsSnippetsDungeon",
  },
  {
    id: 3,
    title: "PyndianaJones",
    description: "An AI Agent to Learn Python Programming while Playing a Text Based Game...COMING SOON",
    tags: ["Python", "AI", "Agents"],
    github: "https://github.com/KazuhiraBenedictMiller/PyndianaJones",
    demo: "https://github.com/KazuhiraBenedictMiller/PyndianaJones",
  },
]

export default function ProjectsPage() {
  return (
    <div>
      <div className="mb-8">
        <Link href="/" className="font-pixel text-sm flex items-center hover:underline">
          <span className="mr-2">←</span> Back to Home
        </Link>
        <h2 className="text-2xl font-pixel mb-6 mt-4">My Projects</h2>
        <p className="font-mono text-lg mb-8">
          Here are some of the projects I've been working on. Feel free to check out the code or live demos.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 bg-gray-800 dark:bg-gray-800 light-mode:bg-white light-mode:shadow-lg rounded-lg pixelated-border"
          >
            <h3 className="text-xl font-pixel mb-3">{project.title}</h3>
            <p className="font-mono mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-mono bg-gray-700 dark:bg-gray-700 light-mode:bg-gray-100 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center font-pixel text-sm hover:underline"
              >
                <Github className="w-4 h-4 mr-1" /> Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center font-pixel text-sm hover:underline"
              >
                <ExternalLink className="w-4 h-4 mr-1" /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
