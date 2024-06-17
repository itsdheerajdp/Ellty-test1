// App.js

import React, { useState } from 'react';
import './App.css';
import PageCheckbox from './Components/PageCheckbox';

function App() {
  const [selectAllPages, setSelectAllPages] = useState(false);
  const [pageCheckboxes, setPageCheckboxes] = useState(
    [...Array(6)].map((_, index) => ({ id: `page${index + 1}`, checked: false }))
  );

  // Handler for toggling the "Select All Pages" checkbox
  const toggleSelectAllPages = () => {
    const newSelectAllPages = !selectAllPages;
    setSelectAllPages(newSelectAllPages);
    const updatedCheckboxes = pageCheckboxes.map(checkbox => ({
      ...checkbox,
      checked: newSelectAllPages
    }));
    setPageCheckboxes(updatedCheckboxes);
  };

  // Handler for toggling individual page checkboxes
  const handlePageCheckboxChange = (id) => {
    const updatedCheckboxes = pageCheckboxes.map(checkbox =>
      checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
    );
    setPageCheckboxes(updatedCheckboxes);
    // Update Select All Pages checkbox state based on all checkboxes being checked
    const allChecked = updatedCheckboxes.every(checkbox => checkbox.checked);
    setSelectAllPages(allChecked);
  };

  return (
    <div className="app-container">
      <div className="header">
        <label htmlFor="selectAllPages">All Pages</label>
        <input
          type="checkbox"
          id="selectAllPages"
          checked={selectAllPages}
          onChange={toggleSelectAllPages}
          style={{height:"25px",width:"25px"}}
        />
      </div>
      <hr />
      <div className="pages-list">
        {pageCheckboxes.map(checkbox => (
          <PageCheckbox
            key={checkbox.id}
            id={checkbox.id}
            label={`Page ${checkbox.id.replace('page', '')}`}
            checked={checkbox.checked}
            onChange={() => handlePageCheckboxChange(checkbox.id)}
          />
        ))}
      </div>
      <hr />
      <div className="done-button">
        <button>Done</button>
      </div>
    </div>
  );
}

export default App;
