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
              <Lote data-aos="flip-up " data-aos-duration="1000"  >
                <div className='front' >
                <ContenedorFotoLotes alt='fotoDesarrollo' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715416/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group_201_c7pyuc_m4icki.webp'/>
                </div>
                <div className='back' >
                 <TituloFlips>Las Victorias</TituloFlips>
                 <SubtituloFlips>Calle 492 entre 202 y 208</SubtituloFlips>
                 <img alt='aaaa' style={{width: '100%', borderRadius:'10px'}} src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715465/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/RENDER_LA_VICTORIA_2_-_Foto_2_tgiwqb_idt4tv.webp'/>
                </div>
              </Lote>
            </LinkFlip>
            <LinkFlip to='/Eljuncal'>
              <Lote  data-aos="flip-up " data-aos-duration="1000" >
                <div className='front'>
                  <ContenedorFotoLotes alt='fotoDesarrollo' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715458/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Portadas-01_sxqfl8_dsv6nf.webp'/>
                 </div>
                <div className='back'>
                 <TituloFlips>El Juncal</TituloFlips>
                 <SubtituloFlips>Calle 37 entre 177 y 179</SubtituloFlips>
                 <img alt='aaaa' style={{width: '100%', borderRadius:'10px'}} src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715485/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/eljunci1_o2vhgg_b2vber.webp'/>
                </div>
              </Lote>
            </LinkFlip>
           </AjusteFotos>
           <AjusteFotos>
           <LinkFlip to='/Latitud34'>
              <Lote data-aos="flip-up " data-aos-duration="1000" >
                <div className='front'>
                  <ContenedorFotoLotes  alt='fotoDesarrollo' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715460/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Portadas-06_ldau8m_fjmy6g.webp'/>
                </div>
                <div className='back'>
                 <TituloFlips>Latitud 34</TituloFlips>
                 <SubtituloFlips>Calle 90 entre 143 y 152</SubtituloFlips>
                 <img alt='aaaa' style={{width: '100%', borderRadius:'10px'}} src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715438/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/latit34_wxhitz_kwklmc.webp'/>
                </div>
              </Lote>
            </LinkFlip>  
            <LinkFlip to='/Lacampina'>
              <Lote data-aos="flip-up " data-aos-duration="1000" >
                <div className='front'>
                   <ContenedorFotoLotes  alt='fotoDesarrollo' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715459/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Portadas-02_knbvxl_nmvbcd.png'/>
                </div>
                <div className='back'>
                 <TituloFlips>La Campiña</TituloFlips>
                 <SubtituloFlips>calle 229 entre 38 y 42</SubtituloFlips>
                 <img alt='aaaa' style={{width: '100%', borderRadius:'10px'}} src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715436/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/lacampi1_qxte9w_lopuuo.jpg'/>
                </div>
              </Lote>
            </LinkFlip>  
           </AjusteFotos>
           <AjusteFotos>
            <LinkFlip to='/Lasorianas'>
              <Lote data-aos="flip-up " data-aos-duration="1000" >
                <div className='front'>
                  <ContenedorFotoLotes alt='fotoDesarrollo' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715458/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Portadas-03_ddaifm_jgeowb.png'/>
               </div> 
                <div className='back'>
                 <TituloFlips>Las Orianas</TituloFlips>
                 <SubtituloFlips>Calle 515 entre 168 y 170</SubtituloFlips>
                 <img alt='aaaa' style={{width: '100%', borderRadius:'10px'}} src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715428/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Intro-Card-Las-Orianas-Dorso_axmuf8_wtrnsj.jpg'/>
                </div>
              </Lote>
            </LinkFlip>
            <LinkFlip to='/Laescondida'>
              <Lote data-aos="flip-up " data-aos-duration="1000"  >
                <div className='front'>
                  <ContenedorFotoLotes className='front' alt='fotoDesarrollo' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715487/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/dsadasdasd-1024x877_f59iqi_kg9flb.png'/>
                </div>  
                <div className='back'>
                 <TituloFlips>La Escondida</TituloFlips>
                 <SubtituloFlips>Calle 84 entre 161 y 167</SubtituloFlips>
                 <img alt='aaaa' style={{width: '100%', borderRadius:'10px'}} src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715464/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Render05-1024x576_xfqrrc_hzwgp3.jpg'/>
                </div>
              </Lote>
            </LinkFlip>  
           </AjusteFotos>
           <AjusteFotos style={{border:'0'}}>
            <LinkFlip to=''>
              <Lote data-aos="flip-up " data-aos-duration="1000" >
                <div className='front'>
                   <ContenedorFotoLotes className='front' alt='fotoDesarrollo' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715437/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Las-Catalinas_q5xlrv_wywhmh.png'/>
                </div>
                <div className='back'>
                 <TituloFlips>PROXIMAMENTE</TituloFlips>
                 <SubtituloFlips>Ruta Provincial N°36 entre 425 y 428</SubtituloFlips>
                 <img alt='aaaa' style={{width: '100%', borderRadius:'10px'}} src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715491/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Fotos_9-Foto-1024x576_l2isyq_fjvmzv.jpg'/>
                </div>
              </Lote>
            </LinkFlip>  
            <LinkFlip to='/'>
              <Lote style={{display:'none'}}  data-aos="flip-up "  data-aos-duration="1000">
              <div className='front'>
 
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