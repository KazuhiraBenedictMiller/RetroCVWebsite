import { FileDown } from "lucide-react"

const CVDownload = () => {
  return (
    <a
      href="/andrea-serravalle-cv.pdf"
      download
      className="p-2 bg-gray-800 dark:bg-gray-800 light-mode:bg-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-700 light-mode:hover:bg-gray-50 transition-colors w-10 h-10 flex items-center justify-center"
      title="Download CV"
      aria-label="Download CV"
    >
      <FileDown className="w-5 h-5 text-white dark:text-white light-mode:text-black" />
    </a>
  )
}

export default CVDownload
