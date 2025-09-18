import { useState, useEffect } from "react";
import "../index.css";

function Carrinho() {
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem("carrinho") || "[]");
    setCarrinho(carrinhoSalvo);
  }, []);

  const removerProduto = (id) => {
    const novoCarrinho = carrinho.filter((item) => item.id !== id);
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
  };

  if (carrinho.length === 0)
    return (
      <div className="container">
        <h1>🛒 Seu Carrinho</h1>
        <p style={{ textAlign: "center", marginTop: "20px" }}>O carrinho está vazio.</p>
      </div>
    );

  return (
    <div className="container">
      <h1>🛒 Seu Carrinho</h1>
      <div className="carrinho-grid">
        {carrinho.map((prod) => (
          <div key={prod.id} className="carrinho-card">
            <img src={prod.image} alt={prod.title} className="carrinho-img" />
            <div className="carrinho-detalhes">
              <h2>{prod.title}</h2>
              <p>R${(prod.price * 5).toFixed(2)}</p>
            </div>
            <button onClick={() => removerProduto(prod.id)}>Remover</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carrinho;
