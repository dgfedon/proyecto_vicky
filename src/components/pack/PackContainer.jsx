import React from 'react';

import './pack.css';

function PackContainer() {
    return (
        <div id="container-pack" className="mt-5">
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
                        <a rel="noopener noreferrer" href="mailto:vickyarga99@gmail.com?Subject=Me%20interesa%20el%20paquete%201" target="_blank">Contactar</a>
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
                        <a rel="noopener noreferrer" href="mailto:vickyarga99@gmail.com?Subject=Me%20interesa%20el%20paquete%202" target="_blank">Contactar</a>
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
                        <a rel="noopener noreferrer" href="mailto:vickyarga99@gmail.com?Subject=Me%20interesa%20el%20paquete%203" target="_blank">Contactar</a>
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
                        <a href="mailto:vickyarga99@gmail.com?Subject=Me%20interesa%20el%20paquete%204">Contactar</a>
                    </button>
                </div>

            </div>

            <a rel="noopener noreferrer" href="mailto:vickyarga99@gmail.com?Subject=Crear%20mi%20propio%20paquete" target="_blank" className="pack-link">Pulsa aquí para crear tu propio paquete</a>
        </div>
    )
}

export default PackContainer