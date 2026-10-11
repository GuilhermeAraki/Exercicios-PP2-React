interface BotaoProps {
  texto: string;
  variante: "primario" | "perigo";
  onClick: () => void;
}

function Botao({ texto, variante, onClick }: BotaoProps) {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${variante}`}
    >
      {texto}
    </button>
  );
}

export default Botao;
