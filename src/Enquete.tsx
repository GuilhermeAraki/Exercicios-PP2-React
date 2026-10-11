import { useState } from "react";

interface EnqueteProps {
  pergunta: string;
  opcaoA: string;
  opcaoB: string;
}

function Enquete({ pergunta, opcaoA, opcaoB }: EnqueteProps) {
  const [votosA, setVotosA] = useState(0);
  const [votosB, setVotosB] = useState(0);

  // Valor calculado derivado
  let statusLideranca = "Empate";
  if (votosA > votosB) {
    statusLideranca = `${opcaoA} está na frente`;
  } else if (votosB > votosA) {
    statusLideranca = `${opcaoB} está na frente`;
  }

  function zerarVotos() {
    setVotosA(0);
    setVotosB(0);
  }

  return (
    <div className="card enquete-card">
      <h3 className="card-titulo">{pergunta}</h3>

      <div className="btn-group">
        <button
          onClick={() => setVotosA((v) => v + 1)}
          className="btn btn-primario"
        >
          {opcaoA} ({votosA})
        </button>

        <button
          onClick={() => setVotosB((v) => v + 1)}
          className="btn btn-info"
        >
          {opcaoB} ({votosB})
        </button>
      </div>

      <div className="enquete-status">
        <span>{statusLideranca}</span>
      </div>

      <button onClick={zerarVotos} className="btn-link">
        Zerar votos
      </button>
    </div>
  );
}

export default Enquete;
