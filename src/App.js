import React from "react";
import "./style.css";
import Projetos from "./Projetos"; // Aqui estamos importando o componente criado

export default function App() {
  return (
    <div className="portfolio">
      <header>
        <h1>Meu Portfólio</h1>
      </header>

      <main>
        <section id="sobre">
          <h2>Sobre Mim</h2>
          {/* Coloque o link da foto da Lilena aqui se tiver */}
          <img src="/foto.jpeg" alt="Foto de Lilena" className="foto" />
          <p>Sou estudante de Sistemas para Internet (UAPI) e foco em soluções digitais.</p>
        </section>
      

        {/* Aqui chamamos o componente de projetos - Cumpre o requisito de componentização */}
        <Projetos />
      </main>
    </div>
  );
}