import React from 'react'

export default function modalCard(props) {
  const title=props.title || "Felicidades por su suscripción mensual"
  const description=props.description || "Get started with our tutorial, or skip below."
  return (
    <div className="f-modal-centre">
    <div className="f-modal-icon-success">
      <div className="f-icon-large w-embed"><svg width="32" height="32"  fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 29.3334C8.63596 29.3334 2.66663 23.364 2.66663 16C2.66663 8.63602 8.63596 2.66669 16 2.66669C23.364 2.66669 29.3333 8.63602 29.3333 16C29.3333 23.364 23.364 29.3334 16 29.3334ZM14.6706 21.3334L24.0973 11.9054L22.212 10.02L14.6706 17.5627L10.8986 13.7907L9.01329 15.676L14.6706 21.3334Z" fill="currentColor"></path>
        </svg></div>
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
