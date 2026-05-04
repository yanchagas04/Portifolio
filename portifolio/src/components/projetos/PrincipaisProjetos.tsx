"use client";
import { useState } from "react";
import { ProjetoCard, ProjetoProps } from "./ProjetoCard";
const githubURL = "https://github.com/yanchagas04";
const projetos: ProjetoProps[] = [
	{
		text: "Análise e Estrutura de Dados",
		link: "https://github.com/yanchagas04/Data-Structures-and-Algorithm-Analysis",
	},
	{
		text: "Static Checker (Compiladores)",
		link: "https://github.com/yanchagas04/Compiladores",
	},
	{
		text: "Xadrez em Java (com Interface Gráfica)",
		link: "https://github.com/yanchagas04/flamengoPOO",
	},
	{
		text: "Algoritmos para Teoria dos Grafos",
		link: "https://github.com/yanchagas04/Teoria-Dos-Grafos",
	},
	{
		text: "Algoritmos para análise de sinais",
		link: "https://github.com/yanchagas04/SinaisSistemas",
	},
];

export default function PrincipaisProjetos() {
	const [cor1, setCor1] = useState("white");
	return (
		<div className="w-full bg-[#3333337c] py-4 px-8 flex flex-col rounded-lg h-fit gap-4">
			<div className="w-full flex flex-row">
				<h3 className="w-full text-xl font-bold pt-4">Outros projetos</h3>
			</div>
			<div className="w-full flex flex-col justify-center items-end gap-4">
				{projetos.map((card) => {
					return (
						<ProjetoCard key={card.text} text={card.text} link={card.link} />
					);
				})}
			</div>
			<div className="h-fit w-full justify-center gap-4 flex flex-col">
				<div className="w-full flex flex-col sm:flex-row gap-4 h-fit items-center">
					<a
						className="flex flex-col gap-4 items-center duration-150 ease-in-out transition-all font-inter hover:scale-105 hover:border-vibrant-blue-100 hover:animate-pulse border-2 rounded-lg p-4 w-full md:max-w-36"
						href={githubURL}
						onMouseEnter={() => {
							setCor1("#2691FC");
						}}
						onMouseLeave={() => {
							setCor1("white");
						}}
					>
						<svg
							fill={cor1}
							height="auto"
							width="80%"
							aria-hidden="true"
							viewBox="0 0 24 24"
							version="1.1"
							data-view-component="true"
							className="octicon octicon-mark-github v-align-middle transition-none ease-in-out duration-150"
						>
							<path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
						</svg>
						<h3 className="text-lg md:text-sm">Portifólio Github</h3>
					</a>
					<p className="text-justify md:w-full md:min-w-3/5 h-fit">
						Se curtiu os projetos que eu citei acima e quiser dar uma olhada em
						outros que já fiz, visite o meu GitHub! Lá tem um monte de ideias,
						experimentos e coisas que fui criando ao longo do tempo e a medida
						que fui aprendendo.
					</p>
				</div>
			</div>
		</div>
	);
}
