import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Categorias from "./Categorias";
import { traducoesCategoria } from "./traducoes";
import "../index.css";

function ListaProdutos() {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const cotacao = 5;

  const precoEmReais = (dolar) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(dolar * cotacao);

  const adicionarAoCarrinho = (produto) => {
    if (!carrinho.find(item => item.id === produto.id)) {
      const novoCarrinho = [...carrinho, produto];
      setCarrinho(novoCarrinho);
      localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    }
  };

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProdutos(res.data))
      .catch(err => console.error(err));

    const carrinhoSalvo = JSON.parse(localStorage.getItem("carrinho") || "[]");
    setCarrinho(carrinhoSalvo);
  }, []);

  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Loja</h1>
        <button onClick={() => navigate("/carrinho")}>
          Ver Carrinho ({carrinho.length})
        </button>
      </div>

      <Categorias setFiltroCategoria={setFiltroCategoria} />

      <div className="grid-produtos">
        {produtos
          .filter(prod => filtroCategoria === "" || prod.category === filtroCategoria)
          .map(prod => (
            <div key={prod.id} className="produto-item">
              <div className="produto-conteudo">
                <img src={prod.image} alt={prod.title} />
                <h2>{prod.title}</h2>
              </div>
              <div className="produto-rodape">
                <p><b>Preço:</b> {precoEmReais(prod.price)}</p>
                <button onClick={() => adicionarAoCarrinho(prod)}>Adicionar ao carrinho</button>
                <Link style={{ display: "block", marginTop: "10px" }} to={`/produto/${prod.id}`}>
                  Detalhes
                </Link>
                <p><b>Categoria:</b> {traducoesCategoria[prod.category]}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ListaProdutos;
