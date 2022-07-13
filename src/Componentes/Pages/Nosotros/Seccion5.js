import React from 'react'
import { BoxIntermedio, BoxTexto, Parrafo3, Titulo3 } from '../Home/Seccion3Elements'
import { Box2, BoxCards} from './Seccion3Elements'
import {Valores, TituloValores , Parrafito,BoxPadre3,SubBoxPadre3,BoxValoresMobile, BoxSwiperValores,BoxTexto3,IconosValores } from './Seccion5Elements'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

function Seccion5() {
  return (
    <>
     <BoxPadre3>
         <SubBoxPadre3>
           <BoxTexto>
            <BoxIntermedio>
             <Titulo3 >Valores</Titulo3>
             <Parrafo3 className='parrafo-seccion5-nosotros'>
             En Delsud nos distinguimos por 
              proporcionar a nuestros clientes una     
              calidad de atención excepcional,    
              ofreciendo servicios personalizados sobre         
              la base de la confianza y la seriedad.
             </Parrafo3>
             </BoxIntermedio> 
           </BoxTexto>
           <Box2>
             <BoxCards>
                 <Valores>
                  <IconosValores  alt='valores' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715499/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group_104_xi25hp_sblbna.webp'/>
                  <TituloValores>Transparencia</TituloValores>
                  <Parrafito>Documentamos cada paso en tu proceso de compra para asegurarte de que estás llevando a cabo una compra segura.</Parrafito>
                 </Valores>
                 <Valores>
                  <IconosValores  alt='valores' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715499/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group_105_kglmjj_uyzxom.svg'/>
                  <TituloValores>Innovación</TituloValores>
                  <Parrafito>Somos un equipo joven, soñador, abierto a las nuevas ideas. Buscamos estar a la vanguardia en la creación y gestión de inmuebles.</Parrafito>
                 </Valores>
             </BoxCards>
             <BoxCards>    
                 <Valores>
                   <IconosValores  alt='valores' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715424/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/handshake_1_1_q45b5f_ai1lxa.webp'/>
                   <TituloValores>Responsabilidad</TituloValores>
                   <Parrafito>Nos aseguramos de cumplir con todos los estándares exigidos en cada proyecto, en el tiempo y forma preestablecidos.</Parrafito>
                 </Valores>
                 <Valores>
                   <IconosValores  alt='valores' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715420/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group_91_pfhrlg_kgetu4.webp'/>
                   <TituloValores>Compromiso</TituloValores>
                   <Parrafito>Creemos en lo que hacemos y en lo que tenemos para aportarle a la industria, nos caracteriza la vocación y el compromiso</Parrafito>
                 </Valores>
             </BoxCards>
           </Box2>
         </SubBoxPadre3>
     </BoxPadre3>

     <BoxValoresMobile>
       <BoxTexto3>
         <Titulo3 >Nuestros Valores</Titulo3>
         <Parrafo3 className='parrafo-seccion5-nosotros'>
         En Delsud nos distinguimos por 
          proporcionar a nuestros clientes una     
          calidad de atención excepcional,    
          ofreciendo servicios personalizados sobre         
          la base de la confianza y la seriedad.
         </Parrafo3>
       </BoxTexto3>
       <BoxSwiperValores>
       <Swiper  
        modules={[Autoplay]} 
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        breakpoints={{
            640: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            },
        }}
        
            className="mySwiperMobiInicio swiperMobi"
            >
                <SwiperSlide><img style={{width:'80%' , heigth:'50vh' , margin: 'auto'}}   alt='555' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715419/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group_87_evadyb_crugnj.webp' /></SwiperSlide>
                <SwiperSlide><img style={{width:'80%' , heigth:'50vh' , margin: 'auto'}}   alt='555' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715420/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group_88_urdqx8_o7pb0g.webp' /></SwiperSlide>
                <SwiperSlide><img style={{width:'80%' , heigth:'50vh' , margin: 'auto'}}  alt='555' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715420/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group_90_tfm5z9_kuw0pf.webp' /></SwiperSlide>
                <SwiperSlide><img style={{width:'80%' , heigth:'50vh' , margin: 'auto'}}    alt='555' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715420/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group_89_tbvvyj_mdhaaz.webp' /></SwiperSlide>
        </Swiper>
       </BoxSwiperValores>
     </BoxValoresMobile>
 
    </>
  )
}

export default Seccion5