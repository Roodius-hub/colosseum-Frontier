"use client";

import { signIn, signOut, useSession } from "next-auth/react"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"

export default function AuthButton(){
    const { data : session, status } = useSession();

    if(status == "loading") {
        return <p>Loading...</p>
    }

    if (session) {
        return (
            <>
            <p>welcome {session.user?.name}</p>
            <button onClick={() => signOut()}>Logout</button>
            </>
        )
    }
    return <div className="gap-2 flex items-center justify-center">
    <button onClick={() => signIn("google")} className="bg-[#a026da] p-3 rounded-lg"> <FcGoogle/> </button>
    <button onClick={() => signIn("github")} className="bg-[#0a85a7] p-3 rounded-lg"> <FaGithub/> </button>
    </div>
}