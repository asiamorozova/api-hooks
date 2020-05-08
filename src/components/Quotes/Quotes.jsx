import React from 'react';
import PropTypes from 'prop-types';
import Quote from '../Quotes/tpQuote'; 
import { useLightDark } from '../../hooks/ModesProvider';
import styleLight from '../Quotes/Dark.css';
import styleDark from '../Quotes/Light.css';


const Quotes = ({ quotes }) => {
  const quotesAttributes = quotes.map(quote =>(
    <li key={quotes.id}>
      <Quote{...quote}/>
    </li>
  ));
  const theme = useLightDark();
  const stylesToUse = theme === 'light' ? styleLight : styleDark;

  //insert themes 

  return (
    <ul className={stylesToUse.QuoteList}>
      {quotesElement}
    </ul>
  );
};


Quotes.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    quoteTextOnly: PropTypes.string.isRequired,
    persons: PropTypes.string.isRequired,
    profanity: PropTypes.string.isRequired
  })).isRequired

};

export default Quotes;






