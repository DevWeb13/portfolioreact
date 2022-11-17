import React from 'react';
import propTypes from 'prop-types';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

function ToggleButtonMUI({ alignment, setAlignment }) {
  const handleChange = (_event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <div className="toggleButtonGroupContainer">
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        className="toggleButtonGroup"
      >
        <ToggleButton
          className={
            alignment === 'Tous' ? 'toggleButton active' : 'toggleButton'
          }
          value="Tous"
        >
          Tous
        </ToggleButton>
        <ToggleButton
          className={
            alignment === 'OpenClassrooms'
              ? 'toggleButton active'
              : 'toggleButton'
          }
          value="OpenClassrooms"
        >
          Openclassrooms
        </ToggleButton>
        <ToggleButton
          className={
            alignment === 'Personnel' ? 'toggleButton active' : 'toggleButton'
          }
          value="Personnel"
        >
          Personnel
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

ToggleButtonMUI.propTypes = {
  alignment: propTypes.string.isRequired,
  setAlignment: propTypes.func.isRequired,
};

export default ToggleButtonMUI;
