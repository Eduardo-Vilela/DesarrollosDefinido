import React from 'react';
/*Pagessssss */
import Rutas from './Componentes/Rutas'
import './App.css'
/**stylos */
import "swiper/css/bundle";
import 'bootstrap/dist/css/bootstrap.min.css';
import "rsuite/dist/rsuite.min.css";

import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';

function App() {
  return (
    <>
     <Rutas/>
     <CustomCursor
      targets={['.link', '.your-css-selector']}
      customClass='custom-cursor'
      dimensions={30}
      fill='#FFF'
      smoothness={{
        movement: 0.2,
        scale: 0.1,
        opacity: 0.2,
      }}
      targetOpacity={0.5}
    />
    </>
  );
}

export default App;
