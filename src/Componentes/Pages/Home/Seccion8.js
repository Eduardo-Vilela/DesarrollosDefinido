import React from 'react'
import {
    BoxPrincipal8,
    Boxhijo1,
    Boxhijo2,
    BoxSecundario8,
    SubBoxLogoMaps,
    SubTituloMaps,
    TituloMaps,
    ImagenMaps,
} from './Seccion8Elements'


function Seccion8() {
  return (
    <>
     <BoxPrincipal8>
        <BoxSecundario8>
         <Boxhijo1>
          <TituloMaps>Estamos cerca</TituloMaps>
          <SubBoxLogoMaps>
            <ImagenMaps alt='aaaaa' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715417/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group_65_tkbbt7_ew2iil.svg'/>
            <SubTituloMaps>La Plata, Buenos Aires</SubTituloMaps>
          </SubBoxLogoMaps>
         </Boxhijo1>
         <Boxhijo2>
            {/* <iframe style={{width: '100%' , height: '80vh'}} title='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.7020930548233!2d-57.952751484761976!3d-34.913924880380335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd19aed8c2ce5caf6!2sDesarrollos%20Delsud!5e0!3m2!1ses!2sar!4v1649100000405!5m2!1ses!2sar" /> */}
            <iframe style={{width: '100%' , height: '80vh'}} frameBorder="1" src="https://www.google.com/maps/d/u/0/embed?mid=1keodqSNQEChYKXkx-ONczj4ixnFmzyNr&hl=es&ll=-34.96382100153606%2C-57.99176092636717&z=12" ></iframe>
         </Boxhijo2>
        </BoxSecundario8> 
     </BoxPrincipal8>
    </>
  )
}

export default Seccion8