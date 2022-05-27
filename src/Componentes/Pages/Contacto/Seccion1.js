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
        formState: { errors },
        handleSubmit
      } = useForm({
        mode: "onChange"
      });
      const onSubmit = (data,e) => {
        //alert(JSON.stringify(data));
        axios.post(`https://promo.desarrollosdelsud.com.ar/webApi/public/FormularioContacto`, data)
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
          e.target.reset()
      };
  return (
    <> 
     <BoxPadre>
         <SubBoxPadre>
             <Box1>

             </Box1>
             <Box2>
            <ContenedorTitulos>
               <TituloContacto>Contacto</TituloContacto>
               <SubtituloContacto >
                  Completá el formulario con tu consulta
                  <br/> 
                  y la resolveremos a la brevedad.
               </SubtituloContacto>
            </ContenedorTitulos>
             <BoxFormContacto  onSubmit={handleSubmit(onSubmit)}>          
                          <InputContacto type="text" name='name'
                            {...register("name", {
                              required: true,
                              maxLength: 20,
                              pattern: /^[A-Za-z]+$/i,
                          
                            })}
                            placeholder="Nombre"
                          />
                          {errors?.name?.type === "required" && 
                          <p className='text-danger'>Este campo es obligatorio</p>}
                          {errors?.name?.type === "maxLength" && (
                            <p className='text-danger'>El nombre no puede exceder los 20 caracteres</p>
                          )}
                          {errors?.nombre?.type === "pattern" && (
                            <p className='text-danger'>Solo caracteres alfabéticos</p>
                          )}
                          <InputContacto  type="text" name='email'
                          {...register("email", 
                          { 
                            required: true,
                            maxLength: 50,
                            pattern: /number/i,
                            })} 
                            style={{color:'white'}}
                            placeholder="Email"
                            />
                          {errors?.email?.type === "required" && 
                          <p className='text-danger'>Este campo es obligatorio</p>}
                          {errors?.email?.type === "maxLength" && (
                            <p className='text-danger'>El nombre no puede exceder los 50 caracteres</p>
                          )}
                          <InputContacto type="text" name='telefono'
                          {...register("telefono", 
                          { 
                            maxLength: 10,
                            required: true,                  
                            })}
                            placeholder="Teléfono "
                            />
                            {errors?.telefono?.type === "required" && 
                            <p className='text-danger'>Este campo es obligatorio</p>}
                            {errors?.telefono?.type === "maxLength" && (
                            <p className='text-danger'>El Telefono no puede exceder los 10 caracteres</p>
                          )}
                        <InputArea  name="w3review" rows="3" cols="10" placeholder='Mensaje'
                        {...register("mensaje", 
                        { 
                          maxLength: 140,
                          required: true,                  
                          })}
                        />
                         {errors?.mensaje?.type === "required" && 
                            <p className='text-danger'>Este campo es obligatorio</p>}
                          {errors?.mensaje?.type === "maxLength" && (
                            <p className='text-danger'>El mensaje no puede exceder los 140 caracteres</p>
                          )}
                        <Button className='buttonModal'  type="submit" value="Enviar →"/>
                  </BoxFormContacto>
             </Box2>
         </SubBoxPadre>
     </BoxPadre>
    </>
  )
}

export default Seccion1