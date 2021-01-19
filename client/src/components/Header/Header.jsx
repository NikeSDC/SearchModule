import React from 'react';

import PreLHeader from './PreLHeader/PreLHeader.jsx';
import MainHeader from './MainHeader/MainHeader.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="pre-l-header-container">
        <PreLHeader />
        <MainHeader />
        <div className="pre-spacer"></div>
      </div>
    );
  }
}

export default Header;
