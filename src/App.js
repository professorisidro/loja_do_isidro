import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './componentes/Navbar';
import Inicio from './componentes/Inicio';
import Rodape from './componentes/Rodape';
import Produtos from './componentes/Produtos';
import Detalhe from './componentes/Detalhe';


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/produtos" element={<Produtos/>} />
        <Route path="/produtos/:id" element={<Detalhe/>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
    </>
  );
}

export default App;
