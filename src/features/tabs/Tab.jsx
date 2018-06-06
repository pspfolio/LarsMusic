import React from 'react';

const Tab = ({ name, label, active, onClick }) => (
  <div>
    <p onClick={() => onClick(name)}>{label}</p>
  </div>
);

export default Tab;
