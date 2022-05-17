import React from 'react'
import { Navbar , Container , Nav ,Image} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import '../Componentes/Estilos/Navbar2.css'

function Navbar2() {
  return (
    <>
     <div>
        <Navbar className='navBar2'  fixed="top" expand="lg">
          <Container>
            <Navbar.Brand href="#home"><Image src='https://res.cloudinary.com/grupo-delsud/image/upload/v1646942039/DESARROLLOSGRUPODELSUD/logoNav_h8jfaz.svg' fluid/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav navbar-collapse2">
             <Nav className="me-auto">
                <Nav.Item className='Items2' href="#home"><Link style={{color:'#1D2142'}} to='/'>Inicio</Link></Nav.Item>
                <Nav.Item className='Items2' href="#link"><Link style={{color:'#1D2142'}} to='/Nosotros'>Nosotros</Link></Nav.Item>
                <Nav.Item className='Items2' href="#home"><Link  style={{color:'#1D2142'}}to='/Desarrollos'>Desarrollos</Link></Nav.Item>
                <Nav.Item className='Items2' href="#home"><Link  style={{color:'#1D2142'}}to='/Plancanje'>Plan Canje</Link></Nav.Item>
                <Nav.Item className='Items2' href="#home"><Link style={{color:'#1D2142'}} to='/Contacto'>Contacto</Link></Nav.Item>
                <Nav.Item className='Items3-hablemos Items2' ><a href='https://api.whatsapp.com/send?phone=5492215079256&text=Hola!%20%F0%9F%98%80%20Quiero%20recibir%20informaci%C3%B3n%20sobre' style={{color:'#82AB29',borderBottom:'1px solid #82AB29 '}}> Hola,Hablamos?</a>
                </Nav.Item>
             </Nav>
            </Navbar.Collapse>
         </Container>
        </Navbar>  
     </div>
    </>
  )
}

export default Navbar2