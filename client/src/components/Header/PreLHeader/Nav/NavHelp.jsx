import React from 'react';

const NavHelp = () => (
  <div className="flx-dir-r flx-ai-md-c d-lg-flx" data-var="helpDropdown">
    <div className="pre-help-dropdown pre-l-logo" data-pre="DesktopHelpDropdown">
      <div id="HelpMenuDropdown" className="pre-dropdown-menu" data-pre="DropdownMenu">
        <a
          role="listbox"
          aria-expanded="false"
          aria-controls="HelpMenuDropdown-Menu"
          data-var="ctrl"
          aria-label="Help"
          data-type="click_navHelpMenuV2"
          data-path="help"
          className="pre-help-button body-4 u-bold"
          href="https://www.nike.com/help"
          data-pre="ILink"
        >
          <span id="hf_header_label_help">Help</span>
        </a>
        <div id="HelpMenuDropdown-Menu" className="pre-dropdown-menu-box" data-var="content">
          <div className="pre-dropdown-menu-content">
            <nav className="p6-sm pl4-sm">
              <a role="option" aria-selected="false" target="_self" tabindex="{-1}" data-type="click_navHelpMenuV2" data-path="help" className="pre-help-dropdown-menu-header d-sm-b mb3-sm" href="https://www.nike.com/help" data-pre="ILink">
                <span id="hf_header_label_help">Help</span>
              </a>
              <ul className="body-3 z4">
                <li>
                  <a
                    role="option"
                    aria-selected="false"
                    target="_self"
                    tabindex="{-1}"
                    data-type="click_navHelpMenuV2"
                    data-path="help:order status"
                    className="pre-help-dropdown-menu-item body-3 u-bold"
                    href="https://www.nike.com/orders/details/"
                    data-pre="ILink"
                  >
                    Order Status
                  </a>
                </li>
                <li>
                  <a
                    role="option"
                    aria-selected="false"
                    target="_self"
                    tabindex="{-1}"
                    data-type="click_navHelpMenuV2"
                    data-path="help:shipping & delivery"
                    className="pre-help-dropdown-menu-item body-3 u-bold"
                    href="https://www.nike.com/help/a/shipping-delivery"
                    data-pre="ILink"
                  >
                    Shipping &amp; Delivery
                  </a>
                </li>
                <li>
                  <a
                    role="option"
                    aria-selected="false"
                    target="_self"
                    tabindex="{-1}"
                    data-type="click_navHelpMenuV2"
                    data-path="help:returns"
                    className="pre-help-dropdown-menu-item body-3 u-bold"
                    href="https://www.nike.com/help/a/returns-policy"
                    data-pre="ILink"
                  >
                    Returns
                  </a>
                </li>
                <li>
                  <a
                    role="option"
                    aria-selected="false"
                    target="_self"
                    tabindex="{-1}"
                    data-type="click_navHelpMenuV2"
                    data-path="help:contact us"
                    className="pre-help-dropdown-menu-item body-3 u-bold"
                    href="https://www.nike.com/help/#contact"
                    data-pre="ILink"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    role="option"
                    aria-selected="false"
                    target="_blank"
                    tabindex="{-1}"
                    data-type="click_navHelpMenuV2"
                    data-path="help:privacy policy"
                    className="pre-help-dropdown-menu-item body-3 u-bold"
                    href="https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacyPolicy&uxId=com.nike.commerce.nikedotcom.web&country=US&language=en&requestType=redirect"
                    data-pre="ILink"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    role="option"
                    aria-selected="false"
                    target="_blank"
                    tabindex="{-1}"
                    data-type="click_navHelpMenuV2"
                    data-path="help:terms of use"
                    className="pre-help-dropdown-menu-item body-3 u-bold"
                    href="https://agreementservice.svs.nike.com/rest/agreement?agreementType=termsOfUse&uxId=com.nike.commerce.nikedotcom.web&country=US&language=en&requestType=redirect"
                    data-pre="ILink"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    role="option"
                    aria-selected="false"
                    target="_self"
                    tabindex="{-1}"
                    data-type="click_navHelpMenuV2"
                    data-path="help:send us feedback"
                    className="pre-help-dropdown-menu-item body-3 u-bold"
                    href="#site-feedback"
                    data-pre="ILink"
                  >
                    Send Us Feedback
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <span className="pre-help-separator ml1-sm mr1-sm body-4">|</span>
  </div>
);

export default NavHelp;