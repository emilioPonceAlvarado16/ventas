import React, { useContext } from 'react';

import { LanguageContext } from '@/contexts/LanguageContext';


export default function features() {
  const {  translations } = useContext(LanguageContext);
  const features=translations.featuresSection;
  return (
    <>
    <div className="f-section-large">
    <div className="f-container-regular">
      <div className="f-margin-bottom-128">
        <div className="f-title-wrapper-center">
          <div className="f-margin-bottom-47">
            <div className="f-heading-detail-small">{features?.headingDetail}</div>
          </div>
          <div className="f-margin-bottom-16">
            <h3 className="f-h3-heading">{features?.headingH3}</h3>
          </div>
          <p className="f-paragraph-large">{features?.paragraph}</p>
        </div>
      </div>
      <div className="w-layout-grid f-grid-three-column">
            {features?.features.map((feature, index) => (
              <div key={index}>
                <div className="f-feature-icon-wrapper">
                  <img src={feature.logo} loading="lazy" alt="" />
                </div>
                <div className="f-margin-bottom-47">
                  <div className="f-sub-heading-large">{feature.title}</div>
                </div>
                <p className="f-paragraph-small-5">{feature.paragraph}</p>
              </div>
            ))}
          </div>
    </div>
  </div>
    </>
  )
}
