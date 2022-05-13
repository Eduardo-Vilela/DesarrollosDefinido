import React from 'react'
import '../../Estilos/Nosotros.css'
import {Card} from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";

function Seccion5() {
  return (
    <>
     <div className='contenedorPrincipal-seccion6-nosotros desactivacionValores'>
         <div className='contenedor5-nosotros'>
             <h2 className='titulo-seccion5-nosotros'>Valores</h2>
             <p className='parrafo-seccion5-nosotros'>
             En Delsud nos distinguimos por
        
              proporcionar a nuestros clientes una 
          
              calidad de atención excepcional, 
        
              ofreciendo servicios personalizados sobre 
          
              la base de la confianza y la seriedad.
             </p>
         </div>
         <div className='contenedor2-nosotros'>
            <div style={{margin: 25}}>
                <Card className='fondo-cards-nosotros'  style={{ width: '25rem',height:'40%' }}>
                    <Card.Body>
                    <Card.Img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1647609904/DESARROLLOSGRUPODELSUD/Group_104_xi25hp.svg" />
                      <div>
                        <Card.Title className='font-card-seccion5-nosotros' >Transparencia</Card.Title>
                        <Card.Text>
                            Documentamos cada paso en tu
                            proceso de compra para asegurarte
                            de que estás llevando a cabo una
                            compra segura.
                        </Card.Text>
                      </div>  
                    </Card.Body>
                </Card>
                <Card className='fondo-cards-nosotros'  style={{ width: '25rem',height:'40%' }}>
                    <Card.Body>
                    <Card.Img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648237887/DESARROLLOSGRUPODELSUD/handshake_1_1_q45b5f.svg" />
                        <Card.Title className='font-card-seccion5-nosotros' >Responsabilidad</Card.Title>
                        <Card.Text>
                         Nos aseguramos de cumplir con
                         todos los estándares exigidos en 
                         cada proyecto, en el tiempo y forma 
                         preestablecidos.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div style={{margin: 25}}>
                <Card className='fondo-cards-nosotros'  style={{ width: '25rem',height:'40%' }}>
                    <Card.Body>
                    <Card.Img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648237887/DESARROLLOSGRUPODELSUD/Group_105_kglmjj.svg" />
                        <Card.Title className='font-card-seccion5-nosotros' >Innovación</Card.Title>
                        <Card.Text>
                          Somos un equipo joven, soñador, 
                          abierto a las nuevas ideas. Buscamos 
                          estar a la vanguardia en la creación y 
                          gestión de inmuebles.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='fondo-cards-nosotros'  style={{ width: '25rem',height:'40%' }}>
                    <Card.Body>
                    <Card.Img src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648237887/DESARROLLOSGRUPODELSUD/Group_91_pfhrlg.svg" />
                        <Card.Title className='font-card-seccion5-nosotros' >Compromiso</Card.Title>
                        <Card.Text>
                         Creemos en lo que hacemos y en lo
                         que tenemos para aportarle a la 
                         industria, nos caracteriza la vocación y 
                         el compromiso
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
         </div>
     </div>

    {/* SWIPERRRRRR " VALORES" */}
    <div className=' swiperValoresMobi'>
        <div data-aos="fade-up" data-aos-duration="3000" className='contenedor5-nosotros-parrafo'>
                <h2 className='titulo-seccion5-nosotros'> Nuestros Valores</h2>
                <p className='parrafo-seccion5-nosotros'>
                En Delsud nos distinguimos por
                proporcionar a nuestros clientes una 
                <br/>
                calidad de atención excepcional, 
                ofreciendo servicios personalizados sobre 
                la base de la confianza y la seriedad.
                </p>
        </div>
        <div className='mobileSwiperNosotros'>
            <Swiper 
            navigation={true} 
            modules={[Navigation]} 
            breakpoints={{
                320: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
              }}
            className="mySwiperMobiValores"
            >
                <SwiperSlide><img className='slideNosotros' alt='555' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649362176/DESARROLLOSGRUPODELSUD/Group_87_evadyb.svg' /></SwiperSlide>
                <SwiperSlide><img className='slideNosotros' alt='555' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649362176/DESARROLLOSGRUPODELSUD/Group_88_urdqx8.svg' /></SwiperSlide>
                <SwiperSlide><img className='slideNosotros'  alt='555' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649362176/DESARROLLOSGRUPODELSUD/Group_90_tfm5z9.svg' /></SwiperSlide>
                <SwiperSlide><img className='slideNosotros'  alt='555' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649362176/DESARROLLOSGRUPODELSUD/Group_89_tbvvyj.svg' /></SwiperSlide>
            </Swiper>
        </div>
    </div>        
    </>
  )
}

export default Seccion5