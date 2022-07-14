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


function Seccion8Lasorianas() {
  return (
    <>
     <Box2>
         <SubBoxSiper>
            <BoxAlto>
             <TituloDerecha>Proyecto Las Orianas</TituloDerecha> 
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
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657812021/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/las%20orianas/Orianas_2_nueva_-_jpg_iz5k0l.jpg'/></SwiperSlide>
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657812021/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/las%20orianas/Orianas_1nueva_-_jpg_r28tq4.jpg'/></SwiperSlide>
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657812021/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/las%20orianas/Orianas_4nueva_-_jpg_vdifvl.jpg'/></SwiperSlide>
                <SwiperSlide><Imagenslide  alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657812021/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/las%20orianas/Orianas_3nueva_-_jpg_lrni5b.jpg'/></SwiperSlide>
                <SwiperSlide><Imagenslide  alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657812233/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/las%20orianas/galeria-2-1024x576_hxjvvf.jpg'/></SwiperSlide>
                <SwiperSlide><Imagenslide  alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657812233/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/las%20orianas/portada-de-inicio-1024x576_1_ppl1s7.jpg'/></SwiperSlide>
                <SwiperSlide><Imagenslide  alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657812233/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/las%20orianas/galeria-3-1024x576_q7skx9.jpg'/></SwiperSlide>
                <SwiperSlide><Imagenslide  alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657812233/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/las%20orianas/galeria-4-1024x576_vnodmw.jpg'/></SwiperSlide>
                <SwiperSlide><Imagenslide  alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657812234/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/las%20orianas/galeria-6-1024x576_kbi5uj.jpg'/></SwiperSlide>
                <SwiperSlide><Imagenslide  alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657812234/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/las%20orianas/galeria-7-1024x576_hgxpch.jpg'/></SwiperSlide>
                <SwiperSlide><Imagenslide  alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657812234/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/las%20orianas/galeria-8-1024x576_gwpkqp.jpg'/></SwiperSlide>
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

export default Seccion8Lasorianas