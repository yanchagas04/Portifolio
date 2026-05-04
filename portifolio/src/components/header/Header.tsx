"use client";
const fotoPerfil =
	"https://media.licdn.com/dms/image/v2/D4D03AQEu3-xmzzAOPw/profile-displayphoto-scale_400_400/B4DZqNsZxTH4Ag-/0/1763313820610?e=1778716800&v=beta&t=p1lAGwtEcxaMWZDaEpwmu3gCB4RZNshdGWgLkJ_fRO4";
import seta from "../../../public/arrow-sm-down-svgrepo-com.svg";

export default function Header() {
	const scrollToSobre = () => {
		const element = document.getElementById("sobre");
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};

	return (
		<header
			className={
				"w-full h-screen flex flex-col gap-6 justify-center items-center font-inter pt-16 bg-soft-blue-50"
			}
		>
			<div className="w-full md:max-w-fit flex flex-col items-center gap-6 py-4 px-2">
				<img
					src={fotoPerfil}
					alt="Foto Perfil"
					className="w-48 h-48 sm:w-64 sm:h-64 rounded-full shadow-2xl"
				/>
				<h1 className="flex text-3xl md:text-4xl text-center font-bold md:text-nowrap max-w-fit text-transparent bg-clip-text bg-soft-blue-400">
					Yan Campêlo das Chagas
				</h1>
				<p className="text-lg md:text-xl text-center text-soft-blue-400 max-w-2xl">
					Desenvolvedor Back-end | Graduando em Eng. de Computação
				</p>
				<div className="flex gap-8 p-4">
					<button
						onClick={scrollToSobre}
						className="px-6 py-3 bg-soft-blue-300 text-white hover:font-bold rounded-lg font-medium transition-all duration-300 transform hover:bg-soft-blue-500 hover:rounded-none"
					>
						Conheça meu trabalho
					</button>
					<button
						onClick={() =>
							document
								.getElementById("contato")
								?.scrollIntoView({ behavior: "smooth" })
						}
						className="px-6 py-3 border-2 border-soft-blue-400 text-soft-blue-300 rounded-lg font-medium hover:bg-soft-blue-400 hover:text-white transition-all duration-300 hover:scale-105 hover:rounded-none"
					>
						Entre em contato
					</button>
				</div>
			</div>
			<div className="flex justify-center w-full h-fit">
				<img
					onClick={scrollToSobre}
					className="cursor-pointer w-20 animate-bounce hover:scale-110 transition-transform duration-300"
					src={seta.src}
					alt="Scroll para baixo"
				/>
			</div>
		</header>
	);
}
