import Link from "next/link"
import { Music, Book, Gamepad } from "lucide-react"

const miscItems = [
  {
    id: 1,
    title: "Music I'm Listening To",
    icon: <Music className="w-8 h-8 mb-3" />,
    content: [
      "Tycho - Weather",
      "Bonobo - Migration",
      "Jon Hopkins - Immunity",
      "Boards of Canada - Tomorrow's Harvest",
      "Four Tet - Sixteen Oceans",
    ],
  },
  {
    id: 2,
    title: "Books I'm Reading",
    icon: <Book className="w-8 h-8 mb-3" />,
    content: [
      "Algorithms to Live By - Brian Christian & Tom Griffiths",
      "Snow Crash - Neal Stephenson",
      "The Design of Everyday Things - Don Norman",
      "Thinking, Fast and Slow - Daniel Kahneman",
      "The Pragmatic Programmer - Andrew Hunt & David Thomas",
    ],
  },
  {
    id: 3,
    title: "Games I'm Playing",
    icon: <Gamepad className="w-8 h-8 mb-3" />,
    content: ["Hollow Knight", "Celeste", "Stardew Valley", "The Legend of Zelda: Tears of the Kingdom", "Hades"],
  },
]

export default function MiscPage() {
  return (
    <div>
      <div className="mb-8">
        <Link href="/" className="font-pixel text-sm flex items-center hover:underline">
          <span className="mr-2">←</span> Back to Home
        </Link>
        <h2 className="text-2xl font-pixel mb-6 mt-4">Miscellaneous</h2>
        <p className="font-mono text-lg mb-8">
          A collection of things I enjoy outside of work - music, books, games, and other interests.
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
