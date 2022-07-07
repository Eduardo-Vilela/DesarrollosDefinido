import React from 'react'
import {
   BoxSwiper9,
   SubBox9,
   BoxTitulo9,
   BoxSwiper,
   EmpresasLogo,
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
            <Swiper
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
                    spaceBetween={10}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                    }}
                modules={[Autoplay]}
                className='slider-empresas'     
                loop={true}          
        >   
                <SwiperSlide>
                    <a href='https://www.eleditorplatense.com.ar/'><EmpresasLogo><img alt='eleditor' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648472287/EUGENIE/marcas/marca-4_fumybn_lexght.svg'/></EmpresasLogo></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://elementalconstructora.com.ar/' ><EmpresasLogo><img alt='elemental' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648061818/EUGENIE/marcas/marca-5_i2vi7q.svg'/></EmpresasLogo></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://desarrollosdelsud.com.ar/' ><EmpresasLogo><img alt='desarrollo' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648061827/EUGENIE/marcas/marca-6_izsi6k.svg'/></EmpresasLogo></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://eugenie.com.ar/' ><EmpresasLogo><img alt='eugenie' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648499301/EUGENIE/marcas/eugenie_zfirr3.svg'/></EmpresasLogo></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://www.trustfund.com.ar/'><EmpresasLogo><img alt=' trust' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648472381/EUGENIE/marcas/marca-1_kjjq86_qtyhar.svg'/></EmpresasLogo></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://blick.com.ar/' ><EmpresasLogo><img alt='blick' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648473561/EUGENIE/marcas/blick-01_fowsgk.svg'/></EmpresasLogo></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://grava.com.ar/' ><EmpresasLogo><img alt='grava' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648061819/EUGENIE/marcas/marca-7_rpdjbu.svg'/></EmpresasLogo></a>
                </SwiperSlide>
        
        </Swiper>
            </BoxSwiper>   
         </SubBox9>
     </BoxSwiper9>
    </>
  )
}

export default Seccion9