import React from 'react'
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../Estilos/Inicio.css";
import { Navigation } from "swiper";

function Seccion4() {
  return (
    <>
     <div className='ajusteCarrusel'>
        <Swiper 
        navigation={true} 
        modules={[Navigation]} 
        className="mySwiper1 ">
            <SwiperSlide className='swiper-slide4'>
               <div className='flex-seccion4'>
                 <div className='flexImagenSeccion4'>
                   <img alt='22' style={{width:'80%'}} src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648476286/DESARROLLOSGRUPODELSUD/promocion-las-orianas_eef4wz.png'/>
                 </div>
                 <div style={{margin:20}}>
                   <a href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre...' className='button-seccion4'>Me interesa →</a>
                 </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide4'>
               <div className='flex-seccion4'>
                 <div className='flexImagenSeccion4'>
                   <img alt='22' style={{width:'80%'}} src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648476525/DESARROLLOSGRUPODELSUD/PROMO-02_qw3fke.png'/>
                 </div>
                 <div style={{margin:20}}>
                 <a href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre...' className='button-seccion4 '>Me interesa →</a>
                 </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide4'>
                <div className='flex-seccion4'>
                 <div className='flexImagenSeccion4'>
                   <img alt='22' style={{width:'80%'}} src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648476525/DESARROLLOSGRUPODELSUD/PROMO-01_uvgbyi.png'/>
                 </div>
                 <div style={{margin:20}}>
                 <a href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre...' className='button-seccion4'>Me interesa →</a>
                 </div>
               </div>
            </SwiperSlide>
        </Swiper>
     </div>
    </>
  )
}

export default Seccion4