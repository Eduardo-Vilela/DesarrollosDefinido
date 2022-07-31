import React from 'react'
import { getStorage, ref, getDownloadURL } from "firebase/storage";




import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectFade, Autoplay,Pagination  } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import './hero.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


/* style */
// import{ 
// BoxHome,
// Container,
// } from '../Home/Seccion1Elements'


function Seccion1() {

  // const storage = getStorage()
  // const storageRef = ref(storage, 'Home/banner.mp4');

  // const llamando = () => {
  //   getDownloadURL(storageRef).then((url) => {

  //     let video = document.getElementById('videoEjemplo');
  //     video.setAttribute('src', url);
  //     })
  //     .catch((error) =>{
  //       alert('no anda perri!')
  //     });
  // };
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span  class="' + className + '">' + (index + 1) + "</span>";
    },
  };
 
  return (
    <>
     {/* <Container>   
      <BoxHome  > */}
        {/* <BoxVideo  loop autoPlay muted  className='videoInicio'>
            <source 
            src='https://res.cloudinary.com/desarrollogrupodelsud/video/upload/v1658776500/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Banner_-_Home_-_Final_q33yu0.mp4'
                type="video/mp4"
            />
        </BoxVideo> */}
        {/* <video id='videoEjemplo' src=""  width='400px' height='400px' controls autoPlay type="video/mp4"></video>
        <button onClick={llamando} >llamame pa</button> */}
        {/* <BoxTitulo>
          <ContainerTittle>
            <TituloPrincipal>  Tenemos el terreno ideal para vos y tu familia  </TituloPrincipal>
            <SubtituloPrincipal>Contamos con una amplia variedad de terrenos para que encuentres <br/> el que mejor se adapte a tus necesidades.</SubtituloPrincipal>
          </ContainerTittle>
        </BoxTitulo> */}
             <Swiper
             pagination={pagination}
             autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            effect={"fade"}
            slidesPerView={1}     
            loop={true}
            modules={[Autoplay,EffectFade,Pagination ]}
            className="slider-home-hero"
        >
           <SwiperSlide>
              <div className='hero-container image-one'>
                  <div className='hero-text-container'>
                      <div className='hero-text'>
                          {/* <h1 className="hero-text-title-bold">CRÉDITOS</h1>
                          <h1>PARA MUJERES</h1>
                          <h2>Tenemos lo necesario para<br/> que alcances tus objetivos<br/> financieros</h2> */}
                          <img className='logoVictorias' alt='LasVictorias' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1659120434/marcas/sliderNuevoHome/Logos_de_desarrollos_ACTIVOS-04-04-04_1_k70wsp.png'/>
                          <div className='hero-butons'>
                              {/* <HashLink className="boton-imagen-scroll" to="/#slider-home"><img src='https://res.cloudinary.com/davfkopai/image/upload/v1657722134/Eugenie%20web/ico/hero-flecha_avcioq_rabuqr.svg'/></HashLink> */}
                              <Link className="boton-home-ver-mas" to="/Lasvictorias">Conocelo</Link>
                          </div>
                      </div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='hero-container image-two'>
                  <div className='hero-text-container' >
                      <div className='hero-text'>
                          {/* <h1 className="hero-text-title-bold">CRÉDITOS</h1>
                          <h1>PARA MUJERES</h1>
                          <h2>Tenemos lo necesario para<br/> que alcances tus objetivos<br/> financieros</h2> */}
                           <img className='logoEljuncal'  alt='Eljuncal' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1659121420/marcas/sliderNuevoHome/Logos_de_desarrollos_ACTIVOS-02_1_dtwa8c.png'/>
                          <div className='hero-butons'>
                              {/* <HashLink className="boton-imagen-scroll" to="/#slider-home"><img src='https://res.cloudinary.com/davfkopai/image/upload/v1657722134/Eugenie%20web/ico/hero-flecha_avcioq_rabuqr.svg'/></HashLink> */}
                              <Link className="boton-home-ver-mas" to="/Eljuncal">Conocelo</Link>
                          </div>
                      </div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='hero-container image-three'>
                  <div className='hero-text-container'>
                      <div className='hero-text'>
                          {/* <h1 className="hero-text-title-bold">CRÉDITOS</h1>
                          <h1>PARA MUJERES</h1>
                          <h2>Tenemos lo necesario para<br/> que alcances tus objetivos<br/> financieros</h2> */}
                           <img className='logoLatitud34' alt='Latitud34' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1659121504/marcas/sliderNuevoHome/Logos_de_desarrollos_ACTIVOS_Mesa_de_trabajo_1_1_nclo72.webp'/>
                          <div className='hero-butons'>
                              {/* <HashLink className="boton-imagen-scroll" to="/#slider-home"><img src='https://res.cloudinary.com/davfkopai/image/upload/v1657722134/Eugenie%20web/ico/hero-flecha_avcioq_rabuqr.svg'/></HashLink> */}
                              <Link className="boton-home-ver-mas" to="/Latitud34">Conocelo</Link>
                          </div>
                      </div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='hero-container image-four'>
                  <div className='hero-text-container'>
                      <div className='hero-text'>
                          {/* <h1 className="hero-text-title-bold">CRÉDITOS</h1>
                          <h1>PARA MUJERES</h1>
                          <h2>Tenemos lo necesario para<br/> que alcances tus objetivos<br/> financieros</h2> */}
                           <img alt='LaCampiña' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1659121567/marcas/sliderNuevoHome/Logos_de_desarrollos_ACTIVOS-03_1_sfkk8i.webp'/>
                          <div className='hero-butons'>
                              {/* <HashLink className="boton-imagen-scroll" to="/#slider-home"><img src='https://res.cloudinary.com/davfkopai/image/upload/v1657722134/Eugenie%20web/ico/hero-flecha_avcioq_rabuqr.svg'/></HashLink> */}
                              <Link className="boton-home-ver-mas" to="/Lacampina">Conocelo</Link>
                          </div>
                      </div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='hero-container image-five'>
                  <div className='hero-text-container'>
                      <div className='hero-text'>
                          {/* <h1 className="hero-text-title-bold">CRÉDITOS</h1>
                          <h1>PARA MUJERES</h1>
                          <h2>Tenemos lo necesario para<br/> que alcances tus objetivos<br/> financieros</h2> */}
                           <img style={{marginLeft:'30px'}} alt='LasOrianas' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1659121640/marcas/sliderNuevoHome/Logos_de_desarrollos_ACTIVOS-05_1_twmlh1.webp'/>
                          <div className='hero-butons'>
                              {/* <HashLink className="boton-imagen-scroll" to="/#slider-home"><img src='https://res.cloudinary.com/davfkopai/image/upload/v1657722134/Eugenie%20web/ico/hero-flecha_avcioq_rabuqr.svg'/></HashLink> */}
                              <Link className="boton-home-ver-mas" to="/Lasorianas">Conocelo</Link>
                          </div>
                      </div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='hero-container image-six'>
                  <div className='hero-text-container'>
                      <div className='hero-text'>
                          {/* <h1 className="hero-text-title-bold">CRÉDITOS</h1>
                          <h1>PARA MUJERES</h1>
                          <h2>Tenemos lo necesario para<br/> que alcances tus objetivos<br/> financieros</h2> */}
                           <img alt='LaEscondida' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1659121640/marcas/sliderNuevoHome/Logos_de_desarrollos_ACTIVOS-06_1_pga4qr.webp'/>
                          <div className='hero-butons'>
                              {/* <HashLink className="boton-imagen-scroll" to="/#slider-home"><img src='https://res.cloudinary.com/davfkopai/image/upload/v1657722134/Eugenie%20web/ico/hero-flecha_avcioq_rabuqr.svg'/></HashLink> */}
                              <Link className="boton-home-ver-mas" to="/Laescondida">Conocelo</Link>
                          </div>
                      </div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='hero-container image-seven'>
                  <div className='hero-text-container'>
                      <div className='hero-text'>
                          <h1 className="hero-text-title-bold">Escrituración</h1>
                          <h2>Nuestros desarrollos cuentan con la posibilidad de una escrituración inmediata.</h2>
                          <div className='hero-butons'>
                              {/* <HashLink className="boton-imagen-scroll" to="/#slider-home"><img src='https://res.cloudinary.com/davfkopai/image/upload/v1657722134/Eugenie%20web/ico/hero-flecha_avcioq_rabuqr.svg'/></HashLink> */}
                              <Link className="boton-home-ver-mas" to="/Laescondida">Conocelo</Link>
                          </div>
                      </div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='hero-container image-eight'>
                  <div className='hero-text-container'>
                      <div className='hero-text'>
                          <h1 className="hero-text-title-bold">Obras propias</h1>
                          <h2>Contamos con la maquinaria necesaria para el tratamiento del suelo y la colocación de servicios.</h2>
                          <div className='hero-butons'>
                              {/* <HashLink className="boton-imagen-scroll" to="/#slider-home"><img src='https://res.cloudinary.com/davfkopai/image/upload/v1657722134/Eugenie%20web/ico/hero-flecha_avcioq_rabuqr.svg'/></HashLink> */}
                              <Link className="boton-home-ver-mas" to="/Laescondida">Conocelo</Link>
                          </div>
                      </div>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='hero-container image-nine'>
                  <div className='hero-text-container'>
                      <div className='hero-text'>
                          <h1 className="hero-text-title-bold">Financiación personalizada</h1>
                          <h2>Accedé solo con tu DNI y armá tu plan a medida, con cuotas en pesos o dólares.</h2>
                          <div className='hero-butons'>
                              {/* <HashLink className="boton-imagen-scroll" to="/#slider-home"><img src='https://res.cloudinary.com/davfkopai/image/upload/v1657722134/Eugenie%20web/ico/hero-flecha_avcioq_rabuqr.svg'/></HashLink> */}
                              <Link className="boton-home-ver-mas" to="/Laescondida">Conocelo</Link>
                          </div>
                      </div>
                  </div>
              </div>
            </SwiperSlide>
        </Swiper>
      {/* </BoxHome>
     </Container> */}
    </>
  )
}

export default Seccion1