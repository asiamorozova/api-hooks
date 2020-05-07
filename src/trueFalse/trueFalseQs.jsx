import React from 'react';
//import Quote from '../components/Quotes/tpQuote';
import { useTrueFalse } from '../hooks/TrueFalseProvider';



const trueFalseQs = () => {
  const trueFalse = useTrueFalse;
  //if mode set to light, profanity set to false
  if(trueFalse === 'true'){
    return <profane/>; 
    //quote with profanity/ mode - dark 
  }
  //if mode set to dark, profanity set to true 
  if(trueFalse === 'false'){
    return < notprofane/> ; //quote without  profanity
  }
  //if for some reason anything else display: 
  return (
    <p>"That gum you like is going to come back in style."</p>
  );
};
export default trueFalseQs;
