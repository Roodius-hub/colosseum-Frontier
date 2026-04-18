"use client"
import { Input } from "@/components/ui/input";
import { signIn, signOut, useSession } from "next-auth/react";


export default function SignUp() {


    return (
        <div className="">
            <div className="">
                <h1>Create your account</h1>
                <p>Welcome! Please fill in the details to get started.</p>
            </div>
            <div>

            </div>
            {/* <br>or</br> */}
            <div className="">
                <div>
                    <label htmlFor="">Email Address <span>Use Phone instead</span></label>
                    <Input />
                </div>
                <button>Continue</button>
            </div>
        </div>
    )
}