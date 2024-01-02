import React, { useState, useEffect } from 'react';

export default function pricing() {
  const [currentTab, setCurrentTab] = useState('monthly');
  const [prices, setPrices] = useState({
    monthly: { basic: 10, professional: 14, type:"Month"},
    yearly: { basic: 100, professional: 140 , type:"Year"},
  });
 const features = {
  monthly: [
    "Feature 1 for Monthly",
    "Feature 2 for Monthly",
    "Feature 3 for Monthly"
  ],
  yearly: [
    "Feature 1 for Yearly",
    "Feature 2 for Yearly",
    "Feature 3 for Yearly"
  ]
};
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
                <div className="f-heading-detail-small">Flowui Webflow System</div>
              </div>
              <h2 className="f-h2-heading">Save hours and build better websites.</h2>
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
                      <div id="w-node-_81719f46-3c4f-d08c-afb5-674cfbbcf4ca-d0d34bca" className="f-pricing-feature-item">
                        <div className="f-icon-regular w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                          <path d="M12.0002 19.6386C7.78126 19.6386 4.36133 16.2187 4.36133 11.9997C4.36133 7.78077 7.78126 4.36084 12.0002 4.36084C16.2192 4.36084 19.6391 7.78077 19.6391 11.9997C19.6391 16.2187 16.2192 19.6386 12.0002 19.6386ZM11.2386 15.0553L16.6393 9.65383L15.5592 8.57369L11.2386 12.895L9.07758 10.734L7.99744 11.8141L11.2386 15.0553Z" fill="#160042"></path>
                        </svg></div>
                        <div className="f-paragraph-small-5 f-text-color-gray-400">Pricing feature here</div>
                      </div>
                      <div id="w-node-_81719f46-3c4f-d08c-afb5-674cfbbcf4ce-d0d34bca" className="f-pricing-feature-item">
                        <div className="f-icon-regular w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                          <path d="M12.0002 19.6386C7.78126 19.6386 4.36133 16.2187 4.36133 11.9997C4.36133 7.78077 7.78126 4.36084 12.0002 4.36084C16.2192 4.36084 19.6391 7.78077 19.6391 11.9997C19.6391 16.2187 16.2192 19.6386 12.0002 19.6386ZM11.2386 15.0553L16.6393 9.65383L15.5592 8.57369L11.2386 12.895L9.07758 10.734L7.99744 11.8141L11.2386 15.0553Z" fill="#160042"></path>
                        </svg></div>
                        <div className="f-paragraph-small-5 f-text-color-gray-400">Pricing feature here</div>
                      </div>
                      <div id="w-node-_81719f46-3c4f-d08c-afb5-674cfbbcf4d2-d0d34bca" className="f-pricing-feature-item">
                        <div className="f-icon-regular w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                          <path d="M12.0002 19.6386C7.78126 19.6386 4.36133 16.2187 4.36133 11.9997C4.36133 7.78077 7.78126 4.36084 12.0002 4.36084C16.2192 4.36084 19.6391 7.78077 19.6391 11.9997C19.6391 16.2187 16.2192 19.6386 12.0002 19.6386ZM11.2386 15.0553L16.6393 9.65383L15.5592 8.57369L11.2386 12.895L9.07758 10.734L7.99744 11.8141L11.2386 15.0553Z" fill="#160042"></path>
                        </svg></div>
                        <div className="f-paragraph-small-5 f-text-color-gray-400">Pricing feature here</div>
                      </div>
                      <div id="w-node-_81719f46-3c4f-d08c-afb5-674cfbbcf4d6-d0d34bca" className="f-pricing-feature-item">
                        <div className="f-icon-regular w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                          <path d="M12.0002 19.6386C7.78126 19.6386 4.36133 16.2187 4.36133 11.9997C4.36133 7.78077 7.78126 4.36084 12.0002 4.36084C16.2192 4.36084 19.6391 7.78077 19.6391 11.9997C19.6391 16.2187 16.2192 19.6386 12.0002 19.6386ZM11.2386 15.0553L16.6393 9.65383L15.5592 8.57369L11.2386 12.895L9.07758 10.734L7.99744 11.8141L11.2386 15.0553Z" fill="#160042"></path>
                        </svg></div>
                        <div className="f-paragraph-small-5 f-text-color-gray-400">Pricing feature here</div>
                      </div>
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
                      <div id="w-node-_81719f46-3c4f-d08c-afb5-674cfbbcf4ec-d0d34bca" className="f-pricing-feature-item">
                        <div className="f-pricing-feature-item">
                          <div className="f-icon-regular w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                            <path d="M12.0002 19.6386C7.78126 19.6386 4.36133 16.2187 4.36133 11.9997C4.36133 7.78077 7.78126 4.36084 12.0002 4.36084C16.2192 4.36084 19.6391 7.78077 19.6391 11.9997C19.6391 16.2187 16.2192 19.6386 12.0002 19.6386ZM11.2386 15.0553L16.6393 9.65383L15.5592 8.57369L11.2386 12.895L9.07758 10.734L7.99744 11.8141L11.2386 15.0553Z" fill="white"></path>
                          </svg></div>
                          <div className="f-paragraph-small-5 f-text-color-gray-400">Pricing feature here</div>
                        </div>
                      </div>
                      <div id="w-node-_81719f46-3c4f-d08c-afb5-674cfbbcf4f1-d0d34bca" className="f-pricing-feature-item">
                        <div className="f-pricing-feature-item">
                          <div className="f-icon-regular w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                            <path d="M12.0002 19.6386C7.78126 19.6386 4.36133 16.2187 4.36133 11.9997C4.36133 7.78077 7.78126 4.36084 12.0002 4.36084C16.2192 4.36084 19.6391 7.78077 19.6391 11.9997C19.6391 16.2187 16.2192 19.6386 12.0002 19.6386ZM11.2386 15.0553L16.6393 9.65383L15.5592 8.57369L11.2386 12.895L9.07758 10.734L7.99744 11.8141L11.2386 15.0553Z" fill="white"></path>
                          </svg></div>
                          <div className="f-paragraph-small-5 f-text-color-gray-400">Pricing feature here</div>
                        </div>
                      </div>
                      <div id="w-node-_81719f46-3c4f-d08c-afb5-674cfbbcf4f6-d0d34bca" className="f-pricing-feature-item">
                        <div className="f-pricing-feature-item">
                          <div className="f-icon-regular w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                            <path d="M12.0002 19.6386C7.78126 19.6386 4.36133 16.2187 4.36133 11.9997C4.36133 7.78077 7.78126 4.36084 12.0002 4.36084C16.2192 4.36084 19.6391 7.78077 19.6391 11.9997C19.6391 16.2187 16.2192 19.6386 12.0002 19.6386ZM11.2386 15.0553L16.6393 9.65383L15.5592 8.57369L11.2386 12.895L9.07758 10.734L7.99744 11.8141L11.2386 15.0553Z" fill="white"></path>
                          </svg></div>
                          <div className="f-paragraph-small-5 f-text-color-gray-400">Pricing feature here</div>
                        </div>
                      </div>
                      <div id="w-node-_81719f46-3c4f-d08c-afb5-674cfbbcf4fb-d0d34bca" className="f-pricing-feature-item">
                        <div className="f-pricing-feature-item">
                          <div className="f-icon-regular w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                            <path d="M12.0002 19.6386C7.78126 19.6386 4.36133 16.2187 4.36133 11.9997C4.36133 7.78077 7.78126 4.36084 12.0002 4.36084C16.2192 4.36084 19.6391 7.78077 19.6391 11.9997C19.6391 16.2187 16.2192 19.6386 12.0002 19.6386ZM11.2386 15.0553L16.6393 9.65383L15.5592 8.57369L11.2386 12.895L9.07758 10.734L7.99744 11.8141L11.2386 15.0553Z" fill="white"></path>
                          </svg></div>
                          <div className="f-paragraph-small-5 f-text-color-gray-400">Pricing feature here</div>
                        </div>
                      </div>
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
