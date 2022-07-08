import React from 'react'
import Seccion10 from '../Home/Seccion10'
import Seccion11 from '../Home/Seccion11'

import { Principal,Secundario,BoxTextito,BoxFoto,Titulo6,Subtitulo6,LinkGrupo,Logo6 } from './Seccion6Elements'

function Seccion6() {
  return (
    <>
     <Principal>
       <Secundario>
          <BoxTextito>
            <div>
              <Titulo6>¿Conocés Grupo Delsud?</Titulo6>
              <Subtitulo6>Estamos esperando que seas parte</Subtitulo6>
            </div>
            <div>
              <LinkGrupo href='https://grupodelsud.com/'> Ir a Grupo Delsud → </LinkGrupo>
            </div>
          </BoxTextito>
          <BoxFoto>
            <Logo6 alt='foto-seccion5-prevfooter' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1647614820/DESARROLLOSGRUPODELSUD/Frame_sshhg1.png'/>
          </BoxFoto>
       </Secundario>
     </Principal>
     <Seccion10/>
     <Seccion11/>
    </>
  )
}

export default Seccion6