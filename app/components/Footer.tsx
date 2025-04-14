import { Github, Linkedin, Mail, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="w-full bg-inherit text-black dark:text-white transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-pixel mb-4">CONNECT WITH ME</h2>

          <div className="flex space-x-6 mb-2">
            <a
              href="https://github.com/KazuhiraBenedictMiller"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Github className="w-8 h-8 text-black dark:text-white" />
            </a>
            <a
              href="https://linkedin.com/in/andrea-amedeo-serravalle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Linkedin className="w-8 h-8 text-black dark:text-white" />
            </a>
            <a
              href="mailto:aaserravalle.py@gmail.com"
              className="hover:opacity-80 transition-opacity"
            >
              <Mail className="w-8 h-8 text-black dark:text-white" />
            </a>
          </div>

          <p className="font-mono text-sm">© 2025 • VibeCoded</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
