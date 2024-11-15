import React, {  useContext } from 'react';
import SvgIcons from './svgIcons'
import { LanguageContext } from '@/contexts/LanguageContext';



export default function Footer() {
  const {  translations } = useContext(LanguageContext);

  return (
    <div className="f-footer-regular">
      <div className="f-container-regular">
        <div className="w-layout-grid f-footer-grid">
          <div id="w-node-a02ea398-1b74-9b6b-662f-1deaef0c3fea-d0d34bca">
            <div className="f-margin-bottom-142">
              <a href="#" className="f-footer-logo w-inline-block"><img src="images/FlowUI-Nav.png" loading="lazy" width="124" alt="" /></a>
            </div>
            <div className="f-margin-bottom-141">
              <p className="f-paragraph-small-5">
               {translations.footer?.paragraphSmall}
              </p>

            </div>
            <div className="f-account-social-wrapper">
              <a href="#" className="f-account-social-icon w-inline-block">
                <SvgIcons type="facebook" />

              </a>
              <a href="#" className="f-account-social-icon  w-inline-block">
                <SvgIcons type="instagram" />

              </a>
              <a href="#" className="f-account-social-icon  w-inline-block">
                <SvgIcons type="twitter" />

              </a>
            </div>
          </div>
          {translations.footer?.data.map((block, index) => (
            <div key={index} className="f-footer-block">
              <div className="f-footer-title">{block.title}</div>
              {block.links.map((link, linkIndex) => (
                <a key={linkIndex} href={link.url} className="f-footer-link w-inline-block">
                  <div>{link.text}</div>
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="f-footer-divider"></div>
        <div className="f-footer-bottom">
          <div className="f-footer-copyright">
            <p className="f-footer-detail">Copyright ©2023 Formatmaker.net</p>
          </div>
        </div>
      </div>
    </div>
  )
}
