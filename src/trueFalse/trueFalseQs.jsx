import React from 'react';
import Quote from '../components/Quotes/tpQuote';
import { useTrueFalse } from '../hooks/trueFalseProvider';



const trueFalseQs = () => {
  //if mode set to light, profanity set to false
  if(trueFalseQs === 'true'){
    return; 
    //quote with profanity/ mode - dark 
  }
  //if mode set to dark, profanity set to true 
  if(trueFalseQs === 'false'){
    return; //quote without  profanity
  }
  //if for some reason anything else display: 
  return (
    <p>"That gum you like is going to come back in style."</p>
  );
};
export default trueFalseQs;
