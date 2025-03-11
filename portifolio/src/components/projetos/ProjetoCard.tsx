export type ProjetoProps = {
   text: string,
   link: string 
}

export function ProjetoCard(props: ProjetoProps) {
    return (
        <div className="w-full flex flex-col gap-4 items-center duration-150 ease-in-out transition-all font-inter hover:animate-pulse">
            <a className="w-full flex flex-row hover:font-bold hover:text-indigo-500 transition-all " href={props.link}>{"- " + props.text}</a>
        </div>
    )
}