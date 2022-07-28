import React from 'react'
import { BoxIntermedio, BoxTexto, Parrafo3, Titulo3 } from '../Home/Seccion3Elements'
import { Box2, BoxCards} from './Seccion3Elements'
import {Valores, TituloValores , Parrafito,BoxPadre3,SubBoxPadre3,BoxValoresMobile, BoxSwiperValores,BoxTexto3,IconosValores,BoxInterno } from './Seccion5Elements'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import{Card,ListGroup} from 'react-bootstrap'

import {

  ContenidoVerde,
} from '../Home/Seccion2Elements'

function Seccion5() {
  return (
    <>
     <BoxPadre3 data-aos="fade-up"  data-aos-duration="3000">
         <SubBoxPadre3>
           <BoxTexto>
            <BoxIntermedio>
              <BoxInterno>
                  <Titulo3 >Valores</Titulo3>
                  <Parrafo3 className='parrafo-seccion5-nosotros'>
                      En Delsud nos distinguimos por 
                      proporcionar a nuestros clientes una     
                      calidad de atención excepcional,    
                      ofreciendo servicios personalizados sobre         
                      la base de la confianza y la seriedad.
                  </Parrafo3>
              </BoxInterno>
              </BoxIntermedio> 
            </BoxTexto>
            <Box2>
              <BoxCards>
                <Valores>
                  <IconosValores  alt='valores' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715499/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group_104_xi25hp_sblbna.webp'/>
                  <TituloValores>Transparencia</TituloValores>
                  <Parrafito>Documentamos cada paso en tu proceso de compra para asegurarte de que estás llevando a cabo una compra segura.</Parrafito>
                </Valores>
                <Valores>
                  <IconosValores  alt='valores' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715499/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group_105_kglmjj_uyzxom.webp'/>
                  <TituloValores>Innovación</TituloValores>
                  <Parrafito>Somos un equipo joven, soñador, abierto a las nuevas ideas. Buscamos estar a la vanguardia en la creación y gestión de inmuebles.</Parrafito>
                </Valores>
            </BoxCards>
            <BoxCards>    
                <Valores>
                   <IconosValores  alt='valores' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715424/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/handshake_1_1_q45b5f_ai1lxa.webp'/>
                   <TituloValores>Responsabilidad</TituloValores>
                   <Parrafito>Nos aseguramos de cumplir con todos los estándares exigidos en cada proyecto, en el tiempo y forma preestablecidos.</Parrafito>
                </Valores>
                <Valores>
                  <IconosValores  alt='valores' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715420/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group_91_pfhrlg_kgetu4.webp'/>
                  <TituloValores>Compromiso</TituloValores>
                  <Parrafito>Creemos en lo que hacemos y en lo que tenemos para aportarle a la industria, nos caracteriza la vocación y el compromiso</Parrafito>
                </Valores>
            </BoxCards>
          </Box2>
        </SubBoxPadre3>
    </BoxPadre3>

     <BoxValoresMobile>
       <BoxTexto3>
         <Titulo3 >Nuestros Valores</Titulo3>
         <Parrafo3 className='parrafo-seccion5-nosotros'>
         En Delsud nos distinguimos por 
          proporcionar a nuestros clientes una     
          calidad de atención excepcional,    
          ofreciendo servicios personalizados sobre         
          la base de la confianza y la seriedad.
         </Parrafo3>
       </BoxTexto3>
       <BoxSwiperValores>
          <Swiper  
            modules={[Autoplay]} 
            autoplay={{
                delay: 2200,
                disableOnInteraction: false,
            }}
            slidesPerView={1.5}
            centeredSlides={true}
            spaceBetween={20}
            loop={true}
            loopFillGroupWithBlank={true}
            className="mySwiperMobiInicio swiperMobi"
            breakpoints={{
                480: {
                    slidesPerView: 5,
                    spaceBetween: 0,
                },
                769: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                },
            }}
            >
                <SwiperSlide>
                    <Card style={{width:'15rem',height:'250px',borderRadius:'10px',border:'1px solid rgb(130 130 130 / 23%)'}}>
                        <ContenidoVerde >
                        <Card.Img variant="top" style={{width:'40px',height:'auto',paddingBottom:'10px'}} src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715499/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group_104_xi25hp_sblbna.webp" />
                        <Card.Body style={{padding:'0',width:'100%'}} >
                            <Card.Title style={{color:'#1D2142',FontFamily:'Poppins',fontSize:'20px',fontWeight:'400 !important',borderBottom:'1px solid rgb(130 130 130 / 23%)',paddingBottom:'10px'}}  >Transparencia</Card.Title>             
                        </Card.Body>
                        <Card.Body style={{padding:'0'}}>
                            <Card.Subtitle  style={{background: 'white',color:'#828282',fontFamily:'Poppins',fontSize:'15px',fontWeight:'200'}}>
                            Documentamos cada paso en tu proceso de compra para asegurarte de que estás llevando a cabo una compra segura.
                            </Card.Subtitle>
                        </Card.Body>
                        </ContenidoVerde>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{width:'15rem',height:'250px',borderRadius:'10px',border:'1px solid rgb(130 130 130 / 23%)'}}>
                        <ContenidoVerde >
                        <Card.Img variant="top" style={{width:'40px',height:'auto',paddingBottom:'10px'}} src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715499/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group_105_kglmjj_uyzxom.webp" />
                        <Card.Body style={{padding:'0',width:'100%'}} >
                            <Card.Title style={{color:'#1D2142',FontFamily:'Poppins',fontSize:'20px',fontWeight:'400',borderBottom:'1px solid rgb(130 130 130 / 23%)',paddingBottom:'10px'}}  >Innovación</Card.Title>             
                        </Card.Body>
                        <Card.Body style={{padding:'0'}}>
                            <Card.Subtitle  style={{background: 'white',color:'#828282',fontFamily:'Poppins',fontSize:'15px',fontWeight:'200'}}>
                            Somos un equipo joven, soñador, abierto a las nuevas ideas. Buscamos estar a la vanguardia en la creación y gestión de inmuebles.
                            </Card.Subtitle>
                        </Card.Body>
                        </ContenidoVerde>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{width:'15rem',height:'250px',borderRadius:'10px',border:'1px solid rgb(130 130 130 / 23%)'}}>
                        <ContenidoVerde >
                        <Card.Img variant="top" style={{width:'40px',height:'auto',paddingBottom:'10px'}} src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715424/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/handshake_1_1_q45b5f_ai1lxa.webp" />
                        <Card.Body style={{padding:'0',width:'100%'}} >
                            <Card.Title style={{color:'#1D2142',FontFamily:'Poppins',fontSize:'20px',fontWeight:'400',borderBottom:'1px solid rgb(130 130 130 / 23%)',paddingBottom:'10px'}}  >Responsabilidad</Card.Title>             
                        </Card.Body>
                        <Card.Body style={{padding:'0'}}>
                            <Card.Subtitle  style={{background: 'white',color:'#828282',fontFamily:'Poppins',fontSize:'15px',fontWeight:'200'}}>
                            Nos aseguramos de cumplir con todos los estándares exigidos en cada proyecto, en el tiempo y forma preestablecidos.
                            </Card.Subtitle>
                        </Card.Body>
                        </ContenidoVerde>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card style={{width:'15rem',height:'250px',borderRadius:'10px',border:'1px solid rgb(130 130 130 / 23%)'}}>
                        <ContenidoVerde >
                        <Card.Img variant="top" style={{width:'40px',height:'auto',paddingBottom:'10px'}} src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715420/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group_91_pfhrlg_kgetu4.webp" />
                        <Card.Body style={{padding:'0',width:'100%'}} >
                            <Card.Title style={{color:'#1D2142',FontFamily:'Poppins',fontSize:'20px',fontWeight:'400',borderBottom:'1px solid rgb(130 130 130 / 23%)',paddingBottom:'10px'}}  >Compromiso</Card.Title>             
                        </Card.Body>
                        <Card.Body style={{padding:'0'}}>
                            <Card.Subtitle  style={{background: 'white',color:'#828282',fontFamily:'Poppins',fontSize:'15px',fontWeight:'200'}}>
                            Creemos en lo que hacemos y en lo que tenemos para aportarle a la industria, nos caracteriza la vocación y el compromiso
                            </Card.Subtitle>
                        </Card.Body>
                        </ContenidoVerde>
                    </Card>
                </SwiperSlide>
          </Swiper>
       </BoxSwiperValores>
     </BoxValoresMobile>
 
    </>
  )
}

export default Seccion5