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
import{Card,ListGroup} from 'react-bootstrap'
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
                <img className='ajusteLogos'  alt='aa'src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715422/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/002-dollar_bnwiea_vwc3vo.webp' />
                <Card.Title style={{color:'#767676',FontFamily:'Raleway',fontWeight:'400'}} >Cuotas en pesos <br/>y/o dólares</Card.Title>
        </Card.Body>  
            <TarjetaVerde>
                        <Card style={{ width: 'auto', height:'100%',border:'0' }} >
                            <ContenidoVerde >
                            <LogoVerde style={{paddingBottom:'10px'}} src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715496/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group-5_epscre_x68fqz.webp" />
                                <Card.Subtitle style={{background: 'white',color:'#767676'}} >
                                Financiá tu terreno
                                en cuotas fijas en pesos o 
                                cuotas en dólares.
                                </Card.Subtitle>
                            </ContenidoVerde>     
                        </Card>
                    </TarjetaVerde>
            </CardsBox>
            <CardsBox 

            style={{ width: '18rem' ,borderRight:'1px solid #E5E5E5' }}>
            <Card.Body >
            <img className='ajusteLogos'  alt='aaa' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715416/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group_22_femmox_kfomfk.webp' />
            <Card.Title style={{color:'#767676',FontFamily:'Raleway',fontWeight:'400'}}  >Financiación <br/> Personalizada</Card.Title>          
            </Card.Body>

            <TarjetaVerde>
                <Card style={{width: 'auto', height:'100%',border:'0' }}>
                    <ContenidoVerde >
                    <LogoVerde style={{paddingBottom:'15px'}} src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715495/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group-2-1_naohwr_dilydi.webp" />
                        <Card.Subtitle  style={{background: 'white',color:'#767676'}}>
                        Armá tu propio plan de 
                        financiación a medida, 
                        adaptado a tus 
                        necesidades.
                        </Card.Subtitle>
                    </ContenidoVerde>
                </Card>
            </TarjetaVerde>

            </CardsBox>
            <CardsBox style={{ width: '18rem',borderRight:'1px solid #E5E5E5'  }}>
            <Card.Body >
            <img className='ajusteLogos' width='80'  alt='aaa'src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715418/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/018-bank-check-1_jnjhh6_tb6n1y.webp' />
            <Card.Title style={{color:'#767676',FontFamily:'Raleway',fontWeight:'400'}}  >Accedé sólo <br/> con DNI</Card.Title>              
            </Card.Body>
            <TarjetaVerde >
                <Card style={{width: 'auto', height:'100%',border:'0' }}>
                    <ContenidoVerde >
                    <img alt='65651' style={{background: 'white' , marginBottom:'20px'}} src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715496/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group-28_bouhbg_hykndw.webp" />
                        <Card.Subtitle  style={{background: 'white',color:'#767676'}}>
                            Podés acceder a
                            tu propio terreno 
                            financiado, con mínimos 
                            requisitos.
                        </Card.Subtitle>
                    </ContenidoVerde>
                </Card>
            </TarjetaVerde>
            </CardsBox>
            <CardsBox style={{ width: '18rem',borderRight:'1px solid #E5E5E5'  }}>
            <Card.Body >
            <img className='ajusteLogos'  alt='aaa' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715417/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/006-crane_truck_1_ipxkwu_vholqq.webp' />
            <Card.Title style={{color:'#767676',FontFamily:'Raleway',fontWeight:'400'}}   >Maquinaria <br/> Propia</Card.Title>               
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
                        servicios.
                        </Card.Subtitle>
                    </ContenidoVerde>
                </Card>
            </TarjetaVerde>
        </CardsBox>
        <CardsBox style={{ width: '18rem' }}>
            <Card.Body >
            <img className='ajusteLogos'  alt='ss' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715427/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/035-agreement_rszyxv_mzpcfy.webp' />
            <Card.Title style={{color:'#767676',FontFamily:'Raleway',fontWeight:'400'}}  >Terrenos con<br/> Escritura</Card.Title>             
            </Card.Body>
            <TarjetaVerde >
                <Card style={{ width: 'auto', height:'100%',border:'0'}}>
                    <ContenidoVerde >
                    <LogoVerde style={{paddingBottom:'20px'}}  alt='overlayy' src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715425/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/035-agreement_rhmtz8_frqs5x.webp" />
                    <Card.Subtitle  style={{background: 'white',color:'#767676'}}>
                        Todos nuestros 
                        desarrollos cuentan con 
                        la posibilidad de una 
                        escrituración inmediata.
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
                    <Card.Img variant="top" style={{width:'50px',height:'auto',paddingBottom:'10px'}} src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715496/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group-5_epscre_x68fqz.webp" />
                    <Card.Body style={{padding:'0',width:'100%'}} >
                        <Card.Title style={{color:'#1D2142',FontFamily:'Poppins',fontSize:'20px',fontWeight:'400 !important',borderBottom:'1px solid rgb(130 130 130 / 23%)',paddingBottom:'10px'}}  >Cuotas en pesos <br/> y/o dólares</Card.Title>             
                    </Card.Body>
                    <Card.Body style={{padding:'0'}}>
                        <Card.Subtitle  style={{background: 'white',color:'#828282',fontFamily:'Poppins',fontSize:'15px',fontWeight:'200'}}>
                            Financiá tu terreno <br/> 
                            en cuotas fijas en<br/>
                            pesos o cuotas en <br/>
                            dolares.
                        </Card.Subtitle>
                    </Card.Body>
                    </ContenidoVerde>
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card style={{width:'15rem',height:'250px',borderRadius:'10px',border:'1px solid rgb(130 130 130 / 23%)'}}>
                    <ContenidoVerde >
                    <Card.Img variant="top" style={{width:'50px',height:'auto',paddingBottom:'10px'}} src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715495/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group-2-1_naohwr_dilydi.webp" />
                    <Card.Body style={{padding:'0',width:'100%'}} >
                        <Card.Title style={{color:'#1D2142',FontFamily:'Poppins',fontSize:'20px',fontWeight:'400',borderBottom:'1px solid rgb(130 130 130 / 23%)',paddingBottom:'10px'}}  >Financiación <br/>Personalizada</Card.Title>             
                    </Card.Body>
                    <Card.Body style={{padding:'0'}}>
                        <Card.Subtitle  style={{background: 'white',color:'#828282',fontFamily:'Poppins',fontSize:'15px',fontWeight:'200'}}>
                            Armá tu propio plan <br/> 
                            de financiación a<br/>
                            medida, adaptado<br/>
                            a tus necesidades.
                        </Card.Subtitle>
                    </Card.Body>
                    </ContenidoVerde>
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card style={{width:'15rem',height:'250px',borderRadius:'10px',border:'1px solid rgb(130 130 130 / 23%)'}}>
                    <ContenidoVerde >
                    <Card.Img variant="top" style={{width:'50px',height:'auto',paddingBottom:'10px'}} src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715496/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group-28_bouhbg_hykndw.webp" />
                    <Card.Body style={{padding:'0',width:'100%'}} >
                        <Card.Title style={{color:'#1D2142',FontFamily:'Poppins',fontSize:'20px',fontWeight:'400',borderBottom:'1px solid rgb(130 130 130 / 23%)',paddingBottom:'10px'}}  >Accedé <br/>solo con tu DNI</Card.Title>             
                    </Card.Body>
                    <Card.Body style={{padding:'0'}}>
                        <Card.Subtitle  style={{background: 'white',color:'#828282',fontFamily:'Poppins',fontSize:'15px',fontWeight:'200'}}>
                            Podés acceder a <br/> 
                            tu propio terreno <br/>
                            financiado, con <br/>
                            minimos requisitos.
                        </Card.Subtitle>
                    </Card.Body>
                    </ContenidoVerde>
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card style={{width:'15rem',height:'250px',borderRadius:'10px',border:'1px solid rgb(130 130 130 / 23%)'}}>
                    <ContenidoVerde >
                    <Card.Img variant="top" style={{width:'50px',height:'auto',paddingBottom:'10px'}} src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715496/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group-3-1_wradha_uymmal.webp" />
                    <Card.Body style={{padding:'0',width:'100%'}} >
                        <Card.Title style={{color:'#1D2142',FontFamily:'Poppins',fontSize:'20px',fontWeight:'400',borderBottom:'1px solid rgb(130 130 130 / 23%)',paddingBottom:'10px'}}  >Maquinaria<br/>Propia</Card.Title>             
                    </Card.Body>
                    <Card.Body style={{padding:'0'}}>
                        <Card.Subtitle  style={{background: 'white',color:'#828282',fontFamily:'Poppins',fontSize:'15px',fontWeight:'200'}}>
                            Contamos con la<br/> 
                            maquinaria para<br/>
                            el tratamiento del<br/>
                            suelo y servicios.
                        </Card.Subtitle>
                    </Card.Body>
                    </ContenidoVerde>
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card style={{width:'15rem',height:'250px',borderRadius:'10px',border:'1px solid rgb(130 130 130 / 23%)'}}>
                    <ContenidoVerde >
                    <Card.Img variant="top" style={{width:'50px',height:'auto',paddingBottom:'10px'}} src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715425/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/035-agreement_rhmtz8_frqs5x.webp" />
                    <Card.Body style={{padding:'0',width:'100%'}} >
                        <Card.Title style={{color:'#1D2142',FontFamily:'Poppins',fontSize:'20px',fontWeight:'400',borderBottom:'1px solid rgb(130 130 130 / 23%)',paddingBottom:'10px'}}  >Terrenos con<br/>Escritura</Card.Title>             
                    </Card.Body>
                    <Card.Body style={{padding:'0'}}>
                        <Card.Subtitle  style={{background: 'white',color:'#828282',fontFamily:'Poppins',fontSize:'15px',fontWeight:'200'}}>
                            Nuestros desarrollos<br/> 
                            tienen la posibilidad<br/>
                            de una escrituración<br/>
                            inmediata.
                        </Card.Subtitle>
                    </Card.Body>
                    </ContenidoVerde>
                </Card>
            </SwiperSlide>
    </Swiper>
    </SubBoxCards>
    </BoxCardsMobile>
    </>
)
}

export default Seccion2