import React from 'react';
import NavSelectors from './NavSelectors.jsx';

import LogoList from './Logolist.jsx';
import Swoosh from './Swoosh.jsx';
import MenuSelectorsList from './MenuSelectorsList.jsx';
import LikeCartContainer from './LikeCart/LikeCartContainer.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="headerContainer headerBody">
        <div className="prebrandHeader z3">
          <LogoList />
          <NavSelectors />
        </div>

        <div className="menuWrapper">
          <Swoosh />
          <MenuSelectorsList />
          <LikeCartContainer />
        </div>

      </div>
    );
  }
}

export default Header;
