import React from 'react';
import './BotonClear.css'

export default function BotonClear( {manejarClick, clase} ) {

  return(
    <button
      className={"botonClear" + clase}
      onClick={manejarClick}>
      C
    </button>
  );
}