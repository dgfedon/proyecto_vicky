import React from 'react'

import './footer.css';


function FooterContainer() {
    return (
        <div id="container-footer">
            <div className="foo-contact">
                <h4>Contacto</h4>
                <p>vickyarga99@gmail.com</p>
                <div>
                    <a rel="noopener noreferrer" href="https://www.youtube.com/channel/UCDJAyWFPcB2iHgr8xzcL6KQ" target="_blank" className="foo-link">
                        <img src="https://res.cloudinary.com/datafordgf/image/upload/v1648685508/proyecto_vivky/vector_youtube_uebxwv.svg" alt="" />
                    </a>
                    <a rel="noopener noreferrer" href="https://www.instagram.com/vicxy_design/" target="_blank" className="foo-link">
                        <img src="https://res.cloudinary.com/datafordgf/image/upload/v1648685508/proyecto_vivky/vector_instagram_gogmlw.svg" alt="" />
                    </a>
                    <a rel="noopener noreferrer" href="https://www.linkedin.com/in/victoria-arga%C3%B1araz-750584225" target="_blank" className="foo-link">
                        <img src="https://res.cloudinary.com/datafordgf/image/upload/v1648685508/proyecto_vivky/vector_linkedin_fmhpzl.svg" alt="" />
                    </a>
                    <a rel="noopener noreferrer" href="https://www.behance.net/victoriaa3" target="_blank" className="foo-link">
                        <img src="https://res.cloudinary.com/datafordgf/image/upload/v1648685508/proyecto_vivky/vector_be_z8hyo5.svg" alt="" />
                    </a>
                </div>
            </div>
            <figure className="foo-line"></figure>
            <span className="foo--copy">Todos los derechos reservados</span>
        </div>
    )
}

export default FooterContainer;