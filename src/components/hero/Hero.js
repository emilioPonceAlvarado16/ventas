import React from 'react';

export default function Hero() {
  return (
    <div className="f-section-large">
      <div className="f-container-regular">
        <div className="w-layout-grid f-header-grid">
          <div id="w-node-_description">
            <div className="f-margin-bottom-36">
              <div className="f-heading-detail-small">Innovative Document Editing</div>
            </div>
            <div className="f-margin-bottom-35">
              <h1 className="f-h1-heading golden-rainbow-text">Transform Your Documents Effortlessly</h1>
            </div>
            <div className="f-margin-bottom-32">
              <p className="f-paragraph-large">
                Format Maker revolutionizes document editing and creation. Utilize AI-powered tools to modify, create, and export documents in LaTeX format with ease. Import from MS Word, .txt, or choose from templates to streamline your workflow.
              </p>
            </div>
            <div className="f-header-button-wrapper">
              <a href="#" className="f-button-neutral w-inline-block">
                <div>Get Started</div>
              </a>
              <a href="#" className="f-button-secondary w-inline-block">
                <div>Learn More</div>
              </a>
            </div>
          </div>
          <div id="w-node-_image" className="f-header-image-wrapper-tall">
            <img src="images/formatmaker_photo.png" loading="lazy" alt="Format Maker Interface" className="f-image-cover"/>
          </div>
        </div>
      </div>
    </div>
  );
}
