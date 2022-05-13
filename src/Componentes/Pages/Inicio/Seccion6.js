import React from 'react'
import '../../Estilos/Inicio.css'
import { Card } from 'react-bootstrap'
import Link from 'react-scroll/modules/components/Link'
// import{Link} from 'react-router-dom'




function Seccion5() {
  return (
    <>
     <div className='CardSeccion6'>
        <div className='flexCardsSeccion6'>
           <div className='ajusteMobileSeccion6'>
              <div  className='bordeMedio '> 
                <Link to='/Lasorianas'>        
               <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648493908/DESARROLLOSGRUPODELSUD/Logo-Banner-Las-Orianas-negro_ccoswn.svg" />
                </Card>
               </Link>
            </div>
            <div className='bordeMedio'> 
             <Link to='/Latitud34'>  
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648493597/DESARROLLOSGRUPODELSUD/Group-2_gfchxe.png" />
                </Card> 
            </Link>    
            </div> 
            <div className='bordeMedio'>
              <Link to='/Lacampina'> 
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648493597/DESARROLLOSGRUPODELSUD/Group-9_lwsyra.png" />
                </Card> 
              </Link>  
            </div>
           </div>
           <div className='ajusteMobileSeccion6'>
            <div className='bordeMedio'>
              <Link to='/Eljuncal'>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648493597/DESARROLLOSGRUPODELSUD/Group-1_zjxifn.png" />
                </Card>
              </Link> 
            </div>
            <div className='bordeMedio'>
              <Link to='/Lasvictorias'>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1647291371/DESARROLLOSGRUPODELSUD/Group_185_pn9nz2.svg" />
                </Card> 
              </Link>
            </div>
            <div className='bordeMedio'>
              <Link to='/Laescondida'>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1652387064/DESARROLLOSGRUPODELSUD/la%20escondida/laescondidaCortada_vnp0kb.png" />
                </Card>   
              </Link>
            </div>
          </div> 
        </div> 
     </div>
   </>
  )
}

export default Seccion5