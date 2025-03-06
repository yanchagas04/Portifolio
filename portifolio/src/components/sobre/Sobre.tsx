import { TecnologiaCardProps, TecnologiaCard } from "./TecnologiaCard"

const tecnologias : TecnologiaCardProps[] = [
    {"titulo": "React", "imagem": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"},
    { "titulo": "Node.js", "imagem": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { "titulo": "TailwindCSS", "imagem": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { "titulo": "FastAPI", "imagem": "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" },
    { "titulo": "Prisma ORM", "imagem": "https://img.icons8.com/?size=100&id=zJh5Gyrd6ZKu&format=png&color=000000" },
    { "titulo": "SQLite", "imagem": "https://upload.wikimedia.org/wikipedia/commons/3/38/SQLite370.svg" }
]

export default function Sobre() {
    return (
        <section className="w-full lg:w-3/4 flex flex-col gap-4 items-center font-inter">
            <h2 className="w-full text-2xl font-bold">Sobre</h2>
            <p className=" text-lg text-justify indent-8">Olá, meu nome é Yan Campêlo. Sou estudante de Engenharia de Computação no SENAI CIMATEC e atualmente estou estagiando na área de automação do Cimatec. Estou em constante busca por aprimorar meus conhecimentos e ganhar experiência na área de tecnologia, com foco em desenvolvimento de software e automação.
            </p>
            <h3 className="w-full text-2xl font-bold">Minhas habilidades incluem:</h3>
            <ul className="list-disc pl-8 w-full">
                <li>Desenvolvimento fullstack</li>
                <li>IoT (Internet das Coisas)</li>
                <li>Sistemas Embarcados</li>
                <li>Banco de Dados</li>
            </ul>
            <h3 className="w-full text-2xl font-bold">Experiências com tecnologias:</h3>
            <div className="w-full md:w-3/4 flex flex-wrap justify-center items-end gap-4">
                {tecnologias.map((card: TecnologiaCardProps) => {return <TecnologiaCard titulo={card.titulo} imagem={card.imagem}/>})}
            </div>
            {/* <ul className="list-disc pl-8 w-full">
                <li>React e Next.js</li>
                <li>Node.js</li>
                <li>TailwindCSS</li>
                <li>FastAPI</li>
                <li>Prisma ORM</li>
                <li>SQL e SQLite</li>
            </ul> */}
        </section>
    )
}