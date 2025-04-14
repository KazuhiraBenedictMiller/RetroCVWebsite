import Link from "next/link"
import { ArrowRight, Code, BookOpen, Coffee } from "lucide-react"
import Terminal from "./components/Terminal"

export default function EntryPage() {
  return (
    <div className="flex flex-col items-center justify-start pt-1 text-center">
      <div className="max-w-2xl mx-auto mb-2 w-full">
        <h2 className="text-3xl font-pixel mb-6">Welcome</h2>

        <p className="font-mono text-lg mb-8">
          Hey there! I'm Andrea, an Ex Freelance Machine Learning Engineer for Quantitative Finance passionate about all things Data - from Sourcing, to System Design.
          This is my little corner of the Internet where You can use the Terminal to get to know more about me!!
        </p>

        <Terminal />
      </div>
    </div>
  )
}
