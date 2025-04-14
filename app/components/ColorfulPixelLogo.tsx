"use client"

import { useEffect, useState } from "react"

const ColorfulPixelLogo = () => {
  const [mounted, setMounted] = useState(false)

  // Define the pixel pattern for "Andrea Serravalle"
  // This is a 32x8 grid representation of the text
  const textPattern = [
    "                                     ",
    "            ##   #   #  ###   ###   ###   ##   ",
    "           #  #  ##  #  #  #  #  #  #    #  #  ",
    "           ####  # # #  #  #  ###   ##   ####  ",
    "           #  #  #  ##  #  #  # #   #    #  #  ",
    "           #  #  #   #  ###   #  #  ###  #  #  ",
    "                                     ",
    " ####  ###  ###   ###    ##   #   #   ##   #    #    ### ",
    " #     #    #  #  #  #  #  #  #   #  #  #  #    #    #   ",
    " ####  ##   ###   ###   ####  #   #  ####  #    #    ##  ",
    "    #  #    # #   # #   #  #   # #   #  #  #    #    #   ",
    " ####  ###  #  #  #  #  #  #    #    #  #  ###  ###  ### ",
    "                                                ",
  ]

  // Colors for the pixels
  const colors = [
    "bg-red-400",
    "bg-orange-400",
    "bg-yellow-400",
    "bg-green-400",
    "bg-teal-400",
    "bg-blue-400",
    "bg-indigo-400",
    "bg-purple-400",
    "bg-pink-400",
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex justify-center w-full mb-6">
      <div className="grid grid-rows-12 gap-0.5 min-w-max">
        {textPattern.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-0.5">
            {row.split("").map((cell, cellIndex) => {
              // Get a deterministic but seemingly random color for each pixel
              const colorIndex = (rowIndex * 3 + cellIndex * 7) % colors.length

              return (
                <div
                  key={cellIndex}
                  className={`w-2 h-2 ${
                    cell === "#"
                      ? `${colors[colorIndex]} dark:${colors[colorIndex]} light-mode:${colors[colorIndex]}`
                      : "bg-transparent"
                  }`}
                />
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ColorfulPixelLogo
