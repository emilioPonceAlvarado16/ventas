import React from 'react'

export default function modalHeading() {
  return (
    <div className="f-modal-base-small">
    <div className="f-modal-detail">
      <div className="f-modal-alert">
        <div className="f-icon-regular w-embed"><svg width="420" height="420"  fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 10.586L9.172 7.757L7.757 9.172L10.586 12L7.757 14.828L9.172 16.243L12 13.414L14.828 16.243L16.243 14.828L13.414 12L16.243 9.172L14.828 7.757L12 10.586Z" fill="currentColor"></path>
          </svg></div>
      </div>
      <div>
        <div className="f-sub-heading-regular">Modal Heading</div>
        <div className="f-paragraph-regular">Are you sure want to deactivate your account?</div>
      </div>
    </div>
    <div className="f-line-regular"></div>
    <div className="f-modal-wrapper-right">
      <a href="#" className="f-button-secondary w-button">Cancel</a>
      <a href="#" className="f-button-action w-button">Delete</a>
    </div>
  </div>
  )
}
