import React from 'react'
import { 
    Box2,
    SubBox2,
    SubBoxSiper,
    BoxAlto,
    BoxBajo,
    TituloDerecha,

}  from './LasVictoriasElements'
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Seccion7 from '../../../Home/Seccion7';
import Seccion10 from '../../../Home/Seccion10';
import Seccion11 from '../../../Home/Seccion11';


function Seccion8Victorias() {
  return (
    <>
     <Box2>
         <SubBoxSiper>
            <BoxAlto>
             <TituloDerecha>Proyecto Las Victorias</TituloDerecha> 
            </BoxAlto> 
            <BoxBajo>
             <Swiper
                    slidesPerView={2}
                    centeredSlides={true}
                    spaceBetween={2}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649703344/DESARROLLOSGRUPODELSUD/slidelasvictorias/RENDER_LA_VICTORIA_2_-_Foto_1_eqoxx2.jpg'/></SwiperSlide>
                    <SwiperSlide><img width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649703345/DESARROLLOSGRUPODELSUD/slidelasvictorias/RENDER_LA_VICTORIA_4_-_Foto_sdbs2s.jpg'/></SwiperSlide>
                    <SwiperSlide><img width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649703343/DESARROLLOSGRUPODELSUD/slidelasvictorias/RENDER_LA_VICTORIA_5_-_Foto_oel9go.jpg'/></SwiperSlide>
                    <SwiperSlide><img width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649703344/DESARROLLOSGRUPODELSUD/slidelasvictorias/RENDER_LA_VICTORIA_7_-_Foto_bqchlr.jpg'/></SwiperSlide>
                    <SwiperSlide><img width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649703343/DESARROLLOSGRUPODELSUD/slidelasvictorias/RENDER_LA_VICTORIA_6_-_Foto_q9tfev.jpg'/></SwiperSlide>
                    <SwiperSlide><img width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649703343/DESARROLLOSGRUPODELSUD/slidelasvictorias/RENDER_LA_VICTORIA_1_-_Photo_okd7os.jpg'/></SwiperSlide>
             </Swiper>
            </BoxBajo>
         </SubBoxSiper>
     </Box2>
     <Seccion7/>
     <Seccion10/>
     <Seccion11/>
    </>
  )
}

export default Seccion8Victorias