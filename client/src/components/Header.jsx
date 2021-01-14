import React from 'react';

import LogoList from './Logolist.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="headerContainer">
        <div className="prebrandHeader z3">
          <LogoList />
        </div>
      </div>
    );
  }
}

export default Header;
