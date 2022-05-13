import React from 'react'
import '../../Estilos/Nosotros.css'




function Seccion3() {
  
  return (
    <>
     <div className='contenedorSeccion3Nosotros'>
        <div className='seccion3-container'>
            <div>
              <h3 className='tituloLogros'>Logros</h3>
            </div>
         <div className='logros-contenedo2-seccion3'>
             <div className='paddin-contenedoresLogros'>  
                <div className='logros1'>
                    <img className='logos-logros' alt='logros1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648648236/DESARROLLOSGRUPODELSUD/Group_97_zd0cxi.svg'/>
                    <p className='textoLogros'>Unidades vendidas</p>
                    <div class="counter" data-count="150">987</div>
                </div>
                <div className='logros1' >
                    <img className='logos-logros' alt='logros2' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1647542862/DESARROLLOSGRUPODELSUD/Group_129_hmhnsp.svg'/>
                    <p className='textoLogros'>M² desarrollados</p> 
                    <div class="counter" data-count="150">6</div>
                </div>
            </div>
            <div className='ajusteTablets-seccion3-nosotros'>
                <div className='logros1'>
                    <img className='logos-logros ubicacion' alt='logros3' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1647542851/DESARROLLOSGRUPODELSUD/Group_100_zhcwaz.svg'/>
                    <p className='textoLogros'>Unidades disponibles</p>
                    <div class="counter" data-count="150">526</div>
                </div>
                <div className='logros1' >
                    <img className='logos-logros calendario' alt='logros3' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1647543194/DESARROLLOSGRUPODELSUD/Group_103_dn4m2u.svg'/>
                    <p className='textoLogros'>Unidades disponibles</p>
                    <div class="counter" data-count="150">3</div>
                </div>
            </div>
        </div>    
        </div>  
     </div>
    </>
  )
}

export default Seccion3