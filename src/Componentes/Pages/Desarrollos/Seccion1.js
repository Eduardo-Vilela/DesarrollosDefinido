import React from 'react'
import { Link } from 'react-router-dom'
import Seccion10 from '../Home/Seccion10'
import Seccion11 from '../Home/Seccion11'
import {
  BoxPrincipal,
  SubBoxLotes,
  BoxTituloLotes,
  BoxLotes,
  TituloDesarrollos,
  AjusteFotos,
  Lote,
  ContenedorFotoLotes,
  TituloFlips,
  SubtituloFlips,
  LinkFlip,
} from './Seccion1Elements'
import ReactHoverFlip from 'react-hover-flip'
import cargarArchivos from './Files'

import AOS from 'aos';
import 'aos/dist/aos.css';
import './Lotes/rotation.css';
import Seccion8 from '../Home/Seccion8'
AOS.init();


function Seccion1() {
  cargarArchivos();
  /*LAS VICTORIAS*/
  const FrontLasVictorias 
  = <> 
    <Link to="/Lasvictorias">
      <ContenedorFotoLotes id='frontvictorias'alt='fotoDesarrollo' 
      src=''/>
    </Link>
  </>
  const BackLasVictorias 
  =<>
    <Link to="/Lasvictorias">
      <div className='backHover'>
          <div className='child-backhover'>
            <TituloFlips>Las Victorias</TituloFlips>
            <SubtituloFlips>Calle 492 entre 202 y 208</SubtituloFlips>
          </div>
          <img id='backvictorias'alt='aaaa' style={{width: '80%', borderRadius:'10px'}} 
          src=''/>   

      </div> 
    </Link>   
  </>

  /*EL JUNCAL*/
  const FrontElJuncal 
  = <> 
    <Link to="/Eljuncal">
      <ContenedorFotoLotes id='frontjuncal'alt='fotoDesarrollo' 
      src=''/>
    </Link>
  </>
  const BackElJuncal 
  =<>
    <Link to="/Eljuncal">
      <div className='backHover'>
        <div className='child-backhover'>
          <TituloFlips>El Juncal</TituloFlips>
          <SubtituloFlips>Calle 37 entre 177 y 179</SubtituloFlips>
        </div>
      <img id='backjuncal' style={{width: '80%', borderRadius:'10px'}} 
      src=''/>   
      </div>    
    </Link>
  </>
  
  /*LATITUD34*/
  const FrontLatitud34 
  = <> 
    <Link to="/Latitud34">
      <ContenedorFotoLotes id='frontlatitud'alt='fotoDesarrollo' 
      src=''/>
    </Link>
  </>
  const BackLatitud34 
  =<>
    <Link to="/Latitud34">
      <div className='backHover'>
        <div className='child-backhover'>
          <TituloFlips>Latitud 34</TituloFlips>
          <SubtituloFlips>Calle 90 entre 143 y 152</SubtituloFlips>
        </div> 
      <img id='backlatitud' alt='aaaa' style={{width: '80%', borderRadius:'10px'}} 
      src=''/>   
      </div>  
    </Link>         
  </>

  /*LA CAMPIÑA*/
  const FrontLaCampiña 
  = <> 
    <Link to="/Lacampina">
      <ContenedorFotoLotes id='frontcampina' alt='fotoDesarrollo' 
      src=''/>
    </Link>
  </>
  const BackLaCampiña 
  =<>
    <Link to="/Lacampina">
      <div className='backHover'>
        <div className='child-backhover'>
          <TituloFlips>La Campiña</TituloFlips>
          <SubtituloFlips>Calle 229 entre 38 y 42</SubtituloFlips>
        </div> 
      <img id='backcampina' alt='aaaa' style={{width: '80%', borderRadius:'10px'}} 
      src=''/>   
      </div>  
    </Link>          
  </>

  /*LAS ORIANAS*/
  const FrontLasOrianas 
  = <> 
    <Link to="/Lasorianas">
      <ContenedorFotoLotes id='frontorianas'alt='fotoDesarrollo' 
      src=''/>
    </Link>
  </>
  const BackLasOrianas 
  =<>
    <Link to="/Lasorianas">
      <div className='backHover'>
        <div className='child-backhover'>
          <TituloFlips>Las Orianas</TituloFlips>
          <SubtituloFlips>Calle 515 entre 168 y 170</SubtituloFlips>
        </div> 
      <img alt='aaaa' id='backorianas'style={{width: '80%', borderRadius:'10px'}} 
      src=''/>   
      </div> 
    </Link>           
  </>

/* LA ESCONDIDA*/
const FrontLaEscondida 
= <> 
  <Link to="/Laescondida">
    <ContenedorFotoLotes id='frontescondida'alt='fotoDesarrollo' 
    src=''/>
  </Link>
</>
const BackLaEscondida 
=<>
  <Link to="/Laescondida">
    <div className='backHover'>
      <div className='child-backhover'>
        <TituloFlips>Las Escondida</TituloFlips>
        <SubtituloFlips>Calle 84 entre 161 y 167</SubtituloFlips>
      </div>
    <img id='backescondida'alt='aaaa' style={{width: '80%', borderRadius:'10px'}} 
    src=''/>   
    </div>   
  </Link>         
</>

/*LA CATALINAS*/
const FrontLasCatalinas 
= <> 
    <ContenedorFotoLotes alt='fotoDesarrollo' 
    id='frontcatalinas' src=''/>
</>
const BackLasCatalinas 
=<>
  <div className='backHover'>
    <div className='child-backhover'>
      <TituloFlips>Las Catalinas - PROXIMAMENTE</TituloFlips>
      <SubtituloFlips>Ruta Provincial N°36 entre 425 y 428</SubtituloFlips>
    </div>
  <img alt='aaaa' style={{width: '80%', borderRadius:'10px'}} 
  id='backcatalinas' src=''/>   
  </div>            
</>

  return (
    <>
    <BoxPrincipal>
      <SubBoxLotes>
        <BoxTituloLotes>
            <TituloDesarrollos>Elegí la opción que mejor se adapte a vos</TituloDesarrollos>
        </BoxTituloLotes>
        <BoxLotes>

        <AjusteFotos >
          
            <ReactHoverFlip
              front={FrontLasVictorias}
              back={BackLasVictorias}
              direction="vertical"
              className="FlipHover"
              width={100}
              height={100}
            />

              <ReactHoverFlip
              style={{borderRight: 'solid 1px #E5E5E5'}}
                front={FrontElJuncal}
                back={BackElJuncal}
                direction="vertical"
                className="FlipHover"
                width={100}
                height={100}
                
              />
        </AjusteFotos>
        <AjusteFotos >
            <ReactHoverFlip
                front={FrontLatitud34}
                back={BackLatitud34}
                direction="vertical"
                className="FlipHover"
                width={100}
                height={100}
              />

              <ReactHoverFlip
              style={{borderRight: 'solid 1px #E5E5E5'}}
                front={FrontLaCampiña }
                back={BackLaCampiña }
                direction="vertical"
                className="FlipHover"
                width={100}
                height={100}
                
              />
        </AjusteFotos>
        <AjusteFotos >
            <ReactHoverFlip
                front={FrontLasOrianas}
                back={BackLasOrianas}
                direction="vertical"
                className="FlipHover"
                width={100}
                height={100}
              />

              <ReactHoverFlip
              style={{borderRight: 'solid 1px #E5E5E5'}}
                front={FrontLaEscondida}
                back={BackLaEscondida}
                direction="vertical"
                className="FlipHover"
                width={100}
                height={100}
                
              />

        </AjusteFotos>
        <AjusteFotos >
            <ReactHoverFlip
                front={FrontLasCatalinas}
                back={BackLasCatalinas}
                direction="vertical"
                className='FlipHover'
                width={100}
                height={100}
              />
              
              <div
                style={{borderRight: 'solid 1px #E5E5E5'}}
                className="rhf-container borrarFlip"
                width={100}
                height={100}
                
              >
                
              </div>
        </AjusteFotos>
        

          {/* 
          <AjusteFotos style={{border:'0'}}>
            <LinkFlip to='' style={{borderRight: 'solid 1px #E5E5E5'}}>
              <Lote data-aos="flip-up " data-aos-duration="1000" >
                <div className='front'>
                  <ContenedorFotoLotes className='front' alt='fotoDesarrollo' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715437/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Las-Catalinas_q5xlrv_wywhmh.webp'/>
                </div>
                <div className='back'>
                <TituloFlips>PROXIMAMENTE</TituloFlips>
                <SubtituloFlips>Ruta Provincial N°36 entre 425 y 428</SubtituloFlips>
                <img alt='aaaa' style={{width: '100%', borderRadius:'10px'}} src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715491/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Fotos_9-Foto-1024x576_l2isyq_fjvmzv.webp'/>
                </div>
              </Lote>
            </LinkFlip>  
            <LinkFlip to='/' style={{borderRight: 'solid 1px #E5E5E5'}}>
              <Lote style={{display:'none'}}  data-aos="flip-up "  data-aos-duration="1000">
              <div className='front'>
              </div>
              <div className='back'>
              </div>  
              </Lote>
            </LinkFlip>  
           </AjusteFotos> */}




         </BoxLotes>
       </SubBoxLotes>
     </BoxPrincipal>
     <Seccion8/>
     <Seccion10/>
     <Seccion11/>
    </>
  )
}

export default Seccion1