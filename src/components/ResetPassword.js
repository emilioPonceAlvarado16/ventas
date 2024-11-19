import React, { useState } from 'react'
import RegularForm from './RegularForm'
import { useAuth } from '@/hooks/useAuth';

export default function ResetPassword() {
    const { forgotPasswordSubmit, setResetPasswordError ,resetPasswordError, isLoading} = useAuth();
    const [isSuccess, setIsSuccess] = useState(false)
    const handleSubmit = async (formData) => {
        
        if(formData.email==="" || formData.password==="" || formData.confirmPassword===""|| formData.code===""){
            setResetPasswordError("Todos los campos deben ser completados.")
            return false
        }
        if (formData.password !== formData.confirmPassword) {
        setResetPasswordError("Las contraseñas no coinciden.");
        return false;
        }

        const success = await forgotPasswordSubmit(formData.email, formData.code, formData.password);
        if (success){
            setIsSuccess(success);
            setResetPasswordError();
            
        }
        return success
    
    };


  const passwordRecoveryData = {
    header: "Cambiar Contraseña",
    paragraph:"Ingresa el código que llegó a tu correo electrónico y escribe la nueva contraseña",
    body: [
        {
            id: 'confirmationCode',
            label: 'Código de Confirmación',
            field: 'input',
            type: 'number',
            placeholder: 'Ingrese el código de confirmación',
            size: 'lg',
            name: 'code',
        },
        {
            id: 'email',
            label: 'Correo Electrónico',
            field: 'input',
            type: 'email',
            placeholder: 'Ingrese su correo electrónico',
            size: 'lg',
            name: 'email',
        },
        {
            id: 'password',
            label: 'Nueva Contraseña',
            field: 'PasswordInput',
            placeholder: 'Ingrese la nueva contraseña',
            size: 'lg',
            name: 'password',
        },
        {
            id: 'confirmPassword',
            label: 'Confirmar Contraseña',
            field: 'PasswordInput',
            placeholder: 'Confirme la nueva contraseña',
            size: 'lg',
            name: 'confirmPassword',
        }
    ],
    footer: [
        {
            label: 'Resetear Contraseña',
            mode: 'neutral',
            type: 'submit',
            onSubmit:{handleSubmit}
        },
    ],
};

  return (
    <RegularForm  data={passwordRecoveryData} resetPasswordError={resetPasswordError} isLoading={isLoading} setResetPasswordError={setResetPasswordError} isSuccess={isSuccess} onSubmit={handleSubmit} />
    

  )
}
