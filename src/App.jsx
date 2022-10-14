import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calculadora from './components/Calculadora/Calculadora';
import Nav from './components/Nav/Nav';

export default function App() {

  return (
    <div className="App">
      
      <Nav/>

      <Routes>
        <Route path="/victor" element={<Calculadora clase={"Victor"} />} />
      </Routes>
    
    </div>
  );
}