import React from 'react'
import '../Lasorianas/Lasorianas.css'
import {Nav} from 'react-bootstrap'
import Seccion6 from '../../../Inicio/Seccion6'
import Seccion9 from '../../../Inicio/Seccion9'
import Seccion10 from '../../../Inicio/Seccion10'
import Navbar from '../../../../Navbar'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Keyboard, Navigation } from "swiper";
import  Footer  from '../../../../Footer'

function Latitud34() {
  return (
    <> 
    <Navbar/>
   {/* SECCION1 */}
    <div data-aos="zoom-in" className='inicio-lasorianas'>
      <div className='imagenletras-lasorianas'>
       <img alt='letras-' style={{width:'50%'}} src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649692006/DESARROLLOSGRUPODELSUD/Logo-Banner-Las-Orianas_qmldsg.svg'/>
      </div>
    </div>

    {/* SECCION2 */}
    <div data-aos="fade-down" data-aos-duration="3000" className='seccion1-lasorianas'>
      <div className='cont-lasorianas'>
        <div className='tituloSeccion1-lasorianas'>
          <div className='subCont-lasorianas'>
            <h1 className='titulo-lasorianas-seccion2'>
            El placer de
            <br/>
            vivir donde querés
            </h1>
            <div className='parrafoSeccion1-lasorianas'>
              <p>
              Las Orianas es la opción ideal para quienes 
              eligen vivir tranquilos, disfrutando de la 
              naturaleza y el aire fresco. Y, al mismo tiempo, 
              se encuentran a minutos del casco urbano.
                <br/>
               Este nuevo desarrollo se ubica en la 
               localidad de Romero, dentro del Partido 
               de La Plata, al Sur de la Provincia de Buenos Aires, 
               una zona en constante evolución.
              </p>
            </div>
            <div>
              <button className='boton-seccion2-lasorianas'> Me interesa → </button>
            </div>
          </div>
        </div>
        <div className='texto2-lasorianas'>
          <img className='imagenSeccion1latitud34' alt='fotoseccion1-lasorianas' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649692576/DESARROLLOSGRUPODELSUD/foto-inicio--1024x858_ataue4.jpg'/>
        </div>
      </div>
    </div> 

    {/* SECCION3 */}

    <div style={{width: '100%'}} className='flex-seccion3-lasorianas desactivacionMobile-lasorianas'>
      <div style={{width: '50%'}}>
        {/* ASDSDsa */}
      </div>
      <div style={{width: '50%'}}>
        <Nav className='ajustenav-lasorianas' defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link className='fontnav-lasorianas' href="/home">1. Ubicación</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className='fontnav-lasorianas' eventKey="link-1">2. Proyecto</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className='fontnav-lasorianas' eventKey="link-2">3. Proyecto</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className='fontnav-lasorianas' eventKey="link-2">4. Forma de pago</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>

  {/* SECCION4 */}
    <div className='seccion4-lasorianas'>
      <div className='flex1-lasorianas'>
        <div className='maps-lasorianas'>
        <iframe className='ajusteMobileIframe' title='mapa' src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d817.6164250185939!2d-58.0533525948005!3d-34.94493473170441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d-34.9449292!2d-58.0530951!4m3!3m2!1d-34.944957699999996!2d-58.053107!5e0!3m2!1ses!2sar!4v1651248821219!5m2!1ses!2sar" 
        style={{width:'100%',height:'100vh'}}
        />
        </div>
        <div className='seccion4texto-lasorianas'>
          <div className='ajusteMobile-lasorianas' style={{width: '60%',margin:'auto'}}>
            <h2 className='seccion4-font-lasorianas'>1.</h2>
            <h3 className='seccion4-subtitulo-lasorianas'>Ubicación</h3>
            <p className='parrafo-seccion4-lasorianas'>
            El Desarrollo se encuentra ubicado en la 
            calle 515 entre 168 y 170 a sólo pocos minutos
             del casco urbano de la ciudad de La Plata, 
             garantizando un acceso cómodo y rápido, 
             tanto al casco urbano de la Ciudad de La
              Plata como a CABA.

            </p>
            <h3 className='seccion4-subtitulo2-lasorianas'>¿Qué hay en la zona?</h3>
            <ul>
              <li className='ulSeccion4-lasorianas' >Colegios</li>
              <li className='ulSeccion4-lasorianas' >Comercios</li>
              <li className='ulSeccion4-lasorianas' >Entidades Bancarias</li>
              <li className='ulSeccion4-lasorianas' >Avenidas y Rutas cercanas</li>
            </ul>
         </div>
        </div>
      </div> 
      <div className='flex1-lasorianas'>
        <div className='fotitoProyecto-lasorianas'>
        
        </div>
        <div className='seccion4texto-lasorianas'>
          <div className='container2Seccion4' style={{width: '60%',margin:'auto'}}>
            <h2 className='seccion4-font-lasorianas'>2.</h2>
            <h3 className='seccion4-subtitulo-lasorianas'>Proyecto</h3>
            <p className='parrafo-seccion4-lasorianas'>
            Las Orianas cuenta con terrenos desde 
            250m², que garantizan un lugar amplio y 
            verde para que disfrutes del placer de 
            vivir donde querés.
            </p>
            <div className='box-seccion4-lasorianas'>
              <p className='box-font-seccion2-lasorianas'>72</p>
              <br/>
              <p>unidades</p>
              <br/>
                <p> / </p>
                <br/>
                <p>desde </p>

              <p className='box-font-seccion2-lasorianas'>251m²</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex1-lasorianas'>
        <div className=' back-imagen3-lasorianas'>
       
        </div>
        <div className='seccion4texto-lasorianas'>
          <div className='container2Seccion4' style={{width: '60%',margin:'auto'}}>
            <h2 className='seccion4-font-lasorianas'>3.</h2>
            <h3 className='seccion4-subtitulo-lasorianas'>Servicios</h3>
            <p className='parrafo-seccion4-lasorianas'>
            Este proyecto contará con los servicios
             de electricidad aérea; además de un cerco 
             perimetral que rodea todo el desarrollo
              y un portón para el ingreso y egreso al
               predio. Desde Desarrollos Delsud nos 
               ocupamos del mejorado de las calles, 
               cuyo final de obra cuenta con tosca y calcáreo.
            </p>
          <div className='flex-iconos4-lasorianas bordertop-iconos4-lasorianas' >
            <img className='icono4-lasorianas' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649079671/DESARROLLOSGRUPODELSUD/vetro5_ejqofr.svg'/>
            <p className='font-seccion3-servicios-lasorianas' >Electricidad</p>
          </div>
          <div className='flex-iconos4-lasorianas bordermedios-iconos4-lasorianas' >
            <img className='icono4-lasorianas' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649629353/DESARROLLOSGRUPODELSUD/Vector_lfysdy.svg'/>
            <p className='font-seccion3-servicios-lasorianas' >Portones de ingreso y egreso</p>
          </div>
          <div className='flex-iconos4-lasorianas borderbottom-seccion4-lasorianas' >
                  <img className='icono4-lasorianas' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649435466/DESARROLLOSGRUPODELSUD/Vector_g9k2zu.jpg'/>
                  <p className='font-seccion3-servicios-lasorianas' >Cerco Perimetral</p>
                </div>
          <div className='flex-iconos4-lasorianas borderbottom-seccion4-lasorianas' >
            <img className='icono4-lasorianas' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649079671/DESARROLLOSGRUPODELSUD/road_1_qqkxci.svg'/>
            <p className='font-seccion3-servicios-lasorianas' >Mejorado de calles</p>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div className='flex1-lasorianas'>
        <div className='fotitoProyecto4-lasorianas'>
        
        </div>
        <div className='seccion4texto-lasorianas'>
          <div className='container4Seccion4' style={{width: '60%',margin:'auto'}}>
            <h2 className='seccion4-font-lasorianas'>4.</h2>
            <h3 className='seccion4-subtitulo-lasorianas'>Forma de pago</h3>
            <p className='parrafo-seccion4-lasorianas'>
            Contamos con la posibilidad de ofrecer 
            una financiación propia, bajo requisitos 
            mínimos y con planes realmente a medida.
            </p> 
            
              <div className='flex-iconos4-lasorianas' >
                <img className='icono4-lasorianas' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649077741/DESARROLLOSGRUPODELSUD/Vector_j2nmrw.svg'/>
                <p className='parrafo-seccion4-lasorianas'>Accedé desde un 50% de anticipo</p>
              </div>
              <div className='flex-iconos4-lasorianas' >
                <img className='icono4-lasorianas' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649077741/DESARROLLOSGRUPODELSUD/Vector_j2nmrw.svg'/>
                <p className='parrafo-seccion4-lasorianas' >El resto financialo hasta en 60 cuotas fijas</p>
              </div>
            
            <div>
              <button href="https://api.whatsapp.com/send?phone=542215079256&text=Hola!%20Quiero%20recibir%20informaci%C3%B3n%20sobre%20los%20desarrollos!" className='boton-desarrollo-latitud34 marginBoton-lasorianas'>Arma tu plan de pagos  → </button>
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
         <SwiperSlide  >
          
        </SwiperSlide>
        <SwiperSlide  >
          <img alt='fotosslidelacampiña' className='swiper-slide-loteos' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649703565/DESARROLLOSGRUPODELSUD/slidelasorianas/galeria-6-1024x576_eojwa3.jpg" />
        </SwiperSlide>
        <SwiperSlide  >
          <img alt='fotosslidelacampiña' className='swiper-slide-loteos' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649703564/DESARROLLOSGRUPODELSUD/slidelasorianas/galeria-5-1024x576_pwkpyl.jpg" />
        </SwiperSlide>
        <SwiperSlide  >
          <img alt='fotosslidelacampiña' className='swiper-slide-loteos' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649703564/DESARROLLOSGRUPODELSUD/slidelasorianas/galeria-7-1024x576_btaeca.jpg" />
        </SwiperSlide>
        <SwiperSlide  >
          <img alt='fotosslidelacampiña' className='swiper-slide-loteos' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649703564/DESARROLLOSGRUPODELSUD/slidelasorianas/galeria-4-1024x576_ok2ca7.jpg" />
        </SwiperSlide>
        <SwiperSlide  >
          <img alt='fotosslidelacampiña' className='swiper-slide-loteos' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649703564/DESARROLLOSGRUPODELSUD/slidelasorianas/galeria-2-1024x576_qiyy65.jpg" />
        </SwiperSlide>
        <SwiperSlide  >
          <img alt='fotosslidelacampiña' className='swiper-slide-loteos' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649703564/DESARROLLOSGRUPODELSUD/slidelasorianas/galeria-3-1024x576_umzvzb.jpg" />
        </SwiperSlide>
        <SwiperSlide  >
          <img alt='fotosslidelacampiña' className='swiper-slide-loteos' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649703564/DESARROLLOSGRUPODELSUD/slidelasorianas/galeria-8-1024x576_y2wxqw.jpg" />
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
    </>
  )
}

export default Latitud34