import React from 'react';

import LogoContainer from './Logos/LogoContainer.jsx'
import NavContainer from './Nav/NavContainer.jsx';

const PreLHeader = ({ preLBrandHeaderClassName }) => (
  <div className={preLBrandHeaderClassName}>
    <div className="pre-l-wrapper maut-sm d-sm-flx flx-jc-sm-sb flx-wr-sm-nw flx-dir-sm-r">
      <LogoContainer />
      <NavContainer />
    </div>
  </div>
);

export default PreLHeader;
