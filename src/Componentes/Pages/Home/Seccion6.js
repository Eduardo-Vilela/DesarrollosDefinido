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

function Seccion6() {
      //navbar scroll when active state
      const [color, setColor] = useState(false)
  
      //navbar scroll changeBackground function
      const changeBackground = () => {
        if (window.scrollY >= 2600) {
          setColor(true)
          
        } else {
          setColor(false)
        }
      }
  
      useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
      })


  return (
    <>
     <BoxPrincipal>
         <BoxSecundario>
         <Swiper data-aos="fade-up"
                slidesPerView={2}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                keyboard={{
                enabled: true,
                }}
                
                breakpoints={{
                769: {
                    slidesPerView: 2,
                    slidesPerGroup: 3,
                },
                1024: {
                    slidesPerView: 2,
                    slidesPerGroup: 4,
                }
                }}
                navigation={true}
                modules={[Keyboard, Navigation]}
                className={ color ? "mySwiper2 " : "mySwiper7 desactivacionSwiperSeccion5"
            }

            >
                <SwiperSlide>
                    <SlideTexto6 className='seccion5-flex'>
                        <Titulo6 className='seccion5-Titulo'>
                            Nuestros
                            <br/>
                            Desarrollos
                        </Titulo6>
                        <Parrafo6 className='seccion5-parrafo'>
                            Comercializamos distintos desarrollos
                            <br/> 
                            en diversas ubicaciones, con más
                            <br/>  
                            de 800 terrenos disponibles para que
                            <br/> 
                            encuentres el terreno que mejor se 
                            <br/> 
                            adapte a tus necesidades.
                            </Parrafo6>
                            <ButtonSlideSeccion6>
                            <Link to='/Desarrollos' style={{color: '#82AB29'}} className="boton-seccion5">Ver Desarrollos → </Link>             
                            </ButtonSlideSeccion6>           
                    </SlideTexto6>
                </SwiperSlide>
                <SwiperSlide >
                  <ImagenSlide alt="fotoDesarrollos" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648490605/DESARROLLOSGRUPODELSUD/Group_191_x2r2ef.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <ImagenSlide alt="fotoDesarrollos" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648490217/DESARROLLOSGRUPODELSUD/Group_189_zo7ghe.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <ImagenSlide alt="fotoDesarrollos" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648490605/DESARROLLOSGRUPODELSUD/Group_194_qnrsio.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <ImagenSlide alt="fotoDesarrollos" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648490607/DESARROLLOSGRUPODELSUD/Group_195_jklscp.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <ImagenSlide alt="fotoDesarrollos" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649875992/DESARROLLOSGRUPODELSUD/El_Juncal-1_owdhpy.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <ImagenSlide alt="fotoDesarrollos" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648490217/DESARROLLOSGRUPODELSUD/Group_189_zo7ghe.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                <Link to='/Desarrollos'>
                  <ImagenSlide alt="fotodesarrollos" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649876110/DESARROLLOSGRUPODELSUD/11-685x1024_cgttsc.jpg" />
                </Link>
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
                <a className="boton-seccion5" style={{color:'#82AB29'}} href='aaaaa' >Ver Desarrollos → </a>             
              </ButtonSlideSeccion6>           
        </SlideTexto6>
        <BoxSwiperMobile className="ajusteswiper-mobile">
        <Swiper
            slidesPerView={1}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={true}
            autoplay={{
              delay: 1500,
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
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
            }}
            navigation={false}
            modules={[Keyboard, Autoplay, Navigation]}
            className="mySwiper5-mobile "
          

          >
            <SwiperSlide className="swiperSlide-Seccion5">
              <ImagenSlide alt="fotoDesarrollos" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648490605/DESARROLLOSGRUPODELSUD/Group_191_x2r2ef.jpg" />
            </SwiperSlide>
            <SwiperSlide className="swiperSlide-Seccion5">
              <ImagenSlide alt="fotoDesarrollos"  src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648490605/DESARROLLOSGRUPODELSUD/Group_194_qnrsio.png" />
            </SwiperSlide>
            <SwiperSlide className="swiperSlide-Seccion5">
              <ImagenSlide alt="fotoDesarrollos"  src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648490607/DESARROLLOSGRUPODELSUD/Group_195_jklscp.png" />
            </SwiperSlide>
            <SwiperSlide className="swiperSlide-Seccion5">
              <ImagenSlide alt="fotoDesarrollos"  src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648490217/DESARROLLOSGRUPODELSUD/Group_189_zo7ghe.jpg" />
            </SwiperSlide>
            <SwiperSlide className="swiperSlide-Seccion5" >
                <ImagenSlideVacia  href="aaaaa">Ver Desarrollos → </ImagenSlideVacia>
            </SwiperSlide>
          </Swiper>
          </BoxSwiperMobile>
        </BoxSecundario>
      </BoxMobile6>
    </>
  )
}

export default Seccion6