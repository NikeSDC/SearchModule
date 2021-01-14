import React from 'react';
import Jordan from './Jordan.jsx';
import Converse from './Converse.jsx';

let LogoList = () => (
  <div className="logoListContainer">
    <ul>
      <Jordan />
      <Converse />
    </ul>
  </div>
)

export default LogoList;