import React from 'react'
import '../../Estilos/Plancanje.css'


function Seccion1() {
  return (
    <>
      <div className='back-plancanje'>
         <div className='flexBackground'>
           <div className='flexBackground-2DO'>
              <h1 className='tituloPlanCanje'>Plan Canje</h1>
              <img className='recicladoFlex' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648065960/DESARROLLOSGRUPODELSUD/Group_1337_rctgnn.svg' alt='plancanje'/>
          </div>
          <div>
              <p className='subtituloPlanCanje'>
                Tomamos tu auto en parte de pago
                <br/>
                por el terreno que siempre soñaste
              </p>
          </div>    
         </div>
         <div className='autitoFlexMobile' >
         <img className='tamañoAutitoMobile' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648065961/DESARROLLOSGRUPODELSUD/symbol_1_wf3t4g.svg' alt='plancanje'/>
         </div>
     </div> 
    </>
  )
}

export default Seccion1