import React from 'react';

class Banner extends React.Component {
  constructor() {
    super();
    this.state = {
      currentSlide: 'css-v13otb',
      slide1: 'slide selected',
      slide2: 'slide',
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.changeSlide = this.changeSlide.bind(this);
  }

  componentDidMount() {
    let switchUp = this.changeSlide;
    setInterval(() => switchUp(), 6000);
  }

  changeSlide() {
    if (this.state.currentSlide === 'css-v13otb') {
      this.setState({
        currentSlide: 'css-kswtif',
        slide1: 'slide',
        slide2: 'slide selected',
      })
    } else {
      this.setState({
        currentSlide: 'css-v13otb',
        slide1: 'slide selected',
        slide2: 'slide',
      })
    }
  }

  render() {
    return (
      <div className="d-lg-b">
        <div className="banner-container css-1dixged">
          <div className="banner-carousel-wrapper css-196tcw2 css-1yoeq20">
            <div className={this.state.currentSlide} data-orientation="horizontal" data-hero="true" data-slides-to-show="1" data-scrollable="false" data-should-transition="true" data-semantically-hide-unobserved-cards="true" data-conditionally-hide-nav-buttons="false" data-with-tracker="false" data-with-navigation="true" autoPlay="" id="">
              <ul className="sliderBanner">
                <li aria-hidden="true" data-in-view="false" data-index="0" className={this.state.slide1}>
                  <div className="banner-node css-gb9zhi">
                    <span className="banner-title css-1w68kum">Save Up to 40%</span>
                    <div className="banner-subtitle css-vpn3kn css-1i7m6xw css-8vtwnt">
                      <p>
                        <a className="banner-link" data-id="0b2171ef-32fc-4af3-9cd7-ac5b10e8ac71" href="https://www.nike.com/w/sale-3yaep">Shop All Our New Markdowns</a>
                      </p>
                    </div>
                  </div>
                </li>
                <li aria-hidden="false" data-in-view="true" data-index="1" className={this.state.slide2}>
                  <div className="banner-node css-gb9zhi">
                    <span className="banner-title css-1w68kum">Free Shipping &amp; 60-Day Free Returns</span>
                    <div className="banner-subtitle css-vpn3kn css-1i7m6xw css-8vtwnt">
                      <p>
                        <a className="banner-link" data-id="02fa79f0-b16e-4175-b4af-d0b2e94960c7" href="https://www.nike.com/register">Join Now</a>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <button data-automation="carousel-nav-prev" aria-label="Previous" onClick={this.changeSlide} className="carousel-btn prev-btn carousel-btn-floating-false css-1ciuivw">
                <div className="icon">
                  <svg className="arrow-icon" aria-hidden="true" fill="#111" height="30px" width="30px" viewBox="0 0 185.4 300">
                    <path d="M160.4 300c-6.4 0-12.7-2.5-17.7-7.3L0 150 142.7 7.3c9.8-9.8 25.6-9.8 35.4 0 9.8 9.8 9.8 25.6 0 35.4L70.7 150 178 257.3c9.8 9.8 9.8 25.6 0 35.4-4.9 4.8-11.3 7.3-17.6 7.3z"></path>
                  </svg>
                </div>
              </button>
              <button data-automation="carousel-nav-next" aria-label="Next" onClick={this.changeSlide} className="carousel-btn next-btn carousel-btn-floating-false css-1ciuivw">
                <div className="icon">
                  <svg className="arrow-icon" aria-hidden="true" fill="#111" height="30px" width="30px" viewBox="0 0 185.4 300">
                    <path d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z">
                    </path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Banner;
