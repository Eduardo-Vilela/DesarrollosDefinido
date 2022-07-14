import React from 'react'
import { 
    Box2,
    SubBox2,
    SubBoxSiper,
    BoxAlto,
    BoxBajo,
    TituloDerecha,
    VideoSlideJuncal,
    Imagenslide,
    SwiperFotosDesarrollos,
}  from '../LasVictorias/LasVictoriasElements'
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Seccion7 from '../../../Home/Seccion7';
import Seccion10 from '../../../Home/Seccion10';
import Seccion11 from '../../../Home/Seccion11';


function Seccion8Latitud34() {
  return (
    <>
     <Box2>
         <SubBoxSiper>
            <BoxAlto>
             <TituloDerecha>Conocé Latitud 34°</TituloDerecha> 
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
                <SwiperSlide><VideoSlideJuncal loop autoPlay alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/video/upload/v1657808898/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/latitud/01-Latitud-34_-3_waxeq5.mp4'/></SwiperSlide>
                <SwiperSlide><VideoSlideJuncal loop autoPlay alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/video/upload/v1657808901/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/latitud/06-Latitud-34_-3_ndtocr.mp4'/></SwiperSlide>
                <SwiperSlide><VideoSlideJuncal loop autoPlay alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/video/upload/v1657808903/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/latitud/02-Latitud-34_-3_g7vrvz.mp4'/></SwiperSlide>
                <SwiperSlide><VideoSlideJuncal loop autoPlay alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/video/upload/v1657808903/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/latitud/05-Latitud-34_-3_ny4blu.mp4'/></SwiperSlide>
                <SwiperSlide><VideoSlideJuncal loop autoPlay alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/video/upload/v1657808896/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/latitud/04-Latitud-34_-3-1_ycnoba.mp4'/></SwiperSlide>
                <SwiperSlide><VideoSlideJuncal loop autoPlay alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/video/upload/v1657808902/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/latitud/03-Latitud-34_-3_flt7fi.mp4'/></SwiperSlide>
                <SwiperSlide><VideoSlideJuncal loop autoPlay alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/video/upload/v1657808902/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/latitud/03-Latitud-34_-3_flt7fi.mp4'/></SwiperSlide>
                <SwiperSlide><Imagenslide  alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715444/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Latitud_34_3_1_yomdy4_trvu3g.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide  alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657809408/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/latitud/Construccion-Latitud-34_-7-1-1024x768_ung6r5.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide  alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657809407/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/latitud/Construccion-Latitud-34_-3-1-1024x768_eu9eu5.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide  alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657809407/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/latitud/Construccion-Latitud-34_-22222-1024x681_dtqrb7.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657809407/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/latitud/Construccion-Latitud-34_-2-1-1024x768_lu72tr.webp'/></SwiperSlide>
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

export default Seccion8Latitud34