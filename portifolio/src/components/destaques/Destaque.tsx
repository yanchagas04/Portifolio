type DestaquesProps = {
    titulo: string,
    descricao: string,
    link_github: string,
    imagem: string
}

export default function Destaque(props: DestaquesProps) {
    return (
        <a className={`w-full max-w-72 h-[450px] flex flex-col flex-grow items-center bg-[#3333337c] hover:scale-105 duration-150 ease-in-out transition-all font-inter rounded-xl border-2 border-transparent hover:border-indigo-500`} href={props.link_github}>
            <div className="flex justify-center w-full h-3/5">
                <img className="w-full object-cover rounded-t-xl" src={props.imagem} alt={props.titulo} />
            </div>
            <div className="w-full h-2/5 flex flex-col p-4">
                <h3 className="w-full text-lg font-bold text-left h-fit">{props.titulo}</h3>  
                <div className="flex w-full h-full p-2 overflow-scroll">
                    <p className="w-full text-justify break-words text-ellipsis h-full">{props.descricao}</p>
                </div>
            </div>
        </a>
    )

}