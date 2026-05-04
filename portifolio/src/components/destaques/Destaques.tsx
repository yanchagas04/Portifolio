import Destaque from "./Destaque";
import siteResgatePratico from "../../../public/projetos/site-resgate-pratico.png";
import siteCalangoTec from "../../../public/projetos/site-calangotec.png";
const placeholder = "https://placehold.co/600x400?text=Confidencial";

const destaques = [
	{
		titulo: "Site do CT Resgate Prático",
		descricao:
			"Site para o Centro de Treinamento Resgate Práticos, com o propoósito de criar uma maneira de atrair novos clientes/alunos e mostrar os serviços e cursos que são oferecidos além dos equipamentos vendidos pelo CT.",
		link_github: "https://github.com/yanchagas04/Resgate-Pratico-TTG",
		imagem: siteResgatePratico.src,
	},
	{
		titulo: "Site do Calangotec Baja",
		descricao:
			"Site para a iniciativa estudantil Calangotec Baja, com o propoósito de contar a história da iniciativa, exibir a loja e facilitar o contato com o time para atrair patrocinadores.",
		link_github: "https://calangotec-baja.vercel.app/",
		imagem: siteCalangoTec.src,
	},
	{
		titulo: "Sistema de Gerenciamento do Resgate Prático",
		descricao:
			"Sistema de gestão criado especialmente para o Centro de Treinamento Resgate Prático. O sistema conta com diversas funções como, por exemplo, gerenciamento dos clientes (físicos e jurídicos), gestão de funcionários, cursos oferecidos, equipamentos vendidos, etc.",
		link_github: "",
		imagem: placeholder,
	},
];

export default function Destaques() {
	return (
		<section className="w-full py-4 px-2 sm:px-8 flex flex-wrap justify-center items-center font-inter h-fit">
			<h2 className="w-full text-2xl font-bold">Destaques</h2>
			<div className="w-full max-w-full flex flex-wrap justify-center items-end gap-6 p-4 h-full">
				{destaques.map((card) => {
					return (
						<Destaque
							key={card.titulo}
							titulo={card.titulo}
							descricao={card.descricao}
							link_github={card.link_github}
							imagem={card.imagem}
						/>
					);
				})}
			</div>
		</section>
	);
}
