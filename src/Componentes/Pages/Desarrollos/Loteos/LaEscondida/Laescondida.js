import '../LaEscondida/Laescondida.css'
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



function Laescondida() {
  return (
    <>
    <Navbar2/>
   {/* SECCION1 */}
    <div data-aos="zoom-in" className='inicio-laescondida'>
      <div className='imagenletras-laescondida'>
       <img className='imagenInicioLaescondida' alt='letras-' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1651583108/DESARROLLOSGRUPODELSUD/la%20escondida/Logo-La-Escondida-fondo-transparente-con-sombra-17-1024x1024_uj96z1.png'/>
      </div>
    </div>

    {/* SECCION2 */}
    <div data-aos="fade-down" data-aos-duration="3000" className='seccion1-laescondida'>
      <div className='cont-laescondida'>
        <div className='tituloSeccion1-laescondida'>
          <div className='subCont-laescondida'>
            <h1 className='titulo-laescondida-seccion2'>
            Viví en contacto
            <br/>
             con la naturaleza
            </h1>
            <div className='parrafoSeccion1-laescondida'>
              <p>
              La Escondida, se encuentra en Los Hornos, ciudad de La Plata, 
              sobre la calle 84 entre las calles 161 y 167. 
              A tan solo veinte minutos del casco de la ciudad.
              Es un barrio semi-cerrado de siete manzanas, rodeado de espacios 
              verdes que propician un entorno tranquilo, 
              silencioso y reservado. Los lotes que integran este desarrollo,
              son de medidas variadas que van desde los 251 m2 hasta 609 m2.
              Este proyecto es un gran lugar para aquellos que buscan 
              salir de la ciudad y respirar aire puro, 
              ideal como vivienda de fin de semana o permanente.
              </p>
            </div>
            <div>
              <button className='boton-seccion2-laescondida'> Me interesa → </button>
            </div>
          </div>
        </div>
        <div className='texto2-laescondida'>
          <img className='imagenSeccion1laescondida' alt='fotoseccion1-laescondida' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1651586609/DESARROLLOSGRUPODELSUD/la%20escondida/render-grupo_8-Foto-1024x576_rkb7op.jpg'/>
        </div>
      </div>
    </div> 

    {/* SECCION3 */}

    <div style={{width: '100%'}} className='flex-seccion3-laescondida desactivacionMobile-laescondida'>
      <div style={{width: '50%'}}>
        {/* ASDSDsa */}
      </div>
      <div style={{width: '50%'}}>
        <Nav className='ajustenav-laescondida' defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link className='fontnav-laescondida' href="/home">1. Ubicación</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className='fontnav-laescondida' eventKey="link-1">2. Proyecto</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className='fontnav-laescondida' eventKey="link-2">3. Proyecto</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className='fontnav-laescondida' eventKey="link-2">4. Forma de pago</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>

  {/* SECCION4 */}
    <div className='seccion4-laescondida'>
      <div className='flex1-laescondida'>
        <div className='maps-laescondida'>
        {/* <iframe className='ajusteMobileIframe' title='mapa' src="https://www.google.com/maps/d/u/0/embed?mid=1keodqSNQEChYKXkx-ONczj4ixnFmzyNr&ll=-34.990728920824324%2C-57.97226731436197&z=18" 
        style={{width:'100%',height:'100vh'}}
        /> */}
        <iframe title='mapaDesarrollo' style={{width:'100%',height:'100vh'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.624905275253!2d-57.97389288475996!3d-34.991059080361005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e9a317af01df%3A0xdc23f7f16c9236b1!2sC.%2084%20%26%20C.%20161%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1651591292140!5m2!1ses!2sar" />
        </div>
        <div className='seccion4texto-laescondida'>
          <div className='ajusteMobile-laescondida' style={{width: '60%',margin:'auto'}}>
            <h2 className='seccion4-font-laescondida'>1.</h2>
            <h3 className='seccion4-subtitulo-laescondida'>Ubicación</h3>
            <p className='parrafo-seccion4-laescondida'>
            La Escondida es un gran lugar para aquellos que buscan salir de la ciudad, y respirar aire puro, 
            ideal para vivienda de fin de semana o permanente. 
            Se encuentra a tan solo veinte minutos del casco urbano, en la localidad de Los Hornos.
            </p>
            <h3 className='seccion4-subtitulo2-laescondida'>¿Qué hay en la zona?</h3>
            <ul>
              <li style={{color:'#1D2142'}} className='ulSeccion4-laescondida' >Colegios</li>
              <li style={{color:'#1D2142'}} className='ulSeccion4-laescondida' >Comercios</li>
              <li style={{color:'#1D2142'}} className='ulSeccion4-laescondida' >Gastronomia</li>
              <li style={{color:'#1D2142'}} className='ulSeccion4-laescondida' >Avenidas y Rutas cercanas</li>
            </ul>
         </div>
        </div>
      </div> 
      <div className='flex1-laescondida'>
        <div className='fotitoProyecto-laescondida'>
        
        </div>
        <div className='seccion4texto-laescondida'>
          <div className='container2Seccion4' style={{width: '60%',margin:'auto'}}>
            <h2 className='seccion4-font-laescondida'>2.</h2>
            <h3 className='seccion4-subtitulo-laescondida'>Proyecto</h3>
            <p className='parrafo-seccion4-laescondida'>
            La Escondida ubicado sobre la calle 84 entre las calles 161 y 167, 
            cuenta con un rápido acceso desde Av. 66 y Av. 167 o Av. 161.
            </p>
            <div className='box-seccion4-laescondida'>
              <p className='box-font-seccion2-laescondida'>148</p>
              <p>unidades</p>
                <p> / </p>
                <p>desde </p>
              <p className='box-font-seccion2-laescondida'>251m²</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex1-laescondida'>
        <div className=' back-imagen3-laescondida'>
       
        </div>
        <div className='seccion4texto-laescondida'>
          <div className='container2Seccion4'style={{width: '60%',margin:'auto'}}>
            <h2 className='seccion4-font-laescondida'>3.</h2>
            <h3 className='seccion4-subtitulo-laescondida'>Servicios</h3>
            <p className='parrafo-seccion4-laescondida'>
            La Escondida cuenta con 148 terrenos de variadas medidas, que llegan hasta los 609 m2. Dándote la posibilidad de elegir tu lote ideal.
            </p>
          <div className='flex-iconos4-laescondida bordertop-iconos4-laescondida' >
            <img className='icono4-laescondida' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649079671/DESARROLLOSGRUPODELSUD/vetro5_ejqofr.svg'/>
            <p className='font-seccion3-servicios-laescondida' >Electricidad aérea</p>
          </div>
          <div className='flex-iconos4-laescondida bordermedios-iconos4-laescondida' >
            <img className='icono4' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649079671/DESARROLLOSGRUPODELSUD/Vectorfbaf_zx4xjl.svg'/>
            <p className='font-seccion3-servicios-laescondida' >Agua Potable</p>
          </div>
          <div className='flex-iconos4-laescondida bordermedios-iconos4-laescondida' >
            <img className='icono4-laescondida' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649629353/DESARROLLOSGRUPODELSUD/Vector_lfysdy.svg'/>
            <p className='font-seccion3-servicios-laescondida' >Tranquera de ingreso y egreso</p>
          </div>
          <div className='flex-iconos4-laescondida borderbottom-seccion4-laescondida' >
                  <img className='icono4-laescondida' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649435466/DESARROLLOSGRUPODELSUD/Vector_g9k2zu.jpg'/>
                  <p className='font-seccion3-servicios-laescondida' >Cerco perimetral de 5 hilos</p>
                </div>
          <div className='flex-iconos4-laescondida borderbottom-seccion4-laescondida' >
            <img className='icono4-laescondida' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649079671/DESARROLLOSGRUPODELSUD/road_1_qqkxci.svg'/>
            <p className='font-seccion3-servicios-laescondida' >Calle de tosca y calcáreo</p>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div className='flex1-laescondida'>
        <div className='fotitoProyecto4-laescondida'>
        
        </div>
        <div className='seccion4texto-laescondida'>
          <div className='container4Seccion4' style={{width: '60%',margin:'auto'}}>
            <h2 className='seccion4-font-laescondida'>4.</h2>
            <h3 className='seccion4-subtitulo-laescondida'>Forma de pago</h3>
            <p className='parrafo-seccion4-laescondida'>
            Ofrecemos una financiación personalizada, 
            con mínimos requisitos y planes realmente a medida.
            </p> 
            
              <div className='flex-iconos4-laescondida' >
                <img className='icono4-laescondida' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649077741/DESARROLLOSGRUPODELSUD/Vector_j2nmrw.svg'/>
                <p className='parrafo-seccion4-laescondida'>Accedé desde un 50% de anticipo</p>
              </div>
              <div className='flex-iconos4-laescondida' >
                <img className='icono4-laescondida' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649077741/DESARROLLOSGRUPODELSUD/Vector_j2nmrw.svg'/>
                <p className='parrafo-seccion4-laescondida' >El resto financialo hasta en 60 cuotas fijas</p>
              </div>
            
            <div>
              <button href="https://api.whatsapp.com/send?phone=542215079256&text=Hola!%20Quiero%20recibir%20informaci%C3%B3n%20sobre%20los%20desarrollos!" className='boton-desarrollo-laescondida marginBoton-laescondida'>Arma tu plan de pagos  → </button>
            </div>       
          </div>
        </div>
      </div>

      <div className='flex-slide-loteos'>
        <div>
          <h3 className='subtitulo-slide-loteos'>Proyecto La Escondida</h3>
        </div>
        <div>

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
          <img alt='fotosslidelaescondida'  className='swiper-slide-loteos' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1651587525/DESARROLLOSGRUPODELSUD/la%20escondida/render-grupo_7-Foto-1-1024x576_b8qxli.jpg" />
        </SwiperSlide>
        <SwiperSlide  >
          <img alt='fotosslidelaescondida' className='swiper-slide-loteos' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1651587525/DESARROLLOSGRUPODELSUD/la%20escondida/Render01-1024x576_hksvex.jpg" />
        </SwiperSlide>
        <SwiperSlide  >
          <img alt='fotosslidelaescondida' className='swiper-slide-loteos' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1651587525/DESARROLLOSGRUPODELSUD/la%20escondida/render-grupo_6-Foto-1024x576_izaszc.jpg" />
        </SwiperSlide>
        <SwiperSlide  >
          <img alt='fotosslidelaescondida' className='swiper-slide-loteos' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1651587526/DESARROLLOSGRUPODELSUD/la%20escondida/render-grupo_5-Foto-1024x576_krc6ua.jpg" />
        </SwiperSlide>
        <SwiperSlide  >
          <img alt='fotosslidelaescondida' className='swiper-slide-loteos' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1651587525/DESARROLLOSGRUPODELSUD/la%20escondida/render-grupo_8-Foto-1024x576_1_qxqlfd.jpg" />
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

export default Laescondida