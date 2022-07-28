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
   return (<ButtonFormPlanCanje ><Link to='/' style={{textDecoration:'none !important' ,color:'white',fontSize:'16px'}}>Ir al inicio</Link></ButtonFormPlanCanje>)
  } else if (formStep === 2){
    return(
      undefined
    )
  } else{
    return(
      <ButtonFormPlanCanje disabled={!isValid}  onClick={completeFormStep}>Siguiente  →</ButtonFormPlanCanje>
    )
  }
}

const {
  register,
  reset,
  handleSubmit,
  formState: { errors, isValid }
} = useForm({ mode:"all"});

const onSubmit = (data,e) => {
  //alert(JSON.stringify(data));
  axios.post(`https://desarrollosdelsud.com.ar/webApi/public/FormularioPlanCanje`, data)
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
                  <img style={{width: '10%'}} src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715500/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/Group_1337_rctgnn_knldh3.webp' alt='plancanje'/>
              </Box1>
              <Box2>
                  <SubtituloPlanCanje> Tomamos tu auto en parte de pago <br/>por el terreno que siempre soñaste</SubtituloPlanCanje>
              </Box2>
            </BoxTitulos>
            <BoxAuto>
              <FotoAuto alt='aaaa' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715454/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/pngwing.com_lkuost_yrzzsv.webp'/>
            </BoxAuto>
        </BoxSecundario>
        <BoxFondoForm>
            <BoxFormulario onSubmit={handleSubmit(onSubmit)}>
              {formStep === 0 &&(
              <Parte1>
                <BoxIntermedioinputs>
                  <PosicionLabels>
                      <LabelPlanCanje className='label-auto'>Modelo De Auto</LabelPlanCanje>
                      <InputPlanCanje className='input-formAuto' type="text" name='modeloDeAuto'
                        {...register("modeloDeAuto", 
                        { 
                          required: true, maxLength: 10,pattern: /^[A-Za-z]+$/i,                 
                          })}       
                          placeholder="Modelo De Auto"
                          />
                          {errors?.modeloDeAuto?.type === "required" && 
                          <LabelPlanCanje className='text-danger'>Este campo es obligatorio</LabelPlanCanje>}
                          {errors?.modeloDeAuto?.type === "maxLength" && (
                            <LabelPlanCanje className='text-danger'>El nombre no puede exceder los 10 caracteres</LabelPlanCanje>
                          )}
                          {errors?.modeloDeAuto?.type === "pattern" && (
                        <LabelPlanCanje className='text-danger'>Solo caracteres alfabéticos</LabelPlanCanje>
                      )}
                    </PosicionLabels>
                    <PosicionLabels>
                          <LabelPlanCanje className='label-auto' >Marca</LabelPlanCanje>
                          <InputPlanCanje className='input-formAuto' type="text" name='marca'
                          {...register("marca", 
                          { 
                            required: true, pattern: /^[A-Za-z]+$/i ,                   
                            })}               
                            placeholder="Marca"
                            />
                          {errors?.marca?.type === "required" && 
                          <LabelPlanCanje className='text-danger'>Este campo es obligatorio</LabelPlanCanje>}
                          {errors?.marca?.type === "maxLength" && (
                            <LabelPlanCanje className='text-danger'>El nombre no puede exceder los 50 caracteres</LabelPlanCanje>
                          )}
                          {errors?.marca?.type === "pattern" && (
                            <LabelPlanCanje className='text-danger'>Solo caracteres alfabéticos</LabelPlanCanje>
                          )}
                    </PosicionLabels>
                </BoxIntermedioinputs>
                <BoxIntermedioinputs>
                  <PosicionLabels>
                        <LabelPlanCanje className='label-auto' >Kilometros</LabelPlanCanje>
                        <InputPlanCanje className='input-formAuto' type="number" name='kilometros' onWheel={(e) => e.target.blur()}
                          {...register("kilometros", 
                          { 
                            required: true, 
                            })}                        
                            placeholder="0.000"
                            />
                            {errors?.kilometros?.type === "required" && 
                            <LabelPlanCanje className='text-danger'>Este campo es obligatorio</LabelPlanCanje>}
                            {errors?.kilometros?.type === "maxLength" && (
                            <LabelPlanCanje className='text-danger'>El nombre no puede exceder los 10 caracteres</LabelPlanCanje>
                          )}
                    </PosicionLabels>
                    <PosicionLabels>
                          <LabelPlanCanje className='label-auto' >Valor del auto</LabelPlanCanje>
                          <InputPlanCanje className='input-formAuto' type="number" name='valorDelAuto' onWheel={(e) => e.target.blur()}
                          {...register("valorDelAuto", 
                          { 
                            required: true,                  
                            })}
                            placeholder="0.000.000"
                            />
                            {errors?.valorDelAuto?.type === "required" && 
                            <LabelPlanCanje className='text-danger'>Este campo es obligatorio</LabelPlanCanje>}
                                            {errors?.valorDelAuto?.type === "maxLength" && (
                            <LabelPlanCanje className='text-danger'>El nombre no puede exceder los 10 caracteres</LabelPlanCanje>
                          )} 
                  </PosicionLabels>
                  </BoxIntermedioinputs>
              </Parte1>
              )}
                {formStep === 1 &&(
              <Parte2>
              <LabelPlanCanje className='label-autoform2'>Nombre</LabelPlanCanje>
                <InputPlanCanje className='input-formAuto' type="text" name='nombre'
                  {...register("nombre", 
                  { 

                    required: true,
                    pattern: /^[A-Za-z]+$/i,
                    maxLength: {
                    value: 10,
                    message: "Máximo 10 caracteres",          
                }                                    
                    })}             
                    placeholder="Nombre"
                    />
                    {errors?.nombre?.type === "required" && 
                    <LabelPlanCanje className='text-danger'>Este campo es obligatorio</LabelPlanCanje>}
                    {errors?.nombre?.type === "pattern" && (
                        <LabelPlanCanje className='text-danger'>Solo caracteres alfabéticos</LabelPlanCanje>
                      )}
                  <br/>
                  <LabelPlanCanje className='label-autoform2'>Email</LabelPlanCanje>
                <InputPlanCanje className='input-formAuto' type="text" name='email'
                  {...register("email", 
                  { 
                    maxLength: 40,
                    required: true, 
                    pattern: {
                      value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Dirección de mail invalida"
                  }                 
                    })}
                    placeholder="E-mail"
                    />
                      {errors.email && <p className='text-danger'>{errors.email.message}</p>}
                    {errors?.email?.type === "required" && 
                    <LabelPlanCanje className='text-danger'>Este campo es obligatorio</LabelPlanCanje>}
                    {errors?.email?.type === "maxLength" && (
                    <LabelPlanCanje className='text-danger'>El nombre no puede exceder los 10 caracteres</LabelPlanCanje>
                  )}
                                
                                <br/>
                  <LabelPlanCanje className='label-autoform2' >WhatsApp</LabelPlanCanje>
                  <InputPlanCanje className='input-formAuto' type="number" name='whatsapp' onWheel={(e) => e.target.blur()}
                  {...register("whatsapp", 
                  { 
                    required: true,      
                    maxLength: {
                      value: 10,
                      message: "Máximo 10 caracteres",          
                  }                     
                    })}
                    placeholder="whatsapp"
                    />
                    {errors.whatsapp && <p className='text-danger'>{errors.whatsapp.message}</p>}
                    {errors?.whatsapp?.type === "required" && 
                    <LabelPlanCanje className='text-danger'>Este campo es obligatorio</LabelPlanCanje>}
                    {errors?.whatsapp?.type === "maxLength" && (
                    <LabelPlanCanje className='text-danger'>El nombre no puede exceder los 10 caracteres</LabelPlanCanje>
                  )}
                  <br/>
              </Parte2>
                )}
                {formStep === 2 &&(
              <Parte3>
                <ImagenFinal  alt='finplancanje' src='https://res.cloudinary.com/desarrollogrupodelsud/image/upload/v1657715466/DESARROLLOSGRUPODELSUD_2022-07-13_08_54/send_exit_oluo5s_lxwgxm.webp'/>
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