import SoundToggle from "./SoundToggle"
import ThemeToggle from "./ThemeToggle"
import CVDownload from "./CVDownload"

const ControlPanel = () => {
  return (
    <div className="fixed top-4 right-4 z-50 flex space-x-3">
      <div className="pixelated-border">
        <SoundToggle />
      </div>
      <div className="pixelated-border">
        <ThemeToggle />
      </div>
      <div className="pixelated-border">
        <CVDownload />
      </div>
    </div>
  )
}

export default ControlPanel
