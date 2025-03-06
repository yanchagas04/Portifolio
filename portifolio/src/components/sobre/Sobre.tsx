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
            <h3 className="w-full text-2xl font-bold">Experiências com Tecnologias:</h3>
            <ul className="list-disc pl-8 w-full">
                <li>React e Next.js</li>
                <li>Node.js</li>
                <li>TailwindCSS</li>
                <li>FastAPI</li>
                <li>Prisma ORM</li>
                <li>SQL e SQLite</li>
            </ul>
        </section>
    )
}