import React from 'react';
import { ModeProvider } from '../../hooks/ModesProvider';
import Toggle from '../Toggle/Toggle';
//import Quote from '../Quotes/tpQuote';


export default function App() {
  return (
    <>
      <ModeProvider>
        <Toggle/>
      </ModeProvider>
    </>
  );
}
