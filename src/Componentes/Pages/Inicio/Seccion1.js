import React from 'react'
import{Card , CardGroup, Row ,Col} from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import '../../Estilos/Inicio.css'



function Seccion1() {
  return (
    <>
    <Row className='ajusteCards desactivacionMobi '>
    <CardGroup >
      <Col className='bordesCras-inicio'>
        <Card style={{ width: '18rem' }}>
            <Card.Body className='ajusteposicion-seccion1'>
            <img className='ajusteFotos' alt='aa'src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648161427/DESARROLLOSGRUPODELSUD/002-dollar_bnwiea.png' />
            <Card.Title className='titulo-cards' >Cuotas en pesos <br/>y/o dólares</Card.Title>
            </Card.Body>
             <div style={{background: 'white'}} className='overlay'>
                <Card style={{ width: '18rem', background: 'white' }}>
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
             </div>
           </Card>
      </Col>
      <Col className='bordesCras-inicio'>
        <Card style={{ width: '19rem' }}>
            <Card.Body className='ajusteposicion-seccion1'>
            <img  className='ajusteFotos'alt='aaa' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648161373/DESARROLLOSGRUPODELSUD/Group_22_femmox.svg' />
            <Card.Title className='titulo-cards' >Financiación <br/> Personalizada</Card.Title>          
            </Card.Body>
            <div className='overlay'>
                <Card style={{ width: '19rem' }}>
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
            </div>
        </Card>
      </Col>
      <Col className='bordesCras-inicio'> 
        <Card style={{ width: '18rem' }}>
            <Card.Body className='ajusteposicion-seccion1'>
            <img className='ajusteFotos'  alt='aaa'src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649774503/DESARROLLOSGRUPODELSUD/018-bank-check-1_jnjhh6.svg' />
            <Card.Title className='titulo-cards' >Accedé sólo <br/> con DNI</Card.Title>              
            </Card.Body>
            <div className='overlay'>
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
            </div>
        </Card>
      </Col>
      <Col className='bordesCras-inicio'>
        <Card style={{ width: '18rem' }}>
            <Card.Body className='ajusteposicion-seccion1'>
            <img className='ajusteFotos'  alt='aaa' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648161373/DESARROLLOSGRUPODELSUD/006-crane_truck_1_ipxkwu.png' />
            <Card.Title className='titulo-cards' >Maquinaria <br/> Propia</Card.Title>               
            </Card.Body>
            <div className='overlay'>
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
            </div>
        </Card>
       </Col>
       <Col className='bordesCardsLeft'> 
        <Card style={{ width: '18rem' }}>
            <Card.Body className='ajusteposicion-seccion1'>
            <img className='ajusteFotos' alt='ss' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648161373/DESARROLLOSGRUPODELSUD/035-agreement_rszyxv.png' />
            <Card.Title className='titulo-cards' >Terrenos con<br/> Escritura</Card.Title>             
            </Card.Body>
            <div className='overlay'>
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
            </div>
        </Card>
      </Col>
    </CardGroup>  
    </Row>




    <Swiper 
    navigation={true} 
    modules={[Navigation]} 
    breakpoints={{
        640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
        769: {
          slidesPerView: 2.5,
          slidesPerGroup: 2.5,
        },
      }}
    
    className="mySwiperMobiInicio swiperMobi"
    >
        <SwiperSlide><img className='cardmobi-swiper'   alt='555' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649253761/DESARROLLOSGRUPODELSUD/Component_18_o9uutv.svg' /></SwiperSlide>
        <SwiperSlide><img className='cardmobi-swiper'  alt='555' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649253786/DESARROLLOSGRUPODELSUD/Component_19_njvbr9.png' /></SwiperSlide>
        <SwiperSlide><img className='cardmobi-swiper'  alt='555' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649253908/DESARROLLOSGRUPODELSUD/Component_20_wzxovg.png' /></SwiperSlide>
        <SwiperSlide><img className='cardmobi-swiper'   alt='555' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649253908/DESARROLLOSGRUPODELSUD/Component_21_bocqel.png' /></SwiperSlide>
        <SwiperSlide><img className='cardmobi-swiper'   alt='555' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649253908/DESARROLLOSGRUPODELSUD/Component_22_hkkdd6.png' /></SwiperSlide>
      </Swiper>
  </>
  )
}

export default Seccion1