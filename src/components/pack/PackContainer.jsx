import React from 'react';

import './pack.css';

function PackContainer() {
    return (
        <div id="container-pack">
            <h2>Paquetes</h2>

            <div className="paquetes">

                {/* Pack 1 */}
                <div className="package d-flex flex-column justify-content-between">
                    <div>
                        <h3>Paquete 1</h3>
                        <ul>
                            <li>Diseño marca</li> 
                            <li>Manual de usabilidad</li> 
                            <li>Merchandising</li> 
                            <li>Cartelería</li> 
                            <li>Banners</li> 
                            <li>Flyers</li> 
                            <li>Ilustraciones</li> 
                            <li>Vectoriales</li> 
                            <li>Creación de piezas gráficas para RRHH</li> 
                        </ul>
                    </div>
                    <button className="package-btn w-100" style={{background: '#FFAF00'}}>
                        <span>Contactar</span>
                    </button>
                </div>

                {/* Pack 2 */}
                <div className="package d-flex flex-column justify-content-between">
                    <div>
                        <h3>Paquete 2</h3>
                        <ul>
                            <li>Diseño editorial</li> 
                            <li>Manual de usabilidad</li> 
                            <li>Fotografías</li> 
                            <li>Edición de fotografías</li> 
                            <li>Ilustraciones vectoriales</li> 
                            <li>Diseño de tipografía</li> 
                        </ul>
                    </div>
                    <button className="package-btn w-100" style={{background: '#E72176'}}>
                        <span>Contactar</span>
                    </button>
                </div>

                {/* Pack 3 */}
                <div className="package d-flex flex-column justify-content-between">
                    <div>
                        <h3>Paquete 3</h3>
                        <ul>
                            <li>Diseño Packaging</li> 
                            <li>Manual de usabilidad</li> 
                            <li>Edición de fotografía</li> 
                            <li>Ilustraciones vectoriales</li> 
                            <li>Diseño de tipografías únicas</li> 
                            <li>Modelos 3D</li> 
                        </ul>
                    </div>
                    <button className="package-btn w-100" style={{background: '#54C8E8'}}>
                        <span>Contactar</span>
                    </button>
                </div>

                {/* Pack 4 */}
                <div className="package d-flex flex-column justify-content-between">
                    <div>
                        <h3>Paquete 4</h3>
                        <ul>
                            <li>Diseño UX/UI</li> 
                            <li>Manual de usabilidad</li> 
                            <li>Ilustraciones vectoriales</li> 
                            <li>Información sobre el mercado</li> 
                        </ul>
                    </div>
                    <button className="package-btn w-100" style={{background: '#D48CC7'}}>
                        <span>Contactar</span>
                    </button>
                </div>

            </div>

            <p>Pulsa aquí para crear tu propio paquete</p>
        </div>
    )
}

export default PackContainer