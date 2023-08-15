import React from 'react';
import PasswordInput from './PasswordInput';

export default function RegularForm(props) {
   const data = props.data || [];

    const renderField = (item) => {
        switch (item.field) {
            case 'input':
                return (
                    <div className="f-margin-bottom-135" key={item.id}>
                        <label className="f-field-label">{item.label}</label>
                        <input type={item.type || 'text'} className="f-field-input w-input" name={item.name} placeholder={item.placeholder} id={item.id} value={item.value} disabled={item.disabled} />
                    </div>
                );
            case 'PasswordInput':
                return (
                    <div className="f-margin-bottom-135" key={item.id}>
                        <label className="f-field-label">{item.label}</label>
                        <PasswordInput placeholder={item.placeholder} value={item.value} size={item.size} disabled={item.disabled} />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="f-section-large">
            <div className="f-contact-content">
                <div className="f-margin-bottom-48">
                    <div className="f-title-wrapper-center">
                        <div className="f-margin-bottom-136"></div>
                        <div className="f-margin-bottom-135">
                            <h1 className="f-h3-heading">{data.header}</h1>
                        </div>
                        <p className="f-paragraph-large">{data.paragraph}</p>
                    </div>
                </div>
                <div className="w-form">
                    <form id="wf-form-Contact-Form-2" name="wf-form-Contact-Form-2" data-name="Contact Form" method="get" className="f-contact-form" data-wf-page-id="64c27d1872143fc4d0d34bca" data-wf-element-id="d20fc244-a7bf-c25f-5e0a-b9f85f9d2f18">
                        {data.body.map(item => renderField(item))}
                        {data.footer.map(button => (
                            <input key={button.label} type={button.type} value={button.label} data-wait="Please wait..." className={`f-button-${button.mode} w-button`} onClick={button.onClick} />
                        ))}
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
    );
}
