import React from 'react'
import '../../Estilos/Plancanje.css'
import {Card, CardGroup} from 'react-bootstrap'
import{Link} from 'react-router-dom';


function Plancanje() {

  return (
    <> 

        <div className='plancanje-contenedorBotones'>
        <CardGroup className="text-center card-planCanje">
            <div style={{width:'100%'}}>
                <Card.Title className='tituloCards-planCanje'>Qué ubicación te interesa?</Card.Title>
                <Card.Text className='subtituloCards-plancanje'>
                Seleccioná una opción
                </Card.Text>
                <div className='flexCards-plancanje'>
                    <div className='ajusteTablets' >
                        <Link to='/FormularioPlanCanje' style={{textDecoration:'none'}}> 
                        <Card className='ajusteBotones-plancanje' >
                            <Card.Title>Lisandro Olmos</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">La Plata</Card.Subtitle>
                        <Card className='ajusteBotones-plancanje overlay3' >
                            <img className='fotoDesarrollos' alt='overlayy' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648823298/DESARROLLOSGRUPODELSUD/eljuncalLetras_xlttzf.svg" />
                        </Card>
                        </Card>
                        </Link> 
                        <Link to='/FormularioPlanCanje'  style={{textDecoration:'none'}}>
                        <Card className='ajusteBotones-plancanje' >
                            <Card.Title>Los Hornos</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">La Plata</Card.Subtitle>
                        <Card className='ajusteBotones-plancanje overlay3' >
                            <img className='fotoDesarrollos' alt='overlayy' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649637673/DESARROLLOSGRUPODELSUD/Groupaaa_vvoggh.svg" />
                        </Card>    
                        </Card>
                        </Link>
                        <Link to='/FormularioPlanCanje' style={{textDecoration:'none'}} >
                        <Card className='ajusteBotones-plancanje' >
                            <Card.Title>Los Hornos</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">La Plata</Card.Subtitle>
                        <Card className='ajusteBotones-plancanje overlay3' >
                            <img className='fotoDesarrollos' alt='overlayy' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1651583108/DESARROLLOSGRUPODELSUD/la%20escondida/Logo-La-Escondida-fondo-transparente-con-sombra-17-1024x1024_uj96z1.png" />
                        </Card>
                        </Card>
                        </Link> 
                  </div>
                  <div className='ajusteTablets1' >
                        <Link to='/FormularioPlanCanje' style={{textDecoration:'none'}} >
                        <Card className='ajusteBotones-plancanje' >
                            <Card.Title>Angel Etcheverry</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">La Plata</Card.Subtitle>
                        <Card className='ajusteBotones-plancanje overlay3' >
                            <img className='fotoDesarrollos' alt='overlayy' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649431167/DESARROLLOSGRUPODELSUD/lacampi%C3%B1a_hdxe5y.svg" />
                        </Card>     
                        </Card>
                        </Link> 
                        <Link to='/FormularioPlanCanje' style={{textDecoration:'none'}} >
                        <Card className='ajusteBotones-plancanje' >
                            <Card.Title>Abasto</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">La Plata</Card.Subtitle>
                        <Card className='ajusteBotones-plancanje overlay3' >
                            <img className='fotoDesarrollos' alt='overlayy' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649626460/DESARROLLOSGRUPODELSUD/Group_184_j7j7rc.svg" />
                        </Card>
                        </Card>
                        </Link> 
                        <Link to='/FormularioPlanCanje' style={{textDecoration:'none'}} >
                        <Card className='ajusteBotones-plancanje' >
                            <Card.Title>Abasto</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">La Plata</Card.Subtitle>
                        <Card className='ajusteBotones-plancanje overlay3' >
                            <img className='fotoDesarrollos' alt='overlayy' src="https://res.cloudinary.com/grupo-delsud/image/upload/v1649690330/DESARROLLOSGRUPODELSUD/melchore-romero-las-orianas_oxmzw1.svg" />
                        </Card>
                        </Card>
                        </Link>
                  </div> 
                </div>
            </div>
        </CardGroup>
        </div>
    </>
  )
}

export default Plancanje