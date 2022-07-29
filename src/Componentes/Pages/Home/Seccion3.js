import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-toastify';

import {
  BoxPadre,
  SubBoxPadre,
  Box1,
  Box2,
  BoxFormContacto,
  TituloContacto,
  ContenedorTitulos,
  SubtituloContacto,
  InputContacto ,
  InputArea ,
  Button,
  BoxFormularioHome,
  InputAreaHome,
  InputContactoHome,
} from '../Contacto/Seccion1Elements'
import '../Home/Seccion11.css'



function Seccion1() {


    const {
        register,
        reset,
        formState: { errors },
        handleSubmit
      } = useForm({
        mode: "onChange"
      });
      const onSubmit = (data,e) => {
        //alert(JSON.stringify(data));
        axios.post(`https://desarrollosdelsud.com.ar/webApi/public/FormularioContacto`, data)
          .then(function (response) {
            console.log(response.data);
            toast.success('Formulario enviado!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
              reset()
          })
          .catch(function (error) {
            console.log(error);
            toast.error('No se pudo enviar el formulario!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
          });
        reset()
      };
  return (
    <> 
     <BoxPadre>
         <SubBoxPadre>
             <BoxFormularioHome >

             </BoxFormularioHome>
             <Box2 className='colorBlue' style={{background:'white'}}>
             <BoxFormContacto  onSubmit={handleSubmit(onSubmit)}>

                        <ContenedorTitulos>
                            <TituloContacto style={{color:'#1D2142'}} className='colorBlue' >Contacto</TituloContacto>
                            <SubtituloContacto style={{color:'#1D2142'}} c className='colorBlue' >
                                Completá el formulario con tu consulta
    
                                y la resolveremos a la brevedad.
                            </SubtituloContacto>
                        </ContenedorTitulos>   
                        <div style={{width:'100%'}}>    
                          <InputContactoHome style={{color:'#1D2142'}} c className='colorBlue' type="text" name='name'
                            {...register("name", {
                              required: "*Campo requerido",
                              maxLength: {
                                  value: 40,
                              }
                              })}
                            placeholder="Nombre"
                            
                          />
                          {errors.name && <p style={{color:'red', fontFamily:'Poppins',fontWeight:'200'}}>Campo Requerido!</p>}
                          <InputContactoHome style={{color:'#1D2142'}} c  className='colorBlue' type="text" name='email' autocomplete="off"
                            {...register("email", {
                            required: true,
                            pattern: {
                            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Dirección de mail invalida",
                               }
                              })}
                            placeholder="Email"
                            />
                            {errors.email && <p className='text-danger'>{errors.email.message}</p>}
                            {errors?.email?.type === "required" && 
                              <p className='text-danger'>Este campo es obligatorio</p>}
                          <InputContactoHome style={{color:'#1D2142'}} c className='colorBlue' type="number" name='telefono' onWheel={(e) => e.target.blur()}
                              {...register("telefono", {
                                required: "*Campo requerido",
                                maxLength: {
                                    value: 20,
                                }
                                })}

                            placeholder="Teléfono "
                            />
                            {errors.telefono &&  <p style={{color:'red', fontFamily:'Poppins',fontWeight:'200'}}>Campo Requerido!</p>}
                        <InputAreaHome style={{color:'#1D2142'}} c className='colorBlue'  name="w3review" rows="4" cols="10" placeholder='Mensaje'
                        {...register("mensaje", 
                        { 
                          maxLength: 140,
                          required: true,                  
                          })}
                        />
                         {errors?.mensaje?.type === "required" && 
                            <p style={{color: 'red',fontWeight:'200'}}>Campo requerido</p>}
                          {errors?.mensaje?.type === "maxLength" && (
                            <p style={{color: 'red',fontWeight:'200'}}>El mensaje no puede exceder los 140 caracteres</p>
                          )}
                          </div>   
                          <div style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
                          <Button style={{border:'1px solid white'}} className='buttonModal  colorButtonFormHome'  type="submit" value="Enviar"/>
                          </div>
                  </BoxFormContacto>
             </Box2>
         </SubBoxPadre>
     </BoxPadre>
    </>
  )
}

export default Seccion1