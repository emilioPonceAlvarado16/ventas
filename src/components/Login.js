// src/components/Login.js

import React, { useReducer, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import Alerts from "@/components/alerts";
import Link from 'next/link';
import PasswordInput from './PasswordInput';
import ModalHeading from './modalHeading';
import SvgIcons from './svgIcons';

const initialState = {
  email: '',
  password: ''
};

// formReducer con sentencias if en lugar de switch
const formReducer = (state, action) => {
  if (action.type === 'UPDATE_FIELD') {
    return { ...state, [action.field]: action.value };
  }
  // Puedes optar por lanzar un error si recibes una acción desconocida
  // throw new Error(`Unhandled action type: ${action.type}`);
  return state;
};

export default function Account() {

  const [state, dispatch] = useReducer(formReducer, initialState);
  const { signIn, isLoading, signInError, setSignInError, confirmationError, resendConfirmationCode, confirmSignUp } = useAuth();
  const [hasStartedTyping, setHasStartedTyping] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showConfirmed, setShowConfirmed] = useState(false);

  const handleSubmit = async function (event) {
    event.preventDefault();
    setHasStartedTyping(false);

    if (state.email === "" || state.password === "") {
      setSignInError("Por favor, llena todos los campos");
    } else if (!isValidEmail(state.email)) {
      setSignInError("Por favor, ingresa un correo válido");
    } else {
      await signIn(state.email, state.password);
    }
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: 'UPDATE_FIELD', field: name, value });
    if (!hasStartedTyping) setHasStartedTyping(true);
    setSignInError(); // Borrar el mensaje de error cuando el usuario comienza a escribir
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleConfirmation = async (code) => {
    const wasSuccessful = await confirmSignUp(state.email, code);

    if (wasSuccessful) {
      setShowModal(false);
      setShowConfirmed(true);
      setTimeout(() => {
        setSignInError(); // Redirige al usuario a "/home"
      }, 2000);
    } else {
      setShowModal(true);
      setShowConfirmed(false);
    }
  };

  const handleResendCode = async () => {
    try {
      await resendConfirmationCode(state.email);
      setShowModal(true);
      // Mostrar un mensaje de que el código se reenvió exitosamente si es necesario.
    } catch (error) {
      setShowModal(false);
      // Manejo del error al reenviar el código.
    }
  };

  return (
    <div className="f-account-section">
      {showConfirmed && (
        <Alerts
          type="success"
          message="¡Bienvenido! Tu registro fue exitoso."
          close={true}
          above={true}
        />
      )}
      <div className="f-account-container-l">
        <div className="f-account-content-wrapper">
          <div className="f-margin-bottom-138">
            <h5 className="f-h5-heading">Inicio de sesión</h5>
          </div>
          <p className="f-paragraph-regular">Inicia sesión con redes sociales</p>
          <div className="f-account-social-wrapper">
            <a href="/default-route" className="f-account-social-icon w-inline-block" aria-label="Iniciar sesión con Facebook">
              <SvgIcons type="facebook" />
            </a>
            <a href="/default-route" className="f-account-social-icon w-inline-block" aria-label="Iniciar sesión con Instagram">
              <SvgIcons type="instagram" />
            </a>
            <a href="/default-route" className="f-account-social-icon w-inline-block" aria-label="Iniciar sesión con Twitter">
              <SvgIcons type="twitter" />
            </a>
          </div>
          <div className="f-margin-bottom-137">
            <p className="f-paragraph-small-5 f-text-color-gray-500">O usa tu correo :</p>
          </div>
          <div className="f-account-form-block w-form">
            <form
              id="wf-form-Sign-Up-Form"
              name="wf-form-Sign-Up-Form"
              data-name="Sign Up Form"
              data-wf-page-id="64c27d1872143fc4d0d34bca"
              data-wf-element-id="93df8944-7819-2d4d-bbe7-1a68d6877ee0"
              onSubmit={handleSubmit} // Añadido manejo de submit
            >
              <div className="w-layout-grid f-account-input-grid">

                <div className="f-field-wrapper">
                  <label htmlFor="email-input" className="f-field-label">Email</label>
                  <input
                    id="email-input"
                    type="email"
                    className="f-field-input w-input"
                    name="email"
                    placeholder="Your email..."
                    value={state.email}
                    onChange={handleFieldChange}
                    onKeyDown={handleKeyDown}
                    style={signInError && !hasStartedTyping ? { borderColor: "#f93" } : {}}
                    required
                  />
                </div>

                <div className="f-field-wrapper">
                  <label htmlFor="password-input" className="f-field-label">Password</label>
                  <PasswordInput
                    id="password-input"
                    name="password"
                    placeholder="Enter a password..."
                    value={state.password}
                    onChange={handleFieldChange}
                    onKeyDown={handleKeyDown}
                    style={signInError && !hasStartedTyping ? { borderColor: "#f93" } : {}}
                    required
                  />
                </div>

              </div>
              {signInError && !hasStartedTyping && <Alerts type="warning" message={`${signInError}`} />}

              {signInError === "User is not confirmed." && (
                <p className="f-paragraph-small-5">
                  Generar{' '}
                  <span
                    onClick={handleResendCode}
                    className="f-account-link"
                    style={{ cursor: 'pointer' }}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => { if (e.key === 'Enter' || e.key === ' ') handleResendCode(); }}
                    aria-label="Reenviar código de verificación"
                  >
                    Código de verificación.
                  </span>
                </p>
              )}

              <div className="f-account-form-button">
                <button
                  type="submit"
                  className={`f-button-neutral w-button ${isLoading ? "button-loading" : ""}`}
                  disabled={isLoading}
                  aria-busy={isLoading}
                >
                  {isLoading ? <div className="spin" aria-label="Cargando"></div> : 'Ingresar'}
                </button>
              </div>

            </form>
          </div>
          <p className="f-paragraph-small-5">
            Eres nuevo?
            <Link href="/register" className="f-account-link">
              Registrate.
            </Link>
          </p>
          <Link href="/forgot-password" className="f-account-link">
            Olvidaste tu contraseña?
          </Link>

        </div>
      </div>
      <div className="f-account-image-wrapper">
        <img src="images/formatmaker_photo.png" loading="lazy" sizes="(max-width: 767px) 100vw, 45vw" alt="Imagen ilustrativa" className="f-image-cover" />
      </div>
      {showModal && (
        <ModalHeading
          type="success"
          details="Ingresa el código de 6 dígitos que hemos enviado a tu dirección de correo electrónico."
          title="Confirma tu cuenta"
          onConfirm={handleConfirmation}
          onResend={handleResendCode}
          canResend={false}
          confirmationError={confirmationError}
          hasIcon={false}
        />
      )}
    </div>
  );
}
