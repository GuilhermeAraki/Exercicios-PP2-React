import Botao from "./Botao";
import Contador from "./Contador";
import CartaoProduto from "./CartaoProduto";
import TarefaCard from "./TarefaCard";
import ConversorMoeda from "./ConversorMoeda";
import Enquete from "./Enquete";
import "./App.css";

function App() {
  // Lista de produtos para demonstrar o bônus com .map()
  const produtos = [
    { id: 1, nome: "Teclado Mecânico", preco: 149.9 },
    { id: 2, nome: "Mouse Gamer", preco: 79.5 },
    { id: 3, nome: "Monitor 24'' 144Hz", preco: 899.0 },
  ];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Exercícios de React — Slides 25 a 30</h1>
        <p className="app-subtitle">
          Paradigmas de Programação II • Componentes, Props, Eventos e Estado
        </p>
      </header>

      <main className="exercicios-grid">
        {/* Exercício 1 - Slide 25 */}
        <section className="exercicio-secao">
          <h2>1. Botões Reutilizáveis (Slide 25)</h2>
          <p className="secao-desc">
            Componente <code>&lt;Botao /&gt;</code> reutilizável com variantes de estilo e manipuladores <code>onClick</code> via props.
          </p>
          <div className="componentes-linha">
            <Botao
              texto="Salvar"
              variante="primario"
              onClick={() => alert("Salvo com sucesso!")}
            />
            <Botao
              texto="Excluir"
              variante="perigo"
              onClick={() => alert("Item excluído!")}
            />
            <Botao
              texto="Confirmar Envio"
              variante="primario"
              onClick={() => alert("Envio confirmado!")}
            />
          </div>
        </section>

        {/* Exercício 2 - Slide 26 */}
        <section className="exercicio-secao">
          <h2>2. Contadores com Passo (Slide 26)</h2>
          <p className="secao-desc">
            Componente <code>&lt;Contador /&gt;</code> com passos configuráveis, incremento, decremento limitado em 0 e botão zerar.
          </p>
          <div className="componentes-linha">
            <Contador passo={1} />
            <Contador passo={5} />
          </div>
        </section>

        {/* Exercício 3 - Slide 27 */}
        <section className="exercicio-secao">
          <h2>3. Cartões de Produto com .map() (Slide 27)</h2>
          <p className="secao-desc">
            Componente <code>&lt;CartaoProduto /&gt;</code> renderizado com <code>.map()</code> e contadores de curtidas independentes.
          </p>
          <div className="componentes-linha">
            {produtos.map((produto) => (
              <CartaoProduto
                key={produto.id}
                nome={produto.nome}
                preco={produto.preco}
              />
            ))}
          </div>
        </section>

        {/* Exercício 4 - Slide 28 */}
        <section className="exercicio-secao">
          <h2>4. Cartões de Tarefa (Slide 28)</h2>
          <p className="secao-desc">
            Componente <code>&lt;TarefaCard /&gt;</code> com estado booleano para alternar entre pendente e concluída.
          </p>
          <div className="componentes-coluna">
            <TarefaCard titulo="Estudar conceitos de React e TypeScript" />
            <TarefaCard titulo="Fazer exercícios práticos dos slides 25 a 30" />
            <TarefaCard titulo="Revisar Props e useState" />
          </div>
        </section>

        {/* Exercício 5 - Slide 29 */}
        <section className="exercicio-secao">
          <h2>5. Conversor de Moeda (Slide 29)</h2>
          <p className="secao-desc">
            Componente <code>&lt;ConversorMoeda /&gt;</code> com input controlado e cálculo de conversão.
          </p>
          <div className="componentes-linha">
            <ConversorMoeda moeda="USD" taxa={0.18} />
            <ConversorMoeda moeda="EUR" taxa={0.16} />
          </div>
        </section>

        {/* Exercício 6 - Slide 30 */}
        <section className="exercicio-secao">
          <h2>6. Enquetes (Slide 30)</h2>
          <p className="secao-desc">
            Componente <code>&lt;Enquete /&gt;</code> com apuração de liderança em tempo real e botão de zerar.
          </p>
          <div className="componentes-linha">
            <Enquete
              pergunta="Qual é a melhor linguagem?"
              opcaoA="TypeScript"
              opcaoB="Python"
            />
            <Enquete
              pergunta="Qual é o seu editor preferido?"
              opcaoA="VS Code"
              opcaoB="WebStorm"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
