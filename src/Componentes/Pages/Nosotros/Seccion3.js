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
IconoUnidades ,
} from './Seccion3Elements'
import CountUp from 'react-countup';


function Seccion3() {

const [alturaActivacion, setAlturaActivacion] = useState(false)
  
    //navbar scroll changeBackground function
    const changeBackground = () => {
      if (window.scrollY >= 1700) {
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
            <TituloPrincipalLogros >Logros</TituloPrincipalLogros>
        </Box1>
        <Box2>
            <BoxCards>
                <Card1>                    
                    <IconoAños  alt='logros1' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648648236/DESARROLLOSGRUPODELSUD/Group_97_zd0cxi.svg'/>
                    <TituloLogros >Unidades vendidas</TituloLogros>
                    <NumeroLogros  data-count="150" >{alturaActivacion != false ?<CountUp end={957} /> : ""}</NumeroLogros>
                </Card1>
                <Card2>
                    <IconoUnidades  alt='logros3' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1647542851/DESARROLLOSGRUPODELSUD/Group_100_zhcwaz.svg'/>
                    <TituloLogros >Unidades disponibles</TituloLogros>
                    <NumeroLogros data-count="150">{alturaActivacion != false ? <CountUp end={526}/> : ""}</NumeroLogros>
                </Card2>
            </BoxCards>
            <BoxCards>
                <Card3>  
                <IconoAños  alt='logros2' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1647542862/DESARROLLOSGRUPODELSUD/Group_129_hmhnsp.svg'/>
                    <TituloLogros >Proyectos finalizados</TituloLogros> 
                    <NumeroLogros  data-count="150">{alturaActivacion != false ? <CountUp end={6}  /> : ""}</NumeroLogros>  
                </Card3>
                <Card4>
                    <IconoAños  alt='logros3' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1647543194/DESARROLLOSGRUPODELSUD/Group_103_dn4m2u.svg'/>
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