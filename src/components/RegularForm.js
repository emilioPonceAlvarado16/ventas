import React, { useReducer, useState } from 'react';
import PasswordInput from './PasswordInput';
import Alerts from './alerts';

const initialState = {
  code: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
};

const handleInput = (e) => {
  // Reemplaza cualquier caracter que no sea un dígito con una cadena vacía.
  e.target.value = e.target.value.replace(/[^0-9]/g, "");
};

export default function RegularForm(props) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const data = props.data || []
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'UPDATE_FIELD',
      field: name,
      value: value
    });

  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Previenes el envío del formulario por defecto
    props.onSubmit(state); // Pasas los datos del formulario al handler
    
    if(props.isSuccess){
      dispatch({ type: 'RESET_FORM' });
    }
  };
  
  const renderField = (item) => {
    switch (item.field) {
      case 'input':
        return (
          <div className="f-margin-bottom-135" key={item.id}>
            <label className="f-field-label">{item.label}</label>
            <input
              type={item.type || 'text'}
              className="f-field-input w-input"
              name={item.name}
              placeholder={item.placeholder}
              id={item.id}
              value={state[item.name] || item.value}
              onChange={handleInputChange}
              disabled={item.disabled}
              onInput={item.id === "code" ? handleInput : null}
            />
          </div>
        );
      case 'PasswordInput':
        return (
          <div className="f-margin-bottom-135" key={item.id}>
            <label className="f-field-label">{item.label}</label>
            <PasswordInput
              placeholder={item.placeholder}
              value={item.value}
              name={item.name}
              size={item.size}
              onChange={handleInputChange}
              disabled={item.disabled}
            />
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="f-section-large">

      {props.isSuccess && (
        <Alerts
          type="success"
          message="Tu cambio de contraseña fue exitoso!"
          close={true}
          above={true}
        />
      )}
      <div className="f-contact-content">
        <div className="f-margin-bottom-48">
          <div className="f-title-wrapper-justify">
            <div className="f-margin-bottom-136"></div>
            <div className="f-margin-bottom-135">
              <h1 className="f-h3-heading">{data.header}</h1>
            </div>
            <p className="f-paragraph-regular">{data.paragraph}</p>
          </div>
        </div>
        <div className="w-form">
          <form id="wf-form-Contact-Form-2" name="wf-form-Contact-Form-2" data-name="Contact Form" onSubmit={handleFormSubmit} className="f-contact-form" data-wf-page-id="64c27d1872143fc4d0d34bca" data-wf-element-id="d20fc244-a7bf-c25f-5e0a-b9f85f9d2f18">
            {data.body.map(item => renderField(item))}
            {data.footer.map(button => (
              <input key={button.label} type={button.type} value={button.label} data-wait="Please wait..." className={`f-button-${button.mode} w-button`} onClick={button.onClick} />
            ))}

            {!props.isSuccess && props.resetPasswordError ? <Alerts type="warning" message={`${props.resetPasswordError}`} /> : <></>}
          </form>

        </div>
      </div>
    </div>
  );
}
