import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const TrueFalseContext = createContext();

export const TrueFalseProvider = ({ children }) => {
  const [trueFalse, setTrueFalse] = useState('true');

  const toggle = ({ target }) => {
    if(target.checked) setTrueFalse('true');
    if(!target.checked) setTrueFalse('false');
  };

  return (
    <TrueFalseContext.Provider value={ trueFalse, toggle }>
      {children}
    </TrueFalseContext.Provider>
  );
};
TrueFalseProvider.propTypes = {
  children: PropTypes.node

};

export const useTrueFalse = () => {
  const trueFalse = useContext(TrueFalseContext);
  return trueFalse;
};

//1) provides state for profanity checked true or false 
//2) provides a way to change the checked state aka toggle switch 
