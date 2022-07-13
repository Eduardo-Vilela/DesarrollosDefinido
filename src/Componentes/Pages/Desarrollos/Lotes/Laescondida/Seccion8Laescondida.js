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


function Seccion8Laescondida() {
  return (
    <>
     <Box2>
         <SubBoxSiper>
            <BoxAlto>
             <TituloDerecha>Proyecto La Escondida</TituloDerecha> 
            </BoxAlto> 
            <BoxBajo>
            <Swiper
               breakpoints={{
                // when window width is >= 640px
    320: {
          slidesPerView: 1.5,
          centeredSlides:false,

          },
    480: {
          slidesPerView: 1.2,
          centeredSlides:false,

        },
      }}
                    slidesPerView={2}
                    centeredSlides={true}
                    spaceBetween={5}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    style={{width: '100%' , height:'100%'}}
                >
                    <SwiperSlide><VideoSlideJuncal loop autoPlay type="video/mp4"  width='100%' height='100%' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/video/upload/v1656079208/DESARROLLOSGRUPODELSUD/la%20escondida/DJI_0031_1_wkwvsp.mp4'/></SwiperSlide>
                    <SwiperSlide ><VideoSlideJuncal loop autoPlay  type="video/mp4"  width='100%' height='100%' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/video/upload/v1656079219/DESARROLLOSGRUPODELSUD/la%20escondida/DJI_0031_2_jnybkj.mp4'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1655233875/DESARROLLOSGRUPODELSUD/la%20escondida/Escondida_web_1_dy13ee.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1655233875/DESARROLLOSGRUPODELSUD/la%20escondida/escondida_web_3_qwlrdo.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1655233875/DESARROLLOSGRUPODELSUD/la%20escondida/escondida_web_2_ua9nlz.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1651587525/DESARROLLOSGRUPODELSUD/la%20escondida/Render01-1024x576_hksvex.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1651587525/DESARROLLOSGRUPODELSUD/la%20escondida/render-grupo_8-Foto-1024x576_1_qxqlfd.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1651587525/DESARROLLOSGRUPODELSUD/la%20escondida/render-grupo_6-Foto-1024x576_izaszc.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1651587526/DESARROLLOSGRUPODELSUD/la%20escondida/render-grupo_5-Foto-1024x576_krc6ua.jpg'/></SwiperSlide>
                    {/* <SwiperSlide><img width='940' height='600' alt='victoriaslide1' src=''/></SwiperSlide>
                    <SwiperSlide><img width='940' height='600' alt='victoriaslide1' src=''/></SwiperSlide>
                    <SwiperSlide><img width='940' height='600' alt='victoriaslide1' src=''/></SwiperSlide>
                    <SwiperSlide><img width='940' height='600' alt='victoriaslide1' src=''/></SwiperSlide> */}
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

export default Seccion8Laescondida