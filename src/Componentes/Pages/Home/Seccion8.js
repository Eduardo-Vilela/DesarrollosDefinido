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
            <ImagenMaps alt='aaaaa' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715417/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group_65_tkbbt7_ew2iil.webp'/>
            <SubTituloMaps>La Plata, Buenos Aires</SubTituloMaps>
          </SubBoxLogoMaps>
         </Boxhijo1>
         <Boxhijo2 className='boxMapita'>
          <a target="_blank" href='https://www.google.com/maps/d/embed?mid=1keodqSNQEChYKXkx-ONczj4ixnFmzyNr&hl=es&ehbc=2E312F&ll=-34.96304583639384%2C-58.024891572119124&z=12'>
            <iframe className='iframeMaps'
              allowfullscreen=""
              loading="lazy"
              src="https://www.google.com/maps/d/embed?mid=1keodqSNQEChYKXkx-ONczj4ixnFmzyNr&hl=es&ehbc=2E312F&ll=-34.96304583639384%2C-58.024891572119124&z=12">
            </iframe>
          </a>
         </Boxhijo2>
        </BoxSecundario8> 
     </BoxPrincipal8>
    </>
  )
}

export default Seccion8