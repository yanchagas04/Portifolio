import OutrosProjetos from "./OutrosProjetos"
import PrincipaisProjetos from "./PrincipaisProjetos"

export default function Projeto() {
    
    return (
        <section id="projetos" className="w-full lg:w-3/4 lg:max-w-screen-lg flex flex-col gap-8 items-center font-inter">
            <h2 className="w-full text-4xl font-bold md:text-center">Projetos</h2>
            <p className=" text-lg text-justify indent-8">Aqui você encontra uma seleção dos trabalhos que desenvolvi ao longo da minha trajetória. Cada projeto representa um desafio único, onde pude aplicar minhas habilidades, criatividade e aprendizado contínuo.
            </p>
            <PrincipaisProjetos />
            <OutrosProjetos />
        </section>
    )
}