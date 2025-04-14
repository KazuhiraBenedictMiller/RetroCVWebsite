"use client"

import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const root = window.document.documentElement
    if (isDark) {
      root.classList.add("dark")
      root.classList.remove("light-mode")
    } else {
      root.classList.remove("dark")
      root.classList.add("light-mode")
    }
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 bg-gray-800 dark:bg-gray-800 light-mode:bg-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-700 light-mode:hover:bg-gray-50 transition-colors w-10 h-10 flex items-center justify-center"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-white dark:text-white light-mode:text-black" />
      ) : (
        <Moon className="w-5 h-5 text-white dark:text-white light-mode:text-black" />
      )}
    </button>
  )
}

export default ThemeToggle
