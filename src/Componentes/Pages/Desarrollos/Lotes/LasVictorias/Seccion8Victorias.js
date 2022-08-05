import React from 'react'
import { 
    Box2,
    SubBox2,
    SubBoxSiper,
    BoxAlto,
    BoxBajo,
    TituloDerecha,
    Imagen1,
    Imagenslide,
    VideoSlideJuncal,
SwiperFotosDesarrollos
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
              <SwiperFotosDesarrollos
                  slidesPerView={2}
                  spaceBetween={50}
                  centeredSlides={true}
                  navigation={true}
                  modules={[Navigation]}
                  breakpoints={{
                    320: {
                      slidesPerView: 1.8,
                      // centeredSlides:false,
                      spaceBetween:10,
                      },
                    480: {
                        slidesPerView: 1,
                        // centeredSlides:false,
                        spaceBetween:10,
                      },

                    481: {
                        slidesPerView: 1.8,
                        // centeredSlides:false,
                        spaceBetween:10,
                      },
                    }}
                  className="mySwiper"
                >
                   <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1659725819/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Victorias_WEB_para_slider_zld5kc.webp'/></SwiperSlide>
                  <SwiperSlide><VideoSlideJuncal muted autoPlay={"autoplay"} preLoad="auto" loop alt='victoriaslide1' 
                src='https://res.cloudinary.com/desarrollogrupodelsud/video/upload/v1658428512/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/SlideLasvictorias/Victorias_d8tptr.mp4'/></SwiperSlide>
                 <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658934194/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/SlideLasvictorias/LAS_VICTORIAS_yusmat.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657738364/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/SlideLasvictorias/Las_Victorias_-_1_-_jpg_sodb6r.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657738364/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/SlideLasvictorias/Las_Victorias_-_2_-_jpg_cmc2lz.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658406999/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/SlideLasvictorias/Victorias_1_bbveic.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide  alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657740578/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/SlideLasvictorias/Victorias_web_1_cblczk.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide   alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657740578/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/SlideLasvictorias/Victorias_web_2_afcl4e.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide   alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657740578/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/SlideLasvictorias/Victorias_web__nb1yx4.webp'/></SwiperSlide>
                {/* <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657741110/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/SlideLasvictorias/RENDER-LA-VICTORIA_7-Foto-4-1024x681_qctqc8.webp'/></SwiperSlide> */}
                {/* <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657741110/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/SlideLasvictorias/RENDER-LA-VICTORIA_2-Foto-1-1024x681_xna5u0.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657741110/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/SlideLasvictorias/RENDER-LA-VICTORIA_5-Foto-3-1024x681_terach.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657741110/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/SlideLasvictorias/RENDER-LA-VICTORIA_4-Foto-2-1024x681_amlfw6.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657741110/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/SlideLasvictorias/RENDER-LA-VICTORIA_6-Foto-5-1024x681_oqt0bm.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657741110/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/SlideLasvictorias/RENDER-LA-VICTORIA_1-Foto-6-1024x681_yxaymc.webp'/></SwiperSlide> */}
              </SwiperFotosDesarrollos>
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