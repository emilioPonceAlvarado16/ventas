import React, {  useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';

export default function Hero() {
  const {  translations } = useContext(LanguageContext);
  const heroText = translations.hero;

  return (
    <div className="f-section-large">
      <div className="f-container-regular">
        <div className="w-layout-grid f-header-grid">
          <div id="w-node-_description">
            <div className="f-margin-bottom-36">
              <div className="f-heading-detail-small">{heroText?.innovativeDocumentEditing}</div>
            </div>
            <div className="f-margin-bottom-35">
              <h1 className="f-h1-heading golden-rainbow-text">{heroText?.transformYourDocuments}</h1>
            </div>
            <div className="f-margin-bottom-32">
              <p className="f-paragraph-large">
              {heroText?.paragraph}
              </p>
            </div>
            <div className="f-header-button-wrapper">
              <a href="/default-route" className="f-button-neutral w-inline-block">
                <div>{heroText?.getStarted}</div>
              </a>
              <a href="/default-route" className="f-button-secondary w-inline-block">
                <div>{heroText?.learnMore}</div>
              </a>
            </div>
          </div>
          <div id="w-node-_image" className="f-header-image-wrapper-tall">
            <img src="images/bellisimas.png" loading="lazy" alt="Format Maker Interface" className="f-image-cover"/>
          </div>
        </div>
      </div>
    </div>
  );
}
