import { useState } from "react";

interface ContadorProps {
  passo: number;
}

function Contador({ passo }: ContadorProps) {
  const [valor, setValor] = useState(0);

  function diminuir() {
    // Garante que o valor nunca fique abaixo de zero
    setValor((anterior) => Math.max(0, anterior - passo));
  }

  function aumentar() {
    setValor((anterior) => anterior + passo);
  }

  function zerar() {
    setValor(0);
  }

  return (
    <div className="card contador-card">
      <p className="subtexto">Passo: {passo}</p>
      <span className="contador-valor">{valor}</span>

      <div className="btn-group">
        <button onClick={diminuir} className="btn btn-secondary">
          −
        </button>
        <button onClick={zerar} className="btn btn-warning">
          Zerar
        </button>
        <button onClick={aumentar} className="btn btn-primario">
          +
        </button>
      </div>
    </div>
  );
}

export default Contador;
