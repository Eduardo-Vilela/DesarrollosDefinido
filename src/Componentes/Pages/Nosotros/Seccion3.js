import React from 'react'
import {
Principal,
Secundario,
Box1,
Box2,
Card1,
Card2,
Card3,
Card4,
BoxCards,
TituloLogros,
NumeroLogros,
TituloPrincipalLogros,
} from './Seccion3Elements'

function Seccion3() {
  return (
    <>
     <Principal>
         <Secundario>
           <Box1>
            <TituloPrincipalLogros className='tituloLogros'>Logros</TituloPrincipalLogros>
           </Box1>
           <Box2>
               <BoxCards>
                <Card1>                    
                    <img className='logos-logros' alt='logros1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648648236/DESARROLLOSGRUPODELSUD/Group_97_zd0cxi.svg'/>
                    <TituloLogros className='textoLogros'>Unidades vendidas</TituloLogros>
                    <NumeroLogros class="counter" data-count="150">987</NumeroLogros>
                </Card1>
                <Card2>
                    <img className='logos-logros ubicacion' alt='logros3' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1647542851/DESARROLLOSGRUPODELSUD/Group_100_zhcwaz.svg'/>
                    <TituloLogros className='textoLogros'>Unidades disponibles</TituloLogros>
                    <NumeroLogros class="counter" data-count="150">526</NumeroLogros>
                </Card2>
            </BoxCards>
            <BoxCards>
                <Card3>  
                <img className='logos-logros' alt='logros2' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1647542862/DESARROLLOSGRUPODELSUD/Group_129_hmhnsp.svg'/>
                    <TituloLogros className='textoLogros'>M² desarrollados</TituloLogros> 
                    <NumeroLogros class="counter" data-count="150">6</NumeroLogros>  
                </Card3>
                <Card4>
                    <img className='logos-logros calendario' alt='logros3' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1647543194/DESARROLLOSGRUPODELSUD/Group_103_dn4m2u.svg'/>
                    <TituloLogros className='textoLogros'>Unidades disponibles</TituloLogros>
                    <NumeroLogros class="counter" data-count="150">3</NumeroLogros>
                </Card4>
            </BoxCards>
           </Box2>
         </Secundario>
     </Principal>
    </>
  )
}

export default Seccion3