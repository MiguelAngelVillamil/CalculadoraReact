import React from 'react';
import './Pantalla.css'

export default function Pantalla( {input, clase} ) {

    return (
        <div className={'input' + clase}>
            {input}
        </div>
    );
}
