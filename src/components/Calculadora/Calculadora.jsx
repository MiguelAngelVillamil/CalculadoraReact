import './Calculadora.css'
import React, { useState } from 'react';
import { evaluate } from 'mathjs'
import BotonNumero from '../BotonNumero/BotonNumero';
import Pantalla from '../Pantalla/Pantalla';
import BotonClear from '../BotonClear/BotonClear';
import BotonOperador from '../BotonOperador/BotonOperador';
import BotonIgual from '../BotonIgual/BotonIgual';

export default function Calculadora() {

  const [display, setDisplay] = useState("");

  const agregarCaracter = (valor) => {

    if(valor === "x") {
      valor = "*";
    }

    setDisplay(display + valor);
  };

  const calcularResultado = () => {
    
    if(display){
      setDisplay(evaluate(display))
    } 
  }
  return (
    <div className='calculadora'>

      <Pantalla input={display}/>

      <div className='fila'>
        <BotonClear manejarClick={() => setDisplay("")}/>
        <BotonOperador manejarClick={agregarCaracter}>(</BotonOperador>
        <BotonOperador manejarClick={agregarCaracter}>)</BotonOperador>
        <BotonOperador manejarClick={agregarCaracter}>/</BotonOperador>
      </div>

      <div className='fila'>
        <BotonNumero manejarClick={agregarCaracter}>7</BotonNumero>
        <BotonNumero manejarClick={agregarCaracter}>8</BotonNumero>
        <BotonNumero manejarClick={agregarCaracter}>9</BotonNumero>
        <BotonOperador manejarClick={agregarCaracter}>x</BotonOperador>
      </div>

      <div className='fila'>
        <BotonNumero manejarClick={agregarCaracter}>4</BotonNumero>
        <BotonNumero manejarClick={agregarCaracter}>5</BotonNumero>
        <BotonNumero manejarClick={agregarCaracter}>6</BotonNumero>
        <BotonOperador manejarClick={agregarCaracter}>-</BotonOperador>
      </div>

      <div className='fila'>
        <BotonNumero manejarClick={agregarCaracter}>1</BotonNumero>
        <BotonNumero manejarClick={agregarCaracter}>2</BotonNumero>
        <BotonNumero manejarClick={agregarCaracter}>3</BotonNumero>
        <BotonOperador manejarClick={agregarCaracter}>+</BotonOperador>
      </div>

      <div className='fila'>
        <BotonNumero manejarClick={agregarCaracter}>,</BotonNumero>
        <BotonNumero manejarClick={agregarCaracter}>0</BotonNumero>
        <BotonNumero manejarClick={agregarCaracter}>.</BotonNumero>
        <BotonIgual manejarClick={calcularResultado}/>
      </div>

    </div>
  );
}