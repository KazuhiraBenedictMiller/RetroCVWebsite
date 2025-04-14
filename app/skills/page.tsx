import Link from "next/link"
import {Keyboard, Lightbulb, Wrench, Cloud, Hammer, Database} from "lucide-react"

const miscItems = [
  {
    id: 1,
    title: "Programming Languages",
    icon: <Keyboard className="w-8 h-8 mb-3" />,
    content: [
      "Python",
      "Bash",
      "SQL",
      "C",
      "Markup Langs",
    ],
  },
  {
    id: 2,
    title: "Data Science, ML, AI",
    icon: <Lightbulb className="w-8 h-8 mb-3" />,
    content: [
      "Model Development",
      "NLP",
      "LLM",
      "AI Agents",
    ],
  },
  {
    id: 3,
    title: "Data Engineering and MLOps",
    icon: <Wrench className="w-8 h-8 mb-3" />,
    content: [
      "ML System Design", 
      "End-to-End ML Pipelines", 
      "DataOps, GitOps", 
      "Apache Airflow, Kafka, Spark", 
    ],
  },
  {
    id: 4,
    title: "Cloud and MicroServices",
    icon: <Cloud className="w-8 h-8 mb-3" />,
    content: [
      "Docker", 
      "Kubernetes", 
      "AWS", 
      "Github Actions", 
    ],
  },
  {
    id: 5,
    title: "Tools",
    icon: <Hammer className="w-8 h-8 mb-3" />,
    content: [
      "Linux",
      "Git, GitHub", 
      "Poetry, UV", 
      "ML Frameworks",  
    ],
  },
  {
    id: 6,
    title: "Databases",
    icon: <Database className="w-8 h-8 mb-3" />,
    content: [
      "MySQL, Postrgres, MariaDB",
      "SQLite", 
      "Mongo", 
      "Redis",  
    ],
  },
]

export default function MiscPage() {
  return (
    <div>
      <div className="mb-8">
        <Link href="/" className="font-pixel text-sm flex items-center hover:underline">
          <span className="mr-2">←</span> Back to Home
        </Link>
        <h2 className="text-2xl font-pixel mb-6 mt-4">Skills</h2>
        <p className="font-mono text-lg mb-8">
          A Non-Exahustive List of my Skills and Tools.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {miscItems.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-gray-800 dark:bg-gray-800 light-mode:bg-white light-mode:shadow-lg rounded-lg pixelated-border flex flex-col items-center text-center"
          >
            {item.icon}
            <h3 className="text-xl font-pixel mb-4">{item.title}</h3>
            <ul className="font-mono space-y-2 w-full">
              {item.content.map((entry, index) => (
                <li key={index} className="px-2 py-1 bg-gray-700 dark:bg-gray-700 light-mode:bg-gray-100 rounded">
                  {entry}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
