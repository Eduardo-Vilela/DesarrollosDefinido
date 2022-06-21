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
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


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
              <Lote data-aos="flip-up"  data-aos-duration="1000" >
                <div className='front'>
                <ContenedorFotoLotes alt='fotoDesarrollo' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1655152625/DESARROLLOSGRUPODELSUD/Portadas-04_yjm6ib.png'/>
                </div>
                <div className='back' >
                 <TituloFlips>Las Victorias</TituloFlips>
                 <SubtituloFlips>Calle 492 entre 202 y 208</SubtituloFlips>
                 <img alt='aaaa' style={{width: '100%', borderRadius:'10px'}} src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649722611/DESARROLLOSGRUPODELSUD/RENDER_LA_VICTORIA_2_-_Foto_2_tgiwqb.jpg'/>
                </div>
              </Lote>
            </LinkFlip>
            <LinkFlip to='/Eljuncal'>
              <Lote  data-aos="flip-up"  data-aos-duration="1000">
                <div className='front'>
                  <ContenedorFotoLotes alt='fotoDesarrollo' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1655152630/DESARROLLOSGRUPODELSUD/Portadas-01_sxqfl8.png'/>
                 </div>
                <div className='back'>
                 <TituloFlips>El Juncal</TituloFlips>
                 <SubtituloFlips>Calle 37 entre 177 y 179</SubtituloFlips>
                 <img alt='aaaa' style={{width: '100%', borderRadius:'10px'}} src='https://res.cloudinary.com/grupo-delsud/image/upload/v1653941470/DESARROLLOSGRUPODELSUD/eljunci1_o2vhgg.jpg'/>
                </div>
              </Lote>
            </LinkFlip>
           </AjusteFotos>
           <AjusteFotos>
           <LinkFlip to='/Latitud34'>
              <Lote data-aos="flip-up"  data-aos-duration="1000">
                <div className='front'>
                  <ContenedorFotoLotes  alt='fotoDesarrollo' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1655152625/DESARROLLOSGRUPODELSUD/Portadas-06_ldau8m.png'/>
                </div>
                <div className='back'>
                 <TituloFlips>Latitud 34</TituloFlips>
                 <SubtituloFlips>Calle 90 entre 143 y 152</SubtituloFlips>
                 <img alt='aaaa' style={{width: '100%', borderRadius:'10px'}} src='https://res.cloudinary.com/grupo-delsud/image/upload/v1653941521/DESARROLLOSGRUPODELSUD/latit34_wxhitz.jpg'/>
                </div>
              </Lote>
            </LinkFlip>  
            <LinkFlip to='/Lacampina'>
              <Lote data-aos="flip-up"  data-aos-duration="1000" >
                <div className='front'>
                   <ContenedorFotoLotes  alt='fotoDesarrollo' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1655152627/DESARROLLOSGRUPODELSUD/Portadas-02_knbvxl.png'/>
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
              <Lote data-aos="flip-up"  data-aos-duration="1000">
                <div className='front'>
                  <ContenedorFotoLotes alt='fotoDesarrollo' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1655152625/DESARROLLOSGRUPODELSUD/Portadas-03_ddaifm.png'/>
               </div> 
                <div className='back'>
                 <TituloFlips>Las Orianas</TituloFlips>
                 <SubtituloFlips>Calle 515 entre 168 y 170</SubtituloFlips>
                 <img alt='aaaa' style={{width: '100%', borderRadius:'10px'}} src='https://res.cloudinary.com/grupo-delsud/image/upload/v1653941859/DESARROLLOSGRUPODELSUD/Intro-Card-Las-Orianas-Dorso_axmuf8.jpg'/>
                </div>
              </Lote>
            </LinkFlip>
            <LinkFlip to='/Laescondida'>
              <Lote data-aos="flip-up"  data-aos-duration="1000">
                <div className='front'>
                  <ContenedorFotoLotes className='front' alt='fotoDesarrollo' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1655152629/DESARROLLOSGRUPODELSUD/Portadas-05_saykck.png'/>
                </div>  
                <div className='back'>
                 <TituloFlips>La Escondida</TituloFlips>
                 <SubtituloFlips>Calle 84 entre 161 y 167</SubtituloFlips>
                 <img alt='aaaa' style={{width: '100%', borderRadius:'10px'}} src='https://res.cloudinary.com/grupo-delsud/image/upload/v1653941937/DESARROLLOSGRUPODELSUD/Render05-1024x576_xfqrrc.jpg'/>
                </div>
              </Lote>
            </LinkFlip>  
           </AjusteFotos>
           <AjusteFotos style={{border:'0'}}>
            <LinkFlip to=''>
              <Lote data-aos="flip-up"  data-aos-duration="1000">
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
              <Lote style={{display:'none'}}  data-aos="flip-up"  data-aos-duration="1000">
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