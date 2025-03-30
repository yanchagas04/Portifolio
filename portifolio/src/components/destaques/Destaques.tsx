import Destaque from "./Destaque";

const destaques = [
    {titulo: "Geração de Tickets", descricao: "Página de geração de tickets proposta para a matéria de FullStack visando aplicar as habilidades aprendidas de HTML, CSS e JS aprendidas em sala.", link_github: "https://github.com/yan-campelo/Projeto1", imagem: "https://placehold.co/150x150"},
    {titulo: "Calculadora de Idade", descricao: "Calculadora de idade proposta para a matéria de FullStack visando aplicar as habilidades aprendidas utilizando React, Node.js e TailwindCSS.", link_github: "https://github.com/yan-campelo/Projeto2", imagem: "https://placehold.co/150x200"},
    {titulo: "MelembraAI", descricao: "Projeto futuro da materia de FullStack visando aplicar as habilidades aprendidas utilizando React, Node.js, TailwindCSS e requisição a APIs externas.", link_github: "https://github.com/yan-campelo/Projeto3", imagem: "https://placehold.co/150x150"}
]

export default function Destaques() {
    return (
        <section className="w-full py-4 px-8 flex flex-wrap justify-center items-center font-inter h-fit">
            <h2 className="w-full text-2xl font-bold">Destaques</h2>
            <div className="w-full max-w-full flex flex-wrap justify-center items-end gap-6 p-4 h-full">
                {destaques.map((card) => {return <Destaque key={card.titulo} titulo={card.titulo} descricao={card.descricao} link_github={card.link_github} imagem={card.imagem}/>})}
            </div>
        </section>
    )
}