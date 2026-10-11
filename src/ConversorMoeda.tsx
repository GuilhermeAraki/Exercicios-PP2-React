import { useState } from "react";

interface ConversorMoedaProps {
  moeda: string;
  taxa: number; // Ex: quanto vale R$ 1 nessa moeda
}

function ConversorMoeda({ moeda, taxa }: ConversorMoedaProps) {
  const [valorEmReais, setValorEmReais] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);

  function converter() {
    const valorNumerico = Number(valorEmReais);
    if (valorNumerico > 0) {
      setResultado(valorNumerico * taxa);
    }
  }

  return (
    <div className="card conversor-card">
      <h3 className="card-titulo">Converter para {moeda}</h3>
      <p className="subtexto">Taxa: 1 BRL = {taxa} {moeda}</p>

      <input
        type="number"
        step="0.01"
        placeholder="Valor em R$"
        value={valorEmReais}
        onChange={(e) => setValorEmReais(e.target.value)}
        className="input-conversor"
      />

      <button onClick={converter} className="btn btn-primario">
        Converter
      </button>

      {resultado !== null && (
        <div className="resultado-conversao">
          <strong>
            {resultado.toFixed(2)} {moeda}
          </strong>
        </div>
      )}
    </div>
  );
}

export default ConversorMoeda;
