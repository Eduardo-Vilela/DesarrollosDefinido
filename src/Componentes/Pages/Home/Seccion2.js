import React from 'react'
import {
    BoxCards,
    TarjetaVerde,
    SubBoxCards,
    CardsBox,
    BoxCardsMobile,
    ContenidoVerde,
    LogoVerde,
} from '../Home/Seccion2Elements'
import{Card} from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";


function Seccion2() {

return (
    <>
    <BoxCards>
        <SubBoxCards>
            <CardsBox 
            style={{ width: '18rem',borderRight:'1px solid #E5E5E5' }}>
            <Card.Body>
                <img  alt='aa'src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648161427/DESARROLLOSGRUPODELSUD/002-dollar_bnwiea.png' />
                <Card.Title style={{color:'#767676',FontFamily:'Raleway'}} >Cuotas en pesos <br/>y/o dólares</Card.Title>
        </Card.Body>  
            <TarjetaVerde>
                        <Card style={{ width: 'auto', height:'100%',border:'0' }} >
                            <ContenidoVerde >
                            <LogoVerde style={{paddingBottom:'20px'}} src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649773777/DESARROLLOSGRUPODELSUD/Group-5_epscre.svg" />
                                <Card.Subtitle style={{background: 'white',color:'#767676'}} >
                                Financiá tu terreno
                                en cuotas fijas en pesos o 
                                cuotas en dólares 
                                sin interés
                                </Card.Subtitle>
                            </ContenidoVerde>     
                        </Card>
                    </TarjetaVerde>
            </CardsBox>
            <CardsBox 

            style={{ width: '18rem' ,borderRight:'1px solid #E5E5E5' }}>
            <Card.Body >
            <img  alt='aaa' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648161373/DESARROLLOSGRUPODELSUD/Group_22_femmox.svg' />
            <Card.Title style={{color:'#767676',FontFamily:'Raleway'}}  >Financiación <br/> Personalizada</Card.Title>          
            </Card.Body>

            <TarjetaVerde>
                <Card style={{width: 'auto', height:'100%',border:'0' }}>
                    <ContenidoVerde >
                    <LogoVerde style={{paddingBottom:'20px'}} src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649773777/DESARROLLOSGRUPODELSUD/Group-2-1_naohwr.svg" />
                        <Card.Subtitle  style={{background: 'white',color:'#767676'}}>
                        Armá tu propio plan de 
                        financiación a medida, 
                        adaptado a tus 
                        necesidades
                        </Card.Subtitle>
                    </ContenidoVerde>
                </Card>
            </TarjetaVerde>

            </CardsBox>
            <CardsBox style={{ width: '18rem',borderRight:'1px solid #E5E5E5'  }}>
            <Card.Body >
            <img   alt='aaa'src='https://res.cloudinary.com/grupo-delsud/image/upload/c_scale,h_76,w_75/v1649774503/DESARROLLOSGRUPODELSUD/018-bank-check-1_jnjhh6.svg' />
            <Card.Title style={{color:'#767676',FontFamily:'Raleway'}}  >Accedé sólo <br/> con DNI</Card.Title>              
            </Card.Body>
            <TarjetaVerde >
                <Card style={{width: 'auto', height:'100%',border:'0' }}>
                    <ContenidoVerde >
                    <img alt='65651' width='50' height='50' style={{background: 'white' , marginBottom:'20px'}} src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649773777/DESARROLLOSGRUPODELSUD/Group-28_bouhbg.svg" />
                        <Card.Subtitle  style={{background: 'white',color:'#767676'}}>
                            Podés acceder a
                            tu propio terreno 
                            financiado, con mínimos 
                            requisitos
                        </Card.Subtitle>
                    </ContenidoVerde>
                </Card>
            </TarjetaVerde>
            </CardsBox>
            <CardsBox style={{ width: '18rem',borderRight:'1px solid #E5E5E5'  }}>
            <Card.Body >
            <img  alt='aaa' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648161373/DESARROLLOSGRUPODELSUD/006-crane_truck_1_ipxkwu.png' />
            <Card.Title style={{color:'#767676',FontFamily:'Raleway'}}   >Maquinaria <br/> Propia</Card.Title>               
            </Card.Body>
            <TarjetaVerde>
                <Card style={{width: 'auto', height:'100%',border:'0' }}>
                    <ContenidoVerde >
                    <LogoVerde alt='overlayy' style={{paddingBottom:'20px'}} src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649773777/DESARROLLOSGRUPODELSUD/Group-3-1_wradha.svg" />
                        <Card.Subtitle style={{background: 'white',color:'#767676',fontSize:'15px'}}>
                        Contamos con la 
                        maquinaria necesaria 
                        para el tratamiento del 
                        suelo y la colocación de 
                        servicios
                        </Card.Subtitle>
                    </ContenidoVerde>
                </Card>
            </TarjetaVerde>
        </CardsBox>
        <CardsBox style={{ width: '18rem' }}>
            <Card.Body >
            <img  alt='ss' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648161373/DESARROLLOSGRUPODELSUD/035-agreement_rszyxv.png' />
            <Card.Title style={{color:'#767676',FontFamily:'Raleway'}}  >Terrenos con<br/> Escritura</Card.Title>             
            </Card.Body>
            <TarjetaVerde >
                <Card style={{ width: 'auto', height:'100%',border:'0'}}>
                    <ContenidoVerde >
                    <LogoVerde style={{paddingBottom:'20px'}}  alt='overlayy' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649773777/DESARROLLOSGRUPODELSUD/035-agreement_rhmtz8.svg" />
                    <Card.Subtitle  style={{background: 'white',color:'#767676'}}>
                        Todos nuestros 
                        desarrollos cuentan con 
                        la posibilidad de una 
                        escrituración inmediata
                        </Card.Subtitle>
                    </ContenidoVerde>
                </Card>
            </TarjetaVerde>
        </CardsBox>
        </SubBoxCards>
    </BoxCards>

    <BoxCardsMobile>
    <SubBoxCards>
    <Swiper  
        modules={[Autoplay]} 
        
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
        }}
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
            <SwiperSlide><img style={{width:'100%' , heigth:'60vh' , margin: 'auto'}}   alt='555' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1653160073/DESARROLLOSGRUPODELSUD/Group-1305_dpfaww.jpg' /></SwiperSlide>
            <SwiperSlide><img style={{width:'100%' , heigth:'60vh' , margin: 'auto'}}   alt='555' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1653160073/DESARROLLOSGRUPODELSUD/Group-1306_aexy8d.jpg' /></SwiperSlide>
            <SwiperSlide><img style={{width:'100%' , heigth:'60vh' , margin: 'auto'}}  alt='555' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1653160073/DESARROLLOSGRUPODELSUD/Group-1308_aeuclg.jpg' /></SwiperSlide>
            <SwiperSlide><img style={{width:'100%' , heigth:'60vh' , margin: 'auto'}}    alt='555' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1653160073/DESARROLLOSGRUPODELSUD/Group-1310_o7g5p7.jpg' /></SwiperSlide>
            <SwiperSlide><img style={{width:'100%' , heigth:'60vh' , margin: 'auto'}}    alt='555' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1653160073/DESARROLLOSGRUPODELSUD/Group-1307_whf2db.jpg' /></SwiperSlide>
    </Swiper>
    </SubBoxCards>
    </BoxCardsMobile>
    </>
)
}

export default Seccion2