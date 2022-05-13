import React from 'react'
import {Row , Col, Card,} from 'react-bootstrap'
import Divider from 'rsuite/Divider';
import '../../Estilos/Desarrollos.css'
import{Link} from 'react-router-dom';



function Seccion1() {

  return (
    <>
     <div className='contenedorPrincipal-seccion1-desarrollos'>
         <div className='titulo-desarrollos'>
            <h1 className='font-desarrollos'>Elegí la opción que mejor se adapte a vos</h1>
         </div> 
         <div className='bordes-1'> 
         <Row xs={1} md={2} className="g-4 border-arriba ">
            <Col className='bordes-medios  flip-box' >
                <Link to='/Lasvictorias'>
                  <div className='flip-box-inner'>
                  <Card className='flip-box-front'>
                    <Card.Img variant="top" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1647629811/DESARROLLOSGRUPODELSUD/Group_201_c7pyuc.jpg" />
                 </Card>
                 <Card className='flip-box-back'>
                 <Card.Title className='tituloFlips'>Las Victorias</Card.Title>
                   <Card.Subtitle className='subtituloFlips'>Calle 492 entre 202 y 208</Card.Subtitle>
                    <Card.Img variant="bottom" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649792543/DESARROLLOSGRUPODELSUD/RENDER_LA_VICTORIA_2_-_Foto_2_k9fr2h.jpg" />
                 </Card>
                 </div>
                </Link>    
            </Col> 
            <Col className='  flip-box'>
              <Link to='/Eljuncal'>
                <div className='flip-box-inner'>
                <Card className='flip-box-front' >
                <Card.Img variant="top" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1647631164/DESARROLLOSGRUPODELSUD/Group_199_s4yjuz.jpg" />
                </Card> 
                <Card className='flip-box-back'>
                   <Card.Title className='tituloFlips'>El Juncal</Card.Title>
                   <Card.Subtitle className='subtituloFlips'>Calle 492 entre 202 y 208</Card.Subtitle>
                    <Card.Img variant="bottom" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649792543/DESARROLLOSGRUPODELSUD/RENDER_LA_VICTORIA_2_-_Foto_2_k9fr2h.jpg" />
                 </Card>
                 </div>
              </Link>
            </Col>
         </Row>   
         </div> 
         <Divider></Divider>
         <div className='bordes-1'>
          <Row xs={1} md={2}> 
            <Col className='bordes-medios  flip-box' >
                <Link to='/Lacampina'>
                  <div  className='flip-box-inner'>
                    <Card  className='flip-box-front' >
                    <Card.Img variant="top" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1647631164/DESARROLLOSGRUPODELSUD/Group_197_pc8rxb.jpg" />
                    </Card>
                    <Card className='flip-box-back'>
                    <Card.Title className='tituloFlips'>La Campiña</Card.Title>
                   <Card.Subtitle className='subtituloFlips'>Calle 229 entre 38 y 42</Card.Subtitle>
                    <Card.Img variant="bottom" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649792543/DESARROLLOSGRUPODELSUD/RENDER_LA_VICTORIA_2_-_Foto_2_k9fr2h.jpg" />
                 </Card>
                 </div>
                </Link>   
            </Col>
            <Col className=' flip-box'  >
                <Link to='/Latitud34'>
                  <div  className='flip-box-inner'>
                    <Card  className='flip-box-front' >
                    <Card.Img variant="top" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1647631164/DESARROLLOSGRUPODELSUD/Group_198_vhwg2d.jpg" />
                    </Card> 
                    <Card className='flip-box-back'>
                    <Card.Title className='tituloFlips'>Latitud 34</Card.Title>
                   <Card.Subtitle className='subtituloFlips'>Calle 90 entre 143 y 152</Card.Subtitle>
                    <Card.Img variant="bottom"  src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649792543/DESARROLLOSGRUPODELSUD/RENDER_LA_VICTORIA_2_-_Foto_2_k9fr2h.jpg" />
                 </Card>
                 </div>
                </Link>   
            </Col>  
         </Row>  
         </div>
         <Divider></Divider>
         <div className='bordes-1' >
          <Row xs={1} md={2} className='borde-bajo'>  
            <Col className='bordes-medios  flip-box'>
              <Link to='/Lasorianas'>
              <div  className='flip-box-inner'>
                <Card  className='flip-box-front' >
                <Card.Img variant="top" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649690065/DESARROLLOSGRUPODELSUD/Intro-Card-Las-Orianas-Frente_v9wxbi.jpg" />
                </Card> 
                <Card className='flip-box-back'>
                <Card.Title className='tituloFlips'>Las Orianas</Card.Title>
                   <Card.Subtitle className='subtituloFlips'>Calle 515 entre 168 y 170 </Card.Subtitle>
                    <Card.Img variant="bottom"  src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649792543/DESARROLLOSGRUPODELSUD/RENDER_LA_VICTORIA_2_-_Foto_2_k9fr2h.jpg" />
                 </Card>
                 </div>
              </Link>   
            </Col>
            <Col className='bordes-medios  flip-box'>
              <Link to='/Laescondida'>
              <div  className='flip-box-inner'>
                <Card  className='flip-box-front' >
                <Card.Img variant="top" src="https://res.cloudinary.com/grupo-delsud/image/upload/v1651581917/DESARROLLOSGRUPODELSUD/dsadasdasd-1024x877_f59iqi.png" />
                </Card> 
                <Card className='flip-box-back'>
                <Card.Title className='tituloFlips'>La Escondida</Card.Title>
                   <Card.Subtitle className='subtituloFlips'>Calle 84 entre 161 y 167</Card.Subtitle>
                    <Card.Img variant="bottom"  src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649792543/DESARROLLOSGRUPODELSUD/RENDER_LA_VICTORIA_2_-_Foto_2_k9fr2h.jpg" />
                 </Card>
                 </div>
              </Link>   
            </Col>
          </Row>     
         </div>          
     </div>
    </>
  )
}

export default Seccion1