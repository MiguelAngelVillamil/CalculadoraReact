import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calculadora from './components/Calculadora/Calculadora';
import Nav from './components/Nav/Nav';

export default function App(clase) {

  return (
    <div className="App-light">
      
      <Nav/>

      <Routes>
        <Route path="/light" element={<Calculadora clase={"light"} />} />
        <Route path="/dark" element={<Calculadora clase={"dark"} />} />
      </Routes>
    
    </div>
  );
}