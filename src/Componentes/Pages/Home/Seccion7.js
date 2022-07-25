import React from 'react'
import {Link} from 'react-router-dom'
import {
    BoxCardsDesarrollos,
    BoxCards2,
    BoxBordesCards,
    ImgCardsDesarrollos,
    CardsMobile,
    BoxCardsMobile,
    ImgCardsLasCatalinas,
} from './Seccion7Elements'



function Seccion7() {
  return (
    <>
     <BoxCardsDesarrollos>
       <BoxCards2>
              <BoxBordesCards  className='bordeMedio '> 
                <Link to='/Lasorianas'>        
               <div >
                <ImgCardsDesarrollos style={{filter:'invert(1)'}}  src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1658781051/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/melchore-romero-las-orianas_fyusq7.svg" />
                </div>
               </Link>
            </BoxBordesCards>
            <BoxBordesCards className='bordeMedio'> 
             <Link to='/Latitud34'>  
                <div >
                    <ImgCardsDesarrollos  src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715498/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group2_f7py2q_x6dit2.webp" />
                </div> 
            </Link>    
            </BoxBordesCards> 
            <BoxBordesCards className='bordeMedio'>
              <Link to='/Lacampina'> 
                <div >
                    <ImgCardsDesarrollos  src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715497/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group-9_lwsyra_cbcwat.webp" />
                </div> 
              </Link>  
            </BoxBordesCards>
 
            <BoxBordesCards className='bordeMedio'>
              <Link to='/Eljuncal'>
                <div >
                    <ImgCardsDesarrollos  src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715495/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group-1_zjxifn_jbmvde.webp" />
                </div>
              </Link> 
            </BoxBordesCards>
            <BoxBordesCards className='bordeMedio'>
              <Link to='/Lasvictorias'>
                <div >
                    <ImgCardsDesarrollos  src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715502/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group_185_pn9nz2_wp1w4q.webp" />
                </div> 
              </Link>
            </BoxBordesCards>
            <BoxBordesCards className='bordeMedio'>
              <Link to='/Laescondida'>
                <div >
                    <ImgCardsDesarrollos  src="https://res.cloudinary.com/grupo-delsud/image/upload/v1656448613/Logo_-_La_Escondida_lngc51.webp" />
                </div>   
              </Link>
            </BoxBordesCards>
            <BoxBordesCards className='bordeMedio'>
              <Link to='/'>
                <div >
                    <ImgCardsLasCatalinas  src="https://res.cloudinary.com/grupo-delsud/image/upload/v1656448614/Logo_-_Las_Catalinas_lakd4u.webp" />
                </div>   
              </Link>
            </BoxBordesCards>
       </BoxCards2>  
     </BoxCardsDesarrollos>


     <BoxCardsMobile>
        <BoxCards2>
            <CardsMobile>
                <BoxBordesCards  className='bordeMedio '> 
                    <Link to='/Lasorianas'>        
                <div >
                    <ImgCardsDesarrollos src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715443/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Logo-Banner-Las-Orianas-negro_ccoswn_kvqprb.svg" />
                    </div>
                </Link>
                </BoxBordesCards>
                <BoxBordesCards className='bordeMedio'> 
                <Link to='/Latitud34'>  
                    <div >
                        <ImgCardsDesarrollos  src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715498/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group2_f7py2q_x6dit2.svg" />
                    </div> 
                </Link>    
                </BoxBordesCards> 
                <BoxBordesCards className='bordeMedio'>
                <Link to='/Lacampina'> 
                    <div >
                        <ImgCardsDesarrollos  src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715497/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group-9_lwsyra_cbcwat.png" />
                    </div> 
                </Link>  
                </BoxBordesCards>
                <BoxBordesCards className='bordeMedio'>
                <Link to='/LasCatalinas'>
                  <div >
                     
                  </div>   
                </Link>
            </BoxBordesCards>
            </CardsMobile>
            <CardsMobile>
                <BoxBordesCards className='bordeMedio'>
                <Link to='/Eljuncal'>
                    <div >
                        <ImgCardsDesarrollos  src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715495/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group-1_zjxifn_jbmvde.png" />
                    </div>
                </Link> 
                </BoxBordesCards>
                <BoxBordesCards className='bordeMedio'>
                <Link to='/Lasvictorias'>
                    <div >
                        <ImgCardsDesarrollos  src="https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715502/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group_185_pn9nz2_wp1w4q.svg" />
                    </div> 
                </Link>
                </BoxBordesCards>
                <BoxBordesCards className='bordeMedio'>
                <Link to='/Laescondida'>
                    <div >
                        <ImgCardsDesarrollos  src="https://res.cloudinary.com/grupo-delsud/image/upload/v1656448613/Logo_-_La_Escondida_lngc51.svg" />
                    </div>   
                </Link>
                </BoxBordesCards>
                <BoxBordesCards className='bordeMedio'>
                  <Link to='/LasCatalinas'>
                    <div >
                        <ImgCardsLasCatalinas   src="https://res.cloudinary.com/grupo-delsud/image/upload/v1656448614/Logo_-_Las_Catalinas_lakd4u.svg" />
                    </div>   
                  </Link>
            </BoxBordesCards>
            </CardsMobile>    
        </BoxCards2>  
     </BoxCardsMobile>
    </>
  )
}

export default Seccion7