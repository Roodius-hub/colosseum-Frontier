import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import logo from "../../public/frontier-Roodius.png";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group";
import Logosvg from "@/public/logo";
import LoginPage from "@/app/signup/page";
import { FaWallet } from "react-icons/fa"

export function Navbar() {


    return (
        <nav className="px-2xl mx-auto flex h-full max-w-[1600px] items-center justify-between">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
                <div className="flex justify-center items-center mr-20 pr-20">
                <Logosvg className="scale-70"/>
                </div>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium justify-center items-center flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                        <li>
                                    <InputGroup className="max-w-xs">
                                        <InputGroupInput placeholder="Search..." />
                                        <InputGroupAddon>
                                            <search />
                                        </InputGroupAddon>
                                        <InputGroupAddon align="inline-end"></InputGroupAddon>
                                        </InputGroup>                        
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Jobs</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Post Job</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Connect Wallet <FaWallet/></a>
                        </li>
                        <li>
                            <LoginPage />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}




{/*  */ }

