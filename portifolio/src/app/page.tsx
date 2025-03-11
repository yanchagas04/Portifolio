import Header from "@/components/header/Header";
import Sobre from "@/components/sobre/Sobre";
import Image from "next/image";
import Projetos from "@/components/projetos/Projetos"
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-8">
      <Header />
      <main className="w-full px-8 gap-8 flex flex-col items-center">
        <Sobre />
        <Projetos />
      </main>
      <Footer/> 
    </div>
  );
}
