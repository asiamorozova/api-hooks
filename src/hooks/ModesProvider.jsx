import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const LightDarkModes = createContext();

export const ModeProvider = ({ children }) => {
  const [lightDark, setLightDark] = useState('light');

  const toggle = ({ target }) => {
    if(target.checked) setLightDark('light');
    if(!target.checked) setLightDark('dark');
  };

  return (
    <LightDarkModes.Provider value={ lightDark, toggle }>
      {children}
    </LightDarkModes.Provider>
  );
};
ModeProvider.propTypes = {
  children: PropTypes.node

};
export const useToggle = () => {
  const { toggle } = useContext(LightDarkModes);
  return toggle;
};

export const useLightDark = () => {
  const { lightDark } = useContext(LightDarkModes);
  return lightDark;
};




//1) provides state for profanity checked true or false 
//2) provides a way to change the checked state aka toggle switch 
