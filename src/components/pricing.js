import React, { useState, useEffect } from 'react';
import SvgIcons from './svgIcons';
import landingTranslations from 'i18n/landingTranslations';

export default function pricing(props) {
  const language=props.language || "EN";

  const [currentTab, setCurrentTab] = useState('monthly');
  const [prices, setPrices] = useState({
    monthly: { basic: 9.99, professional: 13.99, type: "Month" },
    yearly: { basic: 99, professional: 139, type: "Year" },
  });
  
  const features=landingTranslations.pricing.features[language]
  const changeTab = (tab) => {
    setCurrentTab(tab);
  };
  return (
    <>
      <div className="f-section-large">
        <div className="f-container-small">
          <div className="f-margin-bottom-56">
            <div className="f-pricing-title-wrapper">
              <div className="f-margin-bottom-134 f-text-weight-bold">
                <div className="f-heading-detail-small">FormatMaker: Editing Simplified</div>
              </div>
              <h2 className="f-h2-heading">AI & LaTeX Enhanced Documents</h2>
            </div>
          </div>
          <div data-duration-in="300" data-duration-out="100" data-current="Tab 1" data-easing="ease" className="f-pricing-tab w-tabs">
            <div className="f-pricing-toggle-menu w-tab-menu">
              <a
                data-w-tab="Tab 1"
                className={`f-pricing-button-toggle w-inline-block w-tab-link ${currentTab === 'monthly' ? 'w--current' : ''}`}
                onClick={() => changeTab('monthly')}
              >
                <div>Monthly</div>
              </a>
              <a
                data-w-tab="Tab 2"
                className={`f-pricing-button-toggle w-inline-block w-tab-link ${currentTab === 'yearly' ? 'w--current' : ''}`}
                onClick={() => changeTab('yearly')}
              >
                <div>Yearly</div>
              </a>
            </div>
            <div className="w-tab-content">
              <div data-w-tab="Tab 1" className="f-pricing-tab-pane w-tab-pane w--tab-active">
                <div className="w-layout-grid f-pricing-column-basic">
                  <div id="w-node-_81719f46-3c4f-d08c-afb5-674cfbbcf4bf-d0d34bca" className="f-pricing-card-outline">
                    <div className="f-margin-bottom-133">
                      <div className="f-heading-detail-small">Basic plan</div>
                    </div>
                    <div className="f-margin-bottom-132">
                      <div className="f-pricing-month-wrapper">
                        <h3 className="f-h3-heading">${prices[currentTab].basic} <span className="f-pricing-duration">/ {prices[currentTab].type}</span></h3>
                      </div>
                    </div>
                    <div className="w-layout-grid f-pricing-feature-list">

                      {features["basic"].map((feature, index) => (
                        <div key={index} id="w-node-_81719f46-3c4f-d08c-afb5-674cfbbcf4ce-d0d34bca" className="f-pricing-feature-item">

                          <SvgIcons type="featureCheck" />
                          <div className="f-paragraph-small-5 f-text-color-gray-400">{feature}</div>

                        </div>
                      ))}

                    </div>
                    <div className="f-pricing-line"></div>
                    <a href="#" className="f-button-secondary w-button">Get Started</a>
                  </div>
                  <div id="w-node-_81719f46-3c4f-d08c-afb5-674cfbbcf4dd-d0d34bca" className="f-pricing-card-dark">
                    <div className="f-margin-bottom-133">
                      <div className="f-pricing-type-wrapper">
                        <div className="f-heading-detail-small f-text-color-white">professional</div>
                        <div className="f-badge-filled">
                          <div>Popular</div>
                        </div>
                      </div>
                    </div>
                    <div className="f-margin-bottom-132">
                      <div className="f-pricing-month-wrapper">
                        <h3 className="f-h3-heading f-text-color-white">${prices[currentTab].professional} <span className="f-pricing-duration">/ {prices[currentTab].type}</span></h3>
                      </div>
                    </div>
                    <div className="w-layout-grid f-pricing-feature-list">

                      {features["professional"].map((feature, index) => (
                        <div key={index} id="w-node-_81719f46-3c4f-d08c-afb5-674cfbbcf4ce-d0d34bca" className="f-pricing-feature-item">

                          <SvgIcons type="featureCheck" />
                          <div className="f-paragraph-small-5 f-text-color-gray-400">{feature}</div>

                        </div>
                      ))}


                    </div>
                    <div className="f-pricing-line-dark"></div>
                    <a href="#" className="f-pricing-button w-button">Get Started</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
