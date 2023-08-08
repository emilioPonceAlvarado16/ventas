import React from 'react'
import SvgIcons from './svgIcons'

export default function modalCard(props) {
  const title=props.title || "Felicidades por su suscripción mensual"
  const description=props.description || "Get started with our tutorial, or skip below."
  return (
    <div className="f-modal-centre">
    <div className="f-modal-icon-success">
      <div className="f-icon-large w-embed">
        
       <SvgIcons type="success"/>
        
        </div>
    </div>
    <div className="f-margin-bottom-143">
      <div className="f-sub-heading-regular">{title}</div>
    </div>
    <div className="f-margin-bottom-28">
      <div className="f-paragraph-small-5">{description}</div>
    </div>
    <a href="#" className="f-button-primary w-button">Get Started</a>
    <a href="#" className="f-modal-close w-inline-block">
      <div className="f-icon-regular w-embed"><svg width="420" height="420"  fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.0002 10.586L16.9502 5.63599L18.3642 7.04999L13.4142 12L18.3642 16.95L16.9502 18.364L12.0002 13.414L7.05023 18.364L5.63623 16.95L10.5862 12L5.63623 7.04999L7.05023 5.63599L12.0002 10.586Z" fill="currentColor"></path>
        </svg>
      </div>
    </a>
  </div>
  )
}
