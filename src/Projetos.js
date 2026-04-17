import React from "react";

export default function Projetos() {
  const listaProjetos = [
    { id: 1, nome: "Projeto 01 - SGET", desc: "Gestão de escalas com foco em UML." },
    { id: 2, nome: "Projeto 02 - Registro de Escala", desc: "Sistema para organização de turnos." },
    { id: 3, nome: "Projeto 03 - Registro de Ponto", desc: "Controle de entrada e saída." }
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