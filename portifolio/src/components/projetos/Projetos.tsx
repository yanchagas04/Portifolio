import { ProjetoCard, ProjetoProps } from "./ProjetoCard"

const projetos: ProjetoProps[] = [
 {"text": "Análise e Estrutura de Dados", "link": "https://github.com/yanchagas04/Data-Structures-and-Algorithm-Analysis"},
 {"text": "Static Checker (Compiladores)", "link": "https://github.com/yanchagas04/Compiladores"},
 {"text": "Xadrez em Java", "link": "https://github.com/yanchagas04/flamengoPOO"},
 {"text": "WebSite da Resgate Prático", "link": "https://github.com/yanchagas04/Resgate-Pratico-TTG"},
 {"text": "Outro projetos", "link": "https://github.com/yanchagas04"}
]

export default function Projeto() {
    return (
        <section className="w-full md:w-3/4 lg:max-w-screen-lg flex flex-col gap-4 items-center font-inter">
            <h2 className="w-full text-2xl font-bold">Projetos</h2>
            <p className=" text-lg text-justify indent-8">Aqui você encontra uma seleção dos trabalhos que desenvolvi ao longo da minha trajetória. Cada projeto representa um desafio único, onde pude aplicar minhas habilidades, criatividade e aprendizado contínuo.
            </p>
            <div className="w-full bg-[#3333337c] p-4 flex flex-row rounded-lg h-fit">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                    </svg>
                </button>
                <h3 className="w-full text-2xl font-bold  p-4 ">Principais Projetos</h3>
                <div className="w-full flex flex-col gap-8">
                    <h3 className="w-full text-2xl font-bold">Experiências com tecnologias:</h3>
                    <div className="w-full md:max-w-3/4 flex flex-wrap justify-center items-end gap-4">
                        {projetos.map((card) => {return <ProjetoCard key={card.text} text={card.text} link={card.link}/>}
                    </div>
                </div>
            </div>
        </section>
    )
}