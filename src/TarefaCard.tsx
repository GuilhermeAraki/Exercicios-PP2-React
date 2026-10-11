import { useState } from "react";

interface TarefaCardProps {
  titulo: string;
}

function TarefaCard({ titulo }: TarefaCardProps) {
  const [concluida, setConcluida] = useState(false);

  return (
    <div className={`card tarefa-card ${concluida ? "tarefa-concluida" : ""}`}>
      <span className={`tarefa-titulo ${concluida ? "riscado" : ""}`}>
        {titulo}
      </span>

      <button
        onClick={() => setConcluida(!concluida)}
        className={`btn ${concluida ? "btn-secondary" : "btn-primario"}`}
      >
        {concluida ? "Desfazer" : "Concluir"}
      </button>
    </div>
  );
}

export default TarefaCard;
