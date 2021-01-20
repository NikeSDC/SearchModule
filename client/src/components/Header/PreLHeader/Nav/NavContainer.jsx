import React from 'react';

import NavHelp from './NavHelp.jsx';

const Nav = () => (
  <div className="pre-desktop-usermenu d-sm-h d-md-flx flx-dir-md-r" data-pre="DesktopUserMenu">
    <NavHelp />

    <div className="d-lg-flx" data-var="desktopLoginButtons">
      <div className="pre-login-btns d-lg-flx flx-ai-lg-c" data-pre="DesktopLoginButtons">
        <a data-type="click_navMembership" data-path="join us" className="body-4 d-lg-flx flx-ai-lg-c u-bold ml2-sm mr2-sm" href="https://www.nike.com/membership" data-pre="ILink"><span>Join Us</span></a>
        <span className="ml1-sm mr1-sm body-3">|</span>
        <button data-var="loginBtn" data-type="click_navMembership" data-path="sign in" className="nav-btn p0-sm body-4 u-bold ml2-sm mr2-sm" data-pre="ILink">
          <span id="hf_title_signin_membership">Sign In</span>
        </button>
      </div>
    </div>
  </div>

);

export default Nav;
