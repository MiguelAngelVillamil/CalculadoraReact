import React from 'react';
import './BotonNumero.css'

export default function BotonNumero( {children, manejarClick, clase} ) {

  return (
    <button
      className={"botonNumero-" + clase}
      onClick={() => manejarClick(children)}
    >
      {children}
    </button>
  );
}