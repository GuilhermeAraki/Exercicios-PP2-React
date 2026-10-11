import { useState } from "react";

interface CartaoProdutoProps {
  nome: string;
  preco: number;
}

function CartaoProduto({ nome, preco }: CartaoProdutoProps) {
  const [curtidas, setCurtidas] = useState(0);

  return (
    <div className="card produto-card">
      <h3 className="card-titulo">{nome}</h3>
      <p className="produto-preco">R$ {preco.toFixed(2)}</p>

      <button
        onClick={() => setCurtidas((atual) => atual + 1)}
        className="btn btn-primario"
      >
        ❤️ Curtir ({curtidas})
      </button>
    </div>
  );
}

export default CartaoProduto;
