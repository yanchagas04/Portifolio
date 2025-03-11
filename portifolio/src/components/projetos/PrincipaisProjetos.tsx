"use client"
import { useState } from "react"
import { ProjetoCard, ProjetoProps } from "./ProjetoCard"

const projetos: ProjetoProps[] = [
 {"text": "Análise e Estrutura de Dados", "link": "https://github.com/yanchagas04/Data-Structures-and-Algorithm-Analysis"},
 {"text": "Static Checker (Compiladores)", "link": "https://github.com/yanchagas04/Compiladores"},
 {"text": "Xadrez em Java (com Interface Gráfica)", "link": "https://github.com/yanchagas04/flamengoPOO"},
 {"text": "WebSite da Resgate Prático", "link": "https://github.com/yanchagas04/Resgate-Pratico-TTG"},
 {"text": "Algoritmos para Teoria dos Grafos", "link": "https://github.com/yanchagas04/Teoria-Dos-Grafos"},
 {"text": "Algoritmos para análise de sinais", "link": "https://github.com/yanchagas04/SinaisSistemas"}
]

export default function PrincipaisProjetos() {
    const [aberto, setAberto] = useState(false)
    return (
        <div className="w-full bg-[#3333337c] py-4 px-8 flex flex-col rounded-lg h-fit">
            <div className="w-full flex flex-row">
                <button onClick={() => {setAberto(!aberto)}}>
                    {aberto && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                    </svg>}
                    {!aberto && <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-360 280-560h400L480-360Z"/></svg>}
                    
                </button>
                <h3 className="w-full text-2xl font-bold  p-4 ">Principais projetos</h3>
            </div>
            <div className={"w-full justify-center items-end gap-4 " + (aberto ? "flex flex-col" : "hidden")}>
                {projetos.map((card) => {return <ProjetoCard key={card.text} text={card.text} link={card.link}/>})}
            </div>
        </div>
    )
}