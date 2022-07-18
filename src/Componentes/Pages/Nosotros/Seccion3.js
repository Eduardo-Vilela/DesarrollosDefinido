import React,{useState,useEffect} from 'react'
import {
Principal,
Secundario,
Box1,
Box2,
Card1,
Card2,
Card3,
Card4,
BoxCards,
TituloLogros,
NumeroLogros,
TituloPrincipalLogros,
IconoAños,
IconoUnidades,
BoxLogros,
} from './Seccion3Elements'
import CountUp from 'react-countup';


function Seccion3() {

const [alturaActivacion, setAlturaActivacion] = useState(false)
  
    //navbar scroll changeBackground function
    const changeBackground = () => {
      if (window.scrollY >= 1300) {
        setAlturaActivacion(true)

        
      } else {
        setAlturaActivacion(false)
      }
    }

    useEffect(() => {
      changeBackground()
      // adding the event when scroll change background
      window.addEventListener("scroll", changeBackground)
    })


return (
    <>
    <Principal>
        <Secundario>
            <Box1>
                <BoxLogros>
                    <TituloPrincipalLogros >Logros</TituloPrincipalLogros>
                </BoxLogros>
            </Box1>
            <Box2>
                <BoxCards>
                    <Card1>                    
                        <IconoAños  alt='logros1' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715421/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group_97_zd0cxi_txfuzv.webp'/>
                        <TituloLogros >Unidades vendidas</TituloLogros>
                        <NumeroLogros  data-count="150" >{alturaActivacion != false ?<CountUp end={957} /> : ""}</NumeroLogros>
                    </Card1>
                    <Card2>
                        <IconoUnidades  alt='logros3' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657725345/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group-102-2_wnzspd.webp'/>
                        <TituloLogros >Unidades disponibles</TituloLogros>
                        <NumeroLogros data-count="150">{alturaActivacion != false ? <CountUp end={526}/> : ""}</NumeroLogros>
                    </Card2>
                </BoxCards>
                <BoxCards>
                    <Card3>  
                    <IconoAños  alt='logros2' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657725679/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group-114_gja1ip.webp'/>
                        <TituloLogros >Proyectos finalizados</TituloLogros> 
                        <NumeroLogros  data-count="150">{alturaActivacion != false ? <CountUp end={6}  /> : ""}</NumeroLogros>  
                    </Card3>
                    <Card4>
                        <IconoAños  alt='logros3' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715498/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group_103_dn4m2u_wtzmzi.webp'/>
                        <TituloLogros >Años en el mercado</TituloLogros>
                        <NumeroLogros  data-count="150">{alturaActivacion != false ? <CountUp end={3} /> : ""}</NumeroLogros>
                    </Card4>
                </BoxCards>
            </Box2>
        </Secundario>
    </Principal>
    </>
)
}

export default Seccion3