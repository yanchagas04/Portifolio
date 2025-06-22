"use client"
const fotoPerfil = "https://media.licdn.com/dms/image/v2/D4D03AQHUgYPw35Fjbw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730043476607?e=1746662400&v=beta&t=0IzlkTHxFmlxZivukJLV6pVMdG8jWajhQGKBT8F-NCk";
import seta from "../../../public/arrow_downward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"

export default function Header() {
    const scrollToSobre = () => {
        const element = document.getElementById('sobre')
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
    }

    return (
        <header className={"w-full h-screen flex flex-col gap-6 justify-center items-center font-inter pt-16"}>
            <div className="w-full md:max-w-fit flex flex-col items-center gap-6 py-4 px-2">
                <img src={fotoPerfil} alt="Foto Perfil" className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-4 border-gradient-to-r from-indigo-500 to-pink-500 shadow-2xl"/>
                <h1 className="text-3xl md:text-5xl text-center font-bold md:text-nowrap max-w-fit text-transparent bg-clip-text animate-pulse bg-gradient-to-r from-indigo-500 to-pink-500">Yan Campêlo das Chagas</h1>
                <p className="text-lg md:text-xl text-center text-gray-300 max-w-2xl">
                    Desenvolvedor Full Stack | Engenheiro de Computação
                </p>
                <div className="flex gap-4 mt-4">
                    <button 
                        onClick={scrollToSobre}
                        className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-lg font-medium hover:from-indigo-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                    >
                        Conheça meu trabalho
                    </button>
                    <button 
                        onClick={() => document.getElementById('contato')?.scrollIntoView({behavior: 'smooth'})}
                        className="px-6 py-3 border-2 border-indigo-500 text-indigo-500 rounded-lg font-medium hover:bg-indigo-500 hover:text-white transition-all duration-300"
                    >
                        Entre em contato
                    </button>
                </div>
            </div>
            <div className="flex justify-center w-full h-fit">
                <img 
                    onClick={scrollToSobre} 
                    className="cursor-pointer w-20 animate-bounce fill-indigo-500 hover:scale-110 transition-transform duration-300" 
                    src={seta.src} 
                    alt="Scroll para baixo" 
                />
            </div>
        </header>
    )
}