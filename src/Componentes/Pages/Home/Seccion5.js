import React from "react";
import { 
    BoxPrincipal5,
    BoxSecundario5,
    SlideSwiperSeccion5,
    ButtonSlide5, 
} 
from './Seccion5Elemetns'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

function Seccion5() {
    
  return (
    <>
     <BoxPrincipal5>
         <BoxSecundario5>
           <Swiper 
                navigation={true} 
                modules={[Navigation,Autoplay]} 
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    }}

                >
               <SwiperSlide style={{display: 'flex'}} >
                    <SlideSwiperSeccion5>
                        <img id='group191' alt='22'src=''/>
                        <div style={{paddingTop:'50px'}}>
                        <ButtonSlide5 style={{outline: 'none'}} href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre...' >Me interesa →</ButtonSlide5>
                        </div>
                    </SlideSwiperSeccion5>
                </SwiperSlide>
                <SwiperSlide style={{display: 'flex'}} >
                    <SlideSwiperSeccion5>
                        <img id='group189' alt='22'src='Group_189_zo7ghe_ouxxhx.webp'/>
                        <div style={{paddingTop:'50px'}}>
                        <ButtonSlide5 style={{outline: 'none'}} href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre...' >Me interesa →</ButtonSlide5>
                        </div>
                    </SlideSwiperSeccion5>
                </SwiperSlide>
                <SwiperSlide style={{display: 'flex'}} >
                    <SlideSwiperSeccion5>
                        <img id='group194' alt='22'  src=''/>
                        <div style={{paddingTop:'50px'}}>
                        <ButtonSlide5 href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre...'>Me interesa →</ButtonSlide5>
                        </div>
                    </SlideSwiperSeccion5>
                </SwiperSlide>
                <SwiperSlide style={{display: 'flex'}}>
                    <SlideSwiperSeccion5>
                        <img id='group195' alt='22'  src=''/>
                        <div style={{paddingTop:'50px'}}>
                        <ButtonSlide5 href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre...'>Me interesa →</ButtonSlide5>
                        </div>
                    </SlideSwiperSeccion5>
                </SwiperSlide>
                <SwiperSlide style={{display: 'flex'}}>
                    <SlideSwiperSeccion5>
                        <img alt='22'  src=''/>
                        <div style={{paddingTop:'50px'}}>
                        <ButtonSlide5 href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre...'>Me interesa →</ButtonSlide5>
                        </div>
                    </SlideSwiperSeccion5>
                </SwiperSlide>
            </Swiper>
         </BoxSecundario5>
     </BoxPrincipal5>
    </>
  )
}

export default Seccion5