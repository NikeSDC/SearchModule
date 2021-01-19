import React from 'react';

import NewReleases from './MenuItems/NewReleases.jsx';
import Men from './MenuItems/Men.jsx';
import Women from './MenuItems/Women.jsx';
import Kids from './MenuItems/Kids.jsx';
import Customize from './MenuItems/Customize.jsx';
import Sale from './MenuItems/Sale.jsx';

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
