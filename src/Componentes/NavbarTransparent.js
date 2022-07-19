import React, {useState, useEffect} from 'react';
import { Navbar , Container , Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'

/*stylessssss */
// import './NavbarTransparent.css'


function NavbarTransparent() {

    //navbar scroll when active state
    const [navbar, setNavbar] = useState(false)
   console.log(window.scrollY );
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
          <Navbar className={navbar ? "navbar navBar active navbarWhite" : "navbar navbar77"} fixed="top" expand="lg" >
            <Container fluid>
              <Navbar.Brand href="#home">
              <div className='paddingMobileLogo'>
                <Link to='/'>
                  {
                    window.scrollY >= 200 ? 
                    <img width='100' height='40'  src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715445/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/logoNav_h8jfaz_ih4rfm.svg ' alt="lala2"/>
                    :
                    <img width='100' height='40'  src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715423/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group_s8dqa5_cgbxhd.svg' alt="lala"/> 
                  }
                </Link>
              </div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" >
              {
                    window.scrollY >= 200 ? 
                    <img  src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657731135/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/barras-de-menu-de-la-derecha_1_uah0sq.png' alt="lala"/> 
                    :
                    <img  src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657731135/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/barras-de-menu-de-la-derecha_2_mnqsoc.png' alt="lala"/> 
                  }
              </Navbar.Toggle>
              <Navbar.Collapse>
                <Nav className="me-auto" >
                  <Nav.Item className='navBarItems' href="#home"><Link to='/'>Inicio</Link></Nav.Item>
                  <Nav.Item className='navBarItems' href="#link"><Link to='/Nosotros'>Nosotros</Link></Nav.Item>
                  <Nav.Item className='navBarItems' href="#home"><Link to='/Desarrollos'>Desarrollos</Link></Nav.Item>
                  <Nav.Item className='navBarItems' href="#home"><Link to='/Plancanje'>Plan Canje</Link></Nav.Item>
                  <Nav.Item className='navBarItems' href="#home"><Link to='/Contacto'>Contacto</Link></Nav.Item>   
                  <div className='redesNav'>
                   <a target="_blank" rel="noreferrer" href='https://www.facebook.com/DesarrollosDelsud.LaPlata/'><img className='imagenRedesNav2' alt='iconoNav' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657731608/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/icons8-facebook-nuevo-50_ra8jax.webp'/></a>   
                   <a target="_blank" rel="noreferrer" href='https://www.instagram.com/desarrollos.delsud/'><img className='imagenRedesNav2'  alt='iconoNav' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657731706/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/icons8-instagram-32_gb7elk.webp'/> </a> 
                   <a target="_blank" rel="noreferrer" href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre...'>
                    <img className='imagenRedesNav2' alt='iconoNav' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657736437/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/icons8-whatsapp-24_qtmcnm.webp'/> </a>     
                 </div>             
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      </>
  )
}
export default NavbarTransparent;