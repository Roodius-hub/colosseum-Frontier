"use client"

import { Input } from "@/components/ui/input"
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
      <h2>Login</h2>

      {/* OAuth */}
      <button onClick={() => signIn("google")} className="">
        Login with Google
      </button>

      <br />

      <button onClick={() => signIn("github")}>
        Login with GitHub
      </button>

      <br /><br />

      {/* Credentials */}
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br />

      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button
        onClick={async () => {
          setLoading(true)

          const res = await signIn("credentials", {
            username,
            password,
            redirect: false,
          })

          setLoading(false)

          if (res?.error) {
            alert("Invalid credentials")
          } else {
            router.push("/")
          }
        }}
        className="bg-purple-600 p-2 rounded-md">
        {loading ? "Logging in..." : "Login with Email"}
      </button>
    </div>
  )
}