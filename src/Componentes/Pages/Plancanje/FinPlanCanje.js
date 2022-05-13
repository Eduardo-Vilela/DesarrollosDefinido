import React from 'react'
import Navbar2 from '../../Navbar2'
import Seccion1 from './Seccion1'



function FinPlanCanje(props) {
  return (
    <>
    <Navbar2/>
    <Seccion1/>
     <div className='contenedorFlex-auto'>
        <div className='back-auto'>
            <img className='fotoFinPlanCanje' alt='finplancanje' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649855889/DESARROLLOSGRUPODELSUD/send_exit_oluo5s.png'/>
       </div> 
     </div> 
    </>
  )
}

export default FinPlanCanje