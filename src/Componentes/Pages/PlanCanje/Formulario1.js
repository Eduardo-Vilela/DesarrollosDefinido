import React from 'react'
import {
BoxPrincipal,
BoxFormulario,
SubBox,
Parte1,
Parte2,
Parte3,
InputPlanCanje ,
LabelPlanCanje,
BoxIntermedioinputs,
PosicionLabels,
BoxFondoForm,
ButtonFormPlanCanje,
ImagenFinal,
} from './FormularioElements'
import { useForm } from "react-hook-form";
import {
BoxSecundario,
BoxTitulos,
Box1,
Box2,
TituloPlan,
SubtituloPlanCanje,
BoxAuto,
FotoAuto,
} from './Seccion1Elements'
import NavbarWhite from '../../NavbarWhite';
import axios from "axios";
import { toast } from 'react-toastify';
import {Link} from 'react-router-dom'


function Formulario1() {
const [formStep, setFormStep] = React.useState(0)

const completeFormStep = () => {
  setFormStep(formStep + 1)
}

const ButtonFinal = () => {
  if (formStep > 1) {
   return (<ButtonFormPlanCanje ><Link to='/'>Ir al inicio</Link></ButtonFormPlanCanje>)
  } else if (formStep === 2){
    return(
      undefined
    )
  } else{
    return(
      <ButtonFormPlanCanje disabled={!isValid} type="submit" onClick={completeFormStep}>Siguiente  →</ButtonFormPlanCanje>
    )
  }
}

const {
  register,
  reset,
  formState: { errors, isValid }
} = useForm({ mode:"all"});

const onSubmit = (data,e) => {
  //alert(JSON.stringify(data));
  axios.post(`https://promos.desarrollosdelsud.com.ar/webApi/public/FormularioPlanCanje`, data)
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
    <NavbarWhite/>
     <BoxPrincipal>
       <SubBox>
       <BoxSecundario>
             <BoxTitulos>
              <Box1>
                  <TituloPlan>Plan Canje</TituloPlan>
                  <span style={{width: '3%'}}></span>
                  <img style={{width: '10%'}} src='https://res.cloudinary.com/grupo-delsud/image/upload/v1648065960/DESARROLLOSGRUPODELSUD/Group_1337_rctgnn.svg' alt='plancanje'/>
              </Box1>
              <Box2>
                  <SubtituloPlanCanje> Tomamos tu auto en parte de pago <br/>por el terreno que siempre soñaste</SubtituloPlanCanje>
              </Box2>
             </BoxTitulos>
             <BoxAuto>
               <FotoAuto alt='aaaa' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1653586516/DESARROLLOSGRUPODELSUD/pngwing.com_lkuost.png'/>
             </BoxAuto>
         </BoxSecundario>
         <BoxFondoForm>
            <BoxFormulario onSubmit={(onSubmit)}>
              {formStep === 0 &&(
              <Parte1>
                <BoxIntermedioinputs>
                  <PosicionLabels>
                      <LabelPlanCanje className='label-auto'>Modelo De Auto</LabelPlanCanje>
                      <InputPlanCanje className='input-formAuto' type="text" name='modeloDeAuto'
                        {...register("modeloDeAuto", 
                        { 
                          required: true,                  
                          })}       
                          placeholder="Modelo De Auto"
                          />

                    </PosicionLabels>
                    <PosicionLabels>
                          <LabelPlanCanje className='label-auto' >Marca</LabelPlanCanje>
                          <InputPlanCanje className='input-formAuto' type="text" name='marca'
                          {...register("marca", 
                          { 
                            required: true,                     
                            })}               
                            placeholder="Marca"
                            />
                          {errors?.marca?.type === "required" && 
                          <p className='text-danger'>Este campo es obligatorio</p>}
                          {errors?.marca?.type === "maxLength" && (
                            <p className='text-danger'>El nombre no puede exceder los 50 caracteres</p>
                          )}
                    </PosicionLabels>
                </BoxIntermedioinputs>
                <BoxIntermedioinputs>
                  <PosicionLabels>
                        <LabelPlanCanje className='label-auto' >Kilometros</LabelPlanCanje>
                        <InputPlanCanje className='input-formAuto' type="number" name='kilometros'
                          {...register("kilometros", 
                          { 
                            required: true,                  
                            })}                        
                            placeholder="0.000"
                            />
                            {errors?.kilometros?.type === "required" && 
                            <p className='text-danger'>Este campo es obligatorio</p>}
                            {errors?.kilometros?.type === "maxLength" && (
                            <p className='text-danger'>El nombre no puede exceder los 10 caracteres</p>
                          )}
                    </PosicionLabels>
                    <PosicionLabels>
                          <LabelPlanCanje className='label-auto' >Valor del auto</LabelPlanCanje>
                          <InputPlanCanje className='input-formAuto' type="number" name='valorDelAuto'
                          {...register("valorDelAuto", 
                          { 
                            required: true,                  
                            })}
                            placeholder="0.000.000"
                            />
                            {errors?.valorDelAuto?.type === "required" && 
                            <p className='text-danger'>Este campo es obligatorio</p>}
                                            {errors?.valorDelAuto?.type === "maxLength" && (
                            <p className='text-danger'>El nombre no puede exceder los 10 caracteres</p>
                          )} 
                  </PosicionLabels>
                  </BoxIntermedioinputs>
              </Parte1>
              )}
                {formStep === 1 &&(
              <Parte2>
              <LabelPlanCanje className='label-autoform2'>Nombre y Apellido</LabelPlanCanje>
                <InputPlanCanje className='input-formAuto' type="text" name='nombre'
                  {...register("nombre", 
                  { 

                    required: true,                  
                    })}             
                    placeholder="Nombre"
                    />
                    {errors?.nombre?.type === "required" && 
                    <p className='text-danger'>Este campo es obligatorio</p>}
                    {errors?.nombre?.type === "maxLength" && (
                    <p className='text-danger'>El nombre no puede exceder los 10 caracteres</p>
                  )}
                  <LabelPlanCanje className='label-autoform2'>Email</LabelPlanCanje>
                <InputPlanCanje className='input-formAuto' type="text" name='email'
                  {...register("email", 
                  { 
                    maxLength: 40,
                    required: true,                  
                    })}
                    placeholder="E-mail"
                    />
                    {errors?.email?.type === "required" && 
                    <p className='text-danger'>Este campo es obligatorio</p>}
                    {errors?.email?.type === "maxLength" && (
                    <p className='text-danger'>El nombre no puede exceder los 10 caracteres</p>
                  )}
                                

                  <LabelPlanCanje className='label-autoform2' >WhatsApp</LabelPlanCanje>
                  <InputPlanCanje className='input-formAuto' type="number" name='whatsapp'
                  {...register("whatsapp", 
                  { 
                    required: true,                  
                    })}
                    placeholder="whatsapp"
                    />
                    {errors?.whatsapp?.type === "required" && 
                    <p className='text-danger'>Este campo es obligatorio</p>}
                    {errors?.whatsapp?.type === "maxLength" && (
                    <p className='text-danger'>El nombre no puede exceder los 10 caracteres</p>
                  )}
              </Parte2>
                )}
                {formStep === 2 &&(
              <Parte3>
                <ImagenFinal  alt='finplancanje' src='https://res.cloudinary.com/grupo-delsud/image/upload/v1649855889/DESARROLLOSGRUPODELSUD/send_exit_oluo5s.png'/>
              </Parte3>
                )}
                {/* <button type="submit" onClick={completeFormStep}>Cotizar →</button> */}
                {ButtonFinal()}
            </BoxFormulario>
         </BoxFondoForm>
       </SubBox>
     </BoxPrincipal>
    </>
  )
}

export default Formulario1