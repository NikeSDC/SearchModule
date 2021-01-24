import React from 'react';

import Swoosh from './Swoosh/Swoosh.jsx';
// import PreMobileMenu from './Menu/PreMobileMenu.jsx';
import PreDesktopMenu from './Menu/PreDesktopMenu.jsx';
import Search from './Menu/Search/Search.jsx';
import LikeCart from './LikeCart/LikeCart.jsx';

const MainHeader = ({ openScrim, closeScrim, handleVsIsOpen, handleVsIsClosed, headerClassName, closeSearchClassName }) => (
  <header className={headerClassName}>
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
          handleVsIsOpen={handleVsIsOpen}
          handleVsIsClosed={handleVsIsClosed}
          closeSearchClassName={closeSearchClassName}/>
        </div>
        <LikeCart />
      </div>
    </div>
  </header>
);

export default MainHeader;
