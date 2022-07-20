import React from 'react'
import { 
    Box2,
    SubBox2,
    SubBoxSiper,
    BoxAlto,
    BoxBajo,
    TituloDerecha,
    VideoSlideJuncal,
    SwiperFotosDesarrollos,
    Imagen1,
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


function Seccion8Eljuncal() {
  return (
    <>
     <Box2>
         <SubBoxSiper>
            <BoxAlto>
             <TituloDerecha>Conocé El Juncal</TituloDerecha> 
            </BoxAlto> 
            <BoxBajo>
             {/* <Swiper
                breakpoints={{
                                // when window width is >= 640px
                    320: {
                          slidesPerView: 1.5,
                          centeredSlides:false,
          
                          },
                    480: {
                          slidesPerView: 1.5,
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
                     <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1657227276/DESARROLLOSGRUPODELSUD/slideEljuncal/Juncal_-_1_-_jpg_zjuoiu.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1657227276/DESARROLLOSGRUPODELSUD/slideEljuncal/Juncal_-_3_-_jpg_vavmho.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1657227277/DESARROLLOSGRUPODELSUD/slideEljuncal/Juncal_-_2_-_jpg_oodzqe.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1655232717/DESARROLLOSGRUPODELSUD/slideEljuncal/Juncal1_tosehi.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1655232717/DESARROLLOSGRUPODELSUD/slideEljuncal/Juncal2_ubf4ft.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><Imagenslide width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1655232717/DESARROLLOSGRUPODELSUD/slideEljuncal/Juncal3_to04v3.jpg'/></SwiperSlide>
                    <SwiperSlide style={{textAlign:'center'}}><VideoSlideJuncal loop autoPlay  type="video/mp4" width='940' height='600' alt='victoriaslide1' src='https://res.cloudinary.com/grupo-delsud/video/upload/v1649784651/DESARROLLOSGRUPODELSUD/01-El-Juncal-3_acmtvi.mp4'/></SwiperSlide>
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
             </Swiper> */}
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
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657807019/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/slideEljuncal/Juncal_-_1_-_jpg_oh50fu.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657807019/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/slideEljuncal/Juncal_-_2_-_jpg_i0paj6.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657807019/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/slideEljuncal/Juncal_-_3_-_jpg_mslj2f.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide  alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657807336/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/slideEljuncal/Juncal_web_jpg-copia-2_c0hccc.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide  alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657807336/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/slideEljuncal/Juncal_web_jpg_t8wdqb.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide  alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657807338/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/slideEljuncal/Juncal_web2_jpg-1_fsfqvs.webp'/></SwiperSlide>
                
                <SwiperSlide><VideoSlideJuncal 
                muted autoPlay={"autoplay"} preLoad="auto" loop alt='victoriaslide1' 
                src='https://res.cloudinary.com/desarrollogrupodelsud/video/upload/v1657807475/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/slideEljuncal/01-El-Juncal-3_a5zvot.mp4'/></SwiperSlide>
                <SwiperSlide><VideoSlideJuncal muted autoPlay={"autoplay"} preLoad="auto" loop alt='victoriaslide1' 
                src='https://res.cloudinary.com/desarrollogrupodelsud/video/upload/v1657807475/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/slideEljuncal/02-El-Juncal-3_xhuq3z.mp4'/></SwiperSlide>
                <SwiperSlide><VideoSlideJuncal muted autoPlay={"autoplay"} preLoad="auto" loop alt='victoriaslide1' 
                src='https://res.cloudinary.com/desarrollogrupodelsud/video/upload/v1657807477/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/slideEljuncal/03-El-Juncal-3_pmabtg.mp4'/></SwiperSlide>
                
                <SwiperSlide><Imagenslide  alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715469/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/slideEljuncal/DJI_0077_1_l0nerd_urh8e8.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide  alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715473/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/slideEljuncal/El_Juncal-1_1_y0wtqi_pwdtfv.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide  alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715477/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/slideEljuncal/%C3%81rea_36_03_3_g3dibr_vuay1t.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide  alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715478/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/slideEljuncal/El_Juncal-4_mmwx8z_qieith.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715473/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/slideEljuncal/DJI_0091_1_qhgz5m_mb2jhu.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715473/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/slideEljuncal/El_Juncal-1_1_y0wtqi_pwdtfv.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715476/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/slideEljuncal/El_Juncal_12_2_mj7nc4_jd4u1f.webp'/></SwiperSlide>
                <SwiperSlide><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715475/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/slideEljuncal/El_Juncal-1_rxzajd_boshsg.webp'/></SwiperSlide>
                <SwiperSlide ><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715472/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/slideEljuncal/DJI_0079_1_ucwdui_t8lpvz.webp'/></SwiperSlide>
                <SwiperSlide ><Imagenslide alt='victoriaslide1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715472/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/slideEljuncal/DJI_0080_1_zao1ml_ff4syr.webp'/></SwiperSlide>
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

export default Seccion8Eljuncal