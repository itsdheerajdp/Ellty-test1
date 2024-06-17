// PageCheckbox.js

import React from 'react';

const PageCheckbox = ({ id, label, checked, onChange }) => {
  return (
    <div className="page-checkbox">
      <label htmlFor={id}>{label}</label>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        style={{height:"25px",width:"25px"}}
      />
    </div>
  );
};

export default PageCheckbox;
