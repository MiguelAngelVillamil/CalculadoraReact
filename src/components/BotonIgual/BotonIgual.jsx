import React from 'react';
import './BotonIgual.css'

export default function BotonIgual( {manejarClick, clase} ) {

  return(
    <button
      className={"botonIgual" + clase}
      onClick={manejarClick}>
      =
    </button>
  );
}