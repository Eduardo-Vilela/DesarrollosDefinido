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
                        <img alt='22'src='https://res.cloudinary.com/grupo-delsud/image/upload/v1655140870/DESARROLLOSGRUPODELSUD/Precios-03_1_picorz.png'/>
                        <div style={{paddingTop:'50px'}}>
                        <ButtonSlide5 style={{outline: 'none'}} href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre...' >Me interesa →</ButtonSlide5>
                        </div>
                    </SlideSwiperSeccion5>
                </SwiperSlide>
                <SwiperSlide style={{display: 'flex'}} >
                    <SlideSwiperSeccion5>
                        <img alt='22'src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648476286/DESARROLLOSGRUPODELSUD/promocion-las-orianas_eef4wz.png'/>
                        <div style={{paddingTop:'50px'}}>
                        <ButtonSlide5 style={{outline: 'none'}} href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre...' >Me interesa →</ButtonSlide5>
                        </div>
                    </SlideSwiperSeccion5>
                </SwiperSlide>
                <SwiperSlide style={{display: 'flex'}} >
                    <SlideSwiperSeccion5>
                        <img alt='22'  src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648476525/DESARROLLOSGRUPODELSUD/PROMO-02_qw3fke.png'/>
                        <div style={{paddingTop:'50px'}}>
                        <ButtonSlide5 href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre...'>Me interesa →</ButtonSlide5>
                        </div>
                    </SlideSwiperSeccion5>
                </SwiperSlide>
                <SwiperSlide style={{display: 'flex'}}>
                    <SlideSwiperSeccion5>
                        <img alt='22'  src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648476525/DESARROLLOSGRUPODELSUD/PROMO-01_uvgbyi.png'/>
                        <div style={{paddingTop:'50px'}}>
                        <ButtonSlide5 href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre...'>Me interesa →</ButtonSlide5>
                        </div>
                    </SlideSwiperSeccion5>
                </SwiperSlide>
                <SwiperSlide style={{display: 'flex'}}>
                    <SlideSwiperSeccion5>
                        <img alt='22'  src='https://res.cloudinary.com/grupo-delsud/image/upload/v1655141064/DESARROLLOSGRUPODELSUD/Precio-Las-Victorias-2022-e1646684669395_ema8m4.png'/>
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