import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaProdutos from "./componentes/ListaProdutos";
import DetalheProduto from "./componentes/DetalheProduto";
import Carrinho from "./componentes/Carrinho";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListaProdutos />} />
        <Route path="/produto/:id" element={<DetalheProduto />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
