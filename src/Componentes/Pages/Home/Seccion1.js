import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay,Pagination,EffectCoverflow  } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import './hero.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



function Seccion1() {

  const [imgEffect,setImgEffect] = useState(false)
  

function activarEfecto(){
    setImgEffect(true);
}  
function desactivarEfecto(){
    setImgEffect(false)
}

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span  class="' + className + '">' + (index + 1) + "</span>";
    },
  };
 
  return (
    <>

        <div className='containerPrincipal'>
             <Swiper
               effect={"coverflow"}
            //  pagination={pagination}
             autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
            // effect={"fade"}
            centeredSlides={true}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 500,
                modifier: 1,
                slideShadows: false,
              }}
            // slidesPerView={1}     
            loop={true}
            modules={[Autoplay,EffectCoverflow ]}
            className="slider-home-hero"
        >
           <SwiperSlide>
              <div className={`hero-container image-one  ${imgEffect   ? "effect-active" : ""}`}> 
                  <div className='hero-text-container'>
                      <div className='hero-text'>
                          
                          <img className='logoVictorias' alt='LasVictorias' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1659355818/marcas/sliderNuevoHome/Logos_de_desarrollos_ACTIVOS-04-04-04_1_uqylqz.webp'/>
                          <div className='hero-butons'>
                            
                              <Link onMouseOver={activarEfecto} onMouseLeave={desactivarEfecto} className="boton-home-ver-mas" to="/Lasvictorias">Conocelo</Link>
                          </div>
                      </div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`hero-container image-two  ${imgEffect   ? "effect-active" : ""}`}>
                  <div className='hero-text-container' >
                      <div className='hero-text'>
                           <img style={{filter:'drop-shadow(rgba(0, 0, 0, 0.7) 3px 2px 4px)'}} className='logoEljuncal'  alt='Eljuncal' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1659355818/marcas/sliderNuevoHome/Logos_de_desarrollos_ACTIVOS-02_1_ldds6f.webp'/>
                          <div className='hero-butons'>           
                              <Link onMouseOver={activarEfecto} onMouseLeave={desactivarEfecto} className="boton-home-ver-mas" to="/Eljuncal">Conocelo</Link>
                          </div>
                      </div>
                  </div>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <div className={`hero-container image-nine  ${imgEffect   ? "effect-active" : ""}`}>
                  <div className='hero-text-container'>
                      <div className='hero-text'>
                          <h1 className="hero-text-title-bold">Financiación personalizada</h1>
                          <h2 className='hero-subtitulo'>Accedé solo con tu DNI y armá tu plan a medida, con cuotas en pesos o dólares.</h2>
                          <div className='hero-butons'>
                          </div>
                      </div>
                  </div>
              </div>
            </SwiperSlide> */}
            <SwiperSlide>
              <div className={`hero-container image-three  ${imgEffect   ? "effect-active" : ""}`}>
                  <div className='hero-text-container'>
                      <div className='hero-text'>
                          
                           <img style={{filter:'drop-shadow(rgba(0, 0, 0, 0.7) 3px 2px 4px)'}}  className='logoLatitud34' alt='Latitud34' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1659355818/marcas/sliderNuevoHome/Logos_de_desarrollos_ACTIVOS_Mesa_de_trabajo_1_1_ppphux.webp'/>
                          <div className='hero-butons'>
                             
                              <Link onMouseOver={activarEfecto} onMouseLeave={desactivarEfecto} className="boton-home-ver-mas" to="/Latitud34">Conocelo</Link>
                          </div>
                      </div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`hero-container image-four  ${imgEffect   ? "effect-active" : ""}`}>
                  <div className='hero-text-container'>
                      <div className='hero-text'>

                           <img style={{filter:'drop-shadow(rgba(0, 0, 0, 0.7) 3px 2px 4px)'}} className='logoLaCampiña' alt='LaCampiña' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1659355818/marcas/sliderNuevoHome/Logos_de_desarrollos_ACTIVOS-03_1_x1x5zq.webp'/>
                          <div className='hero-butons'>
                           
                              <Link onMouseOver={activarEfecto} onMouseLeave={desactivarEfecto} className="boton-home-ver-mas" to="/Lacampina">Conocelo</Link>
                          </div>
                      </div>
                  </div>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <div className={`hero-container image-seven  ${imgEffect   ? "effect-active" : ""}`}>
                  <div className='hero-text-container'>
                      <div className='hero-text'>
                          <h1 className="hero-text-title-bold">Escrituración</h1>
                          <h2 className='hero-subtitulo'>Nuestros desarrollos cuentan con la posibilidad de una escrituración inmediata.</h2>
                          <div className='hero-butons'>
                              
                          </div>
                      </div>
                  </div>
              </div>
            </SwiperSlide> */}
            <SwiperSlide>
              <div className={`hero-container image-five  ${imgEffect   ? "effect-active" : ""}`}>
                  <div className='hero-text-container'>
                      <div className='hero-text'>
                          
                           <img style={{marginLeft:'10px',filter:'drop-shadow(rgba(0, 0, 0, 0.7) 3px 2px 4px)'}} className='logoLasOrianas' alt='LasOrianas' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1659355818/marcas/sliderNuevoHome/Logos_de_desarrollos_ACTIVOS-05_1_ozj3p0.webp'/>
                          <div className='hero-butons'>
                             
                              <Link onMouseOver={activarEfecto} onMouseLeave={desactivarEfecto} className="boton-home-ver-mas" to="/Lasorianas">Conocelo</Link>
                          </div>
                      </div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`hero-container image-six  ${imgEffect   ? "effect-active" : ""}`}>
                  <div className='hero-text-container'>
                      <div className='hero-text'>
                          
                           <img style={{marginBottom:'9px',filter:'drop-shadow(rgba(0, 0, 0, 0.7) 3px 2px 4px)'}} className='LogoLaEscondida' alt='LaEscondida' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1659355818/marcas/sliderNuevoHome/Logos_de_desarrollos_ACTIVOS-06_1_lpbmyy.webp'/>
                          <div className='hero-butons'>
                             
                              <Link onMouseOver={activarEfecto} onMouseLeave={desactivarEfecto} className="boton-home-ver-mas" to="/Laescondida">Conocelo</Link>
                          </div>
                      </div>
                  </div>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <div className={`hero-container image-eight  ${imgEffect   ? "effect-active" : ""}`}>
                  <div className='hero-text-container'>
                      <div className='hero-text'>
                          <h1 className="hero-text-title-bold">Obras propias</h1>
                          <h2 className='hero-subtitulo'>Contamos con la maquinaria necesaria <br/> para el tratamiento del suelo y la colocación de servicios.</h2>
                          <div className='hero-butons'>
                             
                          </div>
                      </div>
                  </div>
              </div>
            </SwiperSlide> */}
        </Swiper>
        </div>
    </>
  )
}

export default Seccion1