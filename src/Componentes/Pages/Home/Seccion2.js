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
import './Seccion11';

function Seccion2() {

return (
    <>
    <BoxCards>
        <SubBoxCards>
            <CardsBox 
            style={{ width: '18rem',borderRight:'1px solid #E5E5E5' }}>
            <Card.Body>
                <img  alt='aa'src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715422/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/002-dollar_bnwiea_vwc3vo.webp' />
                <Card.Title style={{color:'#767676',FontFamily:'Raleway'}} >Cuotas en pesos <br/>y/o dólares</Card.Title>
        </Card.Body>  
            <TarjetaVerde>
                        <Card style={{ width: 'auto', height:'100%',border:'0' }} >
                            <ContenidoVerde >
                            <LogoVerde style={{paddingBottom:'10px'}} src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715496/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group-5_epscre_x68fqz.webp" />
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
            <img  alt='aaa' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715416/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group_22_femmox_kfomfk.webp' />
            <Card.Title style={{color:'#767676',FontFamily:'Raleway'}}  >Financiación <br/> Personalizada</Card.Title>          
            </Card.Body>

            <TarjetaVerde>
                <Card style={{width: 'auto', height:'100%',border:'0' }}>
                    <ContenidoVerde >
                    <LogoVerde style={{paddingBottom:'15px'}} src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715495/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group-2-1_naohwr_dilydi.webp" />
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
            <img width='80'  alt='aaa'src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715418/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/018-bank-check-1_jnjhh6_tb6n1y.webp' />
            <Card.Title style={{color:'#767676',FontFamily:'Raleway'}}  >Accedé sólo <br/> con DNI</Card.Title>              
            </Card.Body>
            <TarjetaVerde >
                <Card style={{width: 'auto', height:'100%',border:'0' }}>
                    <ContenidoVerde >
                    <img alt='65651' style={{background: 'white' , marginBottom:'20px'}} src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715496/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group-28_bouhbg_hykndw.webp" />
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
            <img  alt='aaa' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715417/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/006-crane_truck_1_ipxkwu_vholqq.webp' />
            <Card.Title style={{color:'#767676',FontFamily:'Raleway'}}   >Maquinaria <br/> Propia</Card.Title>               
            </Card.Body>
            <TarjetaVerde>
                <Card style={{width: 'auto', height:'100%',border:'0' }}>
                    <ContenidoVerde >
                    <LogoVerde alt='overlayy' style={{paddingBottom:'20px'}} src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715496/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group-3-1_wradha_uymmal.webp" />
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
            <img  alt='ss' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715427/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/035-agreement_rszyxv_mzpcfy.webp' />
            <Card.Title style={{color:'#767676',FontFamily:'Raleway'}}  >Terrenos con<br/> Escritura</Card.Title>             
            </Card.Body>
            <TarjetaVerde >
                <Card style={{ width: 'auto', height:'100%',border:'0'}}>
                    <ContenidoVerde >
                    <LogoVerde style={{paddingBottom:'20px'}}  alt='overlayy' src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715425/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/035-agreement_rhmtz8_frqs5x.webp" />
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
            delay: 2200,
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
        loop={true}
        loopFillGroupWithBlank={true}
        className="mySwiperMobiInicio swiperMobi"
        >
            <SwiperSlide><img style={{width:'100%' , heigth:'60vh' , margin: 'auto'}}   alt='555' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715495/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group-1308_aeuclg_c8i4yb.webp' /></SwiperSlide>
            <SwiperSlide><img style={{width:'100%' , heigth:'60vh' , margin: 'auto'}}   alt='555' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715495/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group-1310_o7g5p7_klemqr.webp' /></SwiperSlide>
            <SwiperSlide><img style={{width:'100%' , heigth:'60vh' , margin: 'auto'}}  alt='555' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715494/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group-1307_whf2db_oonerj.webp' /></SwiperSlide>
            <SwiperSlide><img style={{width:'100%' , heigth:'60vh' , margin: 'auto'}}    alt='555' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715493/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group-1305_dpfaww_cvftjj.webp' /></SwiperSlide>
            <SwiperSlide><img style={{width:'100%' , heigth:'60vh' , margin: 'auto'}}    alt='555' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715493/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group-1306_aexy8d_sl5eog.webp' /></SwiperSlide>
    </Swiper>
    </SubBoxCards>
    </BoxCardsMobile>
    </>
)
}

export default Seccion2