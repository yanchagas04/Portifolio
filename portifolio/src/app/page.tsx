import Header from "@/components/header/Header";
import Sobre from "@/components/sobre/Sobre";
import Image from "next/image";
import Projetos from "@/components/projetos/Projetos"
import Footer from "@/components/footer/Footer";
import Contato from "@/components/contato/Contato";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-8">
      <Header />
      <main className="w-full px-8 gap-8 flex flex-col items-center">
        <Sobre />
        <Projetos />
        <Contato/>
      </main>
      <Footer/> 
    </div>
  );
}
