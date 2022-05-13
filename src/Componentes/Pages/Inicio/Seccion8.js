import React from 'react'
import '../../Estilos/Inicio.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
export default function Seccion8() {
  return (
        
    <>
     <div className='contenedorPapi'>
        <div className='titulo-contenedor'>
            <h3 className='titulo-seccion8'>Somos parte de Grupo Delsud:</h3>
        </div>
        <div className='slider-empresas-contenedor'>
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
        
                className='slider-empresas'     
                loop={true}
                
                
                
        >
                
                
                <SwiperSlide>
                    <a href='https://oesteplatense.com.ar/'  ><div className='empresa-logo'><img alt='oeste' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648472611/EUGENIE/marcas/marca-3_kvnaxi_mxo1dx.svg'/></div></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://www.eleditorplatense.com.ar/'><div className='empresa-logo'><img alt='eleditor' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648472287/EUGENIE/marcas/marca-4_fumybn_lexght.svg'/></div></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://elementalconstructora.com.ar/' ><div className='empresa-logo'><img alt='elemental' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648061818/EUGENIE/marcas/marca-5_i2vi7q.svg'/></div></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://desarrollosdelsud.com.ar/' ><div className='empresa-logo'><img alt='desarrollo' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648061827/EUGENIE/marcas/marca-6_izsi6k.svg'/></div></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://eugenie.com.ar/' ><div className='empresa-logo'><img alt='eugenie' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648499301/EUGENIE/marcas/eugenie_zfirr3.svg'/></div></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://www.trustfund.com.ar/'><div className='empresa-logo'><img alt=' trust' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648472381/EUGENIE/marcas/marca-1_kjjq86_qtyhar.svg'/></div></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://blick.com.ar/' ><div className='empresa-logo'><img alt='blick' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648473561/EUGENIE/marcas/blick-01_fowsgk.svg'/></div></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='https://grava.com.ar/' ><div className='empresa-logo'><img alt='grava' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648061819/EUGENIE/marcas/marca-7_rpdjbu.svg'/></div></a>
                </SwiperSlide>
        
        </Swiper>
        </div>      
     </div>
    </>
  )
}
