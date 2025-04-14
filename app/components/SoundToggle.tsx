"use client"

import { useState, useEffect } from "react"
import { Volume2, VolumeX } from "lucide-react"

const SoundToggle = () => {
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    // Set initial state based on localStorage if available
    const savedMuteState = localStorage.getItem("isMuted")
    if (savedMuteState !== null) {
      setIsMuted(savedMuteState === "true")
    }
  }, [])

  const toggleMute = () => {
    const newMuteState = !isMuted
    setIsMuted(newMuteState)

    // Save state to localStorage
    localStorage.setItem("isMuted", String(newMuteState))

    // Dispatch a custom event that the SoundEffect component can listen for
    window.dispatchEvent(
      new CustomEvent("sound-preference-changed", {
        detail: { isMuted: newMuteState },
      }),
    )
  }

  return (
    <button
      onClick={toggleMute}
      className="p-2 bg-gray-800 dark:bg-gray-800 light-mode:bg-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-700 light-mode:hover:bg-gray-50 transition-colors w-10 h-10 flex items-center justify-center"
      title={isMuted ? "Unmute Sound" : "Mute Sound"}
      aria-label={isMuted ? "Unmute Sound" : "Mute Sound"}
    >
      {isMuted ? (
        <VolumeX className="w-5 h-5 text-white dark:text-white light-mode:text-black" />
      ) : (
        <Volume2 className="w-5 h-5 text-white dark:text-white light-mode:text-black" />
      )}
    </button>
  )
}

export default SoundToggle
