import React from 'react';

class PreDesktopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ulMenuClassName: 'pre-desktop-menu',

      newReleaseClassName: 'pre-desktop-menu-item d-lg-ib is-static is-header',
      menClassName: 'pre-desktop-menu-item d-lg-ib is-static is-header',
      womenClassName: 'pre-desktop-menu-item d-lg-ib is-static is-header',
      kidsClassName: 'pre-desktop-menu-item d-lg-ib is-static is-header',
      customizeClassName: 'pre-desktop-menu-item customize d-lg-ib is-static is-header',
      saleClassName: 'pre-desktop-menu-item sale d-lg-ib d-sm-h is-static is-header'
    }
    this.newReleaseEnter = this.newReleaseEnter.bind(this);
    this.newReleaseLeave = this.newReleaseLeave.bind(this);
    this.menEnter = this.menEnter.bind(this);
    this.menLeave = this.menLeave.bind(this);
    this.womenEnter = this.womenEnter.bind(this);
    this.womenLeave = this.womenLeave.bind(this);
    this.kidsEnter = this.kidsEnter.bind(this);
    this.kidsLeave = this.kidsLeave.bind(this);
    this.customizeEnter = this.customizeEnter.bind(this);
    this.customizeLeave = this.customizeLeave.bind(this);
    this.saleEnter = this.saleEnter.bind(this);
    this.saleLeave = this.saleLeave.bind(this);
  }

  newReleaseEnter() {
    this.props.openScrim()
    this.setState({
      ulMenuClassName: 'pre-desktop-menu is-open',
      newReleaseClassName: 'pre-desktop-menu-item d-lg-ib is-static is-header is-focused'
    })
  }

  newReleaseLeave() {
    this.props.closeScrim()
    this.setState({
      ulMenuClassName: 'pre-desktop-menu',
      newReleaseClassName: 'pre-desktop-menu-item d-lg-ib is-static is-header'
    })
  }

  menEnter() {
    this.props.openScrim()
    this.setState({
      ulMenuClassName: 'pre-desktop-menu is-open',
      menClassName: 'pre-desktop-menu-item d-lg-ib is-static is-header is-focused'
    })
  }

  menLeave() {
    this.props.closeScrim()
    this.setState({
      ulMenuClassName: 'pre-desktop-menu',
      menClassName: 'pre-desktop-menu-item d-lg-ib is-static is-header'
    })
  }

  womenEnter() {
    this.props.openScrim()
    this.setState({
      ulMenuClassName: 'pre-desktop-menu is-open',
      womenClassName: 'pre-desktop-menu-item d-lg-ib is-static is-header is-focused'
    })
  }

  womenLeave() {
    this.props.closeScrim()
    this.setState({
      ulMenuClassName: 'pre-desktop-menu',
      womenClassName: 'pre-desktop-menu-item d-lg-ib is-static is-header'
    })
  }

  kidsEnter() {
    this.props.openScrim()
    this.setState({
      ulMenuClassName: 'pre-desktop-menu is-open',
      kidsClassName: 'pre-desktop-menu-item d-lg-ib is-static is-header is-focused'
    })
  }

  kidsLeave() {
    this.props.closeScrim()
    this.setState({
      ulMenuClassName: 'pre-desktop-menu',
      kidsClassName: 'pre-desktop-menu-item d-lg-ib is-static is-header'
    })
  }

  customizeEnter() {
    this.props.openScrim()
    this.setState({
      ulMenuClassName: 'pre-desktop-menu is-open',
      customizeClassName: 'pre-desktop-menu-item customize d-lg-ib is-static is-header is-focused'
    })
  }

  customizeLeave() {
    this.props.closeScrim()
    this.setState({
      ulMenuClassName: 'pre-desktop-menu',
      customizeClassName: 'pre-desktop-menu-item customize d-lg-ib is-static is-header'
    })
  }
  saleEnter() {
    this.props.openScrim()
    this.setState({
      ulMenuClassName: 'pre-desktop-menu is-open',
      saleClassName: 'pre-desktop-menu-item sale d-lg-ib d-sm-h is-static is-header is-focused'
    })
  }

  saleLeave() {
    this.props.closeScrim()
    this.setState({
      ulMenuClassName: 'pre-desktop-menu',
      saleClassName: 'pre-desktop-menu-item sale d-lg-ib d-sm-h is-static is-header'
    })
  }

  render() {
    return (
      <div className="pre-l-desktop-menu d-sm-h d-lg-b ta-sm-l ta-lg-c">
        <ul className={this.state.ulMenuClassName} data-pre="DesktopMenu">
          <li className={this.state.newReleaseClassName}>
            <a aria-label="New Releases" data-nav="0,0,-1" role="menu" aria-expanded="false" aria-controls="DesktopMenu-0-0-0" data-type="click_navShoppingMenu" data-path="new releases" onMouseEnter={this.newReleaseEnter}
            onMouseLeave={this.newReleaseLeave}  className="pre-desktop-menu-link headline-5 prl3-lg pt4-sm d-sm-b no-outline" href="https://www.nike.com/w/new-3n82y" data-pre="ILink">
              New Releases
            </a>
            <div id="DesktopMenu-0-0-0"
             className="pre-desktop-menu-dropdown bg-white p10-sm pt4-sm ncss-container" role="menu">
              <div className="pre-columns-container ncss-row">
                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2">
                  <button role="menuitem" aria-label="main-menu, New Releases, New & Featured" tabIndex={-1} data-nav="0,0,0" data-type="click_navShoppingMenu" data-path="new releases:new & featured" className="nav-btn p0-sm pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">
                    New &amp; Featured
                  </button>
                  <a role="menuitem" aria-label="main-menu, New Releases, New & Featured, Shop All New Arrivals" tabIndex={-1} data-nav="0,0,1" data-type="click_navShoppingMenu" data-path="new releases:new & featured:new arrivals" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/new-3n82y" data-pre="ILink">
                    Shop All New Arrivals
                  </a>
                  <a role="menuitem" aria-label="main-menu, New Releases, New & Featured, SNKRS Launch Calendar" tabIndex={-1} data-nav="0,0,2" target="_self" data-type="click_navShoppingMenu" data-path="new releases:new & featured:snkrs launch calendar" className="pre-menu-item d-sm-h body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/launch" data-pre="ILink">
                    SNKRS Launch Calendar
                  </a>
                  <a role="menuitem" aria-label="main-menu, New Releases, New & Featured, Best of Air Max" tabIndex={-1} data-nav="0,0,3" data-type="click_navShoppingMenu" data-path="new releases:new & featured:best of air max" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/air-max-a6d8h" data-pre="ILink">
                    Best of Air Max
                  </a>
                  <a role="menuitem" aria-label="main-menu, New Releases, New & Featured, New Workout Essentials" tabIndex={-1} data-nav="0,0,4" data-type="click_navShoppingMenu" data-path="new releases:new & featured:new workout essentials" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/workout-essentials-8e0y5" data-pre="ILink">
                    New Workout Essentials
                  </a>
                  <a role="menuitem" aria-label="main-menu, New Releases, New & Featured, Member Access" tabIndex={-1} data-nav="0,0,5" data-type="click_navShoppingMenu" data-path="new releases:new & featured:member access" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/member-access-4lbty" data-pre="ILink">
                    Member Access
                  </a>
                </div>
                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2">
                  <a role="menuitem" aria-label="main-menu, New Releases, New For Men" tabIndex={-1} data-nav="0,1,0" data-type="click_navShoppingMenu" data-path="new releases:new for men" className="pre-menu-item is-static is-header headline-5" href="https://www.nike.com/w/new-mens-3n82yznik1" data-pre="ILink">
                    New For Men
                  </a>
                  <a role="menuitem" aria-label="main-menu, New Releases, New For Men, Shoes" tabIndex={-1} data-nav="0,1,1" data-type="click_navShoppingMenu" data-path="new releases:new for men:shoes" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/new-mens-shoes-3n82yznik1zy7ok" data-pre="ILink">
                    Shoes
                  </a>
                  <a role="menuitem" aria-label="main-menu, New Releases, New For Men, Clothing" tabIndex={-1} data-nav="0,1,2" data-type="click_navShoppingMenu" data-path="new releases:new for men:clothing" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/new-mens-clothing-3n82yz6ymx6znik1" data-pre="ILink">
                    Clothing
                  </a>
                  <a role="menuitem" aria-label="main-menu, New Releases, New For Men, Equipment" tabIndex={-1} data-nav="0,1,3" data-type="click_navShoppingMenu" data-path="new releases:new for men:equipment" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/new-mens-accessories-equipment-3n82yzawwpwznik1" data-pre="ILink">
                    Equipment
                  </a>
                  <a role="menuitem" aria-label="main-menu, New Releases, New For Men, Shop All New" tabIndex={-1} data-nav="0,1,4" data-type="click_navShoppingMenu" data-path="new releases:new for men:shop all new" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/new-mens-3n82yznik1" data-pre="ILink">
                    Shop All New
                  </a>
                </div>
                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2">
                  <a role="menuitem" aria-label="main-menu, New Releases, New For Women" tabIndex={-1} data-nav="0,2,0" data-type="click_navShoppingMenu" data-path="new releases:new for women" className="pre-menu-item is-static is-header headline-5" href="https://www.nike.com/w/new-womens-3n82yz5e1x6" data-pre="ILink">
                    New For Women
                  </a>
                  <a role="menuitem" aria-label="main-menu, New Releases, New For Women, Shoes" tabIndex={-1} data-nav="0,2,1" data-type="click_navShoppingMenu" data-path="new releases:new for women:shoes" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/new-womens-shoes-3n82yz5e1x6zy7ok" data-pre="ILink">
                    Shoes
                  </a>
                  <a role="menuitem" aria-label="main-menu, New Releases, New For Women, Clothing" tabIndex={-1} data-nav="0,2,2" data-type="click_navShoppingMenu" data-path="new releases:new for women:clothing" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/new-womens-clothing-3n82yz5e1x6z6ymx6" data-pre="ILink">
                    Clothing
                  </a>
                  <a role="menuitem" aria-label="main-menu, New Releases, New For Women, Equipment" tabIndex={-1} data-nav="0,2,3" data-type="click_navShoppingMenu" data-path="new releases:new for women:equipment" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/new-womens-accessories-equipment-3n82yz5e1x6zawwpw" data-pre="ILink">
                    Equipment
                  </a>
                  <a role="menuitem" aria-label="main-menu, New Releases, New For Women, Shop All New" tabIndex={-1} data-nav="0,2,4" data-type="click_navShoppingMenu" data-path="new releases:new for women:shop all new" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/new-womens-3n82yz5e1x6" data-pre="ILink">
                    Shop All New
                  </a>
                </div>
                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2">
                  <a role="menuitem" aria-label="main-menu, New Releases, New For Kids" tabIndex={-1} data-nav="0,3,0" data-type="click_navShoppingMenu" data-path="new releases:kids new releases" className="pre-menu-item is-static is-header headline-5" href="https://www.nike.com/w/new-kids-3n82yzv4dh" data-pre="ILink">
                    New For Kids
                  </a>
                  <a role="menuitem" aria-label="main-menu, New Releases, New For Kids, Boys Shoes" tabIndex={-1} data-nav="0,3,1" data-type="click_navShoppingMenu" data-path="new releases:kids new releases:boys new shoes" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/new-boys-shoes-1onraz3n82yzy7ok" data-pre="ILink">
                    Boys Shoes
                  </a>
                  <a role="menuitem" aria-label="main-menu, New Releases, New For Kids, Boys Clothing" tabIndex={-1} data-nav="0,3,2" data-type="click_navShoppingMenu" data-path="new releases:kids new releases:boys new clothing" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/new-boys-clothing-1onraz3n82yz6ymx6" data-pre="ILink">
                    Boys Clothing
                  </a>
                  <a role="menuitem" aria-label="main-menu, New Releases, New For Kids, Girls Shoes" tabIndex={-1} data-nav="0,3,3" data-type="click_navShoppingMenu" data-path="new releases:kids new releases:girls new shoes" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/new-girls-shoes-3aqegz3n82yzy7ok" data-pre="ILink">
                    Girls Shoes
                  </a>
                  <a role="menuitem" aria-label="main-menu, New Releases, New For Kids, Girls Clothing" tabIndex={-1} data-nav="0,3,4" data-type="click_navShoppingMenu" data-path="new releases:kids new releases:girls new clothing" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/new-girls-clothing-3aqegz3n82yz6ymx6" data-pre="ILink">
                    Girls Clothing
                  </a>
                  <a role="menuitem" aria-label="main-menu, New Releases, New For Kids, Shop All New" tabIndex={-1} data-nav="0,3,5" data-type="click_navShoppingMenu" data-path="new releases:kids new releases:shop all new kids" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/new-kids-3n82yzv4dh" data-pre="ILink">
                    Shop All New
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className={this.state.menClassName}
              onMouseEnter={this.menEnter}
              onMouseLeave={this.menLeave} >
          <a aria-label="Men" data-nav="1,0,-1" role="menu" aria-expanded="false" aria-controls="DesktopMenu-0-1-0" data-type="click_navShoppingMenu" data-path="men" className="pre-desktop-menu-link headline-5 prl3-lg pt4-sm d-sm-b no-outline" href="https://www.nike.com/men" data-pre="ILink">
            Men
          </a>
          <div id="DesktopMenu-0-1-0" className="pre-desktop-menu-dropdown bg-white p10-sm pt4-sm ncss-container" role="menu">
            <div className="pre-columns-container ncss-row">
              <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                <button role="menuitem" aria-label="main-menu, Men, New & Featured" tabIndex={-1} data-nav="1,0,0" data-type="click_navShoppingMenu" data-path="men:new & featured" className="nav-btn p0-sm pre-menu-item is-static is-header headline-5" data-pre="ILink">
                  New &amp; Featured
                </button>
                <a role="menuitem" aria-label="main-menu, Men, New & Featured, New Releases" tabIndex={-1} data-nav="1,0,1" data-type="click_navShoppingMenu" data-path="men:new & featured:new releases" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/new-mens-3n82yznik1" data-pre="ILink">
                  New Releases
                </a>
                <a role="menuitem" aria-label="main-menu, Men, New & Featured, Best Sellers" tabIndex={-1} data-nav="1,0,2" data-type="click_navShoppingMenu" data-path="men:new & featured:best sellers" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-best-76m50znik1" data-pre="ILink">
                  Best Sellers
                </a>
                <a role="menuitem" aria-label="main-menu, Men, New & Featured, Best of Air Max" tabIndex={-1} data-nav="1,0,3" data-type="click_navShoppingMenu" data-path="men:new & featured:best of air max" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-air-max-a6d8hznik1" data-pre="ILink">
                  Best of Air Max
                </a>
                <a role="menuitem" aria-label="main-menu, Men, New & Featured, Wild Run" tabIndex={-1} data-nav="1,0,4" data-type="click_navShoppingMenu" data-path="men:new & featured:wild run" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/wild-run-collection-21nvy" data-pre="ILink">
                  Wild Run
                </a>
                <a role="menuitem" aria-label="main-menu, Men, New & Featured, New Workout Essentials" tabIndex={-1} data-nav="1,0,5" data-type="click_navShoppingMenu" data-path="men:new & featured:new workout essentials" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-workout-essentials-8e0y5znik1" data-pre="ILink">
                  New Workout Essentials
                </a>
                <a role="menuitem" aria-label="main-menu, Men, New & Featured, New In Fleece" tabIndex={-1} data-nav="1,0,6" data-type="click_navShoppingMenu" data-path="men:new & featured:new in fleece" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-fleece-clothing-4xh6qz6ymx6znik1" data-pre="ILink">
                  New In Fleece
                </a>
                <a role="menuitem" aria-label="main-menu, Men, New & Featured, Latest Jackets" tabIndex={-1} data-nav="1,0,7" data-type="click_navShoppingMenu" data-path="men:new & featured:latest jackets" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/new-mens-jackets-vests-3n82yz50r7yznik1" data-pre="ILink">
                  Latest Jackets
                </a>
                <a role="menuitem" aria-label="main-menu, Men, New & Featured, Sale - Up to 40% Off" tabIndex={-1} data-nav="1,0,8" data-type="click_navShoppingMenu" data-path="men:new & featured:sale up to 50 off" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-sale-3yaepznik1" data-pre="ILink">
                  Sale - Up to 40% Off
                </a>
              </div>
              <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                <a role="menuitem" aria-label="main-menu, Men, Shoes" tabIndex={-1} data-nav="1,1,0" data-type="click_navShoppingMenu" data-path="men:shoes" className="pre-menu-item d-sm-h is-static is-header headline-5" href="https://www.nike.com/w/mens-shoes-nik1zy7ok" data-pre="ILink">
                  Shoes
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shoes, Lifestyle" tabIndex={-1} data-nav="1,1,1" data-type="click_navShoppingMenu" data-path="men:shoes:lifestyle" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-lifestyle-shoes-13jrmznik1zy7ok" data-pre="ILink">
                  Lifestyle
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shoes, Running" tabIndex={-1} data-nav="1,1,2" data-type="click_navShoppingMenu" data-path="men:shoes:running" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-running-shoes-37v7jznik1zy7ok" data-pre="ILink">
                  Running
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shoes, Basketball" tabIndex={-1} data-nav="1,1,3" data-type="click_navShoppingMenu" data-path="men:shoes:basketball" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-basketball-shoes-3glsmznik1zy7ok" data-pre="ILink">
                  Basketball
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shoes, Jordan" tabIndex={-1} data-nav="1,1,4" data-type="click_navShoppingMenu" data-path="men:shoes:jordan" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-jordan-shoes-37eefznik1zy7ok" data-pre="ILink">
                  Jordan
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shoes, Training & Gym" tabIndex={-1} data-nav="1,1,5" data-type="click_navShoppingMenu" data-path="men:shoes:training and gym" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-training-gym-shoes-58jtoznik1zy7ok" data-pre="ILink">
                  Training &amp; Gym
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shoes, Soccer" tabIndex={-1} data-nav="1,1,6" data-type="click_navShoppingMenu" data-path="men:shoes:soccer football" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-soccer-shoes-1gdj0znik1zy7ok" data-pre="ILink">
                  Soccer
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shoes, Golf" tabIndex={-1} data-nav="1,1,7" data-type="click_navShoppingMenu" data-path="men:shoes:golf" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-golf-shoes-23q9wznik1zy7ok" data-pre="ILink">
                  Golf
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shoes, Track & Field" tabIndex={-1} data-nav="1,1,8" data-type="click_navShoppingMenu" data-path="men:shoes:track and field" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-track-field-shoes-7nem3znik1zy7ok" data-pre="ILink">
                  Track &amp; Field
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shoes, Skateboarding" tabIndex={-1} data-nav="1,1,9" data-type="click_navShoppingMenu" data-path="men:shoes:skateboarding" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-skateboarding-shoes-8mfrfznik1zy7ok" data-pre="ILink">
                  Skateboarding
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shoes, Tennis" tabIndex={-1} data-nav="1,1,10" data-type="click_navShoppingMenu" data-path="men:shoes:tennis" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-tennis-shoes-ed1qznik1zy7ok" data-pre="ILink">
                  Tennis
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shoes, Baseball" tabIndex={-1} data-nav="1,1,11" data-type="click_navShoppingMenu" data-path="men:shoes:baseball" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-baseball-shoes-99fchznik1zy7ok" data-pre="ILink">
                  Baseball
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shoes, Boots" tabIndex={-1} data-nav="1,1,12" data-type="click_navShoppingMenu" data-path="men:shoes:boots" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-boots-9uquxznik1" data-pre="ILink">
                  Boots
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shoes, Sandals & Slides" tabIndex={-1} data-nav="1,1,13" data-type="click_navShoppingMenu" data-path="men:shoes:sandals and slides" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-sandals-slides-fl76znik1" data-pre="ILink">
                  Sandals &amp; Slides
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shoes, Shoes $100 & Under" tabIndex={-1} data-nav="1,1,14" data-type="click_navShoppingMenu" data-path="men:shoes:shoes 100 under" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-100-and-under-shoes-3s37kznik1zy7ok" data-pre="ILink">
                  Shoes $100 &amp; Under
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shoes, All Shoes" tabIndex={-1} data-nav="1,1,15" data-type="click_navShoppingMenu" data-path="men:shoes:all shoes" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-shoes-nik1zy7ok" data-pre="ILink">
                  All Shoes
                </a>
              </div>
              <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                <a role="menuitem" aria-label="main-menu, Men, Clothing" tabIndex={-1} data-nav="1,2,0" data-type="click_navShoppingMenu" data-path="men:clothing" className="pre-menu-item d-sm-h is-static is-header headline-5" href="https://www.nike.com/w/mens-clothing-6ymx6znik1" data-pre="ILink">
                  Clothing
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Clothing, Tops & T-Shirts" tabIndex={-1} data-nav="1,2,1" data-type="click_navShoppingMenu" data-path="men:clothing:tops and t shirts" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-tops-t-shirts-9om13znik1" data-pre="ILink">
                  Tops &amp; T-Shirts
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Clothing, Shorts" tabIndex={-1} data-nav="1,2,2" data-type="click_navShoppingMenu" data-path="men:clothing:shorts" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-shorts-38fphznik1" data-pre="ILink">
                  Shorts
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Clothing, Hoodies & Sweatshirts" tabIndex={-1} data-nav="1,2,3" data-type="click_navShoppingMenu" data-path="men:clothing:hoodies and sweatshirts" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-hoodies-pullovers-6riveznik1" data-pre="ILink">
                  Hoodies &amp; Sweatshirts
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Clothing, Pants & Tights" tabIndex={-1} data-nav="1,2,4" data-type="click_navShoppingMenu" data-path="men:clothing:pants and tights" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-pants-tights-2kq19znik1" data-pre="ILink">
                  Pants &amp; Tights
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Clothing, Jackets & Vests" tabIndex={-1} data-nav="1,2,5" data-type="click_navShoppingMenu" data-path="men:clothing:jackets and vests" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-jackets-vests-50r7yznik1" data-pre="ILink">
                  Jackets &amp; Vests
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Clothing, Swimwear" tabIndex={-1} data-nav="1,2,6" data-type="click_navShoppingMenu" data-path="men:clothing:swimwear" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-surf-swimwear-nik1zq3un" data-pre="ILink">
                  Swimwear
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Clothing, Polos" tabIndex={-1} data-nav="1,2,7" data-type="click_navShoppingMenu" data-path="men:clothing:polos" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-polos-9uaqmznik1" data-pre="ILink">
                  Polos
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Clothing, Nike Pro" tabIndex={-1} data-nav="1,2,8" data-type="click_navShoppingMenu" data-path="men:clothing:nike pro" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-nike-pro-3cqxfznik1" data-pre="ILink">
                  Nike Pro
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Clothing, Yoga" tabIndex={-1} data-nav="1,2,9" data-type="click_navShoppingMenu" data-path="men:clothing:yoga" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-yoga-clothing-6ymx6zanrljznik1" data-pre="ILink">
                  Yoga
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Clothing, Socks & Underwear" tabIndex={-1} data-nav="1,2,10" data-type="click_navShoppingMenu" data-path="men:clothing:socks and underwear" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-socks-7ny3qznik1" data-pre="ILink">
                  Socks &amp; Underwear
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Clothing, Big & Tall" tabIndex={-1} data-nav="1,2,11" data-type="click_navShoppingMenu" data-path="men:clothing:big and tall" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-big-tall-clothing-6ymx6zau499znik1" data-pre="ILink">
                  Big &amp; Tall
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Clothing, All Clothing" tabIndex={-1} data-nav="1,2,12" data-type="click_navShoppingMenu" data-path="men:clothing:all clothing" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-clothing-6ymx6znik1" data-pre="ILink">
                  All Clothing
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Accessories & Equipment" tabIndex={-1} data-nav="1,2,13" data-type="click_navShoppingMenu" data-path="men:accessories and equipment" className="pre-menu-item d-sm-h is-static is-header headline-5" href="https://www.nike.com/w/mens-accessories-equipment-awwpwznik1" data-pre="ILink">
                  Accessories &amp; Equipment
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Accessories & Equipment, Bags & Backpacks" tabIndex={-1} data-nav="1,2,14" data-type="click_navShoppingMenu" data-path="men:accessories and equipment:bags and backpacks" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-bags-and-backpacks-9xy71znik1" data-pre="ILink">
                  Bags &amp; Backpacks
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Accessories & Equipment, Apple Watch Nike" tabIndex={-1} data-nav="1,2,15" data-type="click_navShoppingMenu" data-path="men:accessories and equipment:apple watch nike plus" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-watches-2axv8znik1" data-pre="ILink">
                  Apple Watch Nike
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Accessories & Equipment, Hats, Visors & Headbands" tabIndex={-1} data-nav="1,2,16" data-type="click_navShoppingMenu" data-path="men:accessories and equipment:hats visors and headbands" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-hats-visors-headbands-52r49znik1" data-pre="ILink">
                  Hats, Visors &amp; Headbands
                </a>
              </div>
              <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                <button role="menuitem" aria-label="main-menu, Men, Shop Collection" tabIndex={-1} data-nav="1,3,0" data-type="click_navShoppingMenu" data-path="men:shop collection" className="nav-btn p0-sm pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">
                  Shop Collection
                </button>
                <a role="menuitem" aria-label="main-menu, Men, Shop Collection, Golf" tabIndex={-1} data-nav="1,3,1" data-type="click_navShoppingMenu" data-path="men:shop collection:golf" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/golf" data-pre="ILink">
                  Golf
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shop Collection, Jordan" tabIndex={-1} data-nav="1,3,2" data-type="click_navShoppingMenu" data-path="men:shop collection:jordan" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/jordan" data-pre="ILink">
                  Jordan
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shop Collection, Soccer" tabIndex={-1} data-nav="1,3,3" data-type="click_navShoppingMenu" data-path="men:shop collection:soccer football" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/soccer" data-pre="ILink">
                  Soccer
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shop Collection, Running" tabIndex={-1} data-nav="1,3,4" data-type="click_navShoppingMenu" data-path="men:shop collection:running" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/running" data-pre="ILink">
                  Running
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shop Collection, Basketball" tabIndex={-1} data-nav="1,3,5" data-type="click_navShoppingMenu" data-path="men:shop collection:basketball" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/basketball" data-pre="ILink">
                  Basketball
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shop Collection, Tennis" tabIndex={-1} data-nav="1,3,6" data-type="click_navShoppingMenu" data-path="men:shop collection:tennis" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/tennis" data-pre="ILink">
                  Tennis
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shop Collection, NikeLab" tabIndex={-1} data-nav="1,3,7" data-type="click_navShoppingMenu" data-path="men:shop collection:nikelab" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/nikelab" data-pre="ILink">
                  NikeLab
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shop Collection, Training & Gym" tabIndex={-1} data-nav="1,3,8" data-type="click_navShoppingMenu" data-path="men:shop collection:training and gym" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/training" data-pre="ILink">
                  Training &amp; Gym
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shop Collection, Football" tabIndex={-1} data-nav="1,3,9" data-type="click_navShoppingMenu" data-path="men:shop collection:us football" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/us-football" data-pre="ILink">
                  Football
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shop Collection, Baseball" tabIndex={-1} data-nav="1,3,10" data-type="click_navShoppingMenu" data-path="men:shop collection:baseball" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/baseball" data-pre="ILink">
                  Baseball
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shop Collection, Nike Sportswear" tabIndex={-1} data-nav="1,3,11" data-type="click_navShoppingMenu" data-path="men:shop collection:nike sportswear" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/sportswear" data-pre="ILink">
                  Nike Sportswear
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shop Collection, ACG" tabIndex={-1} data-nav="1,3,12" data-type="click_navShoppingMenu" data-path="men:shop collection:acg" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/acg" data-pre="ILink">
                  ACG
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shop Collection, Skateboarding" tabIndex={-1} data-nav="1,3,13" data-type="click_navShoppingMenu" data-path="men:shop collection:skateboarding" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/skateboarding" data-pre="ILink">
                  Skateboarding
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shop Collection, Lacrosse" tabIndex={-1} data-nav="1,3,14" data-type="click_navShoppingMenu" data-path="men:shop collection:lacrosse" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-lacrosse-4nvmrznik1" data-pre="ILink">
                  Lacrosse
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shop Collection, Fan Gear" tabIndex={-1} data-nav="1,3,15" data-type="click_navShoppingMenu" data-path="men:shop collection:fan gear" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/fan-gear" data-pre="ILink">
                  Fan Gear
                </a>
                <a role="menuitem" aria-label="main-menu, Men, Shop Collection, Nike FlyEase" tabIndex={-1} data-nav="1,3,16" data-type="click_navShoppingMenu" data-path="men:shop collection:nike flyease" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/flyease" data-pre="ILink">
                  Nike FlyEase
                </a>
              </div>
            </div>
          </div>
        </li>
          <li className={this.state.womenClassName} onMouseEnter={this.womenEnter}
              onMouseLeave={this.womenLeave}>
            <a aria-label="Women" data-nav="2,0,-1" role="menu" aria-expanded="false" aria-controls="DesktopMenu-0-2-0" data-type="click_navShoppingMenu" data-path="women" className="pre-desktop-menu-link headline-5 prl3-lg pt4-sm d-sm-b no-outline" href="https://www.nike.com/women" data-pre="ILink">
              Women
            </a>
            <div id="DesktopMenu-0-2-0" className="pre-desktop-menu-dropdown bg-white p10-sm pt4-sm ncss-container" role="menu">
              <div className="pre-columns-container ncss-row">
                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                  <button role="menuitem" aria-label="main-menu, Women, New & Featured" tabIndex={-1} data-nav="2,0,0" data-type="click_navShoppingMenu" data-path="women:new and featured" className="nav-btn p0-sm pre-menu-item is-static is-header headline-5" data-pre="ILink">
                    New &amp; Featured
                  </button>
                  <a role="menuitem" aria-label="main-menu, Women, New & Featured, New Releases" tabIndex={-1} data-nav="2,0,1" data-type="click_navShoppingMenu" data-path="women:new and featured:new releases" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/new-womens-3n82yz5e1x6" data-pre="ILink">
                    New Releases
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, New & Featured, Best Sellers" tabIndex={-1} data-nav="2,0,2" data-type="click_navShoppingMenu" data-path="women:new and featured:best sellers" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-best-5e1x6z76m50" data-pre="ILink">
                    Best Sellers
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, New & Featured, Best of Air Max" tabIndex={-1} data-nav="2,0,3" data-type="click_navShoppingMenu" data-path="women:new and featured:best of air max" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-air-max-shoes-5e1x6za6d8hzy7ok" data-pre="ILink">
                    Best of Air Max
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, New & Featured, Icon Clash for Spring" tabIndex={-1} data-nav="2,0,4" data-type="click_navShoppingMenu" data-path="women:new and featured:icon clash for spring" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/icon-clash-vksw" data-pre="ILink">
                    Icon Clash for Spring
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, New & Featured, New Workout Essentials" tabIndex={-1} data-nav="2,0,5" data-type="click_navShoppingMenu" data-path="women:new and featured:new workout essentials" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-workout-essentials-5e1x6z8e0y5" data-pre="ILink">
                    New Workout Essentials
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, New & Featured, New In Fleece" tabIndex={-1} data-nav="2,0,6" data-type="click_navShoppingMenu" data-path="women:new and featured:new in fleece" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-fleece-clothing-4xh6qz5e1x6z6ymx6" data-pre="ILink">
                    New In Fleece
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, New & Featured, Latest Jackets" tabIndex={-1} data-nav="2,0,7" data-type="click_navShoppingMenu" data-path="women:new and featured:latest jackets" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/new-womens-jackets-vests-3n82yz50r7yz5e1x6" data-pre="ILink">
                    Latest Jackets
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, New & Featured, Sale - Up to 40% Off" tabIndex={-1} data-nav="2,0,8" data-type="click_navShoppingMenu" data-path="women:new and featured:sale up to 40 off" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-sale-3yaepz5e1x6" data-pre="ILink">
                    Sale - Up to 40% Off
                  </a>
                </div>
                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                  <a role="menuitem" aria-label="main-menu, Women, Shoes" tabIndex={-1} data-nav="2,1,0" data-type="click_navShoppingMenu" data-path="women:shoes" className="pre-menu-item d-sm-h is-static is-header headline-5" href="https://www.nike.com/w/womens-shoes-5e1x6zy7ok" data-pre="ILink">
                    Shoes
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Shoes, Lifestyle" tabIndex={-1} data-nav="2,1,1" data-type="click_navShoppingMenu" data-path="women:shoes:lifestyle" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-lifestyle-shoes-13jrmz5e1x6zy7ok" data-pre="ILink">
                    Lifestyle
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Shoes, Running" tabIndex={-1} data-nav="2,1,2" data-type="click_navShoppingMenu" data-path="women:shoes:running" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-running-shoes-37v7jz5e1x6zy7ok" data-pre="ILink">
                    Running
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Shoes, Training & Gym" tabIndex={-1} data-nav="2,1,3" data-type="click_navShoppingMenu" data-path="women:shoes:training and gym" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-training-gym-shoes-58jtoz5e1x6zy7ok" data-pre="ILink">
                    Training &amp; Gym
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Shoes, Basketball" tabIndex={-1} data-nav="2,1,4" data-type="click_navShoppingMenu" data-path="women:shoes:basketball" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-basketball-shoes-3glsmz5e1x6zy7ok" data-pre="ILink">
                    Basketball
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Shoes, Jordan" tabIndex={-1} data-nav="2,1,5" data-type="click_navShoppingMenu" data-path="women:shoes:jordan" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-jordan-shoes-37eefz5e1x6zy7ok" data-pre="ILink">
                    Jordan
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Shoes, Soccer" tabIndex={-1} data-nav="2,1,6" data-type="click_navShoppingMenu" data-path="women:shoes:soccer football" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-soccer-shoes-1gdj0z5e1x6zy7ok" data-pre="ILink">
                    Soccer
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Shoes, Tennis" tabIndex={-1} data-nav="2,1,7" data-type="click_navShoppingMenu" data-path="women:shoes:tennis" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-tennis-shoes-5e1x6zed1qzy7ok" data-pre="ILink">
                    Tennis
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Shoes, Track & Field" tabIndex={-1} data-nav="2,1,8" data-type="click_navShoppingMenu" data-path="women:shoes:track and field" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-track-field-shoes-5e1x6z7nem3zy7ok" data-pre="ILink">
                    Track &amp; Field
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Shoes, Sandals & Slides" tabIndex={-1} data-nav="2,1,9" data-type="click_navShoppingMenu" data-path="women:shoes:sandals and slides" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-sandals-slides-5e1x6zfl76" data-pre="ILink">
                    Sandals &amp; Slides
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Shoes, Skateboarding" tabIndex={-1} data-nav="2,1,10" data-type="click_navShoppingMenu" data-path="women:shoes:skateboarding" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-skateboarding-shoes-5e1x6z8mfrfzy7ok" data-pre="ILink">
                    Skateboarding
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Shoes, Softball" tabIndex={-1} data-nav="2,1,11" data-type="click_navShoppingMenu" data-path="women:shoes:softball" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-softball-shoes-2dlpvz5e1x6zy7ok" data-pre="ILink">
                    Softball
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Shoes, Shoes $100 & Under" tabIndex={-1} data-nav="2,1,12" data-type="click_navShoppingMenu" data-path="women:shoes:shoes 100 under" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-100-and-under-shoes-3s37kz5e1x6zy7ok" data-pre="ILink">
                    Shoes $100 &amp; Under
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Shoes, All Shoes" tabIndex={-1} data-nav="2,1,13" data-type="click_navShoppingMenu" data-path="women:shoes:all shoes" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-shoes-5e1x6zy7ok" data-pre="ILink">
                    All Shoes
                  </a>
                </div>
                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                  <a role="menuitem" aria-label="main-menu, Women, Clothing" tabIndex={-1} data-nav="2,2,0" data-type="click_navShoppingMenu" data-path="women:clothing" className="pre-menu-item d-sm-h is-static is-header headline-5" href="https://www.nike.com/w/womens-clothing-5e1x6z6ymx6" data-pre="ILink">
                    Clothing
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Clothing, Pants & Leggings" tabIndex={-1} data-nav="2,2,1" data-type="click_navShoppingMenu" data-path="women:clothing:pants and tights" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-pants-tights-2kq19z5e1x6" data-pre="ILink">
                    Pants &amp; Leggings
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Clothing, Sports Bras" tabIndex={-1} data-nav="2,2,2" data-type="click_navShoppingMenu" data-path="women:clothing:sports bras" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-sports-bras-40qgmz5e1x6" data-pre="ILink">
                    Sports Bras
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Clothing, Tops & T-Shirts" tabIndex={-1} data-nav="2,2,3" data-type="click_navShoppingMenu" data-path="women:clothing:tops & t-shirts" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-tops-t-shirts-5e1x6z9om13" data-pre="ILink">
                    Tops &amp; T-Shirts
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Clothing, Shorts" tabIndex={-1} data-nav="2,2,4" data-type="click_navShoppingMenu" data-path="women:clothing:shorts" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-shorts-38fphz5e1x6" data-pre="ILink">
                    Shorts
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Clothing, Hoodies & Sweatshirts" tabIndex={-1} data-nav="2,2,5" data-type="click_navShoppingMenu" data-path="women:clothing:hoodies & sweatshirts" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-hoodies-pullovers-5e1x6z6rive" data-pre="ILink">
                    Hoodies &amp; Sweatshirts
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Clothing, Jackets & Vests" tabIndex={-1} data-nav="2,2,6" data-type="click_navShoppingMenu" data-path="women:clothing:jackets & vests" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-jackets-vests-50r7yz5e1x6" data-pre="ILink">
                    Jackets &amp; Vests
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Clothing, Swimwear" tabIndex={-1} data-nav="2,2,7" data-type="click_navShoppingMenu" data-path="women:clothing:swimwear" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-surf-swimwear-5e1x6zq3un" data-pre="ILink">
                    Swimwear
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Clothing, Nike Pro" tabIndex={-1} data-nav="2,2,8" data-type="click_navShoppingMenu" data-path="women:clothing:nike pro" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-nike-pro-3cqxfz5e1x6" data-pre="ILink">
                    Nike Pro
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Clothing, Plus Size" tabIndex={-1} data-nav="2,2,9" data-type="click_navShoppingMenu" data-path="women:clothing:plus size" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-plus-size-clothing-5e1x6z6ymx6z8mjm2" data-pre="ILink">
                    Plus Size
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Clothing, Skirts & Dresses" tabIndex={-1} data-nav="2,2,10" data-type="click_navShoppingMenu" data-path="women:clothing:skirts & dresses" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-skirts-dresses-5e1x6z8y3qp" data-pre="ILink">
                    Skirts &amp; Dresses
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Clothing, Nike Maternity" tabIndex={-1} data-nav="2,2,11" data-type="click_navShoppingMenu" data-path="women:clothing:maternity" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-maternity-clothing-5e1x6z6ymx6zfl9s" data-pre="ILink">
                    Nike Maternity
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Clothing, Yoga" tabIndex={-1} data-nav="2,2,12" data-type="click_navShoppingMenu" data-path="women:clothing:yoga" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-yoga-clothing-5e1x6z6ymx6zanrlj" data-pre="ILink">
                    Yoga
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Clothing, Socks" tabIndex={-1} data-nav="2,2,13" data-type="click_navShoppingMenu" data-path="women:clothing:socks" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-socks-5e1x6z7ny3q" data-pre="ILink">
                    Socks
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Clothing, All Clothing" tabIndex={-1} data-nav="2,2,14" data-type="click_navShoppingMenu" data-path="women:clothing:all clothing" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-clothing-5e1x6z6ymx6" data-pre="ILink">
                    All Clothing
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Accessories & Equipment" tabIndex={-1} data-nav="2,2,15" data-type="click_navShoppingMenu" data-path="women:accessories & equipment" className="pre-menu-item d-sm-h is-static is-header headline-5" href="https://www.nike.com/w/womens-accessories-equipment-5e1x6zawwpw" data-pre="ILink">
                    Accessories &amp; Equipment
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Accessories & Equipment, Bags & Backpacks" tabIndex={-1} data-nav="2,2,16" data-type="click_navShoppingMenu" data-path="women:accessories & equipment:bags & backpacks" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-bags-and-backpacks-5e1x6z9xy71" data-pre="ILink">
                    Bags &amp; Backpacks
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Accessories & Equipment, Hats, Visors & Headbands" tabIndex={-1} data-nav="2,2,17" data-type="click_navShoppingMenu" data-path="women:accessories & equipment:hats, visors & headbands" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-hats-visors-headbands-52r49z5e1x6" data-pre="ILink">
                    Hats, Visors &amp; Headbands
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Accessories & Equipment, Apple Watch Nike" tabIndex={-1} data-nav="2,2,18" data-type="click_navShoppingMenu" data-path="women:accessories & equipment:apple watch nike" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-watches-2axv8z5e1x6" data-pre="ILink">
                    Apple Watch Nike
                  </a>
                </div>
                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                  <button role="menuitem" aria-label="main-menu, Women, Shop Collection" tabIndex={-1} data-nav="2,3,0" data-type="click_navShoppingMenu" data-path="women:shop collection" className="nav-btn p0-sm pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">
                    Shop Collection
                  </button>
                  <a role="menuitem" aria-label="main-menu, Women, Shop Collection, Running" tabIndex={-1} data-nav="2,3,1" data-type="click_navShoppingMenu" data-path="women:shop collection:running" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/running" data-pre="ILink">
                    Running
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Shop Collection, Golf" tabIndex={-1} data-nav="2,3,2" data-type="click_navShoppingMenu" data-path="women:shop collection:golf" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/golf" data-pre="ILink">
                    Golf
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Shop Collection, Soccer" tabIndex={-1} data-nav="2,3,3" data-type="click_navShoppingMenu" data-path="women:shop collection:soccer" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/soccer" data-pre="ILink">
                    Soccer
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Shop Collection, Jordan" tabIndex={-1} data-nav="2,3,4" data-type="click_navShoppingMenu" data-path="women:shop collection:jordan" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/jordan" data-pre="ILink">
                    Jordan
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Shop Collection, Training & Gym" tabIndex={-1} data-nav="2,3,5" data-type="click_navShoppingMenu" data-path="women:shop collection:training and gym" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/training" data-pre="ILink">
                    Training &amp; Gym
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Shop Collection, Tennis" tabIndex={-1} data-nav="2,3,6" data-type="click_navShoppingMenu" data-path="women:shop collection:tennis" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/tennis" data-pre="ILink">
                    Tennis
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Shop Collection, Nike Sportswear" tabIndex={-1} data-nav="2,3,7" data-type="click_navShoppingMenu" data-path="women:shop collection:sportswear" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/sportswear" data-pre="ILink">
                    Nike Sportswear
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Shop Collection, ACG" tabIndex={-1} data-nav="2,3,8" data-type="click_navShoppingMenu" data-path="women:shop collection:acg" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/acg" data-pre="ILink">
                    ACG
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Shop Collection, NikeLab" tabIndex={-1} data-nav="2,3,9" data-type="click_navShoppingMenu" data-path="women:shop collection:nikelab" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/nikelab" data-pre="ILink">
                    NikeLab
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Shop Collection, Volleyball" tabIndex={-1} data-nav="2,3,10" data-type="click_navShoppingMenu" data-path="women:shop collection:volleyball" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-volleyball-5e1x6ztc2u" data-pre="ILink">
                    Volleyball
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Shop Collection, Basketball" tabIndex={-1} data-nav="2,3,11" data-type="click_navShoppingMenu" data-path="women:shop collection:basketall" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/basketball" data-pre="ILink">
                    Basketball
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Shop Collection, Softball" tabIndex={-1} data-nav="2,3,12" data-type="click_navShoppingMenu" data-path="women:shop collection:softball" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-softball-2dlpvz5e1x6" data-pre="ILink">
                    Softball
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Shop Collection, Skateboarding" tabIndex={-1} data-nav="2,3,13" data-type="click_navShoppingMenu" data-path="women:shop collection:skateboarding" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/skateboarding" data-pre="ILink">
                    Skateboarding
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Shop Collection, Lacrosse" tabIndex={-1} data-nav="2,3,14" data-type="click_navShoppingMenu" data-path="women:shop collection:lacrosse" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-lacrosse-4nvmrz5e1x6" data-pre="ILink">
                    Lacrosse
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Shop Collection, Fan Gear" tabIndex={-1} data-nav="2,3,15" data-type="click_navShoppingMenu" data-path="women:shop collection:fan gear" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/fan-gear" data-pre="ILink">
                    Fan Gear
                  </a>
                  <a role="menuitem" aria-label="main-menu, Women, Shop Collection, Nike FlyEase" tabIndex={-1} data-nav="2,3,16" data-type="click_navShoppingMenu" data-path="women:shop collection:nike flyease" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/flyease" data-pre="ILink">
                    Nike FlyEase
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className={this.state.kidsClassName} onMouseEnter={this.kidsEnter}
              onMouseLeave={this.kidsLeave}>
            <a aria-label="Kids" data-nav="3,0,-1" role="menu" aria-expanded="false" aria-controls="DesktopMenu-0-3-0" data-type="click_navShoppingMenu" data-path="kids" className="pre-desktop-menu-link headline-5 prl3-lg pt4-sm d-sm-b no-outline" href="https://www.nike.com/kids" data-pre="ILink">
              Kids
            </a>
            <div id="DesktopMenu-0-3-0" className="pre-desktop-menu-dropdown bg-white p10-sm pt4-sm ncss-container" role="menu">
              <div className="pre-columns-container ncss-row">
                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2">
                  <button role="menuitem" aria-label="main-menu, Kids, New & Featured" tabIndex={-1} data-nav="3,0,0" data-type="click_navShoppingMenu" data-path="kids:new & featured" className="nav-btn p0-sm pre-menu-item is-static is-header headline-5" data-pre="ILink">
                    New &amp; Featured
                  </button>
                  <a role="menuitem" aria-label="main-menu, Kids, New & Featured, New Releases" tabIndex={-1} data-nav="3,0,1" data-type="click_navShoppingMenu" data-path="kids:new & featured:kids new releases" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/new-kids-3n82yzv4dh" data-pre="ILink">
                    New Releases
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, New & Featured, Best Sellers" tabIndex={-1} data-nav="3,0,2" data-type="click_navShoppingMenu" data-path="kids:new & featured:best sellers" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/kids-best-76m50zv4dh" data-pre="ILink">
                    Best Sellers
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, New & Featured, Best of Air Max" tabIndex={-1} data-nav="3,0,3" data-type="click_navShoppingMenu" data-path="kids:new & featured:best of air max" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/kids-air-max-a6d8hzv4dh" data-pre="ILink">
                    Best of Air Max
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, New & Featured, Play-All-Day Essentials" tabIndex={-1} data-nav="3,0,4" data-type="click_navShoppingMenu" data-path="kids:new & featured:play all day essentials" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/kids-workout-essentials-8e0y5zv4dh" data-pre="ILink">
                    Play-All-Day Essentials
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, New & Featured, Mini Me" tabIndex={-1} data-nav="3,0,5" data-type="click_navShoppingMenu" data-path="kids:new & featured:mini me" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mini-me-1qcqh" data-pre="ILink">
                    Mini Me
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, New & Featured, Sale - Up to 40% Off" tabIndex={-1} data-nav="3,0,6" data-type="click_navShoppingMenu" data-path="kids:new & featured:sale up to 50 off" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/kids-sale-3yaepzv4dh" data-pre="ILink">
                    Sale - Up to 40% Off
                  </a>
                </div>
                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                  <a role="menuitem" aria-label="main-menu, Kids, Boys Shoes" tabIndex={-1} data-nav="3,1,0" data-type="click_navShoppingMenu" data-path="kids:boys shoes" className="pre-menu-item d-sm-h is-static is-header headline-5" href="https://www.nike.com/w/boys-shoes-1onrazy7ok" data-pre="ILink">
                    Boys Shoes
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Boys Shoes, Big Kids (3.5Y - 7Y)" tabIndex={-1} data-nav="3,1,1" data-type="click_navShoppingMenu" data-path="kids:boys shoes:big kids footwear" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/big-boys-shoes-1onrazagibjzy7ok" data-pre="ILink">
                    Big Kids (3.5Y - 7Y)
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Boys Shoes, Little Kids (10.5C - 3Y)" tabIndex={-1} data-nav="3,1,2" data-type="click_navShoppingMenu" data-path="kids:boys shoes:little kids footwear" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/little-boys-shoes-1onraz6dacezy7ok" data-pre="ILink">
                    Little Kids (10.5C - 3Y)
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Boys Shoes, Baby & Toddler (0C - 10C)" tabIndex={-1} data-nav="3,1,3" data-type="click_navShoppingMenu" data-path="kids:boys shoes:infants and toddlers footwear" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/baby-toddler-boys-shoes-1onraz2j488zy7ok" data-pre="ILink">
                    Baby &amp; Toddler (0C - 10C)
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Boys Shoes, Lifestyle" tabIndex={-1} data-nav="3,1,4" data-type="click_navShoppingMenu" data-path="kids:boys shoes:lifestyle" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/boys-lifestyle-shoes-13jrmz1onrazy7ok" data-pre="ILink">
                    Lifestyle
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Boys Shoes, Running" tabIndex={-1} data-nav="3,1,5" data-type="click_navShoppingMenu" data-path="kids:boys shoes:running" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/boys-running-shoes-1onraz37v7jzy7ok" data-pre="ILink">
                    Running
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Boys Shoes, Basketball" tabIndex={-1} data-nav="3,1,6" data-type="click_navShoppingMenu" data-path="kids:boys shoes:basketball" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/boys-basketball-shoes-1onraz3glsmzy7ok" data-pre="ILink">
                    Basketball
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Boys Shoes, All Shoes" tabIndex={-1} data-nav="3,1,7" data-type="click_navShoppingMenu" data-path="kids:boys shoes:boys footwear" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/boys-shoes-1onrazy7ok" data-pre="ILink">
                    All Shoes
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Boys Clothing" tabIndex={-1} data-nav="3,1,8" data-type="click_navShoppingMenu" data-path="kids:boys clothing" className="pre-menu-item d-sm-h is-static is-header headline-5" href="https://www.nike.com/w/boys-clothing-1onraz6ymx6" data-pre="ILink">
                    Boys Clothing
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Boys Clothing, Big Kids (XS - XL)" tabIndex={-1} data-nav="3,1,9" data-type="click_navShoppingMenu" data-path="kids:boys clothing:big kids clothing" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/big-boys-clothing-1onraz6ymx6zagibj" data-pre="ILink">
                    Big Kids (XS - XL)
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Boys Clothing, Little Kids (4 - 7)" tabIndex={-1} data-nav="3,1,10" data-type="click_navShoppingMenu" data-path="kids:boys clothing:little kids clothing" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/little-boys-clothing-1onraz6dacez6ymx6" data-pre="ILink">
                    Little Kids (4 - 7)
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Boys Clothing, Baby & Toddler (0M - 4T)" tabIndex={-1} data-nav="3,1,11" data-type="click_navShoppingMenu" data-path="kids:boys clothing:infants and toddlers clothing" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/baby-toddler-boys-clothing-1onraz2j488z6ymx6" data-pre="ILink">
                    Baby &amp; Toddler (0M - 4T)
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Boys Clothing, Hoodies & Sweatshirts" tabIndex={-1} data-nav="3,1,12" data-type="click_navShoppingMenu" data-path="kids:boys clothing:hoodies and sweatshirts" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/boys-hoodies-pullovers-1onraz6rive" data-pre="ILink">
                    Hoodies &amp; Sweatshirts
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Boys Clothing, Pants & Tights" tabIndex={-1} data-nav="3,1,13" data-type="click_navShoppingMenu" data-path="kids:boys clothing:pants and tights" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/boys-pants-tights-1onraz2kq19" data-pre="ILink">
                    Pants &amp; Tights
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Boys Clothing, Jackets " tabIndex={-1} data-nav="3,1,14" data-type="click_navShoppingMenu" data-path="kids:boys clothing:jackets and vests" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/boys-jackets-vests-1onraz50r7y" data-pre="ILink">
                    Jackets
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Boys Clothing, Tops & T-Shirts" tabIndex={-1} data-nav="3,1,15" data-type="click_navShoppingMenu" data-path="kids:boys clothing:tops and t shirts" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/boys-tops-t-shirts-1onraz9om13" data-pre="ILink">
                    Tops &amp; T-Shirts
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Boys Clothing, Nike Pro & Baselayer" tabIndex={-1} data-nav="3,1,16" data-type="click_navShoppingMenu" data-path="kids:boys clothing:compression and baselayer" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/boys-compression-baselayer-1onraz4pwb" data-pre="ILink">
                    Nike Pro &amp; Baselayer
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Boys Clothing, Shorts" tabIndex={-1} data-nav="3,1,17" data-type="click_navShoppingMenu" data-path="kids:boys clothing:shorts" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/boys-shorts-1onraz38fph" data-pre="ILink">
                    Shorts
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Boys Clothing, All Clothing" tabIndex={-1} data-nav="3,1,18" data-type="click_navShoppingMenu" data-path="kids:boys clothing:boys clothing" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/boys-clothing-1onraz6ymx6" data-pre="ILink">
                    All Clothing
                  </a>
                </div>
                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                  <a role="menuitem" aria-label="main-menu, Kids, Girls Shoes" tabIndex={-1} data-nav="3,2,0" data-type="click_navShoppingMenu" data-path="kids:girls shoes" className="pre-menu-item d-sm-h is-static is-header headline-5" href="https://www.nike.com/w/girls-shoes-3aqegzy7ok" data-pre="ILink">
                    Girls Shoes
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Girls Shoes, Big Kids (3.5Y - 7Y)" tabIndex={-1} data-nav="3,2,1" data-type="click_navShoppingMenu" data-path="kids:girls shoes:girls footwear" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/big-girls-shoes-3aqegzagibjzy7ok" data-pre="ILink">
                    Big Kids (3.5Y - 7Y)
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Girls Shoes, Little Kids (10.5C - 3Y)" tabIndex={-1} data-nav="3,2,2" data-type="click_navShoppingMenu" data-path="kids:girls shoes:little kids footwear" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/little-girls-shoes-3aqegz6dacezy7ok" data-pre="ILink">
                    Little Kids (10.5C - 3Y)
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Girls Shoes, Baby & Toddler (0C - 10C)" tabIndex={-1} data-nav="3,2,3" data-type="click_navShoppingMenu" data-path="kids:girls shoes:infants and toddlers footwear" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/baby-toddler-girls-shoes-2j488z3aqegzy7ok" data-pre="ILink">
                    Baby &amp; Toddler (0C - 10C)
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Girls Shoes, Lifestyle" tabIndex={-1} data-nav="3,2,4" data-type="click_navShoppingMenu" data-path="kids:girls shoes:lifestyle" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/girls-lifestyle-shoes-13jrmz3aqegzy7ok" data-pre="ILink">
                    Lifestyle
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Girls Shoes, Running" tabIndex={-1} data-nav="3,2,5" data-type="click_navShoppingMenu" data-path="kids:girls shoes:running" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/girls-running-shoes-37v7jz3aqegzy7ok" data-pre="ILink">
                    Running
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Girls Shoes, Basketball" tabIndex={-1} data-nav="3,2,6" data-type="click_navShoppingMenu" data-path="kids:girls shoes:basketball" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/girls-basketball-shoes-3aqegz3glsmzy7ok" data-pre="ILink">
                    Basketball
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Girls Shoes, All Shoes" tabIndex={-1} data-nav="3,2,7" data-type="click_navShoppingMenu" data-path="kids:girls shoes:girls footwear" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/girls-shoes-3aqegzy7ok" data-pre="ILink">
                    All Shoes
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Girls Clothing" tabIndex={-1} data-nav="3,2,8" data-type="click_navShoppingMenu" data-path="kids:girls clothing" className="pre-menu-item d-sm-h is-static is-header headline-5" href="https://www.nike.com/w/girls-clothing-3aqegz6ymx6" data-pre="ILink">
                    Girls Clothing
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Girls Clothing, Big Kids (XS - XL)" tabIndex={-1} data-nav="3,2,9" data-type="click_navShoppingMenu" data-path="kids:girls clothing:big kids clothing" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/big-girls-clothing-3aqegz6ymx6zagibj" data-pre="ILink">
                    Big Kids (XS - XL)
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Girls Clothing, Little Kids (4T - 7)" tabIndex={-1} data-nav="3,2,10" data-type="click_navShoppingMenu" data-path="kids:girls clothing:little kids clothing" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/little-girls-clothing-3aqegz6dacez6ymx6" data-pre="ILink">
                    Little Kids (4T - 7)
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Girls Clothing, Baby & Toddler (0M - 4T)" tabIndex={-1} data-nav="3,2,11" data-type="click_navShoppingMenu" data-path="kids:girls clothing:infants and toddlers clothing" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/baby-toddler-girls-clothing-2j488z3aqegz6ymx6" data-pre="ILink">
                    Baby &amp; Toddler (0M - 4T)
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Girls Clothing, Hoodies & Sweatshirts" tabIndex={-1} data-nav="3,2,12" data-type="click_navShoppingMenu" data-path="kids:girls clothing:hoodies and sweatshirts" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/girls-hoodies-pullovers-3aqegz6rive" data-pre="ILink">
                    Hoodies &amp; Sweatshirts
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Girls Clothing, Pants & Tights" tabIndex={-1} data-nav="3,2,13" data-type="click_navShoppingMenu" data-path="kids:girls clothing:pants and tights" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/girls-pants-tights-2kq19z3aqeg" data-pre="ILink">
                    Pants &amp; Tights
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Girls Clothing, Jackets " tabIndex={-1} data-nav="3,2,14" data-type="click_navShoppingMenu" data-path="kids:girls clothing:jackets and vests" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/girls-jackets-vests-3aqegz50r7y" data-pre="ILink">
                    Jackets
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Girls Clothing, Tops & T-Shirts" tabIndex={-1} data-nav="3,2,15" data-type="click_navShoppingMenu" data-path="kids:girls clothing:tops and t shirts" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/girls-tops-t-shirts-3aqegz9om13" data-pre="ILink">
                    Tops &amp; T-Shirts
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Girls Clothing, Sports Bras" tabIndex={-1} data-nav="3,2,16" data-type="click_navShoppingMenu" data-path="kids:girls clothing:girls clothing" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/girls-sports-bras-3aqegz40qgm" data-pre="ILink">
                    Sports Bras
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Girls Clothing, Shorts" tabIndex={-1} data-nav="3,2,17" data-type="click_navShoppingMenu" data-path="kids:girls clothing:shorts" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/girls-shorts-38fphz3aqeg" data-pre="ILink">
                    Shorts
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Girls Clothing, All Clothing" tabIndex={-1} data-nav="3,2,18" data-type="click_navShoppingMenu" data-path="kids:girls clothing:clothing" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/girls-clothing-3aqegz6ymx6" data-pre="ILink">
                    All Clothing
                  </a>
                </div>
                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2">
                  <a role="menuitem" aria-label="main-menu, Kids, Baby & Toddler" tabIndex={-1} data-nav="3,3,0" data-type="click_navShoppingMenu" data-path="kids:baby & toddler" className="pre-menu-item is-static is-header headline-5" href="https://www.nike.com/w/baby-toddler-kids-2j488zv4dh" data-pre="ILink">
                    Baby &amp; Toddler
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Baby & Toddler, Baby Girl" tabIndex={-1} data-nav="3,3,1" data-type="click_navShoppingMenu" data-path="kids:baby & toddler:baby girl" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/baby-toddler-girls-2j488z3aqeg" data-pre="ILink">
                    Baby Girl
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Baby & Toddler, Baby Boy" tabIndex={-1} data-nav="3,3,2" data-type="click_navShoppingMenu" data-path="kids:baby & toddler:baby boy" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/baby-toddler-boys-1onraz2j488" data-pre="ILink">
                    Baby Boy
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Baby & Toddler, All Clothing (0M - 4T)" tabIndex={-1} data-nav="3,3,3" data-type="click_navShoppingMenu" data-path="kids:baby & toddler:all clothing (0m - 4t)" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/baby-toddler-kids-clothing-2j488z6ymx6zv4dh" data-pre="ILink">
                    All Clothing (0M - 4T)
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Baby & Toddler, All Shoes (0C - 10C)" tabIndex={-1} data-nav="3,3,4" data-type="click_navShoppingMenu" data-path="kids:baby & toddler:all shoes (0c - 10c)" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/baby-toddler-kids-shoes-2j488zv4dhzy7ok" data-pre="ILink">
                    All Shoes (0C - 10C)
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Baby & Toddler, Baby Box Sets" tabIndex={-1} data-nav="3,3,5" data-type="click_navShoppingMenu" data-path="kids:baby & toddler:baby box sets" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/kids-box-sets-11t64zv4dh" data-pre="ILink">
                    Baby Box Sets
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Accessories & Equipment" tabIndex={-1} data-nav="3,3,6" data-type="click_navShoppingMenu" data-path="kids:accessories and equipment" className="pre-menu-item is-static is-header headline-5" href="https://www.nike.com/w/kids-accessories-equipment-awwpwzv4dh" data-pre="ILink">
                    Accessories &amp; Equipment
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Accessories & Equipment, Bags & Backpacks" tabIndex={-1} data-nav="3,3,7" data-type="click_navShoppingMenu" data-path="kids:accessories and equipment:bags and backpacks" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/kids-bags-and-backpacks-9xy71zv4dh" data-pre="ILink">
                    Bags &amp; Backpacks
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Accessories & Equipment, Hats " tabIndex={-1} data-nav="3,3,8" data-type="click_navShoppingMenu" data-path="kids:accessories and equipment:hats visors and headbands" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/kids-hats-visors-headbands-52r49zv4dh" data-pre="ILink">
                    Hats
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Accessories & Equipment, Socks" tabIndex={-1} data-nav="3,3,9" data-type="click_navShoppingMenu" data-path="kids:accessories and equipment:socks" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/kids-socks-7ny3qzv4dh" data-pre="ILink">
                    Socks
                  </a>
                  <button role="menuitem" aria-label="main-menu, Kids, Shop Collection" tabIndex={-1} data-nav="3,3,10" data-type="click_navShoppingMenu" data-path="kids:shop collection" className="nav-btn p0-sm pre-menu-item is-static is-header headline-5" data-pre="ILink">
                    Shop Collection
                  </button>
                  <a role="menuitem" aria-label="main-menu, Kids, Shop Collection, Rep Your City" tabIndex={-1} data-nav="3,3,11" data-type="click_navShoppingMenu" data-path="kids:shop collection:rep your city" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/kids-city-pack-38gfgzv4dh" data-pre="ILink">
                    Rep Your City
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Shop Collection, Nike Adventure Club" tabIndex={-1} data-nav="3,3,12" data-type="click_navShoppingMenu" data-path="kids:shop collection:adventure club" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/nike-adventure-club" data-pre="ILink">
                    Nike Adventure Club
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Shop Collection, Boots" tabIndex={-1} data-nav="3,3,13" data-type="click_navShoppingMenu" data-path="kids:shop collection:boots" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/kids-boots-9uquxzv4dh" data-pre="ILink">
                    Boots
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Shop Collection, Sandals & Slides" tabIndex={-1} data-nav="3,3,14" data-type="click_navShoppingMenu" data-path="kids:shop collection:sandals & slides" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/kids-sandals-slides-fl76zv4dh" data-pre="ILink">
                    Sandals &amp; Slides
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Shop Collection, Jordan Kids" tabIndex={-1} data-nav="3,3,15" data-type="click_navShoppingMenu" data-path="kids:shop collection:jordan kids" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/kids-jordan-37eefzv4dh" data-pre="ILink">
                    Jordan Kids
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Shop Collection, Fan Gear" tabIndex={-1} data-nav="3,3,16" data-type="click_navShoppingMenu" data-path="kids:shop collection:fan gear" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/fan-gear" data-pre="ILink">
                    Fan Gear
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Shop Collection, Nike FlyEase" tabIndex={-1} data-nav="3,3,17" data-type="click_navShoppingMenu" data-path="kids:shop collection:nike flyease" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/kids-flyease-shoes-1eghpzv4dhzy7ok" data-pre="ILink">
                    Nike FlyEase
                  </a>
                  <a role="menuitem" aria-label="main-menu, Kids, Shop Collection, Shoes $80 & Under" tabIndex={-1} data-nav="3,3,18" data-type="click_navShoppingMenu" data-path="kids:shop collection:shoes 80 and under" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/kids-100-and-under-3s37kzv4dh" data-pre="ILink">
                    Shoes $80 &amp; Under
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className={this.state.customizeClassName} onMouseEnter={this.customizeEnter}
              onMouseLeave={this.customizeLeave}>
            <a aria-label="Customize" data-nav="4,0,-1" role="menu" aria-expanded="false" aria-controls="DesktopMenu-0-4-0" data-type="click_navShoppingMenu" data-path="customize" className="pre-desktop-menu-link headline-5 prl3-lg pt4-sm d-sm-b no-outline" href="https://www.nike.com/nike-by-you" data-pre="ILink">
              Customize
            </a>
            <div id="DesktopMenu-0-4-0" className="pre-desktop-menu-dropdown bg-white p10-sm pt4-sm ncss-container" role="menu">
              <div className="pre-columns-container ncss-row">
                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                  <button role="menuitem" aria-label="main-menu, Customize, New & Featured" tabIndex={-1} data-nav="4,0,0" data-type="click_navShoppingMenu" data-path="customize:new & featured" className="nav-btn p0-sm pre-menu-item d-sm-h is-static is-header headline-5" data-pre="ILink">
                    New &amp; Featured
                  </button>
                  <a role="menuitem" aria-label="main-menu, Customize, New & Featured, Customize with Nike By You" tabIndex={-1} data-nav="4,0,1" data-type="click_navShoppingMenu" data-path="customize:new & featured:customize with nike by you" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/nike-by-you" data-pre="ILink">
                    Customize with Nike By You
                  </a>
                  <a role="menuitem" aria-label="main-menu, Customize, New & Featured, Nike By You New Releases" tabIndex={-1} data-nav="4,0,2" data-type="click_navShoppingMenu" data-path="customize:new & featured:nike by you new releases" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/new-nike-by-you-3n82yz6ealh" data-pre="ILink">
                    Nike By You New Releases
                  </a>
                  <a role="menuitem" aria-label="main-menu, Customize, New & Featured, Basketball By You" tabIndex={-1} data-nav="4,0,3" data-type="click_navShoppingMenu" data-path="customize:new & featured:basketball by you" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/nike-by-you-basketball-3glsmz6ealh" data-pre="ILink">
                    Basketball By You
                  </a>
                  <a role="menuitem" aria-label="main-menu, Customize, New & Featured, Blazer By You" tabIndex={-1} data-nav="4,0,4" data-type="click_navShoppingMenu" data-path="customize:new & featured:customize with nike by you" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/nike-by-you-blazer-shoes-6ealhz9gw3azy7ok" data-pre="ILink">
                    Blazer By You
                  </a>
                  <a role="menuitem" aria-label="main-menu, Customize, New & Featured, Air Max By You" tabIndex={-1} data-nav="4,0,5" data-type="click_navShoppingMenu" data-path="customize:new & featured:air max by you" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/nike-by-you-air-max-shoes-6ealhza6d8hzy7ok" data-pre="ILink">
                    Air Max By You
                  </a>
                </div>
                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                  <a role="menuitem" aria-label="main-menu, Customize, Mens" tabIndex={-1} data-nav="4,1,0" data-type="click_navShoppingMenu" data-path="customize:mens" className="pre-menu-item d-sm-h is-static is-header headline-5" href="https://www.nike.com/w/mens-nike-by-you-shoes-6ealhznik1zy7ok" data-pre="ILink">
                    Mens
                  </a>
                  <a role="menuitem" aria-label="main-menu, Customize, Mens, Basketball" tabIndex={-1} data-nav="4,1,1" data-type="click_navShoppingMenu" data-path="customize:mens:basketball" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-nike-by-you-basketball-shoes-3glsmz6ealhznik1zy7ok" data-pre="ILink">
                    Basketball
                  </a>
                  <a role="menuitem" aria-label="main-menu, Customize, Mens, Lifestyle" tabIndex={-1} data-nav="4,1,2" data-type="click_navShoppingMenu" data-path="customize:mens:lifestyle" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-nike-by-you-lifestyle-shoes-13jrmz6ealhznik1zy7ok" data-pre="ILink">
                    Lifestyle
                  </a>
                  <a role="menuitem" aria-label="main-menu, Customize, Mens, Running" tabIndex={-1} data-nav="4,1,3" data-type="click_navShoppingMenu" data-path="customize:mens:running" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-nike-by-you-running-shoes-37v7jz6ealhznik1zy7ok" data-pre="ILink">
                    Running
                  </a>
                  <a role="menuitem" aria-label="main-menu, Customize, Mens, Football" tabIndex={-1} data-nav="4,1,4" data-type="click_navShoppingMenu" data-path="customize:mens:football" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-nike-by-you-football-shoes-3hj8mz6ealhznik1zy7ok" data-pre="ILink">
                    Football
                  </a>
                  <a role="menuitem" aria-label="main-menu, Customize, Mens, Training & Gym" tabIndex={-1} data-nav="4,1,5" data-type="click_navShoppingMenu" data-path="customize:mens:training and gym" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-nike-by-you-training-gym-shoes-58jtoz6ealhznik1zy7ok" data-pre="ILink">
                    Training &amp; Gym
                  </a>
                  <a role="menuitem" aria-label="main-menu, Customize, Mens, Soccer" tabIndex={-1} data-nav="4,1,6" data-type="click_navShoppingMenu" data-path="customize:mens:soccer" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-nike-by-you-soccer-shoes-1gdj0z6ealhznik1zy7ok" data-pre="ILink">
                    Soccer
                  </a>
                  <a role="menuitem" aria-label="main-menu, Customize, Mens, Baseball" tabIndex={-1} data-nav="4,1,7" data-type="click_navShoppingMenu" data-path="customize:mens:baseball" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-nike-by-you-baseball-shoes-6ealhz99fchznik1zy7ok" data-pre="ILink">
                    Baseball
                  </a>
                  <a role="menuitem" aria-label="main-menu, Customize, Mens, Skateboarding" tabIndex={-1} data-nav="4,1,8" data-type="click_navShoppingMenu" data-path="customize:mens:skateboarding nby" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-nike-by-you-skateboarding-shoes-6ealhz8mfrfznik1zy7ok" data-pre="ILink">
                    Skateboarding
                  </a>
                </div>
                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                  <a role="menuitem" aria-label="main-menu, Customize, Womens" tabIndex={-1} data-nav="4,2,0" data-type="click_navShoppingMenu" data-path="customize:womens" className="pre-menu-item d-sm-h is-static is-header headline-5" href="https://www.nike.com/w/womens-nike-by-you-shoes-5e1x6z6ealhzy7ok" data-pre="ILink">
                    Womens
                  </a>
                  <a role="menuitem" aria-label="main-menu, Customize, Womens, Lifestyle" tabIndex={-1} data-nav="4,2,1" data-type="click_navShoppingMenu" data-path="customize:womens:lifestyle" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-nike-by-you-lifestyle-shoes-13jrmz5e1x6z6ealhzy7ok" data-pre="ILink">
                    Lifestyle
                  </a>
                  <a role="menuitem" aria-label="main-menu, Customize, Womens, Running" tabIndex={-1} data-nav="4,2,2" data-type="click_navShoppingMenu" data-path="customize:womens:running" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-nike-by-you-running-shoes-37v7jz5e1x6z6ealhzy7ok" data-pre="ILink">
                    Running
                  </a>
                  <a role="menuitem" aria-label="main-menu, Customize, Womens, Training & Gym" tabIndex={-1} data-nav="4,2,3" data-type="click_navShoppingMenu" data-path="customize:womens:training and gym" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-nike-by-you-training-gym-shoes-58jtoz5e1x6z6ealhzy7ok" data-pre="ILink">
                    Training &amp; Gym
                  </a>
                  <a role="menuitem" aria-label="main-menu, Customize, Womens, Basketball" tabIndex={-1} data-nav="4,2,4" data-type="click_navShoppingMenu" data-path="customize:womens:basketball" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-nike-by-you-basketball-shoes-3glsmz5e1x6z6ealhzy7ok" data-pre="ILink">
                    Basketball
                  </a>
                  <a role="menuitem" aria-label="main-menu, Customize, Womens, Soccer" tabIndex={-1} data-nav="4,2,5" data-type="click_navShoppingMenu" data-path="customize:womens:soccer" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-nike-by-you-soccer-shoes-1gdj0z5e1x6z6ealhzy7ok" data-pre="ILink">
                    Soccer
                  </a>
                  <a role="menuitem" aria-label="main-menu, Customize, Womens, Softball" tabIndex={-1} data-nav="4,2,6" data-type="click_navShoppingMenu" data-path="customize:womens:softball" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-nike-by-you-softball-shoes-2dlpvz5e1x6z6ealhzy7ok" data-pre="ILink">
                    Softball
                  </a>
                  <a role="menuitem" aria-label="main-menu, Customize, Womens, Skateboarding" tabIndex={-1} data-nav="4,2,7" data-type="click_navShoppingMenu" data-path="customize:womens:skateboarding" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-nike-by-you-skateboarding-shoes-5e1x6z6ealhz8mfrfzy7ok" data-pre="ILink">
                    Skateboarding
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className={this.state.saleClassName} onMouseEnter={this.saleEnter}
              onMouseLeave={this.saleLeave}>
            <a aria-label="Sale" data-nav="5,0,-1" role="menu" aria-expanded="false" aria-controls="DesktopMenu-0-5-0" data-type="click_navShoppingMenu" data-path="clearance" className="pre-desktop-menu-link headline-5 prl3-lg pt4-sm d-sm-b no-outline" href="https://www.nike.com/w/sale-3yaep" data-pre="ILink">
              Sale
            </a>
            <div id="DesktopMenu-0-5-0" className="pre-desktop-menu-dropdown bg-white p10-sm pt4-sm ncss-container" role="menu">
              <div className="pre-columns-container ncss-row">
                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                  <a role="menuitem" aria-label="main-menu, Sale, Sale" tabIndex={-1} data-nav="5,0,0" data-type="click_navShoppingMenu" data-path="clearance:clearance" className="pre-menu-item is-static is-header headline-5" href="https://www.nike.com/w/sale-3yaep" data-pre="ILink">
                    Sale
                  </a>
                  <a role="menuitem" aria-label="main-menu, Sale, Sale, Sale - Up to 40% Off" tabIndex={-1} data-nav="5,0,1" data-type="click_navShoppingMenu" data-path="clearance:clearance:sale up to 40 off" className="pre-menu-item is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/sale-3yaep" data-pre="ILink">
                    Sale - Up to 40% Off
                  </a>
                </div>
                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                  <a role="menuitem" aria-label="main-menu, Sale, Mens Sale" tabIndex={-1} data-nav="5,1,0" data-type="click_navShoppingMenu" data-path="clearance:mens sale" className="pre-menu-item d-sm-h is-static is-header headline-5" href="https://www.nike.com/w/mens-sale-3yaepznik1" data-pre="ILink">
                    Mens Sale
                  </a>
                  <a role="menuitem" aria-label="main-menu, Sale, Mens Sale, Shoes" tabIndex={-1} data-nav="5,1,1" data-type="click_navShoppingMenu" data-path="clearance:mens sale:shoes" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-sale-shoes-3yaepznik1zy7ok" data-pre="ILink">
                    Shoes
                  </a>
                  <a role="menuitem" aria-label="main-menu, Sale, Mens Sale, Clothing" tabIndex={-1} data-nav="5,1,2" data-type="click_navShoppingMenu" data-path="clearance:mens sale:clothing" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-sale-clothing-3yaepz6ymx6znik1" data-pre="ILink">
                    Clothing
                  </a>
                  <a role="menuitem" aria-label="main-menu, Sale, Mens Sale, Equipment" tabIndex={-1} data-nav="5,1,3" data-type="click_navShoppingMenu" data-path="clearance:mens sale:equipment" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/mens-sale-accessories-equipment-3yaepzawwpwznik1" data-pre="ILink">
                    Equipment
                  </a>
                </div>
                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                  <a role="menuitem" aria-label="main-menu, Sale, Womens Sale" tabIndex={-1} data-nav="5,2,0" data-type="click_navShoppingMenu" data-path="clearance:womens sale" className="pre-menu-item d-sm-h is-static is-header headline-5" href="https://www.nike.com/w/womens-sale-3yaepz5e1x6" data-pre="ILink">
                    Womens Sale
                  </a>
                  <a role="menuitem" aria-label="main-menu, Sale, Womens Sale, Shoes" tabIndex={-1} data-nav="5,2,1" data-type="click_navShoppingMenu" data-path="clearance:womens sale:shoes" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-sale-shoes-3yaepz5e1x6zy7ok" data-pre="ILink">
                    Shoes
                  </a>
                  <a role="menuitem" aria-label="main-menu, Sale, Womens Sale, Clothing" tabIndex={-1} data-nav="5,2,2" data-type="click_navShoppingMenu" data-path="clearance:womens sale:clothing" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-sale-clothing-3yaepz5e1x6z6ymx6" data-pre="ILink">
                    Clothing
                  </a>
                  <a role="menuitem" aria-label="main-menu, Sale, Womens Sale, Equipment" tabIndex={-1} data-nav="5,2,3" data-type="click_navShoppingMenu" data-path="clearance:womens sale:equipment" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/womens-sale-accessories-equipment-3yaepz5e1x6zawwpw" data-pre="ILink">
                    Equipment
                  </a>
                </div>
                <div className="pre-menu-column pt4-sm ta-sm-l va-sm-t ncss-col-sm-2 d-sm-h">
                  <a role="menuitem" aria-label="main-menu, Sale, Kids Sale" tabIndex={-1} data-nav="5,3,0" data-type="click_navShoppingMenu" data-path="clearance:kids sale" className="pre-menu-item d-sm-h is-static is-header headline-5" href="https://www.nike.com/w/kids-sale-3yaepzv4dh" data-pre="ILink">
                    Kids Sale
                  </a>
                  <a role="menuitem" aria-label="main-menu, Sale, Kids Sale, Shoes" tabIndex={-1} data-nav="5,3,1" data-type="click_navShoppingMenu" data-path="clearance:kids sale:shoes" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/kids-sale-shoes-3yaepzv4dhzy7ok" data-pre="ILink">
                    Shoes
                  </a>
                  <a role="menuitem" aria-label="main-menu, Sale, Kids Sale, Clothing" tabIndex={-1} data-nav="5,3,2" data-type="click_navShoppingMenu" data-path="clearance:kids sale:clothing" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/kids-sale-clothing-3yaepz6ymx6zv4dh" data-pre="ILink">
                    Clothing
                  </a>
                  <a role="menuitem" aria-label="main-menu, Sale, Kids Sale, Equipment" tabIndex={-1} data-nav="5,3,3" data-type="click_navShoppingMenu" data-path="clearance:kids sale:equipment" className="pre-menu-item d-sm-h is-static body-3 u-bold pre-text-color-secondary" href="https://www.nike.com/w/kids-sale-accessories-equipment-3yaepzawwpwzv4dh" data-pre="ILink">
                    Equipment
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
};

export default PreDesktopMenu;
