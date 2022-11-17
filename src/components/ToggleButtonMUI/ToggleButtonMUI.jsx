import React, { Suspense, lazy } from 'react';
import propTypes from 'prop-types';

const ToggleButtonGroup = lazy(() => import('@mui/material/ToggleButtonGroup'));
const ToggleButton = lazy(() => import('@mui/material/ToggleButton'));
const Loading = lazy(() => import('../Loading/Loading'));

function ToggleButtonMUI({ alignment, setAlignment }) {
  const handleChange = (_event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <div className="toggleButtonGroupContainer">
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </div>
  );
}

ToggleButtonMUI.propTypes = {
  alignment: propTypes.string.isRequired,
  setAlignment: propTypes.func.isRequired,
};

export default ToggleButtonMUI;
