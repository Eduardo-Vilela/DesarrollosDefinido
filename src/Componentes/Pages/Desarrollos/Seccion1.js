import React from 'react'
import Seccion10 from '../Home/Seccion10'
import Seccion11 from '../Home/Seccion11'
import {
BoxPrincipal,
SubBoxLotes,
BoxTituloLotes,
BoxLotes,
TituloDesarrollos,
AjusteFotos,
Lote,
ContenedorFotoLotes,
TituloFlips,
SubtituloFlips,
LinkFlip,
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
           <LinkFlip to='/Lasvictorias'>
              <Lote>
                <div className='front'>
                <ContenedorFotoLotes alt='fotoDesarrollo' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1653575241/DESARROLLOSGRUPODELSUD/Intro-Card-Las-Victorias_vwkvvz.png'/>
                </div>
                <div className='back' >
                 <TituloFlips>Las Victorias</TituloFlips>
                 <SubtituloFlips>Calle 492 entre 202 y 208</SubtituloFlips>
                 <img alt='aaaa' style={{width: '100%', borderRadius:'10px'}} src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649722611/DESARROLLOSGRUPODELSUD/RENDER_LA_VICTORIA_2_-_Foto_2_tgiwqb.jpg'/>
                </div>
              </Lote>
            </LinkFlip>
            <LinkFlip to='/Eljuncal'>
              <Lote >
                <div className='front'>
                  <ContenedorFotoLotes alt='fotoDesarrollo' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1653575239/DESARROLLOSGRUPODELSUD/Intro-Card-El-Juncal_zsvfay.png'/>
                 </div>
                <div className='back'>
                 <TituloFlips>El juncal</TituloFlips>
                 <SubtituloFlips>Calle 37 entre 177 y 179</SubtituloFlips>
                 <img alt='aaaa' style={{width: '100%', borderRadius:'10px'}} src='https://res.cloudinary.com/grupo-delsud/image/upload/v1653941470/DESARROLLOSGRUPODELSUD/eljunci1_o2vhgg.jpg'/>
                </div>
              </Lote>
            </LinkFlip>
           </AjusteFotos>
           <AjusteFotos>
           <LinkFlip to='/Latitud34'>
              <Lote>
                <div className='front'>
                  <ContenedorFotoLotes  alt='fotoDesarrollo' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1647631164/DESARROLLOSGRUPODELSUD/Group_198_vhwg2d.jpg'/>
                </div>
                <div className='back'>
                 <TituloFlips>Latitud 34</TituloFlips>
                 <SubtituloFlips>Calle 90 entre 143 y 152</SubtituloFlips>
                 <img alt='aaaa' style={{width: '100%', borderRadius:'10px'}} src='https://res.cloudinary.com/grupo-delsud/image/upload/v1653941521/DESARROLLOSGRUPODELSUD/latit34_wxhitz.jpg'/>
                </div>
              </Lote>
            </LinkFlip>  
            <LinkFlip to='/Lacampina'>
              <Lote >
                <div className='front'>
                   <ContenedorFotoLotes  alt='fotoDesarrollo' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1653575239/DESARROLLOSGRUPODELSUD/Intro-Card-La-Campina_foyc5b.png'/>
                </div>
                <div className='back'>
                 <TituloFlips>La Campiña</TituloFlips>
                 <SubtituloFlips>calle 229 entre 38 y 42</SubtituloFlips>
                 <img alt='aaaa' style={{width: '100%', borderRadius:'10px'}} src='https://res.cloudinary.com/grupo-delsud/image/upload/v1653941607/DESARROLLOSGRUPODELSUD/lacampi1_qxte9w.jpg'/>
                </div>
              </Lote>
            </LinkFlip>  
           </AjusteFotos>
           <AjusteFotos>
            <LinkFlip to='/Lasorianas'>
              <Lote>
                <div className='front'>
                  <ContenedorFotoLotes alt='fotoDesarrollo' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1653575242/DESARROLLOSGRUPODELSUD/Intro-Card-Las-Orianas_quue6e.png'/>
               </div> 
                <div className='back'>
                 <TituloFlips>Las Orianas</TituloFlips>
                 <SubtituloFlips>Calle 515 entre 168 y 170</SubtituloFlips>
                 <img alt='aaaa' style={{width: '100%', borderRadius:'10px'}} src='https://res.cloudinary.com/grupo-delsud/image/upload/v1653941859/DESARROLLOSGRUPODELSUD/Intro-Card-Las-Orianas-Dorso_axmuf8.jpg'/>
                </div>
              </Lote>
            </LinkFlip>
            <LinkFlip to='/Laescondida'>
              <Lote >
                <div className='front'>
                  <ContenedorFotoLotes className='front' alt='fotoDesarrollo' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1653575239/DESARROLLOSGRUPODELSUD/Intro-Card-La-Escondida_qnyllt.png'/>
                </div>  
                <div className='back'>
                 <TituloFlips>La Escondida</TituloFlips>
                 <SubtituloFlips>Calle 84 entre 161 y 167</SubtituloFlips>
                 <img alt='aaaa' style={{width: '100%', borderRadius:'10px'}} src='https://res.cloudinary.com/grupo-delsud/image/upload/v1653941937/DESARROLLOSGRUPODELSUD/Render05-1024x576_xfqrrc.jpg'/>
                </div>
              </Lote>
            </LinkFlip>  
           </AjusteFotos>
           <AjusteFotos>
            <LinkFlip to=''>
              <Lote>
                <div className='front'>
                   <ContenedorFotoLotes className='front' alt='fotoDesarrollo' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1653575239/DESARROLLOSGRUPODELSUD/Las-Catalinas_q5xlrv.png'/>
                </div>
                <div className='back'>
                 <TituloFlips>PROXIMAMENTE</TituloFlips>
                 <SubtituloFlips>Ruta Provincial N°36 entre 425 y 428</SubtituloFlips>
                 <img alt='aaaa' style={{width: '100%', borderRadius:'10px'}} src='https://res.cloudinary.com/grupo-delsud/image/upload/v1653942065/DESARROLLOSGRUPODELSUD/Fotos_9-Foto-1024x576_l2isyq.jpg'/>
                </div>
              </Lote>
            </LinkFlip>  
            <LinkFlip to='/'>
              <Lote >
              <div className='front'>
                {/* <ContenedorFotoLotes alt='fotoDesarrollo' src=''/> */}
              </div>
              <div className='back'>
              </div>  
              </Lote>
            </LinkFlip>  
           </AjusteFotos>
         </BoxLotes>
       </SubBoxLotes>
     </BoxPrincipal>
     <Seccion10/>
     <Seccion11/>
    </>
  )
}

export default Seccion1