import '../LasVictorias/Lasvictorias.css'
import {Nav} from 'react-bootstrap'
import Seccion6 from '../../../Inicio/Seccion6'
import Seccion9 from '../../../Inicio/Seccion9'
import Seccion10 from '../../../Inicio/Seccion10'
import Navbar2 from '../../../../Navbar2'
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Keyboard, Navigation} from "swiper";
import Footer from '../../../../Footer'



function Lasvictorias() {
  return (
    <> 
    <Navbar2/>
   {/* SECCION1 */}
    <div data-aos="zoom-in" className='inicio-lasvictorias'>
      <div className='imagenletras-lasvictorias'>
       <img className='imagenInicioLasVictorias' alt='letras-' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649626460/DESARROLLOSGRUPODELSUD/Group_184_j7j7rc.svg'/>
      </div>
    </div>

    {/* SECCION2 */}
    <div data-aos="fade-down" data-aos-duration="3000" className='seccion1-lasvictorias'>
      <div className='cont-lasvictorias'>
        <div className='tituloSeccion1-lasvictorias'>
          <div className='subCont-lasvictorias'>
            <h1 className='titulo-lasvictorias-seccion2'>
            Viví en contacto
            <br/>
             con la naturaleza
            </h1>
            <div className='parrafoSeccion1-lasvictorias'>
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
              <button className='boton-seccion2-lasvictorias'> Me interesa → </button>
            </div>
          </div>
        </div>
        <div className='texto2-lasvictorias'>
          <img className='imagenSeccion1Lasvictorias' alt='fotoseccion1-lasvictorias' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649430829/DESARROLLOSGRUPODELSUD/lasvictorias_viv_qjlpwc.png'/>
        </div>
      </div>
    </div> 

    {/* SECCION3 */}

    <div style={{width: '100%'}} className='flex-seccion3-lasvictorias desactivacionMobile-lasvictorias'>
      <div style={{width: '50%'}}>
        {/* ASDSDsa */}
      </div>
      <div style={{width: '50%'}}>
        <Nav className='ajustenav-lasvictorias' defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link className='fontnav-lasvictorias' href="/home">1. Ubicación</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className='fontnav-lasvictorias' eventKey="link-1">2. Proyecto</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className='fontnav-lasvictorias' eventKey="link-2">3. Proyecto</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className='fontnav-lasvictorias' eventKey="link-2">4. Forma de pago</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>

  {/* SECCION4 */}
    <div className='seccion4-lasvictorias'>
      <div className='flex1-lasvictorias'>
        <div className='maps-lasvictorias'>
        <iframe className='ajusteMobileIframe' title='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.8865420140028!2d-58.11021278476073!3d-34.959452280368836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2db5c9445b9dd%3A0x5d9c05728e96f7f2!2sC.%20202%20%26%20C.%20492%2C%20Abasto%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1649628958491!5m2!1ses!2sar" 
        style={{width:'100%',height:'100vh'}}
        />
        </div>
        <div className='seccion4texto-lasvictorias'>
          <div className='ajusteMobile-lasvictorias' style={{width: '60%',margin:'auto'}}>
            <h2 className='seccion4-font-lasvictorias'>1.</h2>
            <h3 className='seccion4-subtitulo-lasvictorias'>Ubicación</h3>
            <p className='parrafo-seccion4-lasvictorias'>
            Las Victorias se encuentra ubicado 
            en la calle 492 e/ 202 y 208 de la 
            Localidad de Abasto en el partido de 
            La Plata, posee una privilegiada conexión 
            con la R.P. N° 36, permitiendo un acceso 
            fácil y rápido tanto al casco urbano de la 
            ciudad de La Plata, como a CABA.

            </p>
            <h3 className='seccion4-subtitulo2-lasvictorias'>¿Qué hay en la zona?</h3>
            <ul>
              <li style={{color:'#1D2142'}} className='ulSeccion4-lasvictorias' >Colegios</li>
              <li style={{color:'#1D2142'}} className='ulSeccion4-lasvictorias' >Comercios</li>
              <li style={{color:'#1D2142'}} className='ulSeccion4-lasvictorias' >Entidades Bancarias</li>
              <li style={{color:'#1D2142'}} className='ulSeccion4-lasvictorias' >Avenidas y Rutas cercanas</li>
            </ul>
         </div>
        </div>
      </div> 
      <div className='flex1-lasvictorias'>
        <div className='fotitoProyecto-lasvictorias'>
        
        </div>
        <div className='seccion4texto-lasvictorias'>
          <div className='container2Seccion4' style={{width: '60%',margin:'auto'}}>
            <h2 className='seccion4-font-lasvictorias'>2.</h2>
            <h3 className='seccion4-subtitulo-lasvictorias'>Proyecto</h3>
            <p className='parrafo-seccion4-lasvictorias'>
            Las Victorias cuenta con 72 terrenos 
            de 251m², ofreciendote un lugar amplio 
            y verde para que cambies tu estilo de vida.
            </p>
            <div className='box-seccion4-lasvictorias'>
              <p className='box-font-seccion2-lasvictorias'> 72</p>
              <p> Unidades</p> <p>/</p><p>Desde </p>
              <p className='box-font-seccion2-lasvictorias'> 251m²</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex1-lasvictorias'>
        <div className=' back-imagen3-lasvictorias'>
       
        </div>
        <div className='seccion4texto-lasvictorias'>
          <div className='container2Seccion4'style={{width: '60%',margin:'auto'}}>
            <h2 className='seccion4-font-lasvictorias'>3.</h2>
            <h3 className='seccion4-subtitulo-lasvictorias'>Servicios</h3>
            <p className='parrafo-seccion4-lasvictorias'>
            Este proyecto contará con los servicios
             de electricidad aérea; además de un cerco 
             perimetral que rodea todo el desarrollo
              y un portón para el ingreso y egreso al
               predio. Desde Desarrollos Delsud nos 
               ocupamos del mejorado de las calles, 
               cuyo final de obra cuenta con tosca y calcáreo.
            </p>
          <div className='flex-iconos4-lasvictorias bordertop-iconos4-lasvictorias' >
            <img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649079671/DESARROLLOSGRUPODELSUD/vetro5_ejqofr.svg'/>
            <p className='font-seccion3-servicios-lasvictorias' >Electricidad</p>
          </div>
          <div className='flex-iconos4-lasvictorias bordermedios-iconos4-lasvictorias' >
            <img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649629353/DESARROLLOSGRUPODELSUD/Vector_lfysdy.svg'/>
            <p className='font-seccion3-servicios-lasvictorias' >Portones de ingreso y egreso</p>
          </div>
          <div className='flex-iconos4-lasvictorias borderbottom-seccion4-lasvictorias' >
                  <img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649435466/DESARROLLOSGRUPODELSUD/Vector_g9k2zu.jpg'/>
                  <p className='font-seccion3-servicios-lasvictorias' >Cerco Perimetral</p>
                </div>
          <div className='flex-iconos4-lasvictorias borderbottom-seccion4-lasvictorias' >
            <img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649079671/DESARROLLOSGRUPODELSUD/road_1_qqkxci.svg'/>
            <p className='font-seccion3-servicios-lasvictorias' >Mejorado de calles</p>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div className='flex1-lasvictorias'>
        <div className='fotitoProyecto4-lasvictorias'>
        
        </div>
        <div className='seccion4texto-lasvictorias'>
          <div className='container4Seccion4' style={{width: '60%',margin:'auto'}}>
            <h2 className='seccion4-font-lasvictorias'>4.</h2>
            <h3 className='seccion4-subtitulo-lasvictorias'>Forma de pago</h3>
            <p className='parrafo-seccion4-lasvictorias'>
            Contamos con la posibilidad de ofrecer 
            una financiación propia, bajo requisitos 
            mínimos y con planes realmente a medida.
            </p> 
            
              <div className='flex-iconos4-lasvictorias' >
                <img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649077741/DESARROLLOSGRUPODELSUD/Vector_j2nmrw.svg'/>
                <p className='parrafo-seccion4-lasvictorias'>Accedé desde un 50% de anticipo</p>
              </div>
              <div className='flex-iconos4-lasvictorias' >
                <img className='icono4-lasvictorias' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649077741/DESARROLLOSGRUPODELSUD/Vector_j2nmrw.svg'/>
                <p className='parrafo-seccion4-lasvictorias' >El resto financialo hasta en 60 cuotas fijas</p>
              </div>
            
            <div>
              <button href="https://api.whatsapp.com/send?phone=542215079256&text=Hola!%20Quiero%20recibir%20informaci%C3%B3n%20sobre%20los%20desarrollos!" className='boton-desarrollo-lasvictorias marginBoton-lasvictorias'>Arma tu plan de pagos  → </button>
            </div>       
          </div>
        </div>
      </div>

      <div className='flex-slide-loteos'>
        <div>
          <h3 className='subtitulo-slide-loteos'>Proyecto El Juncal</h3>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={2}
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
          <img alt='fotosslidelasvictorias'  className='swiper-slide-loteos' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649703344/DESARROLLOSGRUPODELSUD/slidelasvictorias/RENDER_LA_VICTORIA_7_-_Foto_bqchlr.jpg" />
        </SwiperSlide>
        <SwiperSlide  >
          <img alt='fotosslidelasvictorias' className='swiper-slide-loteos' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649703344/DESARROLLOSGRUPODELSUD/slidelasvictorias/RENDER_LA_VICTORIA_2_-_Foto_1_eqoxx2.jpg" />
        </SwiperSlide>
        <SwiperSlide  >
          <img alt='fotosslidelasvictorias' className='swiper-slide-loteos' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649703343/DESARROLLOSGRUPODELSUD/slidelasvictorias/RENDER_LA_VICTORIA_5_-_Foto_oel9go.jpg" />
        </SwiperSlide>
        <SwiperSlide  >
          <img alt='fotosslidelasvictorias' className='swiper-slide-loteos' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649703343/DESARROLLOSGRUPODELSUD/slidelasvictorias/RENDER_LA_VICTORIA_6_-_Foto_q9tfev.jpg" />
        </SwiperSlide>
        <SwiperSlide  >
          <img alt='fotosslidelasvictorias' className='swiper-slide-loteos' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649703343/DESARROLLOSGRUPODELSUD/slidelasvictorias/RENDER_LA_VICTORIA_1_-_Photo_okd7os.jpg" />
        </SwiperSlide>
        <SwiperSlide  >
          <img alt='fotosslidelasvictorias' className='swiper-slide-loteos' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649703345/DESARROLLOSGRUPODELSUD/slidelasvictorias/RENDER_LA_VICTORIA_4_-_Foto_sdbs2s.jpg" />
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

export default Lasvictorias