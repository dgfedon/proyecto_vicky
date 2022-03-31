import React from 'react';

import './pack.css';

function PackContainer() {
    return (
        <div id="container-pack">
            <h2>Paquetes</h2>

            <div className="paquetes">
                <div className="package">
                    <h3> Paquete 1</h3>
                    <ul>
                    <li>  Diseño marca </li> 
                    <li>Manual de usabilidad </li> 
                    <li>Merchandising </li> 
                    <li>Cartelería </li> 
                    <li>Banners </li> 
                    <li> Flyers </li> 
                    <li> Ilustraciones </li> 
                    <li>Vectoriales </li> 
                    <li>Creación de piezas gráficas para RRHH </li> 
                    </ul>

                    <button> Contactar</button>
                </div>

            </div>
        </div>
    )
}

export default PackContainer