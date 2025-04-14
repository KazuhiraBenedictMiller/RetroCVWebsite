"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"

const Terminal = () => {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([
    "Welcome to Andrea's Terminal. Type 'help' for available commands.",
  ])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim()

    // Add command to history
    setHistory((prev) => [...prev, `andrea@portfolio:~$ ${trimmedCmd}`])

    // Process command
    if (trimmedCmd === "") {
      return
    } else if (trimmedCmd === "whoami") {
      setHistory((prev) => [...prev, "Andrea Serravalle"])
    } else if (trimmedCmd === "ls -l" || trimmedCmd === "ls") {
      setHistory((prev) => [
        ...prev,
        "drwxr-xr-x  2 andrea  users  4096 Apr 14 10:08 skills",
        "drwxr-xr-x  2 andrea  users  4096 Apr 14 10:08 projects",
        "drwxr-xr-x  2 andrea  users  4096 Apr 14 10:08 contacts"
      ])
    } else if (trimmedCmd.startsWith("cd ")) {
      const destination = trimmedCmd.substring(3).trim()
      if (["projects", "skils", "contact"].includes(destination)) {
        setHistory((prev) => [...prev, `Navigating to /${destination}...`])
        setTimeout(() => {
          router.push(`/${destination}`)
        }, 500)
      } else {
        setHistory((prev) => [...prev, `cd: no such directory: ${destination}`])
      }
    } else if (trimmedCmd === "clear") {
      setHistory([])
    } else if (trimmedCmd === "help") {
      setHistory((prev) => [
        ...prev,
        "Available commands:",
        "  whoami    - Display current user",
        "  ls, ls -l - List directories",
        "  cd [dir]  - Change to directory (skills, projects, contacts)",
        "  clear     - Clear terminal",
        "  help      - Display this help message",
      ])
    } else {
      setHistory((prev) => [...prev, `command not found: ${trimmedCmd}`])
    }

    // Add to command history for up/down arrows
    setCommandHistory((prev) => [...prev, trimmedCmd])
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input)
      setInput("")
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput("")
      }
    }
  }

  // Auto-scroll to bottom when history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  // Focus input on terminal click
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className="w-full mb-10 rounded-md overflow-hidden pixelated-border" onClick={focusInput}>
      {/* Terminal header */}
      <div className="bg-gray-800 dark:bg-gray-800 light-mode:bg-gray-200 px-4 py-2 flex items-center">
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="font-mono text-sm text-center flex-grow light-mode:text-black">andrea@portfolio:~</div>
      </div>

      {/* Terminal body */}
      <div
        ref={terminalRef}
        className="bg-black text-white dark:bg-black dark:text-white light-mode:bg-white light-mode:text-black p-4 font-mono text-lg h-64 overflow-y-auto text-left"
        >
        {history.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap mb-1 text-left">
            {line}
          </div>
        ))}
        <div className="flex">
          <span className="mr-2">andrea@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-grow bg-transparent outline-none"
            autoFocus
          />
        </div>
      </div>
    </div>
  )
}

export default Terminal
