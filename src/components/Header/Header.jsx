import React from 'react';
import Toggle from '../Toggle/Toggle';
import { useToggle, useLightDark } from '../../hooks/ModesProvider';

const Header = () => {
  const toggle = useToggle();
  const Modes = useLightDark();

  return (
    <header> 
      <h1>Twin Peaks Quotes</h1>
      <Toggle value={Modes === 'light'} toggle={toggle} />
    </header>
  );
};

export default Header;
