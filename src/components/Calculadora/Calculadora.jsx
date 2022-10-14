import './Calculadora.css'
import React, { useState } from 'react';
import { evaluate } from 'mathjs'
import BotonNumero from '../BotonNumero/BotonNumero';
import Pantalla from '../Pantalla/Pantalla';
import BotonClear from '../BotonClear/BotonClear';
import BotonOperador from '../BotonOperador/BotonOperador';
import BotonIgual from '../BotonIgual/BotonIgual';

export default function Calculadora({ clase }) {

  const [display, setDisplay] = useState("");

  const agregarCaracter = (valor) => {

    if(valor === "x") {
      valor = "*";
    }

    setDisplay(display + valor);
  };

  const calcularResultado = () => {
    
    if(display){
      let operacion = checkOperacion(display);
      operacion ? setDisplay(evaluate(operacion)) : setDisplay("Syntax Error")
    } 
  }

  const checkOperacion = (operacion) => {
    let parentesisAbiertos = (operacion.match(/\(/g) || []).length;
    let parentesisCerrados = (operacion.match(/\)/g) || []).length;
    let diff = parentesisAbiertos - parentesisCerrados;
    if (diff > 0) {
      for (let i = 0; i < diff; i++) {
        operacion += ")";
      }
    } else if (diff < 0) {
      return null;
    }
    return operacion;
  };

  return (
    <div className={"calculadora" + clase}>

      <Pantalla clase={clase} input={display}/>

      <div className={'fila' + clase}>
        <BotonClear clase={clase} manejarClick={() => setDisplay("")}/>
        <BotonOperador clase={clase} manejarClick={agregarCaracter}>)</BotonOperador>
        <BotonOperador clase={clase} manejarClick={agregarCaracter}>(</BotonOperador>
        <BotonOperador clase={clase} manejarClick={agregarCaracter}>/</BotonOperador>
      </div>

      <div className={'fila' + clase}>
        <BotonNumero clase={clase} manejarClick={agregarCaracter}>7</BotonNumero>
        <BotonNumero clase={clase} manejarClick={agregarCaracter}>8</BotonNumero>
        <BotonNumero clase={clase} manejarClick={agregarCaracter}>9</BotonNumero>
        <BotonOperador clase={clase} manejarClick={agregarCaracter}>x</BotonOperador>
      </div>

      <div className={'fila' + clase}>
        <BotonNumero clase={clase} manejarClick={agregarCaracter}>4</BotonNumero>
        <BotonNumero clase={clase} manejarClick={agregarCaracter}>5</BotonNumero>
        <BotonNumero clase={clase} manejarClick={agregarCaracter}>6</BotonNumero>
        <BotonOperador clase={clase} manejarClick={agregarCaracter}>-</BotonOperador>
      </div>

      <div className={'fila' + clase}>
        <BotonNumero clase={clase} manejarClick={agregarCaracter}>1</BotonNumero>
        <BotonNumero clase={clase} manejarClick={agregarCaracter}>2</BotonNumero>
        <BotonNumero clase={clase} manejarClick={agregarCaracter}>3</BotonNumero>
        <BotonOperador clase={clase} manejarClick={agregarCaracter}>+</BotonOperador>
      </div>

      <div className={'fila' + clase}>
        <BotonNumero clase={clase} manejarClick={agregarCaracter}>,</BotonNumero>
        <BotonNumero clase={clase} manejarClick={agregarCaracter}>0</BotonNumero>
        <BotonNumero clase={clase} manejarClick={agregarCaracter}>.</BotonNumero>
        <BotonIgual clase={clase} manejarClick={calcularResultado}/>
      </div>

    </div>
  );
}