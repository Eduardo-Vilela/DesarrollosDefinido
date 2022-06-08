import React from 'react'
import { 
    Box2,
    SubBox2,
    SubBoxSiper,
    BoxAlto,
    BoxBajo,
    TituloDerecha,
    VideoSlideJuncal,

}  from '../LasVictorias/LasVictoriasElements'
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Seccion7 from '../../../Home/Seccion7';
import Seccion10 from '../../../Home/Seccion10';
import Seccion11 from '../../../Home/Seccion11';


function Seccion8Lasorianas() {
  return (
    <>
     <Box2>
         <SubBoxSiper>
            <BoxAlto>
             <TituloDerecha>Proyecto El Juncal</TituloDerecha> 
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
                    <SwiperSlide><VideoSlideJuncal loop autoPlay  type="video/mp4" width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/video/upload/v1649784651/DESARROLLOSGRUPODELSUD/01-El-Juncal-3_acmtvi.mp4'/></SwiperSlide>
                    <SwiperSlide><VideoSlideJuncal loop autoPlay  type="video/mp4" width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/video/upload/v1649784551/DESARROLLOSGRUPODELSUD/02-El-Juncal-3_jagyrg.mp4'/></SwiperSlide>
                    <SwiperSlide><VideoSlideJuncal loop autoPlay  type="video/mp4" width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/video/upload/v1649784206/DESARROLLOSGRUPODELSUD/03-El-Juncal-3_j5899n.mp4'/></SwiperSlide>
                    <SwiperSlide><img width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649696157/DESARROLLOSGRUPODELSUD/slideEljuncal/El_Juncal-1_rxzajd.jpg'/></SwiperSlide>
                    <SwiperSlide><img width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649696157/DESARROLLOSGRUPODELSUD/slideEljuncal/El_Juncal-2_flike2.jpg'/></SwiperSlide>
                    <SwiperSlide><img width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649696163/DESARROLLOSGRUPODELSUD/slideEljuncal/DJI_0079_1_ucwdui.jpg'/></SwiperSlide>
                    <SwiperSlide><img width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649696160/DESARROLLOSGRUPODELSUD/slideEljuncal/El_Juncal-4_mmwx8z.jpg'/></SwiperSlide>
                    <SwiperSlide><img width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649696162/DESARROLLOSGRUPODELSUD/slideEljuncal/El_Juncal-5_va0nhb.jpg'/></SwiperSlide>
                    <SwiperSlide><img width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649696160/DESARROLLOSGRUPODELSUD/slideEljuncal/El_Juncal-9_tqlfn3.jpg'/></SwiperSlide>
                    <SwiperSlide><img width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649696163/DESARROLLOSGRUPODELSUD/slideEljuncal/DJI_0077_1_l0nerd.jpg'/></SwiperSlide>
                    <SwiperSlide><img width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649696155/DESARROLLOSGRUPODELSUD/slideEljuncal/RENDERS_FINALES_EL_JUNCAL_3_-_Foto_4_pt6rou.jpg'/></SwiperSlide>
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

export default Seccion8Lasorianas