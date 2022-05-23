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
            <TituloPrincipalLogros >Logros</TituloPrincipalLogros>
           </Box1>
           <Box2>
               <BoxCards>
                <Card1>                    
                    <img  alt='logros1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648648236/DESARROLLOSGRUPODELSUD/Group_97_zd0cxi.svg'/>
                    <TituloLogros >Unidades vendidas</TituloLogros>
                    <NumeroLogros  data-count="150">987</NumeroLogros>
                </Card1>
                <Card2>
                    <img  alt='logros3' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1647542851/DESARROLLOSGRUPODELSUD/Group_100_zhcwaz.svg'/>
                    <TituloLogros >Unidades disponibles</TituloLogros>
                    <NumeroLogros data-count="150">526</NumeroLogros>
                </Card2>
            </BoxCards>
            <BoxCards>
                <Card3>  
                <img  alt='logros2' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1647542862/DESARROLLOSGRUPODELSUD/Group_129_hmhnsp.svg'/>
                    <TituloLogros >M² desarrollados</TituloLogros> 
                    <NumeroLogros  data-count="150">6</NumeroLogros>  
                </Card3>
                <Card4>
                    <img  alt='logros3' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1647543194/DESARROLLOSGRUPODELSUD/Group_103_dn4m2u.svg'/>
                    <TituloLogros >Unidades disponibles</TituloLogros>
                    <NumeroLogros  data-count="150">3</NumeroLogros>
                </Card4>
            </BoxCards>
           </Box2>
         </Secundario>
     </Principal>
    </>
  )
}

export default Seccion3