export type ProjetoProps = {
   text: string,
   link: string 
}

export function ProjetoCard(props: ProjetoProps) {
    return (
        <div className="min-w-16 max-w-32 flex flex-col gap-4 items-center hover:scale-105 duration-150 ease-in-out transition-all font-inter">
            <a className="" href={props.link}>{props.text}</a>
        </div>
    )
}