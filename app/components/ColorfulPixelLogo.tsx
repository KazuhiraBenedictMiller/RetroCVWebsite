"use client"

import { useEffect, useState } from "react"

const ColorfulPixelLogo = () => {
  const [mounted, setMounted] = useState(false)

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
    <div className="flex justify-center w-full mb-6 overflow-x-auto">
      <div className="grid grid-rows-12 gap-0.5 min-w-max">
        {textPattern.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-0.5">
            {row.split("").map((cell, cellIndex) => {
              const colorIndex = (rowIndex * 3 + cellIndex * 7) % colors.length

              return (
                <div
                  key={cellIndex}
                  className={`aspect-square ${
                    cell === "#"
                      ? `${colors[colorIndex]}`
                      : "bg-transparent"
                  } w-[1.25vw] max-w-[0.5rem] sm:w-1.5 md:w-2`}
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
