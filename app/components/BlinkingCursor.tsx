"use client"

import type React from "react"
import { useState, useEffect } from "react"

const BlinkingCursor: React.FC = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((v) => !v)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <span
      className={`inline-block w-3 h-5 bg-white dark:bg-white light-mode:bg-black ${visible ? "opacity-100" : "opacity-0"}`}
    />
  )
}

export default BlinkingCursor
