import React, {useState, useEffect} from 'react';
import { Navbar , Container , Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'

/*stylessssss */



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
                    <img src='https://res.cloudinary.com/grupo-delsud/image/upload/v1646942039/DESARROLLOSGRUPODELSUD/logoNav_h8jfaz.svg' alt="lala"/> 
                  :
                    <img src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648360095/DESARROLLOSGRUPODELSUD/Group_s8dqa5.svg ' alt="lala2"/>
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
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>  
      </>
  )
}
export default NavbarTransparent;