import '../LaCampiña/LaCampiña.css'
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


function Lacampiña() {
  return (
    <> 
    <Navbar/>
        {/* SECCION1 */}
          <div data-aos="zoom-in" className='inicioLacampiña'>
            <div className='imagenletras-lacampiña'>
            <img className='imagenInicioLasVictorias' alt='letrasJuncal' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649431167/DESARROLLOSGRUPODELSUD/lacampi%C3%B1a_hdxe5y.svg'/>
            </div>
          </div>

          {/* SECCION2 */}
          <div data-aos="fade-down" data-aos-duration="3000" className='seccion1-lacampiña'>
            <div className='contLacampiña'>
              <div className='tituloSeccion1-lacampiña'>
                <div className='subContlacampiña'>
                  <h1>
                  Viví rodeado
                  <br/>
                   de naturaleza 
                  </h1>
                  <div className='parrafoSeccion1-lacampiña'>
                    <p>
                    Este lanzamiento de nuestra empresa está
                     ubicado en la localidad Ángel Etcheverry, 
                     partido de La Plata, sobre la calle 229, entre las 
                     calles 38 y 42. Es un barrio semicerrado de 
                     aproximadamente cinco manzanas, rodeado de quintas
                      que propician un entorno tranquilo, silencioso y 
                      reservado, alejado de la gran urbe pero al mismo
                       tiempo con la conexión para acercarse a ella de 
                       ser necesario. 
                    </p>
                  </div>
                  <div>
                    <button className='boton-seccion2lacampiña'> Conocenos → </button>
                  </div>
                </div>
              </div>
              <div className='texto2-lacampiña'>
              <video loop autoPlay  style={{width:'100%'}}>
                <source
                  src="https://res.cloudinary.com/grupo-delsud/video/upload/v1649785728/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/La-Campina222222_iikg4r.mp4"
                  type="video/mp4"
                />
              </video>
              </div>
            </div>
          </div> 

          {/* SECCION3 */}

          <div style={{width: '100%'}} className='flex-seccion3-lacampiña desactivacionMobile-lacampiña '>
            <div style={{width: '50%'}}>
              {/* ASDSDsa */}
            </div>
            <div style={{width: '50%'}}>
              <Nav className='ajustenav-lacampiña' defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                  <Nav.Link className='fontnav-lacampiña' href="/home">1. Ubicación</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link className='fontnav-lacampiña' eventKey="link-1">2. Proyecto</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link className='fontnav-lacampiña' eventKey="link-2">3. Proyecto</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link className='fontnav-lacampiña' eventKey="link-2">4. Forma de pago</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>

        {/* SECCION4 */}
          <div className='seccion4-lacampiña'>
            <div className='flex1-lacampiña'>
              <div className='maps-lacampiña'>
              <iframe className='ajusteMobileIframe' title='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2310.53042292712!2d-58.083831394617675!3d-35.01713083049595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2c39a9bb0a4a1%3A0x8396e9bdfd083b9a!2sC.%2038%20%26%20C.%20229%2C%20Abasto%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1649432253889!5m2!1ses!2sar" 
              style={{width:'100%',height:'100vh'}}
              ></iframe>
              </div>
              <div className='seccion4texto-lacampiña'>
                <div className='ajusteMobile-lacampiña' style={{width: '60%',margin:'auto'}}>
                  <h2 className='seccion4-font-lacampiña'>1.</h2>
                  <h3 className='seccion4-subtitulo-seccion4-lacampiña'>Ubicación</h3>
                  <p className='parrafo-seccion4-lacampiña'>
                  Este nuevo lanzamiento está ubicado en 
                  la localidad Ángel Etcheverry, sobre la 
                  calle 229, entre las calles 38 y 42. Es de 
                  fácil acceso ya que se encuentra muy próximo 
                  a las Avenida 44. 
                  </p>
                  <h3 className='seccion4-subtitulo2-lacampiña'>¿Qué hay en la zona?</h3>
                  <ul>
                    <li style={{color:'#1D2142'}} className='ulSeccion4-lacampiña' >Colegios</li>
                    <li style={{color:'#1D2142'}} className='ulSeccion4-lacampiña' >Comercios</li>
                    <li style={{color:'#1D2142'}} className='ulSeccion4-lacampiña' >Entidades Bancarias</li>
                    <li style={{color:'#1D2142'}} className='ulSeccion4-lacampiña' >Avenidas y Rutas cercanas</li>
                  </ul>
              </div>
              </div>
            </div> 
            <div className='flex1-lacampiña'>
              <div className='fotitoProyecto-lacampiña'>
              
              </div>
              <div className='seccion4texto-lacampiña'>
                <div className='container2Seccion4' style={{width: '60%',margin:'auto'}}>
                  <h2 className='seccion4-font-lacampiña'>2.</h2>
                  <h3 className='seccion4-subtitulo-seccion4-lacampiña'>Proyecto</h3>
                  <p className='parrafo-seccion4-lacampiña'>
                  La Campiña cuenta con 100 desarrollos de variadas 
                  medidas, que llegan hasta los 450 m², 
                  conectados entre sí por calles 
                  internas. 
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
            <div className='flex1-lacampiña'>
              <div className=' back-imagen3-lacampiña'>
            
              </div>
              <div className='seccion4texto-lacampiña'>
                <div className='container2Seccion4' style={{width: '60%',margin:'auto'}}>
                  <h2 className='seccion4-font-lacampiña'>3.</h2>
                  <h3 className='seccion4-subtitulo-lacampiña'>Servicios</h3>
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
                  cuenta con tosca y calcáreo. 
                  </p>
                <div className='flex-iconos4-lacampiña bordertop-iconos4-lacampiña' >
                  <img className='icono4-lacampiña' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649079671/DESARROLLOSGRUPODELSUD/vetro5_ejqofr.svg'/>
                  <p className='font-seccion3-servicios-lacampiña' >Electricidad</p>
                </div>
                <div className='flex-iconos4-lacampiña bordermedios-iconos4-lacampiña' >
                  <img className='icono4-lacampiña' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649079671/DESARROLLOSGRUPODELSUD/Vectorfbaf_zx4xjl.svg'/>
                  <p className='font-seccion3-servicios-lacampiña' >Agua Potable</p>
                </div>
                <div className='flex-iconos4-lacampiña borderbottom-seccion4-lacampiña' >
                  <img className='icono4-lacampiña' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649435466/DESARROLLOSGRUPODELSUD/Vector_g9k2zu.jpg'/>
                  <p className='font-seccion3-servicios' >Cerco Perimetral</p>
                </div>
                <div className='flex-iconos4-lacampiña borderbottom-seccion4-lacampiña borderbottom-seccion4' >
                  <img className='icono4-lacampiña' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649079671/DESARROLLOSGRUPODELSUD/road_1_qqkxci.svg'/>
                  <p className='font-seccion3-servicios-lacampiña' >Mejorado de calles</p>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex1-lacampiña'>
              <div className='fotitoProyecto4-lacampiña'>
              
              </div>
              <div className='seccion4texto-lacampiña'>
                <div  className='container4Seccion4' style={{width: '60%',margin:'auto'}}>
                  <h2 className='seccion4-font-lacampiña'>4.</h2>
                  <h3 className='seccion4-subtitulo-seccion4-lacampiña'>Forma de pago</h3>
                  <p className='parrafo-seccion4-lacampiña'>
                  Contamos con la posibilidad de ofrecer 
                  una financiación propia, bajo requisitos 
                  mínimos y con planes realmente a medida.
                  </p> 
                  
                    <div className='flex-iconos4-lacampiña' >
                      <img className='icono4-lacampiña' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649077741/DESARROLLOSGRUPODELSUD/Vector_j2nmrw.svg'/>
                      <p className='parrafo-seccion4-lacampiña'>Accedé desde un 50% de anticipo</p>
                    </div>
                    <div className='flex-iconos4-lacampiña' >
                      <img className='icono4-lacampiña' alt='icon' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649077741/DESARROLLOSGRUPODELSUD/Vector_j2nmrw.svg'/>
                      <p className='parrafo-seccion4-lacampiña' >El resto financialo hasta en 60 cuotas fijas</p>
                    </div>
                  
                  <div>
                    <button className='boton-desarrollo-lacampiña marginBoton-lacampiña'> Conocenos → </button>
                  </div>       
                </div>
              </div>
            </div>

      <div className='flex-slide-loteos'>
        <div>
          <h3 className='subtitulo-slide-loteos'>Proyecto La Campiña</h3>
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

        <SwiperSlide >
        <video loop autoPlay    className='swiper-slide-loteos'>
                <source 
                  src="https://res.cloudinary.com/grupo-delsud/video/upload/v1649785863/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/03-La-Campina-3_tt6vom.mp4"
                  type="video/mp4"
                />
              </video>
        </SwiperSlide>
        <SwiperSlide >
        <video loop autoPlay    className='swiper-slide-loteos'>
                <source 
                  src="https://res.cloudinary.com/grupo-delsud/video/upload/v1649785863/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/01-La-Campina-3_qc4xrl.mp4"
                  type="video/mp4"
                />
              </video>
        </SwiperSlide>
        <SwiperSlide >
        <video loop autoPlay    className='swiper-slide-loteos'>
                <source 
                  src="https://res.cloudinary.com/grupo-delsud/video/upload/v1649785866/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/02-La-Campina-3_z9tmqz.mp4"
                  type="video/mp4"
                />
              </video>
        </SwiperSlide>
        <SwiperSlide >
        <video loop autoPlay    className='swiper-slide-loteos'>
                <source 
                  src="https://res.cloudinary.com/grupo-delsud/video/upload/v1649785868/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/04-La-Campina-3_aykocu.mp4"
                  type="video/mp4"
                />
              </video>
        </SwiperSlide>
        <SwiperSlide  >
          <img alt='fotosslidelacampiña' className='swiper-slide-loteos' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649702787/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/La_Campi%C3%B1a-5aa_noa1wg.jpg" />
        </SwiperSlide>
        <SwiperSlide  >
          <img alt='fotosslidelacampiña' className='swiper-slide-loteos' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649702787/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/La_Campi%C3%B1a-8edit_5_cuqqv1.jpg" />
        </SwiperSlide>
        <SwiperSlide  >
          <img alt='fotosslidelacampiña' className='swiper-slide-loteos' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649702785/DESARROLLOSGRUPODELSUD/slidelacampi%C3%B1a/La_Campi%C3%B1a-4_zlnm7u.jpg" />
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

export default Lacampiña;