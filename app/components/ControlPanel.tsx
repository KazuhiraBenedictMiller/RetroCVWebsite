import SoundToggle from "./SoundToggle"
import ThemeToggle from "./ThemeToggle"
import CVDownload from "./CVDownload"

const ControlPanel = () => {
  return (
    <div className="fixed top-4 right-4 z-50 flex space-x-2">
      <div className="pixelated border-2 rounded-lg overflow-hidden">
        <SoundToggle />
      </div>
      <div className="pixelated border-2 rounded-lg overflow-hidden">
        <ThemeToggle />
      </div>
      <div className="pixelated border-2 rounded-lg overflow-hidden">
        <CVDownload />
      </div>
    </div>
  )
}

export default ControlPanel
