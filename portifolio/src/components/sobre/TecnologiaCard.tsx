export type TecnologiaCardProps = {
    titulo: string
    imagem: string
}

export function TecnologiaCard(props: TecnologiaCardProps){
    return (
        <div className="min-w-16 max-w-32 flex flex-col gap-4 items-center hover:scale-105 duration-150 ease-in-out transition-all font-inter">
            <img className="w-full contain-layout" src={props.imagem} alt={props.titulo} />
            <p className="">{props.titulo}</p>
        </div>
    )
}