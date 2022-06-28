import React from 'react'
import NavbarTransparent from '../../NavbarTransparent'
import ModalInicio from './ModalInicio'
import Seccion1 from './Seccion1'
import Seccion10 from './Seccion10'
import Seccion11 from './Seccion11'
import Seccion2 from './Seccion2'
import Seccion3 from './Seccion3'
import Seccion4 from './Seccion4'
import Seccion5 from './Seccion5'
import Seccion6 from './Seccion6'
import Seccion7 from './Seccion7'
import Seccion8 from './Seccion8'
import Seccion9 from './Seccion9'
import AnimatedCursor from "react-animated-cursor"


function Home() {
  return (
    <>
    <AnimatedCursor
      innerSize={5}
      outerSize={5}
      color='29, 33, 66'
      outerAlpha={0.1}
      innerScale={0.7}
      outerScale={2}
      outerStyle={{
        border: '1px solid #1D2142',
        mixBlendMode: 'exclusion'
      }}
      innerStyle={{
        backgroundColor: '#1D2142'
      }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        'Modal'
      ]}
    />
    <NavbarTransparent/>
    <ModalInicio/>
     <Seccion1/>
     <Seccion2/>
     <Seccion3/>
     <Seccion4/>
     {/* <Seccion5/> */}
     <Seccion6/>
     <Seccion7/>
     <Seccion8/>
     <Seccion9/>
     <Seccion10/>
     <Seccion11/>
    </>
  )
}

export default Home