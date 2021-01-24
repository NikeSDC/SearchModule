import React from 'react';

import PreLHeader from './PreLHeader/PreLHeader.jsx';
import MainHeader from './MainHeader/MainHeader.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrimClassName: 'pre-scrim',
      preLBrandHeaderClassName: 'pre-l-brand-header d-sm-h d-lg-b z3',
      headerClassName: 'pre-l-header top-stack-context',
      closeSearchClassName: 'pre-close-search p0-sm z2 d-sm-h',
    }
    this.openScrim = this.openScrim.bind(this);
    this.closeScrim = this.closeScrim.bind(this);
    this.handleVsIsOpen = this.handleVsIsOpen.bind(this);
    this.handleVsIsClosed = this.handleVsIsClosed.bind(this);
  }

  handleVsIsOpen() {
    this.openScrim()
    this.setState({
      preLBrandHeaderClassName: 'pre-l-brand-header d-sm-h d-lg-b z3 vs-is-open',
      headerClassName: 'pre-l-header top-stack-context vs-is-open',
      closeSearchClassName: 'pre-close-search p0-sm z2',
    })
  }

  handleVsIsClosed() {
    this.closeScrim()
    this.setState({
      preLBrandHeaderClassName: 'pre-l-brand-header d-sm-h d-lg-b z3',
      headerClassName: 'pre-l-header top-stack-context',
      closeSearchClassName: 'pre-close-search p0-sm z2 d-sm-h',
    })
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
        <PreLHeader preLBrandHeaderClassName={this.state.preLBrandHeaderClassName}/>
        <MainHeader
          headerClassName={this.state.headerClassName}
          closeSearchClassName={this.state.closeSearchClassName}
          handleVsIsOpen={this.handleVsIsOpen}
          handleVsIsClosed={this.handleVsIsClosed}
          openScrim={this.openScrim}
          closeScrim={this.closeScrim}/>
        <div className="pre-spacer"></div>
        <div className={this.state.scrimClassName} onClick={this.handleVsIsClosed} data-pre="Scrim"></div>
        <div id="skip-to-content"></div>
      </div>
    );
  }
}

export default Header;
