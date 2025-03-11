

export default function Footer() {
    return (
        <footer className="w-full h-fit bg-[#3333337c] font-inter flex flex-col items-center gap-4 p-8">
            <a href="mailto:yanchagas2004@gmail.com" className="flex flex-row gap-2 w-fit"><img src="https://img.icons8.com/?size=100&id=94652&format=png&color=FFFFFF" alt="Link Email" className="w-4 aspect-auto h-4 self-center"/>yanchagas2004@gmail.com</a>
            <div className="w-full flex flex-wrap justify-center gap-4">
                <a href="https://www.instagram.com/yanchagas.dev/"><img src="https://img.icons8.com/?size=100&id=84884&format=png&color=FFFFFF" alt="Link Instagram" className="w-8"/></a>
                <a href="https://www.linkedin.com/in/yan-campelo-das-chagas/"><img src="https://img.icons8.com/?size=100&id=84888&format=png&color=FFFFFF" alt="Link Linkedin" className="w-8"/></a>
                <a href="https://x.com/yanchagas04"><img src="https://img.icons8.com/?size=100&id=ud9VVQzOPag8&format=png&color=FFFFFF" alt="Link Twitter" className="w-8" /></a>
            </div>
            <p>{"Yan Campêlo das Chagas © " + new Date().getFullYear() }</p>
        </footer>
    )
}