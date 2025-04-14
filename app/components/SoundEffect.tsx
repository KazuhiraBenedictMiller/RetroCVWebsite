"use client"

import { useEffect, useRef, useState } from "react"

const SoundEffect = () => {
  const audioContextRef = useRef<AudioContext | null>(null)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    // Check localStorage for mute preference
    const savedMuteState = localStorage.getItem("isMuted")
    if (savedMuteState !== null) {
      setIsMuted(savedMuteState === "true")
    }

    audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()

    const playSound = () => {
      if (audioContextRef.current && !isMuted) {
        const oscillator = audioContextRef.current.createOscillator()
        oscillator.type = "square"
        oscillator.frequency.setValueAtTime(440, audioContextRef.current.currentTime) // 440 Hz = A4 note

        const gainNode = audioContextRef.current.createGain()
        gainNode.gain.setValueAtTime(0.1, audioContextRef.current.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current.currentTime + 0.1)

        oscillator.connect(gainNode)
        gainNode.connect(audioContextRef.current.destination)

        oscillator.start()
        oscillator.stop(audioContextRef.current.currentTime + 0.1)
      }
    }

    // Listen for sound preference changes
    const handleSoundPreferenceChange = (event: CustomEvent) => {
      setIsMuted(event.detail.isMuted)
    }

    window.addEventListener("sound-preference-changed", handleSoundPreferenceChange as EventListener)
    document.addEventListener("click", playSound)

    return () => {
      document.removeEventListener("click", playSound)
      window.removeEventListener("sound-preference-changed", handleSoundPreferenceChange as EventListener)
      audioContextRef.current?.close()
    }
  }, [isMuted])

  return null
}

export default SoundEffect
