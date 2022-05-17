import React from 'react'
import {
    BoxCards,
    Overlay,
    SubBoxCards,
    BoxCardsMobile,
} from '../Home/Seccion2Elements'
import{Card} from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";


function Seccion2() {
  return (
    <>
     <BoxCards>
          <SubBoxCards>
            <div style={{ width: '18rem' }}>
              <Card.Body className='ajusteposicion-seccion1'>
              <img className='ajusteFotos' alt='aa'src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648161427/DESARROLLOSGRUPODELSUD/002-dollar_bnwiea.png' />
              <Card.Title className='titulo-cards' >Cuotas en pesos <br/>y/o dólares</Card.Title>
              </Card.Body>
              <Overlay  >
                  <Card >
                      <Card.Body className='ajusteposicion-seccion1'>
                      <img className='ajusteFotos' alt='overlayy' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649773777/DESARROLLOSGRUPODELSUD/Group-5_epscre.svg" />
                          <Card.Subtitle className='parrafoCards-inicio' style={{background: 'white'}} >
                          Financiá tu terreno
                          en cuotas fijas en pesos o 
                          cuotas en dólares 
                          sin interés
                          </Card.Subtitle>
                      </Card.Body>
                  </Card>
              </Overlay>
            </div>
            <div style={{ width: '18rem' }}>
              <Card.Body className='ajusteposicion-seccion1'>
              <img  className='ajusteFotos'alt='aaa' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648161373/DESARROLLOSGRUPODELSUD/Group_22_femmox.svg' />
              <Card.Title className='titulo-cards' >Financiación <br/> Personalizada</Card.Title>          
              </Card.Body>
              <Overlay className='overlay'>
                  <Card style={{ width: '18rem' }}>
                      <Card.Body className='ajusteposicion-seccion1'>
                      <img className='ajusteFotos' alt='overlayy' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649773777/DESARROLLOSGRUPODELSUD/Group-2-1_naohwr.svg" />
                          <Card.Subtitle className='parrafoCards-inicio' style={{background: 'white'}}>
                          Armá tu propio plan de 
                          financiación a medida, 
                          adaptado a tus 
                          necesidades
                          </Card.Subtitle>
                      </Card.Body>
                  </Card>
              </Overlay>
            </div>
            <div style={{ width: '18rem' }}>
              <Card.Body className='ajusteposicion-seccion1'>
              <img className='ajusteFotos'  alt='aaa'src='https://res.cloudinary.com/grupo-delsud/image/upload/c_scale,h_76,w_75/v1649774503/DESARROLLOSGRUPODELSUD/018-bank-check-1_jnjhh6.svg' />
              <Card.Title className='titulo-cards' >Accedé sólo <br/> con DNI</Card.Title>              
              </Card.Body>
              <Overlay className='overlay'>
                  <Card style={{ width: '18rem' }}>
                      <Card.Body className='ajusteposicion-seccion1'>
                      <img className='ajusteFotos' style={{background: 'white'}} alt='overlayy' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649773777/DESARROLLOSGRUPODELSUD/Group-28_bouhbg.svg" />
                          <Card.Subtitle className='parrafoCards-inicio' style={{background: 'white'}}>
                              Podés acceder a
                              tu propio terreno 
                              financiado, con mínimos 
                              requisitos
                          </Card.Subtitle>
                      </Card.Body>
                  </Card>
              </Overlay>
            </div>
            <div style={{ width: '18rem' }}>
              <Card.Body className='ajusteposicion-seccion1'>
              <img className='ajusteFotos'  alt='aaa' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648161373/DESARROLLOSGRUPODELSUD/006-crane_truck_1_ipxkwu.png' />
              <Card.Title className='titulo-cards' >Maquinaria <br/> Propia</Card.Title>               
              </Card.Body>
              <Overlay className='overlay'>
                  <Card style={{ width: '18rem' }}>
                      <Card.Body className='ajusteposicion-seccion1'>
                      <img className='ajusteFotos' alt='overlayy' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649773777/DESARROLLOSGRUPODELSUD/Group-3-1_wradha.svg" />
                          <Card.Subtitle className='parrafoCards-inicio' style={{background: 'white'}}>
                          Contamos con la 
                          maquinaria necesaria 
                          para el tratamiento del 
                          suelo y la colocación de 
                          servicios
                          </Card.Subtitle>
                      </Card.Body>
                  </Card>
              </Overlay>
           </div>
           <div style={{ width: '18rem' }}>
              <Card.Body className='ajusteposicion-seccion1'>
              <img className='ajusteFotos' alt='ss' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648161373/DESARROLLOSGRUPODELSUD/035-agreement_rszyxv.png' />
              <Card.Title className='titulo-cards' >Terrenos con<br/> Escritura</Card.Title>             
              </Card.Body>
              <Overlay className='overlay'>
                  <Card style={{ width: '18rem' }}>
                      <Card.Body className='ajusteposicion-seccion1'>
                      <img className='ajusteFotos' alt='overlayy' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649773777/DESARROLLOSGRUPODELSUD/035-agreement_rhmtz8.svg" />
                      <Card.Subtitle className='parrafoCards-inicio' style={{background: 'white'}}>
                          Todos nuestros 
                          desarrollos cuentan con 
                          la posibilidad de una 
                          escrituración inmediata
                          </Card.Subtitle>
                      </Card.Body>
                  </Card>
              </Overlay>
           </div>
          </SubBoxCards>
     </BoxCards>

    <BoxCardsMobile>
     <SubBoxCards>
      <Swiper 
        navigation={true} 
        modules={[Navigation]} 
        breakpoints={{
            640: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            },
        }}
        
        className="mySwiperMobiInicio swiperMobi"
        >
            <SwiperSlide><img style={{width:'70%' , heigth:'60vh' , margin: 'auto'}}   alt='555' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649253761/DESARROLLOSGRUPODELSUD/Component_18_o9uutv.svg' /></SwiperSlide>
            <SwiperSlide><img style={{width:'70%' , heigth:'60vh' , margin: 'auto'}}   alt='555' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649253786/DESARROLLOSGRUPODELSUD/Component_19_njvbr9.png' /></SwiperSlide>
            <SwiperSlide><img style={{width:'70%' , heigth:'60vh' , margin: 'auto'}}  alt='555' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649253908/DESARROLLOSGRUPODELSUD/Component_20_wzxovg.png' /></SwiperSlide>
            <SwiperSlide><img style={{width:'70%' , heigth:'60vh' , margin: 'auto'}}    alt='555' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649253908/DESARROLLOSGRUPODELSUD/Component_21_bocqel.png' /></SwiperSlide>
            <SwiperSlide><img style={{width:'70%' , heigth:'60vh' , margin: 'auto'}}    alt='555' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649253908/DESARROLLOSGRUPODELSUD/Component_22_hkkdd6.png' /></SwiperSlide>
      </Swiper>
      </SubBoxCards>
    </BoxCardsMobile>
    </>
  )
}

export default Seccion2