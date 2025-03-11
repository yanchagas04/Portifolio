"use client"
import { useState } from "react"

export default function Contato() {
    const [bounce, setBounce] = useState(false);
    const sendEmail = () => {
        document.getElementById('btnEnviar')?.addEventListener('click', function() {
            // Captura o valor da textarea
            var mensagem = document.getElementById('mensagem') as HTMLTextAreaElement;
        
            // Codifica a mensagem para uso em URLs
            try {
                var mensagemCodificada = encodeURIComponent(mensagem.value);
                // Define o e-mail de destino e o assunto
                var email = 'yanchagas2004@gmail.com'; // Substitua pelo seu e-mail
                var assunto = ''; // Substitua pelo assunto desejado
            
                // Cria a URL do Gmail com o conteúdo pré-preenchido
                var gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(assunto)}&body=${mensagemCodificada}`;
            
                // Redireciona o usuário para o Gmail
                window.open(gmailUrl, '_blank');
            } catch(e) {
                alert("Para enviar uma mensagem é preciso preencher o campo de mensagem.");
            }
        
        }) ;
    }
    return (
        <section id="sobre" className="w-full lg:w-3/4 lg:max-w-screen-lg flex flex-col gap-4 items-center font-inter">
            <h2 className="w-full text-3xl md:text-center font-bold">Contato</h2>
            <p className=" text-md text-justify indent-8">Se você curtiu o que viu por aqui e quer trocar uma ideia ou sugerir uma colaboração, manda um e-mail!</p>
            <span className="w-full flex flex-col gap-4">
                <textarea placeholder="Digite sua mensagem aqui..." name="EmailMessage" id="mensagem" className="w-full p-2 bg-gray-300 rounded-lg h-10 text-black min-h-10" />
                <button onClick={sendEmail} id="btnEnviar" className="w-full h-10 p-2 bg-green-600 rounded-lg flex justify-center transition-all duration-150 ease-in-out hover:bg-green-700" onMouseEnter={() => {setBounce(true)}} onMouseLeave={() => {setBounce(false)}}><img src="https://img.icons8.com/?size=100&id=94716&format=png&color=FFFFFF" alt="Enviar e-mail" className={"transition-all duration-150 ease-in-out h-full " + (bounce ? "animate-bounce" : "")}/></button>
            </span>
        </section>
    )
}