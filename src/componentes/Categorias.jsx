function Categorias({ setFiltroCategoria }) {
  const categorias = [
    { id: "", nome: "Todas" },
    { id: "electronics", nome: "Eletrônicos" },
    { id: "jewelery", nome: "Joias" },
    { id: "men's clothing", nome: "Roupas Masculinas" },
    { id: "women's clothing", nome: "Roupas Femininas" },
  ];

  return (
    <div className="categorias">
      {categorias.map(cat => (
        <button key={cat.id} onClick={() => setFiltroCategoria(cat.id)}>
          {cat.nome}
        </button>
      ))}
    </div>
  );
}

export default Categorias;
