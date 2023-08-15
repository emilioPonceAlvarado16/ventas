import React from 'react'
import RegularForm from './RegularForm'

export default function resetPassword() {

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
            name: 'confirmationCode',
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
        },
    ],
};

  return (
    <RegularForm  data={passwordRecoveryData}/>
  )
}
