import React from 'react'

export default function contact() {
  return (
    <div className="f-section-large">
    <div className="f-contact-content">
      <div className="f-margin-bottom-48">
        <div className="f-title-wrapper-center">
          <div className="f-margin-bottom-136">
            <div className="f-heading-detail-small">Flowui components</div>
          </div>
          <div className="f-margin-bottom-135">
            <h1 className="f-h3-heading">Contact Section</h1>
          </div>
          <p className="f-paragraph-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque arcu sed felis</p>
        </div>
      </div>
      <div className="w-form">
        <form id="wf-form-Contact-Form-2" name="wf-form-Contact-Form-2" data-name="Contact Form" method="get" className="f-contact-form" data-wf-page-id="64c27d1872143fc4d0d34bca" data-wf-element-id="d20fc244-a7bf-c25f-5e0a-b9f85f9d2f18">
          <div className="f-margin-bottom-135"><label  className="f-field-label">Name</label><input type="text" className="f-field-input w-input"  name="Contact-Name-Field-01" data-name="Contact Name Field 01" placeholder="" id="Contact-Name-Field-01"/></div>
          <div className="f-margin-bottom-135"><label  className="f-field-label">Email Address</label><input type="email" className="f-field-input w-input"  name="Contact-Email-Field-01" data-name="Contact Email Field 01" placeholder="" id="Contact-Email-Field-01" required=""/></div>
          <div className="f-margin-bottom-135"><label className="f-field-label">Message</label><textarea id="Contact-Message-Field-01" name="Contact-Message-Field-01" maxlength="5000" data-name="Contact Message Field 01" placeholder="" className="f-text-area w-input"></textarea></div><input type="submit" value="Submit" data-wait="Please wait..." className="f-button-neutral w-button"/>
        </form>
        <div className="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div className="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </div>
  </div>
  )
}
