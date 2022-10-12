import React from 'react';
import './BotonNumero.css'

export default function BotonNumero( {children, manejarClick} ) {

  return (
    <button
      className='botonNumero'
      onClick={() => manejarClick(children)}
    >
      {children}
    </button>
  );
}