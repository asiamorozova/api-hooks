import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quoteText }) => (
  <secton>
    <p>{quoteText}</p>
  </secton> 
);

Quote.propTypes = {
  quoteText: PropTypes.string.isRequired
};

export default Quote;
