import React from 'react';

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div id="gen-nav-footer">
        <footer className="l-footer bg-black u-full-width nf731" data-version="4.45.0">
          <div className="ncss-container nav-fixed-fluid prl5-md pt5-md pt10-md pb0-md prl10-lg">
            <div className="l-footer-body ncss-row mb4-sm">
              <div className="ncss-col-sm-12 ncss-col-md-9 va-sm-t">
                <div className="hf-accordion-group ncss-row">
                  <div className="hf-accordion footer-accordion ncss-col-sm-12 ncss-col-md-4 ncss-col-lg-3 va0sm-t is-open-md">
                    <p className="hf-accordion-header">
                      <button data-var="toggleBtn" className="hf-accordion-button bg-transparent nav-uppercase nav-brand p4-sm">
                        <span></span>
                        <i className="hf-accordion-icon g72-plus" data-var="icon"></i>
                      </button>
                    </p>
                  </div>
                  <div className="hf-accordion-body" data-var="body">
                    <ul>
                      <li className="footer-link">
                        <a target="_self" data-type="click_navFooter" data-path="gift cards" className="fs12-nav-sm" href="https://www.nike.com/gift-cards" data-pre="ILink">GIFT CARDS</a>
                      </li>
                      <li className="footer-link">
                        <a target="_self" data-type="click_navFooter" data-path="promotions" className="fs12-nav-sm" href="https://www.nike.com/promo-code" data-pre="ILink">PROMOTIONS</a>
                        </li>
                        <li className="footer-link">
                          <a target="_self" data-type="click_navFooter" data-path="find a store" className="fs12-nav-sm" href="https://www.nike.com/retail" data-pre="ILink">FIND A STORE</a>
                        </li>
                        <li className="footer-link">
                          <a target="_self" data-type="click_navFooter" data-path="sign up for email" className="fs12-nav-sm" data-pre="ILink">SIGN UP FOR EMAIL</a>
                        </li>
                        <li className="footer-link">
                          <a target="_self" data-type="click_navFooter" data-path="become a member" className="fs12-nav-sm" href="https://www.nike.com/register" data-pre="ILink">BECOME A MEMBER</a>
                        </li>
                        <li className="footer-link">
                          <a target="_self" data-type="click_navFooter" data-path="nike journal" className="fs12-nav-sm" href="https://www.nike.com/journal/coaching" data-pre="ILink">NIKE JOURNAL</a>
                        </li>
                        <li className="footer-link">
                          <a target="_self" data-type="click_navFooter" data-path="site feedback" className="fs12-nav-sm" href="#site-feedback" data-pre="ILink">SEND US FEEDBACK</a>
                        </li>
                      </ul>
                    </div>

                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
