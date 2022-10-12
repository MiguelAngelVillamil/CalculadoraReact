import React from 'react';
import './BotonOperador.css'

export default function BotonOperador({children, manejarClick}) {

  return(
    <button
      className='botonOperador'
      onClick={() => manejarClick(children)}
    >
      {children}
    </button>
  );
}