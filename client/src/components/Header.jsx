import React from 'react';
import LogoList from './Logolist.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state
  }

  render() {
    return (
      <div className="header-wrapper">
        <div className="pre-l-brand-header z3">
          <LogoList />
        </div>
      </div>
    )
  }
}

export default Header;