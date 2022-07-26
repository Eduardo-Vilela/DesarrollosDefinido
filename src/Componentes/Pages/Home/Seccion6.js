import React, {useState, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Link} from 'react-router-dom'
import { Keyboard,Autoplay,  Navigation } from "swiper";
import {
   BoxPrincipal,
   BoxSecundario,
   SlideTexto6,
   ImagenSlide,
   Titulo6,
   Parrafo6,
   ButtonSlideSeccion6,
   BoxMobile6,
   BoxSwiperMobile,
   ImagenSlideVacia,
} from './Seccion6Elements'

import './SwiperSeccion6.css'
import { Button3 } from "./Seccion3Elements";

function Seccion6() {
      //navbar scroll when active state
      const [color, setColor] = useState(false)
  
      //navbar scroll changeBackground function
      const changeBackgroundNuestros = () => {
        if (window.scrollY >= 2000) {
          setColor(true)
          
        } else {
          setColor(false)
        }
      }
  
      useEffect(() => {
        changeBackgroundNuestros()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackgroundNuestros)
      })


  return (
    <>
     <BoxPrincipal 
     className={color ? "SwiperHome " : "mySwiper7 desactivacionSwiperSeccion5"}
     data-aos="fade-up" data-aos-duration="2000" >
         <BoxSecundario >
            <Swiper 
            slidesPerView={"auto"}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            className="SwiperHome"
          >
           <SwiperSlide>
              <SlideTexto6>
                  <Titulo6>
                    Nuestros <br></br>
                    Desarrollos
                  </Titulo6>
                  <Parrafo6 className=''>
                    Comercializamos distintos Desarrollos
                    en diversas ubicaciones, con más
                    de 800 terrenos disponibles para que
                    encuentres el terreno que mejor se 
                    adapte a tus necesidades.
                  </Parrafo6>
                  <Button3 to='/Desarrollos'>Ver Desarrollos</Button3>                     
              </SlideTexto6>
            </SwiperSlide >
            <SwiperSlide >
                  <ImagenSlide alt="fotoDesarrollos" src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658779275/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Nuestros_desarrollos_-_Portada_-_Latitud_rznkkv.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                  <ImagenSlide alt="fotoDesarrollos" src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658779274/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Nuestros_desarrollos_-_Portada_-_Juncal_xypfqm.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                  <ImagenSlide alt="fotoDesarrollos" src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658779275/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Nuestros_desarrollos_-_Portada_-_Las_Victorias_dxgiai.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                  <ImagenSlide alt="fotoDesarrollos" src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658779274/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Nuestros_desarrollos_-_Portada_-_La_Campi%C3%B1a_1_hwxzxw.jpg" />
            </SwiperSlide>
            <SwiperSlide>
               <ImagenSlideVacia to='/Desarrollos'>Ver Desarrollos</ImagenSlideVacia>
            </SwiperSlide>
      </Swiper>

         </BoxSecundario>
     </BoxPrincipal>

        {/* seccion5-mobile */}
    <BoxMobile6 className="desactivacionSeccion5Mobi ">
      <BoxSecundario>
        <SlideTexto6 className='seccion5-flex'>
              <Titulo6 className='seccion5-Titulo'>
                  Nuestros  Desarrollos
              </Titulo6>
              <Parrafo6 className='seccion5-parrafo'>
                Comercializamos distintos desarrollos
                en diversas ubicaciones, con más
                de 800 terrenos disponibles para que
                encuentres el terreno que mejor se 
                adapte a tus necesidades.
              </Parrafo6>
              <ButtonSlideSeccion6 >
                <a className="boton-seccion5" style={{color:'white'}} href='aaaaa' >Ver Desarrollos</a>             
              </ButtonSlideSeccion6>           
        </SlideTexto6>
        <BoxSwiperMobile className="ajusteswiper-mobile">
        <Swiper
            slidesPerView={1}
            centeredSlides={false}

            grabCursor={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              769: {
                slidesPerView: 2,
       
              },
            }}
            navigation={false}
            modules={[Keyboard, Autoplay, Navigation]}
            className="mySwiper5-mobile "
          

          >
            <SwiperSlide className="swiperSlide-Seccion5">
              <ImagenSlide alt="" src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658779275/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Nuestros_desarrollos_-_Portada_-_Latitud_rznkkv.jpg" />
            </SwiperSlide>
            <SwiperSlide className="swiperSlide-Seccion5">
              <ImagenSlide alt=""  src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658779274/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Nuestros_desarrollos_-_Portada_-_Juncal_xypfqm.jpg" />
            </SwiperSlide>
            <SwiperSlide className="swiperSlide-Seccion5">
              <ImagenSlide alt=""  src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658779275/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Nuestros_desarrollos_-_Portada_-_Las_Victorias_dxgiai.jpg" />
            </SwiperSlide>
            <SwiperSlide className="swiperSlide-Seccion5">
              <ImagenSlide alt=""  src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658779274/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Nuestros_desarrollos_-_Portada_-_La_Campi%C3%B1a_1_hwxzxw.jpg" />
            </SwiperSlide>
            <SwiperSlide className="swiperSlide-Seccion5" >
                <ImagenSlideVacia  to='/Desarrollos'>Ver Desarrollos</ImagenSlideVacia>
            </SwiperSlide>
          </Swiper>
          </BoxSwiperMobile>
        </BoxSecundario>
      </BoxMobile6>
    </>
  )
}

export default Seccion6