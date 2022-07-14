import React from 'react'
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
} from './Seccion1Elements'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-toastify';

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
        axios.post(`https://prueba.desarrollosdelsud.com.ar/webApi/public/FormularioContacto`, data)
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
             <Box1>

             </Box1>
             <Box2>
             <BoxFormContacto  onSubmit={handleSubmit(onSubmit)}>

                        <ContenedorTitulos>
                            <TituloContacto>Contacto</TituloContacto>
                            <SubtituloContacto >
                                Completá el formulario con tu consulta
                                <br/> 
                                y la resolveremos a la brevedad.
                            </SubtituloContacto>
                        </ContenedorTitulos>   
                        <div style={{width:'100%'}}>    
                          <InputContacto type="text" name='name'
                            {...register("name", {
                              required: "*Campo requerido",
                              maxLength: {
                                  value: 40,
                              }
                              })}
                            placeholder="Nombre"
                            
                          />
                          {errors.name && <p style={{color:'white', fontFamily:'Poppins'}}>Campo Requerido!</p>}
                          <InputContacto  type="text" name='email'
                            {...register("email", {
                            required: "*Campo requerido",
                            pattern: {
                            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message1: "Dirección de mail invalida"
                               }
                              })}
                            style={{color:'white'}}
                            placeholder="Email"
                            />
                            {errors.email &&  <p style={{color:'white', fontFamily:'Poppins'}}>Campo Requerido!</p>}
                          <InputContacto type="number" name='telefono' onWheel={(e) => e.target.blur()}
                              {...register("telefono", {
                                required: "*Campo requerido",
                                maxLength: {
                                    value: 20,
                                }
                                })}

                            placeholder="Teléfono "
                            />
                            {errors.telefono &&  <p style={{color:'white', fontFamily:'Poppins'}}>Campo Requerido!</p>}
                        <InputArea  name="w3review" rows="4" cols="10" placeholder='Mensaje'
                        {...register("mensaje", 
                        { 
                          maxLength: 140,
                          required: true,                  
                          })}
                        />
                         {errors?.mensaje?.type === "required" && 
                            <p style={{color: 'white'}}>Campo requerido</p>}
                          {errors?.mensaje?.type === "maxLength" && (
                            <p style={{color: 'white'}}>El mensaje no puede exceder los 140 caracteres</p>
                          )}
                          </div>   
                          <div style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
                          <Button style={{border:'1px solid white'}} className='buttonModal'  type="submit" value="Enviar →"/>
                          </div>
                  </BoxFormContacto>
             </Box2>
         </SubBoxPadre>
     </BoxPadre>
    </>
  )
}

export default Seccion1