import React from 'react'
import {
BoxPrincipal,
SubBoxLotes,
BoxTituloLotes,
BoxLotes,
TituloDesarrollos,
AjusteFotos,
Lote,
ContenedorFotoLotes,
} from './Seccion1Elements'


function Seccion1() {

  return (
    <>
     <BoxPrincipal>
       <SubBoxLotes>
         <BoxTituloLotes>
            <TituloDesarrollos>Elegí la opción que mejor se adapte a vos</TituloDesarrollos>
         </BoxTituloLotes>
         <BoxLotes>
           <AjusteFotos>
              <Lote>
                <ContenedorFotoLotes alt='fotoDesarrollo' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1653575241/DESARROLLOSGRUPODELSUD/Intro-Card-Las-Victorias_vwkvvz.png'/>
              </Lote>
              <Lote style={{borderLeft:'solid 1px #E5E5E5'}}>
                <ContenedorFotoLotes alt='fotoDesarrollo' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1653575239/DESARROLLOSGRUPODELSUD/Intro-Card-El-Juncal_zsvfay.png'/>
              </Lote>
           </AjusteFotos>
           <AjusteFotos>
              <Lote>
                <ContenedorFotoLotes alt='fotoDesarrollo' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1647631164/DESARROLLOSGRUPODELSUD/Group_198_vhwg2d.jpg'/>
              </Lote>
              <Lote style={{borderLeft:'solid 1px #E5E5E5'}}>
                <ContenedorFotoLotes alt='fotoDesarrollo' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1653575239/DESARROLLOSGRUPODELSUD/Intro-Card-La-Campina_foyc5b.png'/>
              </Lote>
           </AjusteFotos>
           <AjusteFotos>
              <Lote>
                <ContenedorFotoLotes alt='fotoDesarrollo' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1653575242/DESARROLLOSGRUPODELSUD/Intro-Card-Las-Orianas_quue6e.png'/>
              </Lote>
              <Lote style={{borderLeft:'solid 1px #E5E5E5'}}>
                <ContenedorFotoLotes alt='fotoDesarrollo' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1653575239/DESARROLLOSGRUPODELSUD/Intro-Card-La-Escondida_qnyllt.png'/>
              </Lote>
           </AjusteFotos>
           <AjusteFotos>
              <Lote>
                <ContenedorFotoLotes alt='fotoDesarrollo' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1653575239/DESARROLLOSGRUPODELSUD/Las-Catalinas_q5xlrv.png'/>
              </Lote>
              <Lote style={{borderLeft:'solid 1px #E5E5E5'}}>
                {/* <ContenedorFotoLotes alt='fotoDesarrollo' src=''/> */}
              </Lote>
           </AjusteFotos>
         </BoxLotes>
       </SubBoxLotes>
     </BoxPrincipal>
    </>
  )
}

export default Seccion1