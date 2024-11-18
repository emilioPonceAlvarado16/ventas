// src/components/Pricing.js
import React, { useState, useEffect, useContext } from 'react';
import SvgIcons from './svgIcons';
import { LanguageContext } from '@/contexts/LanguageContext';
import { v4 as uuidv4 } from 'uuid'; 

export default function Pricing() {
  const { translations } = useContext(LanguageContext);
  const [currentTab, setCurrentTab] = useState('monthly');
  const pricingText = translations.pricing;

  const [prices, setPrices] = useState({
    monthly: { basic: 9.99, professional: 13.99, type: "" },
    yearly: { basic: 99, professional: 139, type: "" },
  });

  const [features, setFeatures] = useState({ basic: [], professional: [] });

  useEffect(() => {
    if (translations) {
      setPrices({
        monthly: { basic: 9.99, professional: 13.99, type: pricingText?.month },
        yearly: { basic: 99, professional: 139, type: pricingText?.year },
      });

      // Asignar IDs únicos a cada feature
      const assignIds = (featureList) => featureList.map(feature => ({ id: uuidv4(), name: feature }));

      setFeatures({
        basic: assignIds(pricingText?.features?.basic || []),
        professional: assignIds(pricingText?.features?.professional || []),
      });
    }
  }, [translations, pricingText]);

  const changeTab = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="f-section-large">
      <div className="f-container-small">
        <div className="f-margin-bottom-56">
          <div className="f-pricing-title-wrapper">
            <div className="f-margin-bottom-134 f-text-weight-bold">
              <div className="f-heading-detail-small">{pricingText?.headingDetail}</div>
            </div>
            <h2 className="f-h2-heading">{pricingText?.headingH2}</h2>
          </div>
        </div>
        <div data-duration-in="300" data-duration-out="100" data-current="Tab 1" data-easing="ease" className="f-pricing-tab w-tabs">
          <div className="f-pricing-toggle-menu w-tab-menu">
            <button
              data-w-tab="Tab 1"
              className={`f-pricing-button-toggle w-inline-block w-tab-link ${currentTab === 'monthly' ? 'w--current' : ''}`}
              onClick={() => changeTab('monthly')}
            >
              <div>{pricingText?.monthly}</div>
            </button>
            <button
              data-w-tab="Tab 2"
              className={`f-pricing-button-toggle w-inline-block w-tab-link ${currentTab === 'yearly' ? 'w--current' : ''}`}
              onClick={() => changeTab('yearly')}
            >
              <div>{pricingText?.yearly}</div>
            </button>
          </div>
          <div className="w-tab-content">
            <div data-w-tab="Tab 1" className="f-pricing-tab-pane w-tab-pane w--tab-active">
              <div className="w-layout-grid f-pricing-column-basic">
                <div id="w-node-_81719f46-3c4f-d08c-afb5-674cfbbcf4bf-d0d34bca" className="f-pricing-card-outline">
                  <div className="f-margin-bottom-133">
                    <div className="f-heading-detail-small">{pricingText?.basicPlan}</div>
                  </div>
                  <div className="f-margin-bottom-132">
                    <div className="f-pricing-month-wrapper">
                      <h3 className="f-h3-heading">${prices[currentTab].basic} <span className="f-pricing-duration">/ {prices[currentTab].type}</span></h3>
                    </div>
                  </div>
                  <div className="w-layout-grid f-pricing-feature-list">
                    {features["basic"].map((feature) => (
                      <div key={feature.id} className="f-pricing-feature-item">
                        <SvgIcons type="featureCheck" />
                        <div className="f-paragraph-small-5 f-text-color-gray-400">{feature.name}</div>
                      </div>
                    ))}
                  </div>
                  <div className="f-pricing-line"></div>
                  <a href="/default-route" className="f-button-secondary w-button">{pricingText?.getStarted}</a>
                </div>
                <div id="w-node-_81719f46-3c4f-d08c-afb5-674cfbbcf4dd-d0d34bca" className="f-pricing-card-dark">
                  <div className="f-margin-bottom-133">
                    <div className="f-pricing-type-wrapper">
                      <div className="f-heading-detail-small f-text-color-white">{pricingText?.professionalPlan}</div>
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
                    {features["professional"].map((feature) => (
                      <div key={feature.id} className="f-pricing-feature-item">
                        <SvgIcons type="featureCheck" />
                        <div className="f-paragraph-small-5 f-text-color-gray-400">{feature.name}</div>
                      </div>
                    ))}
                  </div>
                  <div className="f-pricing-line-dark"></div>
                  <a href="/default-route" className="f-pricing-button w-button">{pricingText?.getStarted}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
