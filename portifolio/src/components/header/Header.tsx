"use client"
const fotoPerfil = "https://media.licdn.com/dms/image/v2/D4D03AQHUgYPw35Fjbw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730043476607?e=1746662400&v=beta&t=0IzlkTHxFmlxZivukJLV6pVMdG8jWajhQGKBT8F-NCk";
import seta from "../../../public/arrow_downward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"

export default function Header() {
    return (
        <header className={"w-full top-0 h-screen flex flex-col gap-8 justify-center items-center font-inter"}>
            <div className="w-full md:max-w-fit flex flex-col items-center gap-4 py-4 px-2">
                <img src={fotoPerfil} alt="Foto Perfil" className="w-48 h-48 sm:w-64 sm:h-64 rounded-full"/>
                <h1 className="text-3xl md:text-5xl text-center font-bold md:text-nowrap max-w-fit text-transparent bg-clip-text animate-pulse bg-gradient-to-r from-indigo-500 to-pink-500">Yan Campêlo das Chagas</h1>
            </div>
            <div className="flex justify-center w-full h-fit">
                <img onClick={() => {window.scrollTo({top: window.innerHeight, behavior: "smooth"})}} className="w-20 animate-bounce fill-indigo-500" src={seta.src} alt="" />
            </div>
        </header>
    )
}