import React from 'react';
import './BotonClear.css'

export default function BotonClear( {manejarClick} ) {

  return(
    <button
      className='botonClear'
      onClick={manejarClick}>
      C
    </button>
  );
}