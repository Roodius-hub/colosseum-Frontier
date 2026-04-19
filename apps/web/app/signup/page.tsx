"use client"

import { Input } from "@/components/ui/input"
import AuthButton from "@/lib/Authbutton"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  return (
    <div>
      <AuthButton/>
    </div>
  )
}