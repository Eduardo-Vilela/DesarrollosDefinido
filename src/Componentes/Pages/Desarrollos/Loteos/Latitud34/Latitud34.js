import '../Latitud34/Latitud34.css'
import {Nav} from 'react-bootstrap'
import Seccion6 from '../../../Inicio/Seccion6'
import Seccion9 from '../../../Inicio/Seccion9'
import Seccion10 from '../../../Inicio/Seccion10'
import Navbar from '../../../../Navbar'
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Keyboard, Navigation } from "swiper";
import Footer  from '../../../../Footer'



function Latitud34() {
  return (
    <> 
    <Navbar/>
   {/* SECCION1 */}
    <div data-aos="zoom-in" className='inicio-latitud34'>
      <div className='imagenletras-latitud34'>
       <img  className='imagenInicioLasVictorias'  alt='letras-' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649637673/DESARROLLOSGRUPODELSUD/Groupaaa_vvoggh.svg'/>
      </div>
    </div>

    {/* SECCION2 */}
    <div data-aos="fade-down" data-aos-duration="3000" className='seccion1-latitud34'>
      <div className='cont-latitud34'>
        <div className='tituloSeccion1-latitud34'>
          <div className='subCont-latitud34'>
            <h1 className='titulo-latitud34-seccion2'>
            Viví en contacto
            <br/>
             con la naturaleza
            </h1>
            <div className='parrafoSeccion1-latitud34'>
              <p>
              Este nuevo desarrollo de la empresa se 
              encuentra en la localidad de Abasto, partido 
              de La Plata, en la zona sur de la provincia de 
              Buenos Aires. Ubicado sobre la calle 492 entre las 
              calles 202 y 208, en una zona en constante evolución. 
              Las Victorias es el lugar ideal para quien desea 
              planificar su vida en la tranquilidad que 
              otorgan los espacios verdes.
              </p>
            </div>
            <div>
              <button className='boton-seccion2-latitud34'> Me interesa → </button>
            </div>
          </div>
        </div>
        <div className='texto2-latitud34'>
          {/* <img className='imagenSeccion1latitud34' alt='fotoseccion1-latitud34' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649637149/DESARROLLOSGRUPODELSUD/Latitud-4_1_lwwlxi.jpg'/> */}
          <video loop autoPlay   style={{width:'100%'}}>
                <source
                  src="https://res.cloudinary.com/grupo-delsud/video/upload/v1649784924/DESARROLLOSGRUPODELSUD/slideEljuncal/latitud22222_dfdmsj.mp4"
                  type="video/mp4"
                />
              </video>
        </div>
      </div>
    </div> 

    {/* SECCION3 */}

    <div style={{width: '100%'}} className='flex-seccion3-latitud34 desactivacionMobile-latitud34'>
      <div style={{width: '50%'}}>
        {/* ASDSDsa */}
      </div>
      <div style={{width: '50%'}}>
        <Nav className='ajustenav-latitud34' defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link className='fontnav-latitud34' href="/home">1. Ubicación</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className='fontnav-latitud34' eventKey="link-1">2. Proyecto</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className='fontnav-latitud34' eventKey="link-2">3. Proyecto</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className='fontnav-latitud34' eventKey="link-2">4. Forma de pago</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>

  {/* SECCION4 */}
    <div className='seccion4-latitud34'>
      <div className='flex1-latitud34'>
        <div className='maps-latitud34'>
        <iframe className='ajusteMobileIframe' title='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.8865420140028!2d-58.11021278476073!3d-34.959452280368836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2db5c9445b9dd%3A0x5d9c05728e96f7f2!2sC.%20202%20%26%20C.%20492%2C%20Abasto%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1649628958491!5m2!1ses!2sar" 
        style={{width:'100%',height:'100vh'}}
        ></iframe>
        </div>
        <div className='seccion4texto-latitud34'>
          <div className='ajusteMobile-latitud34' style={{width: '60%',margin:'auto'}}>
            <h2 className='seccion4-font-latitud34'>1.</h2>
            <h3 className='seccion4-subtitulo-latitud34'>Ubicación</h3>
            <p className='parrafo-seccion4-latitud34'>
            Las Victorias se encuentra ubicado 
            en la calle 492 e/ 202 y 208 de la 
            Localidad de Abasto en el partido de 
            La Plata, posee una privilegiada conexión 
            con la R.P. N° 36, permitiendo un acceso 
            fácil y rápido tanto al casco urbano de la 
            ciudad de La Plata, como a CABA.

            </p>
            <h3 className='seccion4-subtitulo2-latitud34'>¿Qué hay en la zona?</h3>
            <ul>
              <li  style={{color:'#1D2142'}} className='ulSeccion4-latitud34' >Colegios</li>
              <li  style={{color:'#1D2142'}} className='ulSeccion4-latitud34' >Comercios</li>
              <li  style={{color:'#1D2142'}} className='ulSeccion4-latitud34' >Entidades Bancarias</li>
              <li  style={{color:'#1D2142'}} className='ulSeccion4-latitud34' >Avenidas y Rutas cercanas</li>
            </ul>
         </div>
        </div>
      </div> 
      <div className='flex1-latitud34'>
        <div className='fotitoProyecto-latitud34'>
        
        </div>
        <div className='seccion4texto-latitud34'>
          <div  className='container2Seccion4' style={{width: '60%',margin:'auto'}}>
            <h2 className='seccion4-font-latitud34'>2.</h2>
            <h3 className='seccion4-subtitulo-latitud34'>Proyecto</h3>
            <p className='parrafo-seccion4-latitud34'>
            Las Victorias cuenta con 72 terrenos 
            de 251m², ofreciendote un lugar amplio 
            y verde para que cambies tu estilo de vida.
            </p>
            <div className='box-seccion4-lasvictorias'>
              <p className='box-font-seccion2-lasvictorias'>72</p>
              <br/>
              <p>unidades</p>
              <br/>
                <p> / </p>
                <br/>
                <p>desde </p>

              <p className='box-font-seccion2-lasvictorias'>251m²</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex1-latitud34'>
        <div className=' back-imagen3-latitud34'>
       
        </div>
        <div className='seccion4texto-latitud34'>
          <div className='container3Seccion4' style={{width: '60%',margin:'auto'}}>
            <h2 className='seccion4-font-latitud34'>3.</h2>
            <h3 className='seccion4-subtitulo-latitud34'>Servicios</h3>
            <p className='parrafo-seccion4-latitud34'>
            Este proyecto contará con los servicios
             de electricidad aérea; además de un cerco 
             perimetral que rodea todo el desarrollo
              y un portón para el ingreso y egreso al
               predio. Desde Desarrollos Delsud nos 
               ocupamos del mejorado de las calles, 
               cuyo final de obra cuenta con tosca y calcáreo.
            </p>
          <div className='flex-iconos4-latitud34 bordertop-iconos4-latitud34' >
            <img className='icono4-latitud34' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649079671/DESARROLLOSGRUPODELSUD/vetro5_ejqofr.svg'/>
            <p className='font-seccion3-servicios-latitud34' >Electricidad</p>
          </div>
          <div className='flex-iconos4-latitud34 bordermedios-iconos4-latitud34' >
            <img className='icono4-latitud34' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649629353/DESARROLLOSGRUPODELSUD/Vector_lfysdy.svg'/>
            <p className='font-seccion3-servicios-latitud34' >Portones de ingreso y egreso</p>
          </div>
          <div className='flex-iconos4-latitud34 borderbottom-seccion4-latitud34' >
                  <img className='icono4-latitud34' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649435466/DESARROLLOSGRUPODELSUD/Vector_g9k2zu.jpg'/>
                  <p className='font-seccion3-servicios-latitud34' >Cerco Perimetral</p>
                </div>
          <div className='flex-iconos4-latitud34 borderbottom-seccion4-latitud34' >
            <img className='icono4-latitud34' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649079671/DESARROLLOSGRUPODELSUD/road_1_qqkxci.svg'/>
            <p className='font-seccion3-servicios-latitud34' >Mejorado de calles</p>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div className='flex1-latitud34'>
        <div className='fotitoProyecto4-latitud34'>
        
        </div>
        <div className='seccion4texto-latitud34'>
          <div className='container4Seccion4' style={{width: '60%',margin:'auto'}}>
            <h2 className='seccion4-font-latitud34'>4.</h2>
            <h3 className='seccion4-subtitulo-latitud34'>Forma de pago</h3>
            <p className='parrafo-seccion4-latitud34'>
            Contamos con la posibilidad de ofrecer 
            una financiación propia, bajo requisitos 
            mínimos y con planes realmente a medida.
            </p> 
            
              <div className='flex-iconos4-latitud34' >
                <img className='icono4-latitud34' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649077741/DESARROLLOSGRUPODELSUD/Vector_j2nmrw.svg'/>
                <p className='parrafo-seccion4-latitud34'>Accedé desde un 50% de anticipo</p>
              </div>
              <div className='flex-iconos4-latitud34' >
                <img className='icono4-latitud34' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649077741/DESARROLLOSGRUPODELSUD/Vector_j2nmrw.svg'/>
                <p className='parrafo-seccion4-latitud34' >El resto financialo hasta en 60 cuotas fijas</p>
              </div>
            
            <div>
              <button href="https://api.whatsapp.com/send?phone=542215079256&text=Hola!%20Quiero%20recibir%20informaci%C3%B3n%20sobre%20los%20desarrollos!" className='boton-desarrollo-latitud34 marginBoton-latitud34'>Arma tu plan de pagos  → </button>
            </div>       
          </div>
        </div>
      </div>
      <div className='flex-slide-loteos'>
        <div>
          <h3 className='subtitulo-slide-loteos'>Proyecto Latitud 34</h3>
        </div>
        <div>

        </div>
      </div>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        navigation={true}
        modules={[Keyboard, Navigation, ]}
        className="mySwiperLoteos"
      >
         <SwiperSlide  >
          
        </SwiperSlide>
        <SwiperSlide >
        <video loop autoPlay    className='swiper-slide-loteos'>
                <source 
                  src="https://res.cloudinary.com/grupo-delsud/video/upload/v1649785281/DESARROLLOSGRUPODELSUD/slidelatitud34/01-Latitud-34_-3_hxrey8.mp4"
                  type="video/mp4"
                />
              </video>
        </SwiperSlide>
        <SwiperSlide >
        <video loop autoPlay    className='swiper-slide-loteos'>
                <source 
                  src="https://res.cloudinary.com/grupo-delsud/video/upload/v1649785284/DESARROLLOSGRUPODELSUD/slidelatitud34/05-Latitud-34_-3_ajfrng.mp4"
                  type="video/mp4"
                />
              </video>
        </SwiperSlide>
        <SwiperSlide >
        <video loop autoPlay    className='swiper-slide-loteos'>
                <source 
                  src="https://res.cloudinary.com/grupo-delsud/video/upload/v1649785286/DESARROLLOSGRUPODELSUD/slidelatitud34/02-Latitud-34_-3_cwhpc3.mp4"
                  type="video/mp4"
                />
              </video>
        </SwiperSlide>
        <SwiperSlide >
        <video loop autoPlay    className='swiper-slide-loteos'>
                <source 
                  src="https://res.cloudinary.com/grupo-delsud/video/upload/v1649785287/DESARROLLOSGRUPODELSUD/slidelatitud34/06-Latitud-34_-3_xyucj7.mp4"
                  type="video/mp4"
                />
              </video>
        </SwiperSlide>
        <SwiperSlide >
        <video loop autoPlay    className='swiper-slide-loteos'>
                <source 
                  src="https://res.cloudinary.com/grupo-delsud/video/upload/v1649785294/DESARROLLOSGRUPODELSUD/slidelatitud34/04-Latitud-34_-3-1_eedfzv.mp4"
                  type="video/mp4"
                />
              </video>
        </SwiperSlide>
        <SwiperSlide  >
          <img alt='fotosslidelatitud34' className='swiper-slide-loteos' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649703126/DESARROLLOSGRUPODELSUD/slidelatitud34/Latitud_34_8_axmhur.jpg" />
        </SwiperSlide>
        <SwiperSlide  >
          <img alt='fotosslidelatitud34' className='swiper-slide-loteos' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649703122/DESARROLLOSGRUPODELSUD/slidelatitud34/Latitud_34_4_o1m6s0.jpg" />
        </SwiperSlide>
        <SwiperSlide  >
          <img alt='fotosslidelatitud34' className='swiper-slide-loteos' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649703123/DESARROLLOSGRUPODELSUD/slidelatitud34/Latitud_34-1_jjuo7s.jpg" />
        </SwiperSlide>
        <SwiperSlide  >
          <img alt='fotosslidelatitud34' className='swiper-slide-loteos' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649703122/DESARROLLOSGRUPODELSUD/slidelatitud34/Latitud_34-12_1_kkslt6.jpg" />
        </SwiperSlide>

      </Swiper>

      <div className='flex-slide-loteos'>
        <div>
          <h3 className='subtitulo-slide-loteos'>Conocé todos nuestros desarrollos</h3>
        </div>
        <div>

        </div>
      </div>
       <Seccion6/>
      <Seccion9/>
      <Seccion10/>
      <Footer/>
      {/* seccion swiper  */}
      

    </>
  )
}

export default Latitud34