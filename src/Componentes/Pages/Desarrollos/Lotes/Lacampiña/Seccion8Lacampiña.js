import React from 'react'
import { 
    Box2,
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


function Seccion8Lacampiña() {
  return (
    <>
     <Box2>
         <SubBoxSiper>
            <BoxAlto>
             <TituloDerecha>Conocé La Campiña</TituloDerecha> 
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
                                         <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1657225711/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/Campi%C3%B1a_-_3nueva_-_jpg_rtfw0d.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1657225711/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/Campi%C3%B1a_-_1nueva_-_jpg_c5wdzw.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1657225711/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/Campi%C3%B1a_-_2nueva_-_jpg_fu4br5.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1657225710/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/Campi%C3%B1a_-_4nueva_-_jpg_xyw2oq.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1655232871/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/campi%C3%B1a1_fptt2q.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1655232871/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/LA-CAMPINA-1_fb3xta.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1655232871/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/La-Campina_web_kkxm88.jpg'/></SwiperSlide>
                    <SwiperSlide><VideoSlideJuncal loop autoPlay  type="video/mp4" width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/video/upload/v1649785863/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/01-La-Campina-3_qc4xrl.mp4'/></SwiperSlide>
                    <SwiperSlide><VideoSlideJuncal loop autoPlay  type="video/mp4" width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/video/upload/v1649785866/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/02-La-Campina-3_z9tmqz.mp4'/></SwiperSlide>
                    <SwiperSlide><VideoSlideJuncal loop autoPlay  type="video/mp4" width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/video/upload/v1649785863/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/03-La-Campina-3_tt6vom.mp4'/></SwiperSlide>
                    <SwiperSlide><VideoSlideJuncal loop autoPlay  type="video/mp4" width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/video/upload/v1649785868/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/04-La-Campina-3_aykocu.mp4'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649702792/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/La_Campi%C3%B1a-3_2_abuif1.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649702784/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/La_Campi%C3%B1a-8_c2oela.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649702784/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/La_Campi%C3%B1a-5_qldllf.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649702785/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/La_Campi%C3%B1a-9_1_phsou4.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649702785/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/La_Campi%C3%B1a-9_1_phsou4.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649702785/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/La_Campi%C3%B1a-4_zlnm7u.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649702787/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/La_Campi%C3%B1a-5aa_noa1wg.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649702786/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/aaaa_vk3pxo.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649702790/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/La_Campi%C3%B1a-6_1_g1msxe.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649702789/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/La_Campi%C3%B1a-1_1_n73edc.jpg'/></SwiperSlide>
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

export default Seccion8Lacampiña