import React, {useState, useEffect} from "react";
import "../../Estilos/Inicio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {Link} from 'react-router-dom'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Keyboard,  Navigation } from "swiper";

export default function App() {

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
      <Swiper data-aos="fade-up"
        slidesPerView={2.5}
        centeredSlides={false}
        slidesPerGroupSkip={3}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        
        breakpoints={{
          769: {
            slidesPerView: 2.5,
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
        <div className='seccion5-flex'>
          <h2 className='seccion5-Titulo'>
               Nuestros
               <br/>
               Desarrollos
             </h2>
           <p className='seccion5-parrafo'>
             Comercializamos distintos desarrollos
             <br/> 
             en diversas ubicaciones, con más
             <br/>  
             de 800 terrenos disponibles para que
             <br/> 
             encuentres el terreno que mejor se 
             <br/> 
             adapte a tus necesidades.
             </p>
             <div>
              <Link to='/Desarrollos' className="boton-seccion5">Ver Desarrollos → </Link>             
            </div>           
        </div>
        </SwiperSlide>
        <SwiperSlide style={{margin:'0'}}>
          <img alt="fotoDesarrollos" className="ajusteFoto1-seccion5" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648490605/DESARROLLOSGRUPODELSUD/Group_191_x2r2ef.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="fotoDesarrollos" className="ajusteFoto1-seccion5" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648490217/DESARROLLOSGRUPODELSUD/Group_189_zo7ghe.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="fotoDesarrollos" className="ajusteFoto1-seccion5" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648490605/DESARROLLOSGRUPODELSUD/Group_194_qnrsio.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="fotoDesarrollos" className="ajusteFoto1-seccion5" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648490607/DESARROLLOSGRUPODELSUD/Group_195_jklscp.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="fotoDesarrollos" className="ajusteFoto1-seccion5" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649875992/DESARROLLOSGRUPODELSUD/El_Juncal-1_owdhpy.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="fotoDesarrollos" className="ajusteFoto1-seccion5" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648490217/DESARROLLOSGRUPODELSUD/Group_189_zo7ghe.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/Desarrollos'>
          <img alt="fotodesarrollos" className='ajusteFoto1-seccion5' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649876110/DESARROLLOSGRUPODELSUD/11-685x1024_cgttsc.jpg" />
          </Link>
        </SwiperSlide>
      </Swiper> 


    {/* seccion5-mobile */}
<div className="desactivacionSeccion5Mobi ">
    <div className='seccion5-flex'>
          <h2 className='seccion5-Titulo'>
               Nuestros  Desarrollos
             </h2>
           <p className='seccion5-parrafo'>
             Comercializamos distintos desarrollos
             en diversas ubicaciones, con más
             de 800 terrenos disponibles para que
             encuentres el terreno que mejor se 
             adapte a tus necesidades.
             </p>
             <div>
              <a className="boton-seccion5"  href='aaaaa' >Ver Desarrollos → </a>             
            </div>           
     </div>
     <div className="ajusteswiper-mobile">
     <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
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
        navigation={true}
        modules={[Keyboard, Navigation]}
        className="mySwiper5-mobile "
      

      >
        <SwiperSlide className="swiperSlide-Seccion5">
          <img alt="fotoDesarrollos" className="ajusteFoto1-seccion5" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648490605/DESARROLLOSGRUPODELSUD/Group_191_x2r2ef.jpg" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide-Seccion5">
          <img alt="fotoDesarrollos" className="ajusteFoto1-seccion5" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648490605/DESARROLLOSGRUPODELSUD/Group_194_qnrsio.png" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide-Seccion5">
          <img alt="fotoDesarrollos" className="ajusteFoto1-seccion5" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648490607/DESARROLLOSGRUPODELSUD/Group_195_jklscp.png" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide-Seccion5">
          <img alt="fotoDesarrollos" className="ajusteFoto1-seccion5" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648490217/DESARROLLOSGRUPODELSUD/Group_189_zo7ghe.jpg" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide-Seccion5" >
            <a className="tarjetaVerDesarrollos" href="aaaaa">Ver Desarrollos → </a>
        </SwiperSlide>
      </Swiper>
      </div>
  </div>







    </>
  );
}

