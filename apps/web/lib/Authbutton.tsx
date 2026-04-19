"use client";

import { signIn, signOut, useSession } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthButton(){
    const router = useRouter();
    const { data:session, status } = useSession();
    const [open, setOpen] = useState(false);
    if(!session) {
        return <div className="gap-2 flex items-center justify-center">
    <button onClick={async () => {
        const res = await signIn('credentials', {
            username: "",
            password: "",
            redirect:false
        })

        if(!res?.error) {
            alert("Invalid Cred")
        } else {
            router.push('/');
        }
    }}></button>
    <button onClick={() => signIn("google", {callbackUrl:'/'})} className="bg-[#a026da] p-3 rounded-lg"> <FcGoogle/> </button>
    <button onClick={() => signIn("github" , {callbackUrl:'/'})} className="bg-[#0a85a7] p-3 rounded-lg"> <FaGithub/> </button>
    </div>
    }

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
      
    </div>

    
}