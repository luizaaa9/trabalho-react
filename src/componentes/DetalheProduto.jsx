import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../index.css";

function DetalheProduto() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const cotacao = 5;
  const precoEmReais = (dolar) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(dolar * cotacao);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduto(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!produto) return <p>Carregando...</p>;

  return (
    <div className="detalhe-produto">
      <h1>{produto.title}</h1>
      <img src={produto.image} alt={produto.title} />
      <p>{produto.description}</p>
      <p><b>Preço:</b> {precoEmReais(produto.price)}</p>
      <p><b>Categoria:</b> {produto.category}</p>
      <Link to="/">⬅ Voltar</Link>
    </div>
  );
}

export default DetalheProduto;
