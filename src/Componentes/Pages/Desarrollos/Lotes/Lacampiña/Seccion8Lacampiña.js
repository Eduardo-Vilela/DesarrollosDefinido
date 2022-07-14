import React from 'react'
import { 
    Box2,
    SubBoxSiper,
    BoxAlto,
    BoxBajo,
    TituloDerecha,
    VideoSlideJuncal,
    Imagenslide,
    SwiperFotosDesarrollos
}  from '../LasVictorias/LasVictoriasElements'
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Seccion7 from '../../../Home/Seccion7';
import Seccion10 from '../../../Home/Seccion10';
import Seccion11 from '../../../Home/Seccion11';


function Seccion8Lacampiña() {
  return (
    <>
     <Box2>
         <SubBoxSiper>
            <BoxAlto>
             <TituloDerecha>Conocé La Campiña</TituloDerecha> 
            </BoxAlto> 
            <BoxBajo>
            <SwiperFotosDesarrollos
                  slidesPerView={2}
                  spaceBetween={50}
                  centeredSlides={true}
                  navigation={true}
                  modules={[Navigation]}
                  breakpoints={{
                    // when window width is >= 640px
                  320: {
                        slidesPerView: 1.8,
                        // centeredSlides:false,
                        spaceBetween:10,
                        },
                  480: {
                        slidesPerView: 1.8,
                        // centeredSlides:false,
                        spaceBetween:10,
                      },
                    }}
                  className="mySwiper"
                >
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657810357/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/lacampi%C3%B1a/DJI_0960_fgg0qv.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657810358/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/lacampi%C3%B1a/LA-CAMPINA-1_axhzch.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657810357/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/lacampi%C3%B1a/La-Campina_web_wd1y70.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide  alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657810176/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/lacampi%C3%B1a/Campi%C3%B1a_-_4nueva_-_jpg_chw80o.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide  alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657810177/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/lacampi%C3%B1a/Campi%C3%B1a_-_3nueva_-_jpg_bzy7qx.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide  alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657810177/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/lacampi%C3%B1a/Campi%C3%B1a_-_2nueva_-_jpg_racmmm.webp'/></SwiperSlide>
                <SwiperSlide><VideoSlideJuncal loop autoPlay alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/video/upload/v1657810362/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/lacampi%C3%B1a/04-La-Campina-3_lqcbri.mp4'/></SwiperSlide>
                <SwiperSlide><VideoSlideJuncal loop autoPlay alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/video/upload/v1657810364/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/lacampi%C3%B1a/01-La-Campina-3_blaslc.mp4'/></SwiperSlide>
                <SwiperSlide><VideoSlideJuncal loop autoPlay alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/video/upload/v1657810368/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/lacampi%C3%B1a/02-La-Campina-3_1_gyivnm.mp4'/></SwiperSlide>
                <SwiperSlide><Imagenslide  alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657810177/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/lacampi%C3%B1a/Campi%C3%B1a_-_1nueva_-_jpg_xpa8i2.webp'/></SwiperSlide>
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

export default Seccion8Lacampiña