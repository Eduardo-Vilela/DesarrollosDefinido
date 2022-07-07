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
          <Container id="#arriba1" fluid>
            <Navbar.Brand className='paddingLogo'><Link style={{color:'#1D2142'}} to='/'><Image width='100' height='40' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1646942039/DESARROLLOSGRUPODELSUD/logoNav_h8jfaz.svg' /></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav navbar-collapse2">
            <Nav className="me-auto">
                <Nav.Item className='Items2' href="#home"><Link className='Items2Link' to='/'>Inicio</Link></Nav.Item>
                <Nav.Item className='Items2' href="#link"><Link className='Items2Link' to='/Nosotros'>Nosotros</Link></Nav.Item>
                <Nav.Item className='Items2' href="#home"><Link className='Items2Link' to='/Desarrollos'>Desarrollos</Link></Nav.Item>
                <Nav.Item className='Items2' href="#home"><Link className='Items2Link' to='/Plancanje'>Plan Canje</Link></Nav.Item>
                <Nav.Item className='Items2' href="#home"><Link className='Items2Link' to='/Contacto'>Contacto</Link></Nav.Item>
                <div className='redesWhite redesNav'>
                  <a target="_blank" rel="noreferrer" href='https://www.facebook.com/DesarrollosDelsud.LaPlata/'><img className='imagenRedesNav2' alt='iconoNav' src='https://res.cloudinary.com/grupo-delsud/image/upload/c_scale,w_100/v1648567662/DESARROLLOSGRUPODELSUD/icons8-facebook_zdanr8.svg'/></a>   
                  <a target="_blank" rel="noreferrer" href='https://www.instagram.com/desarrollos.delsud/'><img className='imagenRedesNav2'  alt='iconoNav' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648567662/DESARROLLOSGRUPODELSUD/icons8-instagram_kncmsb.svg'/> </a> 
                  <a target="_blank" rel="noreferrer" href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre...' >
                    <img className='imagenRedesNav2' alt='iconoNav' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648567662/DESARROLLOSGRUPODELSUD/icons8-whatsapp_cpftke.svg'/> </a>     
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