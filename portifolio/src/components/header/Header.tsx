'use client'
import { useState } from "react";

const fotoPerfil = "https://media.licdn.com/dms/image/v2/D4D03AQHUgYPw35Fjbw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730043476607?e=1746662400&v=beta&t=0IzlkTHxFmlxZivukJLV6pVMdG8jWajhQGKBT8F-NCk";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className={"w-full flex justify-center items-cente bg-indigo-800 font-inter"}>
            <nav className="w-full flex flex-col md:flex-row justify-between items-center min-w-56">
                <div className={"flex flex-row items-center md:max-w-fit w-full relative z-10 px-4 pt-4 duration-500 ease-in-out " + (menuOpen ? "" : "pb-4")}>
                    <div className="w-full md:max-w-fit flex flex-row items-center gap-4">
                        <img src={fotoPerfil} alt="Foto Perfil" className="w-12 h-12 rounded-full"/>
                        <h1 className="text-xl font-bold md:text-nowrap max-w-fit">Yan Campêlo das Chagas</h1>
                    </div>
                    <button onClick={() => {setMenuOpen(!menuOpen)}} className="md:hidden w-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                        </svg>
                    </button>
                </div>
                <ul className={"md:w-fit md:p-4 w-full duration-500 ease-in-out items-left flex flex-col md:flex-row md:items-end md:text-lg md:h-fit justify-center md:pl-0 pl-4 md:gap-8 gap-4 overflow-hidden " + (menuOpen ? "h-[142px]" : "h-0")}>
                    <li className={"cursor-pointer w-fit duration-500 ease-in-out border-b-transparent border-b-2 hover:border-b-slate-50 h-fit md:scale-y-100 " + (menuOpen ? "" : "scale-y-0")}>
                        <a href="#projetos">Projetos</a>
                    </li>
                    <li className={"cursor-pointer w-fit duration-500 ease-in-out border-b-transparent border-b-2 hover:border-b-slate-50 h-fit md:scale-y-100 " + (menuOpen ? "" : "scale-y-0")}>
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li className={"cursor-pointer w-fit duration-500 ease-in-out border-b-transparent border-b-2 hover:border-b-slate-50 h-fit md:scale-y-100 " + (menuOpen ? "" : "scale-y-0")}>
                        <a href="#contato">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}