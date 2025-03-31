import Destaque from "./Destaque";
import geradorTicket from "../../../public/projetos/geradorticket.png"
import calculadoraIdade from "../../../public/projetos/calcidade.png"

const destaques = [
    {titulo: "Geração de Tickets", descricao: "Página de geração de tickets proposta para a matéria de FullStack visando aplicar as habilidades aprendidas de HTML, CSS e JS aprendidas em sala.", link_github: "https://github.com/yan-campelo/Projeto1", imagem: geradorTicket.src},
    {titulo: "Calculadora de Idade", descricao: "Calculadora de idade proposta para a matéria de FullStack visando aplicar as habilidades aprendidas utilizando React, Node.js e TailwindCSS.", link_github: "https://github.com/yan-campelo/Projeto2", imagem: calculadoraIdade.src},
    {titulo: "MelembraAI", descricao: "Projeto futuro da materia de FullStack visando aplicar as habilidades aprendidas utilizando React, Node.js, TailwindCSS e requisição a APIs externas.", link_github: "https://github.com/yan-campelo/Projeto3", imagem: "https://placehold.co/150"},
]

export default function Destaques() {
    return (
        <section className="w-full py-4 px-2 sm:px-8 flex flex-wrap justify-center items-center font-inter h-fit">
            <h2 className="w-full text-2xl font-bold">Destaques</h2>
            <div className="w-full max-w-full flex flex-wrap justify-center items-end gap-6 p-4 h-full">
                {destaques.map((card) => {return <Destaque key={card.titulo} titulo={card.titulo} descricao={card.descricao} link_github={card.link_github} imagem={card.imagem}/>})}
            </div>
        </section>
    )
}