import React from 'react'
import {
   BoxSwiper9,
   SubBox9,
   BoxTitulo9,
   BoxSwiper,
   EmpresasLogo,
   SwiperEmpresas,
} from './Seccion9Elements'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

function Seccion9() {
  return (
    <>
     <BoxSwiper9>
         <SubBox9>
            <BoxSwiper>
            <BoxTitulo9>Somos parte de Grupo Delsud: </BoxTitulo9> 
            <SwiperEmpresas
                breakpoints={{
                    
                    // when window width is >= 640px
                    320: {
                        width: 320,
                        slidesPerView: 2,
                        spaceBetween:10,
                        
                    },
                    480: {
                            width: 480,
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    640: {
                            width:480,
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                    768: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        },
                    801:{
                            slidesPerView: 6,
                            spaceBetween: 40
                    },
                    1024:{
                        slidesPerView: 6,
                        spaceBetween: 40
                }        
                    }}
                    spaceBetween={100}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                    }}
                modules={[Autoplay]}
                className='slider-empresas'     
                loop={true}          
        >   
                <SwiperSlide>
                    <a target="_blank" rel="noreferrer" href='https://www.eleditorplatense.com.ar/'><EmpresasLogo><img  style={{width:'100%'}} alt='eleditor' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657899646/marcas/marca-4_fumybn_lexght_e2sfsy_g9mekb.webp'/></EmpresasLogo></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a target="_blank" rel="noreferrer" href='https://elementalconstructora.com.ar/' ><EmpresasLogo><img style={{width:'100%'}} alt='elemental' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657899644/marcas/marca-5_i2vi7q_orv4sh_iblfhz.webp'/></EmpresasLogo></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a target="_blank" rel="noreferrer" href='https://desarrollosdelsud.com.ar/' ><EmpresasLogo><img style={{width:'100%'}} alt='desarrollo' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657899645/marcas/marca-6_izsi6k_w4hhgm_jksv2b.webp'/></EmpresasLogo></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a target="_blank" rel="noreferrer" href='https://eugenie.com.ar/' ><EmpresasLogo><img style={{width:'100%'}} alt='eugenie' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657899644/marcas/eugenie_zfirr3_tse5uk_hphaqm.webp'/></EmpresasLogo></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a target="_blank" rel="noreferrer" href='https://www.trustfund.com.ar/'><EmpresasLogo><img style={{width:'100%'}} alt=' trust' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657899646/marcas/marca-1_kjjq86_qtyhar_y0vxpl_zjg4da.webp'/></EmpresasLogo></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a target="_blank" rel="noreferrer" href='https://blick.com.ar/' ><EmpresasLogo><img style={{width:'100%'}} alt='blick' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657899645/marcas/blick-01_fowsgk_yfqepc_pphaq9.webp'/></EmpresasLogo></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a target="_blank" rel="noreferrer" href='https://grava.com.ar/' ><EmpresasLogo><img style={{width:'100%'}} alt='grava' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657899644/marcas/marca-7_rpdjbu_sz1m3o_xopgqx.webp'/></EmpresasLogo></a>
                </SwiperSlide>
        
        </SwiperEmpresas>
            </BoxSwiper>   
         </SubBox9>
     </BoxSwiper9>
    </>
  )
}

export default Seccion9