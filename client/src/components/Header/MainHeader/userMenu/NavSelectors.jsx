import React from 'react';

import Help from './userMenu/Help.jsx';
import JoinUs from './userMenu/JoinUs.jsx';
import SignIn from './userMenu/SignIn.jsx';

class NavSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="userMenu">
        <Help />
        <span className="separator displayInline">|</span>
        <JoinUs />
        <span className="separator displayInline">|</span>
        <SignIn />
      </div>
    );
  }
}

export default NavSelector;
