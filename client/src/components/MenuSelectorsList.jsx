import React from 'react';

import NewReleases from './menuItems/NewReleases.jsx';
import Men from './menuItems/Men.jsx';
import Women from './menuItems/Women.jsx';
import Kids from './menuItems/Kids.jsx';
import Customize from './menuItems/Customize.jsx';
import Sale from './menuItems/Sale.jsx';

const MenuSelectorsList = () => (
  <div className="menuSelectorBox">
    <ul className="menuList ul-ms displayInline-ms">
      <NewReleases />
      <Men />
      <Women />
      <Kids />
      <Customize />
      <Sale />
    </ul>
  </div>
);

export default MenuSelectorsList;
