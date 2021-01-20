import React from 'react';

import LogoContainer from './Logos/LogoContainer.jsx'
import NavContainer from './Nav/NavContainer.jsx';

const PreLHeader = () => (
  <div className="pre-l-brand-header d-sm-h d-lg-b z3">
    <div className="pre-l-wrapper maut-sm d-sm-flx flx-jc-sm-sb flx-wr-sm-nw flx-dir-sm-r">
      <LogoContainer />
      <NavContainer />
    </div>
  </div>
);

export default PreLHeader;
