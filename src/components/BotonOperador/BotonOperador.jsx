import React from 'react';
import './BotonOperador.css'

export default function BotonOperador({children, manejarClick, clase}) {

  return(
    <button
      className={'botonOperador' + clase}
      onClick={() => manejarClick(children)}
    >
      {children}
    </button>
  );
}