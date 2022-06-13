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
            <Swiper
                //   breakpoints={{
                //     200: {
                //       slidesPerView: 1,
                //       spaceBetween: 1,
                //   },
                //   480: {
                //     slidesPerView: 1,
                //     spaceBetween: 1,
                // },
                //       640: {
                //           slidesPerView: 2,
                //           spaceBetween: 2,
                //       },
                //       769: {
                //       slidesPerView: 1,
                //       slidesPerGroup: 3,
                //       },
                //   }}
                    slidesPerView={2}
                    centeredSlides={true}
                    spaceBetween={2}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    style={{width: '100%' , height:'100%'}}
                >
                    <SwiperSlide><VideoSlideJuncal loop autoPlay  type="video/mp4"  width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/video/upload/v1649785281/DESARROLLOSGRUPODELSUD/slidelatitud34/01-Latitud-34_-3_hxrey8.mp4'/></SwiperSlide>
                    <SwiperSlide><VideoSlideJuncal loop autoPlay  type="video/mp4"  width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/video/upload/v1649785286/DESARROLLOSGRUPODELSUD/slidelatitud34/02-Latitud-34_-3_cwhpc3.mp4'/></SwiperSlide>
                    <SwiperSlide><VideoSlideJuncal loop autoPlay  type="video/mp4"  width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/video/upload/v1649785294/DESARROLLOSGRUPODELSUD/slidelatitud34/04-Latitud-34_-3-1_eedfzv.mp4'/></SwiperSlide>
                    <SwiperSlide><VideoSlideJuncal loop autoPlay  type="video/mp4"  width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/video/upload/v1649785284/DESARROLLOSGRUPODELSUD/slidelatitud34/05-Latitud-34_-3_ajfrng.mp4'/></SwiperSlide>
                    <SwiperSlide><VideoSlideJuncal loop autoPlay  type="video/mp4"  width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/video/upload/v1649785287/DESARROLLOSGRUPODELSUD/slidelatitud34/06-Latitud-34_-3_xyucj7.mp4'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='auto' height='auto' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649703121/DESARROLLOSGRUPODELSUD/slidelatitud34/Construccion_Latitud_34_2_1_iqsgem.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='auto' height='auto' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649703122/DESARROLLOSGRUPODELSUD/slidelatitud34/Latitud_34_4_o1m6s0.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='auto' height='auto' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649703128/DESARROLLOSGRUPODELSUD/slidelatitud34/Latitud_34-2_myfyee.jpg'/></SwiperSlide>
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

export default Seccion8Latitud34