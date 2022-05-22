import React, {useState, useEffect} from 'react';
import { Navbar , Container , Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'

/*stylessssss */
import './NavbarTransparent.css'


function NavbarTransparent() {

    //navbar scroll when active state
    const [navbar, setNavbar] = useState(false)
  
    //navbar scroll changeBackground function
    const changeBackground = () => {
      if (window.scrollY >= 200) {
        setNavbar(true)
        
      } else {
        setNavbar(false)
      }
    }

    useEffect(() => {
      changeBackground()
      // adding the event when scroll change background
      window.addEventListener("scroll", changeBackground)
    })

  return (
      <>
           <Navbar className={navbar ? "navbar navBar active navbar777" : "navbar navbar77"}  fixed="top" expand="lg">
            <Container id="arriba1">
              <Navbar.Brand href="#home"> <Link to='/'>
                {
                  window.scrollY >= 200 ? 
                    <img  src='https://res.cloudinary.com/grupo-delsud/image/upload/v1646942039/DESARROLLOSGRUPODELSUD/logoNav_h8jfaz.svg' alt="lala"/> 
                  :
                    <img  src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648360095/DESARROLLOSGRUPODELSUD/Group_s8dqa5.svg ' alt="lala2"/>
                }
              </Link> 
               </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Item className='navBarItems' href="#home"><Link to='/'>Inicio</Link></Nav.Item>
                  <Nav.Item className='navBarItems' href="#link"><Link to='/Nosotros'>Nosotros</Link></Nav.Item>
                  <Nav.Item className='navBarItems' href="#home"><Link to='/Desarrollos'>Desarrollos</Link></Nav.Item>
                  <Nav.Item className='navBarItems' href="#home"><Link to='/Plancanje'>Plan Canje</Link></Nav.Item>
                  <Nav.Item className='navBarItems' href="#home"><Link to='/Contacto'>Contacto</Link></Nav.Item>
                  <Nav.Item className='navBarItems' ><a href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre' style={{color:'#82AB29',borderBottom:'1px solid #82AB29 '}}> Hola,Hablamos?</a></Nav.Item>
                  <div className='redesNav'>
                   <a href='https://www.facebook.com/DesarrollosDelsud.LaPlata/'><img className='imagenRedes' alt='iconoNav' src='https://res.cloudinary.com/grupo-delsud/image/upload/c_scale,w_100/v1648567662/DESARROLLOSGRUPODELSUD/icons8-facebook_zdanr8.svg'/></a>   
                   <a href='https://www.instagram.com/desarrollos.delsud/'><img className='imagenRedes'  alt='iconoNav' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648567662/DESARROLLOSGRUPODELSUD/icons8-instagram_kncmsb.svg'/> </a> 
                   <a href=''><img className='imagenRedes' alt='iconoNav' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648567662/DESARROLLOSGRUPODELSUD/icons8-whatsapp_cpftke.svg'/> </a>     
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>  
      </>
  )
}
export default NavbarTransparent;