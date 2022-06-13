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