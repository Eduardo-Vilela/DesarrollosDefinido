import React from 'react'
import {Link} from 'react-router-dom'
import {
    BoxCardsDesarrollos,
    BoxCards2,
    BoxBordesCards,
    ImgCardsDesarrollos,
    CardsMobile,
    BoxCardsMobile,
} from './Seccion7Elements'



function Seccion7() {
  return (
    <>
     <BoxCardsDesarrollos>
       <BoxCards2>
              <BoxBordesCards  className='bordeMedio '> 
                <Link to='/Lasorianas'>        
               <div >
                <ImgCardsDesarrollos src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648493908/DESARROLLOSGRUPODELSUD/Logo-Banner-Las-Orianas-negro_ccoswn.svg" />
                </div>
               </Link>
            </BoxBordesCards>
            <BoxBordesCards className='bordeMedio'> 
             <Link to='/Latitud34'>  
                <div >
                    <ImgCardsDesarrollos  src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648493597/DESARROLLOSGRUPODELSUD/Group-2_gfchxe.png" />
                </div> 
            </Link>    
            </BoxBordesCards> 
            <BoxBordesCards className='bordeMedio'>
              <Link to='/Lacampina'> 
                <div >
                    <ImgCardsDesarrollos  src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648493597/DESARROLLOSGRUPODELSUD/Group-9_lwsyra.png" />
                </div> 
              </Link>  
            </BoxBordesCards>
 
            <BoxBordesCards className='bordeMedio'>
              <Link to='/Eljuncal'>
                <div >
                    <ImgCardsDesarrollos  src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648493597/DESARROLLOSGRUPODELSUD/Group-1_zjxifn.png" />
                </div>
              </Link> 
            </BoxBordesCards>
            <BoxBordesCards className='bordeMedio'>
              <Link to='/Lasvictorias'>
                <div >
                    <ImgCardsDesarrollos  src="https://res.cloudinary.com/grupo-delsud/image/upload/v1647291371/DESARROLLOSGRUPODELSUD/Group_185_pn9nz2.svg" />
                </div> 
              </Link>
            </BoxBordesCards>
            <BoxBordesCards className='bordeMedio'>
              <Link to='/Laescondida'>
                <div >
                    <ImgCardsDesarrollos  src="https://res.cloudinary.com/grupo-delsud/image/upload/c_scale,h_29,w_73/v1652387064/DESARROLLOSGRUPODELSUD/la%20escondida/laescondidaCortada_vnp0kb.png" />
                </div>   
              </Link>
            </BoxBordesCards>
            <BoxBordesCards className='bordeMedio'>
              <Link to='/Laescondida'>
                <div >
                    <ImgCardsDesarrollos  src="https://res.cloudinary.com/grupo-delsud/image/upload/c_scale,h_29,w_73/v1652387064/DESARROLLOSGRUPODELSUD/la%20escondida/laescondidaCortada_vnp0kb.png" />
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
                    <ImgCardsDesarrollos src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648493908/DESARROLLOSGRUPODELSUD/Logo-Banner-Las-Orianas-negro_ccoswn.svg" />
                    </div>
                </Link>
                </BoxBordesCards>
                <BoxBordesCards className='bordeMedio'> 
                <Link to='/Latitud34'>  
                    <div >
                        <ImgCardsDesarrollos  src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648493597/DESARROLLOSGRUPODELSUD/Group-2_gfchxe.png" />
                    </div> 
                </Link>    
                </BoxBordesCards> 
                <BoxBordesCards className='bordeMedio'>
                <Link to='/Lacampina'> 
                    <div >
                        <ImgCardsDesarrollos  src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648493597/DESARROLLOSGRUPODELSUD/Group-9_lwsyra.png" />
                    </div> 
                </Link>  
                </BoxBordesCards>
            </CardsMobile>
            <CardsMobile>
                <BoxBordesCards className='bordeMedio'>
                <Link to='/Eljuncal'>
                    <div >
                        <ImgCardsDesarrollos  src="https://res.cloudinary.com/grupo-delsud/image/upload/v1648493597/DESARROLLOSGRUPODELSUD/Group-1_zjxifn.png" />
                    </div>
                </Link> 
                </BoxBordesCards>
                <BoxBordesCards className='bordeMedio'>
                <Link to='/Lasvictorias'>
                    <div >
                        <ImgCardsDesarrollos  src="https://res.cloudinary.com/grupo-delsud/image/upload/v1647291371/DESARROLLOSGRUPODELSUD/Group_185_pn9nz2.svg" />
                    </div> 
                </Link>
                </BoxBordesCards>
                <BoxBordesCards className='bordeMedio'>
                <Link to='/Laescondida'>
                    <div >
                        <ImgCardsDesarrollos  src="https://res.cloudinary.com/grupo-delsud/image/upload/c_scale,h_29,w_73/v1652387064/DESARROLLOSGRUPODELSUD/la%20escondida/laescondidaCortada_vnp0kb.png" />
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