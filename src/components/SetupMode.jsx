import React from 'react';
import SetupWhite from './SetupWhite';
import SetupBlack from './SetupBlack';

function SetupMode({ color }) {
  if (color === 'white') {
    return <SetupWhite />
  } else if (color === 'black') {
    return <SetupBlack />
  } else {
    throw new Error(`Invalid color: ${color}`);
  }
}

export default SetupMode;





