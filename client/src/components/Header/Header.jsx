import React from 'react';

import PreLHeader from './PreLHeader/PreLHeader.jsx';
import MainHeader from './MainHeader/MainHeader.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrimClassName: 'pre-scrim',
    }
    this.openScrim = this.openScrim.bind(this);
    this.closeScrim = this.closeScrim.bind(this);
  }

  openScrim() {
    this.setState({
      scrimClassName: 'pre-scrim is-open',
    })
  }

  closeScrim() {
    this.setState({
      scrimClassName: 'pre-scrim'
    })
  }

  render() {
    return (
      <div className="pre-l-header-container">
        <PreLHeader />
        <MainHeader
          openScrim={this.openScrim}
          closeScrim={this.closeScrim}/>
        <div className="pre-spacer"></div>
        <div className={this.state.scrimClassName} data-pre="Scrim"></div>
        <div id="skip-to-content"></div>
      </div>
    );
  }
}

export default Header;
