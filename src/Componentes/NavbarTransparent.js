import React, {useState, useEffect} from 'react';
import { Navbar , Container , Nav ,Offcanvas,NavLink} from 'react-bootstrap';
import {Link} from 'react-router-dom'

/*stylessssss */
import './NavbarTransparent.css'
import './Navbar2.css'
import { FaAlignRight } from "react-icons/fa";


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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

  return (
      <>
          <Navbar className={navbar ? "navbar navBar active navbarWhite" : "navbar navbar77"} fixed="top" expand="lg" >
            <Container className='navbarDisable' fluid>
              <Navbar.Brand href="#home">
              <div className='paddingMobileLogo'>
                <Link to='/'>
                  {
                    window.scrollY >= 200 ? 
                    <img width='130'  src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1659040682/Logo_Desarrollos_Delsud-_Azul_-_07-07_gfdomk.webp' />
                    :
                    <img  width='130' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1659040845/Logo_Desarrollos_Delsud-07_rnz2jc.webp' />
                  }
                </Link>
              </div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" >
              {
                    window.scrollY >= 200 ? 
                    <FaAlignRight style={{fontSize:'20px'}} variant="primary" onClick={toggleShow} className="me-2"/>   
                    :
                   <FaAlignRight style={{fontSize:'20px',color:'white'}} variant="primary" onClick={toggleShow} className="me-2"/>   
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

            <Container fluid className='mobile-nav'>
              <Navbar.Brand >
              {
                    window.scrollY >= 200 ? 
                    <img width='90' height='30' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715445/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/logoNav_h8jfaz_ih4rfm.webp' />
                    :
                    <img style={{filter:'brightness(0) invert(1)'}} width='90' height='30' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715445/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/logoNav_h8jfaz_ih4rfm.webp' />
                  }
              </Navbar.Brand>
              {/* <img  src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657731135/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/barras-de-menu-de-la-derecha_2_mnqsoc.png' width={"20px"} variant="primary" onClick={toggleShow} className="me-2"/> */}
              {
                    window.scrollY >= 200 ? 
                    <img  src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657731135/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/barras-de-menu-de-la-derecha_1_uah0sq.webp' alt="lala" variant="primary" onClick={toggleShow} className="me-2"/> 
                    :
                    <img  src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657731135/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/barras-de-menu-de-la-derecha_2_mnqsoc.webp' alt="lala" variant="primary" onClick={toggleShow} className="me-2"/> 
                  }
              <Navbar.Offcanvas      
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="start"
                show={show}
                onHide={handleClose}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title className='offcanvas-title2' id="offcanvasNavbarLabel"><NavLink to="/"><img  width='90' height='30' src={'https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715423/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group_s8dqa5_cgbxhd.webp'}/></NavLink></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body onHide={handleClose}> 
                  <Nav className="me-auto" >
                    <Nav.Item className='navBarItems' href="#home"><Link onClick={handleClose} style={{color:'#1D2142',textDecoration:'none !important'}} to='/'>Inicio</Link></Nav.Item>
                    <Nav.Item className='navBarItems' href="#link"><Link onClick={handleClose} to='/Nosotros'>Nosotros</Link></Nav.Item>
                    <Nav.Item className='navBarItems' href="#home"><Link onClick={handleClose} to='/Desarrollos'>Desarrollos</Link></Nav.Item>
                    <Nav.Item className='navBarItems' href="#home"><Link onClick={handleClose}  to='/Plancanje'>Plan Canje</Link></Nav.Item>
                    <Nav.Item className='navBarItems' href="#home"><Link onClick={handleClose} to='/Contacto'>Contacto</Link></Nav.Item>   
                    <div className='redesNav'>
                      <a target="_blank" rel="noreferrer" className='bordesRedondos' href='https://www.facebook.com/DesarrollosDelsud.LaPlata/'><img className='imagenRedesNav2' alt='iconoNav' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658166853/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/face_zhvnbt.webp'/></a>   
                      <a target="_blank" rel="noreferrer" className='bordesRedondos' href='https://www.instagram.com/desarrollos.delsud/'><img className='imagenRedesNav2'  alt='iconoNav' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658166853/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/insta_wlh145.webp'/> </a> 
                      <a target="_blank" rel="noreferrer" className='bordesRedondos' href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre...'>
                      <img className='imagenRedesNav2' alt='iconoNav' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658166898/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/wsp_gyatf7.webp'/> </a>     
                    </div>             
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
      </>
  )
}
export default NavbarTransparent;