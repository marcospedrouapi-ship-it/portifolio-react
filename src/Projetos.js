import React from "react";

export default function Projetos() {
  const listaProjetos = [
    { id: 1, nome: "Projeto 01 - AGROCONECTA: Plataforma Principal", desc: "Desenvolvimento de uma plataforma digital para integração entre produtores rurais, tecnologias e oportunidades de mercado." },
    { id: 2, nome: "Projeto 02 - AGROCONECTA: Rede Colaborativa", desc: "Sistema para compartilhamento de conhecimento, experiências e criação de parcerias estratégicas no campo." },
    { id: 3, nome: "Projeto 03 - AGROCONECTA: Sustentabilidade e Inovação", desc: "Projeto focado em promover práticas sustentáveis e aumento da produtividade no agronegócio." }
  ];

  return (
    <section className="projetos-container">
      <h2>Meus Projetos</h2>
      <div className="grid">
        {listaProjetos.map((proj) => (
          <div key={proj.id} className="card">
            <h3>{proj.nome}</h3>
            <p>{proj.desc}</p>
            <a href="#">Ver no GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}