import React from 'react';

import Swoosh from './Swoosh/Swoosh.jsx';
// import PreMobileMenu from './Menu/PreMobileMenu.jsx';
import PreDesktopMenu from './Menu/PreDesktopMenu.jsx';
import Search from './Menu/Search.jsx';
import LikeCart from './LikeCart/LikeCart.jsx';

const MainHeader = ({ openScrim, closeScrim }) => (
  <header className="pre-l-header top-stack-context">
    <div>
      <div className="pre-l-wrapper maut-sm d-sm-flx">
        <Swoosh />
        <div className="pre-l-nav-box flx-gro-sm-1">
          <nav className="pre-l-nav">
            {/* <PreMobileMenu /> */}
            <PreDesktopMenu
              openScrim={openScrim}
              closeScrim={closeScrim}/>
          </nav>
        <Search
          openScrim={openScrim}
          closeScrim={closeScrim}/>
        </div>
        <LikeCart />
      </div>
    </div>
  </header>
);

export default MainHeader;
