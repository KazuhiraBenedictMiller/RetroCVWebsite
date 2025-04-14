import { Github, Linkedin, Mail, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-8 border-t border-gray-800 dark:border-gray-800 light-mode:border-gray-200 bg-inherit text-inherit transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-pixel mb-4">CONNECT WITH ME</h2>

          <div className="flex space-x-6 mb-6">
            <a
              href="https://github.com/andreaserravalle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com/in/andreaserravalle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:andrea@serravalle.com" className="hover:opacity-80 transition-opacity">
              <Mail className="w-8 h-8" />
            </a>
            <a
              href="https://twitter.com/andreaserravalle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Twitter className="w-8 h-8" />
            </a>
          </div>

          <p className="font-mono text-sm">© 2023 • Built with React & Pixel Magic</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
