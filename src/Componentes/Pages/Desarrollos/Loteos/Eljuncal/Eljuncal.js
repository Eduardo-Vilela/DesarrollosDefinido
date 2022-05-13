import '../Eljuncal/Eljuncal.css'
import {Nav} from 'react-bootstrap'
import Seccion6 from '../../../Inicio/Seccion6'
import Seccion9 from '../../../Inicio/Seccion9'
import Seccion10 from '../../../Inicio/Seccion10'
import Navbar from '../../../../Navbar'
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Keyboard,Navigation } from "swiper";
import Footer from '../../../../Footer'



function Eljuncal() {
  return (
    <> 
    <Navbar/>
   {/* SECCION1 */}
    <div data-aos="zoom-in" className='inicioeljuncal'>
      <div className='imagenletras-eljuncal'>
       <img className='imagenInicioElJuncal' alt='letrasJuncal' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648823298/DESARROLLOSGRUPODELSUD/eljuncalLetras_xlttzf.svg'/>
      </div>
    </div>

    {/* SECCION2 */}
    <div data-aos="fade-down" data-aos-duration="3000" className='seccion1-eljuncal'>
      <div className='contElJuncal'>
        <div className='tituloSeccion1-eljuncal'>
          <div className='subContElJuncal'>
            <h1 className='titulo-eljuncal-seccion2'>
              La tranquilidad
              <br/>
              que buscabas
            </h1>
            <div className='parrafoSeccion1-eljuncal'>
              <p>
                Este desarrollo se encuentra ubicado en la localidad
                de Lisandro Olmos, partido de La Plata, a sólo 20 
                minutos del centro de la ciudad. El mismo abarca 
                desde las calles 32 hasta 37 y de las calles 177 a 179. 
                Al ser una zona rodeada por la naturaleza, es ideal
                para proyectar un espacio en el cual puedas disfrutar 
                de una vida tranquila.
              </p>
            </div>
            <div>
              <button className='boton-seccion2-eljuncal'> Conocenos → </button>
            </div>
          </div>
        </div>
        <div className='texto2-eljuncal'>
          {/* <img className='imagenSeccion1Eljuncal' alt='fotoseccion1-eljuncal' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648826016/DESARROLLOSGRUPODELSUD/El_Juncal_10_2_aiijju.jpg'/> */}
          <video loop autoPlay>
                <source
                  src="https://res.cloudinary.com/grupo-delsud/video/upload/v1649780672/DESARROLLOSGRUPODELSUD/El-Juncal-Landing22222_hx68tk.mp4"
                  type="video/mp4"
                />
              </video>
        </div>
      </div>
    </div> 

    {/* SECCION3 */}

    <div style={{width: '100%'}} className='flex-seccion3-eljuncal desactivacionMobile-eljuncal'>
      <div style={{width: '50%'}}>
        {/* ASDSDsa */}
      </div>
      <div style={{width: '50%'}}>
        <Nav className='ajustenav-eljuncal' defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link className='fontnav-eljuncal' href="/home">1. Ubicación</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className='fontnav-eljuncal' eventKey="link-1">2. Proyecto</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className='fontnav-eljuncal' eventKey="link-2">3. Proyecto</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className='fontnav-eljuncal' eventKey="link-2">4. Forma de pago</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>

  {/* SECCION4 */}
    <div className='seccion4-eljuncal'>
      <div className='flex1-eljuncal'>
        <div className='maps-eljuncal'>
           <iframe className='ajusteMobileIframe' title='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.4360534275897!2d-58.03778858476052!3d-34.970740880366016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2c2c3d7d2af8b%3A0xd23784691f43fa46!2sC.%20177%20%26%20C.%2037%2C%20B1901%20Melchor%20Romero%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1649095098204!5m2!1ses!2sar" 
           style={{width:'100%',height:'100vh'}}
           />
        </div>
        <div className='seccion4texto-eljuncal'>
          <div className='ajusteMobile-eljuncal' style={{width: '60%',margin:'auto'}}>
            <h2 className='seccion4-font-eljuncal'>1.</h2>
            <h3 className='seccion4-subtitulo-eljuncal'>Ubicación</h3>
            <p className='parrafo-seccion4-eljuncal'>
            Se encuentra en una zona con cercanía a comercios y servicios, 
            y a sólo 20 minutos del centro de la ciudad de La Plata. Al ser
            una zona rodeada por la naturaleza es ideal para proyectar un
            en el cual poder disfrutar de un descanso de fin de 
            semana, como también la rutina del día a día.
            </p>
            <h3 className='seccion4-subtitulo2-eljuncal'>¿Qué hay en la zona?</h3>
            <ul>
              <li style={{color:'#1D2142'}}  className='ulSeccion4-eljuncal' >Colegios</li>
              <li style={{color:'#1D2142'}}  className='ulSeccion4-eljuncal' >Comercios</li>
              <li style={{color:'#1D2142'}}  className='ulSeccion4-eljuncal' >Entidades Bancarias</li>
              <li style={{color:'#1D2142'}}  className='ulSeccion4-eljuncal' >Avenidas y Rutas cercanas</li>
            </ul>
         </div>
        </div>
      </div> 
      <div className='flex1-eljuncal'>
        <div className='fotito-Proyecto-eljuncal'>
        
        </div>
        <div className='seccion4texto-eljuncal'>
          <div className='container2Seccion4' style={{width: '60%',margin:'auto'}}>
            <h2 className='seccion4-font-eljuncal'>2.</h2>
            <h3 className='seccion4-subtitulo-eljuncal'>Proyecto</h3>
            <p className='parrafo-seccion4-eljuncal'>
            El Juncal cuenta con 437 terrenos de variadas
            medidas, conectados entre sí por calles internas,    
            convirtiéndolo en el barrio ideal para llevar a cabo tu
            rutina diaria. Es una zona en constante evolución y
            desarrollo.
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
      <div className='flex1-eljuncal'>
        <div className=' back-imagen3-eljuncal'>
       
        </div>
        <div className='seccion4texto-eljuncal'>
          <div  className='container3Seccion4'  style={{width: '60%',margin:'auto'}}>
            <h2 className='seccion4-font-eljuncal'>3.</h2>
            <h3 className='seccion4-subtitulo-eljuncal'>Servicios</h3>
            <p className='parrafo-seccion4-eljuncal'>
              Contará con los servicio de        
              electricidad y agua potable,           
              suministrado por reconocida         
              empresa de la zona, aunque cabe         
              destacar que la conectividad de           
            estos fue facilitada por obra privada    
            de Desarrollos Delsud. Desde la
            empresa también nos hemos ocupado del 
            mejoramiento de la calle, cuyo final de obra 
            cuenta con tosca y calcáreo, y de su 
            luminaria común. De esta manera, facilitamos 
            los recursos necesarios para que cada propietario
             cumpla los sueños de su propia inversión.
            </p>
          <div className='flex-iconos4-eljuncal bordertop-iconos4' >
            <img className='icono4' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649079671/DESARROLLOSGRUPODELSUD/vetro5_ejqofr.svg'/>
            <p className='font-seccion3-servicios-eljuncal' >Electricidad</p>
          </div>
          <div className='flex-iconos4-eljuncal bordermedios-iconos4' >
            <img className='icono4' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649079671/DESARROLLOSGRUPODELSUD/Vectorfbaf_zx4xjl.svg'/>
            <p className='font-seccion3-servicios-eljuncal' >Agua Potable</p>
          </div>
          <div className='flex-iconos4-eljuncal borderbottom-seccion4' >
            <img className='icono4' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649079671/DESARROLLOSGRUPODELSUD/road_1_qqkxci.svg'/>
            <p className='font-seccion3-servicios-eljuncal' >Mejorado de calles</p>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div className='flex1-eljuncal'>
        <div className='fotito-Proyecto4-eljuncal'>
        
        </div>
        <div className='seccion4texto-eljuncal'>
          <div  className='container4Seccion4'  style={{width: '60%',margin:'auto'}}>
            <h2 className='seccion4-font-eljuncal'>4.</h2>
            <h3 className='seccion4-subtitulo-eljuncal'>Forma de pago</h3>
            <p className='parrafo-seccion4-eljuncal'>
            Contamos con la posibilidad de ofrecer 
            una financiación propia, bajo requisitos 
            mínimos y con planes realmente a medida.
            </p> 
            
              <div className='flex-iconos4' >
                <img className='icono4' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649077741/DESARROLLOSGRUPODELSUD/Vector_j2nmrw.svg'/>
                <p className='parrafo-seccion4-eljuncal'>Accedé desde un 50% de anticipo</p>
              </div>
              <div className='flex-iconos4' >
                <img className='icono4' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649077741/DESARROLLOSGRUPODELSUD/Vector_j2nmrw.svg'/>
                <p className='parrafo-seccion4-eljuncal' >El resto financialo hasta en 60 cuotas fijas</p>
              </div>
            
            <div>
              <button className='boton-desarrollo-eljuncal marginBoton-eljuncal'> Conocenos → </button>
            </div>       
          </div>
        </div>
      </div>
      <div className='flex-slide-loteos'>
        <div>
          <h3 className='subtitulo-slide-loteos'>Proyecto El Juncal</h3>
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
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        navigation={true}
        modules={[Keyboard, Navigation, ]}
        className="mySwiperLoteos"
      >
        <SwiperSlide >
        <video loop autoPlay    className='swiper-slide-loteos'>
                <source 
                  src="https://res.cloudinary.com/grupo-delsud/video/upload/v1649784206/DESARROLLOSGRUPODELSUD/03-El-Juncal-3_j5899n.mp4"
                  type="video/mp4"
                />
              </video>
        </SwiperSlide>
        <SwiperSlide >
        <video loop autoPlay    className='swiper-slide-loteos'>
                <source 
                  src="https://res.cloudinary.com/grupo-delsud/video/upload/v1649784551/DESARROLLOSGRUPODELSUD/02-El-Juncal-3_jagyrg.mp4"
                  type="video/mp4"
                />
              </video>
        </SwiperSlide>
        <SwiperSlide >
        <video loop autoPlay    className='swiper-slide-loteos'>
                <source 
                  src="https://res.cloudinary.com/grupo-delsud/video/upload/v1649784651/DESARROLLOSGRUPODELSUD/01-El-Juncal-3_acmtvi.mp4"
                  type="video/mp4"
                />
              </video>
        </SwiperSlide>
        <SwiperSlide  >
          <img alt='fotosslideeljuncal' className='swiper-slide-loteos' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649696159/DESARROLLOSGRUPODELSUD/slideEljuncal/El_Juncal-1_1_y0wtqi.jpg" />
        </SwiperSlide>
        <SwiperSlide  >
          <img alt='fotosslideeljuncal' className='swiper-slide-loteos' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649696157/DESARROLLOSGRUPODELSUD/slideEljuncal/El_Juncal-a_pdcnal.jpg" />
        </SwiperSlide>
        <SwiperSlide  >
          <img alt='fotosslideeljuncal' className='swiper-slide-loteos' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649696162/DESARROLLOSGRUPODELSUD/slideEljuncal/El_Juncal-5_va0nhb.jpg" />
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

export default Eljuncal