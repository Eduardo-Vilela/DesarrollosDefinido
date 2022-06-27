import React from 'react'
import { Navbar , Container , Nav ,Image} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './Navbar2.css'
import './NavbarTransparent.css'

function NavbarWhite() {
  return (
    <>
     <div id='arribaPA'>
        <Navbar  className='navBar2'  fixed="top" expand="lg">
          <Container id="#arriba1">
            <Navbar.Brand href="#home"><Link style={{color:'#1D2142'}} to='/'><Image src='https://res.cloudinary.com/grupo-delsud/image/upload/v1646942039/DESARROLLOSGRUPODELSUD/logoNav_h8jfaz.svg' fluid/></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav navbar-collapse2">
             <Nav className="me-auto">
                <Nav.Item className='Items2' href="#home"><Link style={{color:'#1D2142'}} to='/'>Inicio</Link></Nav.Item>
                <Nav.Item className='Items2' href="#link"><Link style={{color:'#1D2142'}} to='/Nosotros'>Nosotros</Link></Nav.Item>
                <Nav.Item className='Items2' href="#home"><Link  style={{color:'#1D2142'}}to='/Desarrollos'>Desarrollos</Link></Nav.Item>
                <Nav.Item className='Items2' href="#home"><Link  style={{color:'#1D2142'}}to='/Plancanje'>Plan Canje</Link></Nav.Item>
                <Nav.Item className='Items2' href="#home"><Link style={{color:'#1D2142'}} to='/Contacto'>Contacto</Link></Nav.Item>
                <div className='redesNav'>
                   <a href='https://www.facebook.com/DesarrollosDelsud.LaPlata/'><img className='imagenRedes' alt='iconoNav' src='https://res.cloudinary.com/grupo-delsud/image/upload/c_scale,w_100/v1648567662/DESARROLLOSGRUPODELSUD/icons8-facebook_zdanr8.svg'/></a>   
                   <a href='https://www.instagram.com/desarrollos.delsud/'><img className='imagenRedes'  alt='iconoNav' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648567662/DESARROLLOSGRUPODELSUD/icons8-instagram_kncmsb.svg'/> </a> 
                   <a href=''><img className='imagenRedes' alt='iconoNav' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648567662/DESARROLLOSGRUPODELSUD/icons8-whatsapp_cpftke.svg'/> </a>     
                 </div>
             </Nav>
            </Navbar.Collapse>
         </Container>
        </Navbar>  
     </div>
    </>
  )
}

export default NavbarWhite