import React from 'react';

import './about.css';

function AboutMeContainer() {
      return (
         <div id="container-about">
            <h2>Un poco sobre mi</h2>

            {/* Prentación */}
            <div className="subcontainer-about"> 
            
               <img src="/assets/images/Profile.png" alt="profile" />

               <p className='main-p'> Mi nombre es Victoria María Argañaraz, 
                  <span>soy diseñadora gráfica </span>,
                  elegí esta profesión ya que siempre tuve vocación por la creación 
                  de <span>elementos visuales </span>, sean de forma tradicional como digital, en 
                  virtud de ellos estudié diseño que me dio la posibilidad de 
                  descubrir y experimentar nuevos aspectos de la <span>funcionalidad del 
                  lenguaje visual </span>, otorgándome conocimientos para adentrarme al 
                  mundo del futuro digital. Ahora ya con mi carrera finalizada tengo 
                  como objetivo seguir trabajando en la creación, como continuar 
                  adquiriendo conocimientos sobre los diversos aspectos de 
                  <span> creaciones digitales </span>en las distintas áreas.
               </p>

            </div>

            <div className="logos">
               <div className="img-cont">
                  <img src="/assets/logos/logo1.png" alt="" />
                  <p className="pink-letters">Diseño web</p>
               </div>
               <div className="img-cont">
                  <img src="/assets/logos/logo2.png" alt="" />
                  <p className="blue-letters">Diseño gráfico</p>
               </div>
               <div className="img-cont">
                  <img src="/assets/logos/logo3.png" alt="" />
                  <p className="yellow-letters">Animación</p>
               </div>
               <div className="img-cont">
                  <img src="/assets/logos/logo4.png" alt="" />
                  <p className="violet-letters">Diseño UX/UI</p>
               </div>
               <div className="img-cont">
                  <img src="/assets/logos/logo5.png" alt="" />
                  <p className="black-letters">Gestión de Redes sociales</p>
               </div>
            </div>
      </div>
   )
}

export default AboutMeContainer