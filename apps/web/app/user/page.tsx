"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from "react"

export default function UserMenu() {
  const { data: session, status } = useSession()
  const [open, setOpen] = useState(false)

  if (status === "loading") return null

  // 🔓 NOT LOGGED IN
  if (!session) {
    return (
      <div className="flex gap-2">
        <button
          onClick={() => signIn("google")}
          className="px-4 py-2 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-white hover:bg-[#222]"
        >
          Google
        </button>

        <button
          onClick={() => signIn("github")}
          className="px-4 py-2 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-white hover:bg-[#222]"
        >
          GitHub
        </button>
      </div>
    )
  }

  // 🔐 LOGGED IN
  return (
    <div className="relative">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 cursor-pointer"
      >
        <img
          src={session.user?.image || "/default.png"}
          className="w-9 h-9 rounded-full border border-[#2a2a2a]"
        />
        <span className="text-white text-sm">
          {session.user?.name || "User"}
        </span>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-[#111] border border-[#2a2a2a] rounded-lg shadow-lg p-2">
          <button className="w-full text-left px-3 py-2 hover:bg-[#222] rounded">
            Profile
          </button>

          <button className="w-full text-left px-3 py-2 hover:bg-[#222] rounded">
            Dashboard
          </button>

          <button
            onClick={() => signOut()}
            className="w-full text-left px-3 py-2 hover:bg-[#222] rounded text-red-400"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  )
}