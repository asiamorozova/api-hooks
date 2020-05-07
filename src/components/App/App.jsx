import React from 'react';
import { TrueFalseProvider } from '../../hooks/TrueFalseProvider';
import Toggle from '../Toggle/Toggle';


export default function App() {
  return (
    <>
      <TrueFalseProvider/>
      <Toggle/>
    </>
  );
}
  
