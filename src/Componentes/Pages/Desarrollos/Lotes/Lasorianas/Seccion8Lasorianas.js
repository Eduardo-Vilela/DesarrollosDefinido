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


function Seccion8Lasorianas() {
  return (
    <>
     <Box2>
         <SubBoxSiper>
            <BoxAlto>
             <TituloDerecha>Proyecto Las Orianas</TituloDerecha> 
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
                    spaceBetween={2}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    style={{width: '100%' , height:'100%'}}
                >
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1657225516/DESARROLLOSGRUPODELSUD/slidelasorianas/Orianas_4nueva_-_jpg_agrkej.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1657225516/DESARROLLOSGRUPODELSUD/slidelasorianas/Orianas_1nueva_-_jpg_dnq0g8.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1657225516/DESARROLLOSGRUPODELSUD/slidelasorianas/Orianas_2_nueva_-_jpg_pzfbzg.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1657225516/DESARROLLOSGRUPODELSUD/slidelasorianas/Orianas_3nueva_-_jpg_a9ghts.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1655233044/DESARROLLOSGRUPODELSUD/slidelasorianas/Las-Orianas_web_akmcfy.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1655233044/DESARROLLOSGRUPODELSUD/slidelasorianas/Las-Orianas_web2_aeistt.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1655233044/DESARROLLOSGRUPODELSUD/slidelasorianas/Las-Orianas_web3_v8iwxn.jpg'/></SwiperSlide>
                    <SwiperSlide><VideoSlideJuncal loop autoPlay  type="video/mp4" width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/video/upload/v1649784651/DESARROLLOSGRUPODELSUD/01-El-Juncal-3_acmtvi.mp4'/></SwiperSlide>
                    <SwiperSlide><VideoSlideJuncal loop autoPlay  type="video/mp4" width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/video/upload/v1649784551/DESARROLLOSGRUPODELSUD/02-El-Juncal-3_jagyrg.mp4'/></SwiperSlide>
                    <SwiperSlide><VideoSlideJuncal loop autoPlay  type="video/mp4" width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/video/upload/v1649784206/DESARROLLOSGRUPODELSUD/03-El-Juncal-3_j5899n.mp4'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649696157/DESARROLLOSGRUPODELSUD/slideEljuncal/El_Juncal-1_rxzajd.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649696157/DESARROLLOSGRUPODELSUD/slideEljuncal/El_Juncal-2_flike2.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649696163/DESARROLLOSGRUPODELSUD/slideEljuncal/DJI_0079_1_ucwdui.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649696160/DESARROLLOSGRUPODELSUD/slideEljuncal/El_Juncal-4_mmwx8z.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649696162/DESARROLLOSGRUPODELSUD/slideEljuncal/El_Juncal-5_va0nhb.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649696160/DESARROLLOSGRUPODELSUD/slideEljuncal/El_Juncal-9_tqlfn3.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649696163/DESARROLLOSGRUPODELSUD/slideEljuncal/DJI_0077_1_l0nerd.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649696155/DESARROLLOSGRUPODELSUD/slideEljuncal/RENDERS_FINALES_EL_JUNCAL_3_-_Foto_4_pt6rou.jpg'/></SwiperSlide>
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