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


function Seccion8Laescondida() {
  return (
    <>
     <Box2>
         <SubBoxSiper>
            <BoxAlto>
             <TituloDerecha>Proyecto La Escondida</TituloDerecha> 
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
                  <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658513565/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/la%20escondida/7_v8vtpv.jpg'/></SwiperSlide>
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658513564/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/la%20escondida/6_abipxd.jpg'/></SwiperSlide>
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658513564/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/la%20escondida/5_abelrq.jpg'/></SwiperSlide>
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658513565/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/la%20escondida/4_tuh4rg.jpg'/></SwiperSlide>
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658512201/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/la%20escondida/3_1_ntt3vi.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658512198/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/la%20escondida/2_1_kwuo6f.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658512198/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/la%20escondida/1_1_lxe1cm.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715432/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/la%20escondida/Escondida_web_1_dy13ee_gmzkos.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715433/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/la%20escondida/escondida_web_3_qwlrdo_yx0zvb.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715433/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/la%20escondida/escondida_web_2_ua9nlz_ak7qxj.webp'/></SwiperSlide>
                {/* <SwiperSlide><Imagenslide  alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715435/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/la%20escondida/render-grupo_8-Foto-1024x576_rkb7op_hkzdaz.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide  alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715435/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/la%20escondida/Render01-1024x576_hksvex_bxxd9t.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715434/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/la%20escondida/render-grupo_5-Foto-1024x576_krc6ua_qr7nhr.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715434/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/la%20escondida/render-grupo_6-Foto-1024x576_izaszc_tfiyga.webp'/></SwiperSlide> */}
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

export default Seccion8Laescondida