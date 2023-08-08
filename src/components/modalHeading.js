import React from 'react'
import PasswordInput from './PasswordInput'
import SvgIcons from './svgIcons'

export default function modalHeading(props) {
  const type = props.type ? `-${props.type}` : "success";

  const heading = props.title || "Modal Heading";
  const details = props.details || "Are you sure Send the code?";

  return (
    <div className="f-modal-base-small">
    <div className="f-modal-wrapper">
     
      <div>
        <div className="f-sub-heading-regular">{heading}</div>
        <div className="f-paragraph-regular">{details}</div>
      </div>
    </div>
    <input  className="f-field-input w-input"/>
    <div className="f-line-regular"></div>
    <div className="f-modal-wrapper">
      <a href="#" className="f-button-action w-button">Enviar</a>
    </div>
  </div>
  )
}
