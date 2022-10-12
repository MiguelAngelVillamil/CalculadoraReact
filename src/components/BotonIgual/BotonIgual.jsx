import React from 'react';
import './BotonIgual.css'

export default function BotonIgual( {manejarClick} ) {

  return(
    <button
      className='botonIgual'
      onClick={manejarClick}>
      =
    </button>
  );
}