import Header from "@/components/header/Header";
import Sobre from "@/components/sobre/Sobre";
import Image from "next/image";
import Projetos from "@/components/projetos/Projetos"
import Footer from "@/components/footer/Footer";
import Contato from "@/components/contato/Contato";
import Navigation from "@/components/navigation/Navigation";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Navigation />
      <section id="inicio">
        <Header />
      </section>
      <main className="w-full px-8 gap-16 flex flex-col items-center py-8"> 
        <section id="sobre" className="w-full flex justify-center">
          <Sobre />
        </section>
        <section id="projetos" className="w-full flex justify-center">
          <Projetos />
        </section>
        <section id="contato" className="w-full flex justify-center">
          <Contato/>
        </section>
      </main>
      <Footer/> 
    </div>
  );
}
