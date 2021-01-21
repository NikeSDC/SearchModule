import React from 'react';

const PreMobileMenu = () => (
  <div className="pre-mobilemenu pre-hide d-sm-ib d-lg-h z2" data-pre="MobileMenu">
  <div data-panel-id={0} className="pre-panel pre-panel-root" data-pre="MobileMenuPanel">
    <button data-nextpanel-id={1} data-var="accountMenu" style={{display: 'none'}} className="nav-btn p0-sm pre-link pre-account-link" data-pre="ILink">
      <div className="pre-avatar" data-pre="Avatar">
        <div className="d-sm-flx flx-ai-sm-c">
          <p className="pre-avatar-name flx-order-sm-1 flx-order-lg--1 body-4 u-bold" data-var="userName" />
          <div className="icon-btn ripple">
            <svg aria-hidden="true" data-var="glyph" fill="#111" height="30px" width="30px" viewBox="0 0 24 24">
              <path d="M16.44 11A5.94 5.94 0 0 0 18 7 6 6 0 0 0 6 7a5.94 5.94 0 0 0 1.56 4A5 5 0 0 0 3 16v5a1 1 0 0 0 2 0v-5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v5a1 1 0 0 0 2 0v-5a5 5 0 0 0-4.56-5zM8 7a4 4 0 1 1 4 4 4 4 0 0 1-4-4z" />
            </svg>
            <img alt="Avatar" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" className="pre-avatar-image va-sm-m" style={{display: 'none'}} data-var="img" />
          </div>
        </div>
      </div>
      <svg className="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h" fill="#111" height="30px" width="30px" viewBox="0 0 185.4 300">
        <path d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z" />
      </svg>
    </button>
    <button data-nextpanel-id="0,0" className="nav-btn p0-sm pre-link is-static is-header" data-pre="ILink">
      <span className="pre-link-label headline-3">New Releases</span>
      <svg className="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h" fill="#111" height="30px" width="30px" viewBox="0 0 185.4 300">
        <path d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z" />
      </svg>
    </button>
    <button data-nextpanel-id="0,1" className="nav-btn p0-sm pre-link is-static is-header" data-pre="ILink">
      <span className="pre-link-label headline-3">Men</span>
      <svg className="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h" fill="#111" height="30px" width="30px" viewBox="0 0 185.4 300">
        <path d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z" />
      </svg>
    </button>
    <button data-nextpanel-id="0,2" className="nav-btn p0-sm pre-link is-static is-header" data-pre="ILink">
      <span className="pre-link-label headline-3">Women</span>
      <svg className="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h" fill="#111" height="30px" width="30px" viewBox="0 0 185.4 300">
        <path d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z" />
      </svg>
    </button>
    <button data-nextpanel-id="0,3" className="nav-btn p0-sm pre-link is-static is-header" data-pre="ILink">
      <span className="pre-link-label headline-3">Kids</span>
      <svg className="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h" fill="#111" height="30px" width="30px" viewBox="0 0 185.4 300">
        <path d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z" />
      </svg>
    </button>
    <button data-nextpanel-id="0,4" className="nav-btn p0-sm pre-link d-lg-h is-static is-header" data-pre="ILink">
      <span className="pre-link-label headline-3">Customize</span>
      <svg className="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h" fill="#111" height="30px" width="30px" viewBox="0 0 185.4 300">
        <path d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z" />
      </svg>
    </button>
    <button data-nextpanel-id="0,5" className="nav-btn p0-sm pre-link d-lg-h is-static is-header" data-pre="ILink">
      <span className="pre-link-label headline-3">Sale - Up to 40% Off</span>
      <svg className="pre-chevron chev-root pre-chevron-next d-sm-b d-lg-h" fill="#111" height="30px" width="30px" viewBox="0 0 185.4 300">
        <path d="M7.3 292.7c-9.8-9.8-9.8-25.6 0-35.4L114.6 150 7.3 42.7c-9.8-9.8-9.8-25.6 0-35.4s25.6-9.8 35.4 0L185.4 150 42.7 292.7c-4.9 4.8-11.3 7.3-17.7 7.3-6.4 0-12.7-2.5-17.7-7.3z" />
      </svg>
    </button>
    <a data-type="click_navShoppingMenu" data-path="snkrs launch calender" className="pre-link d-lg-h is-header" href="https://www.nike.com/launch/" data-pre="ILink"><span className="pre-link-label headline-3">SNKRS Calendar</span></a>
    <div className="pt4-sm">
      <div className="pre-brand-menu" data-pre="BrandMenu">
        <ul className="pt3-sm">
          <li className="d-sm-b d-lg-h va-sm-m">
            <a aria-label="Jordan" data-type="click_navBrandBar" data-path="Jordan" className="pre-brand-item pt1-sm pb2-sm" href="https://www.nike.com/jordan" data-pre="ILink">
              <span className="pre-icon-column ta-sm-c">
                <svg height="30px" width="30px" fill="#111" viewBox="0 0 26 32">
                  <path d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z" />
                </svg>
              </span>
              <p className="headline-5 d-sm-ib pl3-sm">Jordan</p>
            </a>
          </li>
          <li className="d-sm-b d-lg-h va-sm-m">
            <a aria-label="Converse" data-type="click_navBrandBar" data-path="Converse" className="pre-brand-item pt1-sm pb2-sm" href="https://www.nike.com/w/converse-shoes-akmjxzy7ok" data-pre="ILink">
              <span className="pre-icon-column ta-sm-c">
                <svg height="30px" width="30px" fill="#111" viewBox="0 0 39 33">
                  <path d="M10.94 25.626l-4.236-5.501L.201 22.28l3.734-5.756L.11 10.777l6.59 2.031 4.026-5.474.14 6.785 6.64 2.175-6.594 2.446.028 6.886zm.824 7.239l13.952-16.393L11.806.107h11.697l14.871 16.389-14.8 16.369h-11.81z" />
                </svg>
              </span>
              <p className="headline-5 d-sm-ib pl3-sm">Converse</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="pre-mobile-btn-group pre-login-light mr3-sm pt12-sm" data-pre="MobileLoginButtons">
        <span className="headline-4 text-color-secondary d-sm-b pb4-sm" id="hf_message_join_membership">
          Become a Nike Member for the best products, inspiration and stories in sport.
          <a aria-labelledby="hf_message_join_membership hf_title_learnmore_membership" data-type="click_navMembership" data-path="membership:enhanced cta" className="text-color-primary-dark" href="https://www.nike.com/membership" data-pre="ILink">
            <span id="hf_title_learnmore_membership">Learn more</span>
          </a>
        </span>
        <div className="d-sm-flx flx-wr-sm-w mt2-sm">
          <a data-type="click_navMembership" data-path="join us" className="ncss-btn-primary-dark pt2-sm pb2-sm pl6-sm pr6-sm mt2-sm mr2-sm" href="https://www.nike.com/membership" data-pre="ILink">
            <span id="hf_title_joinus_membership">Join Us</span>
          </a>
          <button data-var="loginBtn" data-type="click_navMembership" data-path="sign in" className="nav-btn p0-sm ncss-btn-secondary-dark pt2-sm pb2-sm pl6-sm pr6-sm mt2-sm" data-pre="ILink">
            <span id="hf_title_signin_membership">Sign In</span>
          </button>
        </div>
      </div>
      <div className="pre-mobile-btn-group" data-pre="MobileSupportButtons">
        <ul>
          <li className="d-sm-b d-lg-h va-sm-m pt3-sm" data-var="favoritesMenuItem" style={{display: 'none'}}>
            <a data-var="favoritesLink" aria-label="Favorites" data-type="click_navMobileShortcut" data-path="favorites" className="pre-mobile-btn" href="https://www.nike.com/favorites" data-pre="ILink">
              <span className="pre-mobile-column ta-sm-c">
                <svg height="24px" width="24px" fill="#111" viewBox="0 0 24 24">
                  <path d="M21.11 4a6.6 6.6 0 0 0-4.79-1.92A6.27 6.27 0 0 0 12 3.84 6.57 6.57 0 0 0 2.89 4c-2.8 2.68-2.45 7.3.88 10.76l6.84 6.63A2 2 0 0 0 12 22a2 2 0 0 0 1.37-.54l.2-.19.61-.57c.6-.57 1.42-1.37 2.49-2.41l2.44-2.39 1.09-1.07c3.38-3.55 3.8-8.1.91-10.83zm-2.35 9.4l-.25.24-.8.79-2.44 2.39c-1 1-1.84 1.79-2.44 2.36L12 20l-6.83-6.68c-2.56-2.66-2.86-6-.88-7.92a4.52 4.52 0 0 1 6.4 0l.09.08a2.12 2.12 0 0 1 .32.3l.9.94.9-.94.28-.27.11-.09a4.52 4.52 0 0 1 6.43 0c1.97 1.9 1.67 5.25-.96 7.98z" />
                </svg>
              </span>
              <p className="headline-5 pl3-sm">Favorites</p>
            </a>
          </li>
          <li className="d-sm-b d-lg-h va-sm-m pt3-sm">
            <div id="nav-mobileMenuCart" className="pre-acct-cart mr2-sm mr0-lg d-sm-ib" data-pre="Cart">
              <a data-var="anchor" title="Cart Items: 0" aria-label="Cart Items: 0" rel="nofollow" data-type="click_navCart" data-path="cart" className="pre-mobile-btn flx-dir-sm-r" href="https://www.nike.com/cart" data-pre="ILink">
                <div className="pre-mobile-menu-cart">
                  <svg width="24px" height="24px" fill="#111" viewBox="0 0 24 24">
                    <path d="M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z" />
                    <path d="M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z" />
                  </svg>
                  <span className="pre-jewel pre-mobileMenuCart-jewel text-color-primary-dark" style={{visibility: 'hidden'}} data-var="jewel">0</span>
                </div>
                <p className="headline-5 pl3-sm">Bag</p>
              </a>
            </div>
          </li>
          <li className="d-sm-b d-lg-h va-sm-m pt3-sm">
            <a aria-label="Orders" data-type="click_navMobileShortcut" data-path="orders" className="pre-mobile-btn" href="https://www.nike.com/orders" data-pre="ILink">
              <span className="pre-mobile-column ta-sm-c">
                <svg height="24px" width="24px" fill="#111" viewBox="0 0 1000 1000">
                  <path d="M995.6 241.3c0-4.4-4.4-4.4-4.4-8.8-4.4-4.4-8.8-4.4-8.8-8.8H978L486.9 4.5h-35.1L22 219.3h-4.4l-8.8 8.8c-3.2 3.6-4.8 8.4-4.4 13.2H.1v504.3C-1 760.8 7.9 775 22 780.7l495.5 214.9h30.7L978 780.7c13.3-6.6 21.8-20.2 21.9-35.1V254.4c.4-4.8-1.1-9.5-4.3-13.1zM469.3 83.4l399.1 175.4-122.8 61.4-399.1-175.4 122.8-61.4zm61.4 342.1L131.6 250l122.8-61.4L653.5 364l-122.8 61.5zM79 315.8l412.2 179.8V899L79 719.3V315.8zm842 403.5L570.2 894.7V495.6L921 320.2v399.1z" />
                </svg>
              </span>
              <p className="headline-5 pl3-sm">Orders</p>
            </a>
          </li>
          <li className="d-sm-b d-lg-h va-sm-m pt3-sm">
            <a aria-label="Help" data-type="click_navMobileShortcut" data-path="help" className="pre-mobile-btn" href="https://www.nike.com/help" data-pre="ILink">
              <span className="pre-mobile-column ta-sm-c">
                <svg height="24px" width="24px" fill="#111" viewBox="0 0 24 24">
                  <path d="M11.9 15.767c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1c0-.6-.5-1.1-1.1-1.1m0-9.6c-1.3 0-2.5 1.1-2.6 1.3-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0 .2-.3.8-.8 1.2-.8.5 0 1 .4 1 1 0 .3-.1.6-.4.8-1 .7-1.6 1.8-1.6 2.8v.3c0 .5.4 1 1 1s1-.4 1-1v-.3c0-.6.5-1.1.8-1.3.7-.5 1.2-1.4 1.2-2.4-.1-1.5-1.4-2.8-3-2.8" />
                  <path d="M12 23.5C5.7 23.5.5 18.3.5 12S5.7.5 12 .5 23.5 5.7 23.5 12 18.3 23.5 12 23.5zm0-21c-5.2 0-9.5 4.3-9.5 9.5s4.3 9.5 9.5 9.5 9.5-4.3 9.5-9.5-4.3-9.5-9.5-9.5z" />
                </svg>
              </span>
              <p className="headline-5 pl3-sm">Help</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div data-panel-id={1} className="pre-panel pre-hide-right pre-my-account-panel" data-pre="MobileMenuPanel">
    <button className="pre-btn-back pre-link headline-5 p0-sm mb6-sm va-sm-m" data-backpanel-id={0} data-var="backPanelBtn">
      <svg className="pre-chevron pre-chevron-back d-sm-b" fill="#111" height="30px" width="30px" viewBox="0 0 185.4 300">
        <path d="M160.4 300c-6.4 0-12.7-2.5-17.7-7.3L0 150 142.7 7.3c9.8-9.8 25.6-9.8 35.4 0 9.8 9.8 9.8 25.6 0 35.4L70.7 150 178 257.3c9.8 9.8 9.8 25.6 0 35.4-4.9 4.8-11.3 7.3-17.6 7.3z" />
      </svg>
      <span className="pre-link-label headline-5 pl4-sm"><span id="hf_title_all_menuitem">All</span></span>
    </button>
    <div className="pre-avatar mb4-sm" data-pre="Avatar">
      <div className="d-sm-flx flx-ai-sm-c"><p className="pre-avatar-name flx-order-sm-1 flx-order-lg--1 body-4 u-bold" data-var="userName" /></div>
    </div>
    <a data-type="click_navShoppingMenu" data-path="my account:profile" className="pre-link" href="https://www.nike.com/member/profile/" data-pre="ILink"><span className="pre-link-label headline-5 pre-text-color-secondary">Profile</span></a>
    <a data-type="click_navShoppingMenu" data-path="my account:orders" className="pre-link" href="https://www.nike.com/orders" data-pre="ILink"><span className="pre-link-label headline-5 pre-text-color-secondary">Orders</span></a>
    <a data-type="click_navShoppingMenu" data-path="my account:favorites" className="pre-link" href="https://www.nike.com/favorites" data-pre="ILink"><span className="pre-link-label headline-5 pre-text-color-secondary">Favorites</span></a>
    <a data-type="click_navShoppingMenu" data-path="my account:inbox" className="pre-link" href="https://www.nike.com/member/inbox" data-pre="ILink"><span className="pre-link-label headline-5 pre-text-color-secondary">Inbox</span></a>
    <a data-type="click_navShoppingMenu" data-path="my account:events" className="pre-link" href="https://web.nike.com/events/my_events/index.html#/discover" data-pre="ILink">
      <span className="pre-link-label headline-5 pre-text-color-secondary">Events</span>
    </a>
    <a data-type="click_navShoppingMenu" data-path="my account:account settings" className="pre-link" href="https://www.nike.com/member/settings" data-pre="ILink">
      <span className="pre-link-label headline-5 pre-text-color-secondary">Account Settings</span>
    </a>
    <button data-type="click_navShoppingMenu" data-path="my account:log out" className="nav-btn p0-sm pre-link is-static" data-pre="ILink"><span className="pre-link-label headline-5 pre-text-color-secondary">Log Out</span></button>
  </div>
  <template id="PreChevronNext" />
  <template id="PreChevronBack" />
</div>

);

export default PreMobileMenu;
