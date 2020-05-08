import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quoteTextOnly, persons, profanity }) => (
  <section>
    <p>{quoteTextOnly}</p>
    <p>Quote by:{persons}</p>
    <p>Profanity:{profanity}</p>
  </section> 
);

Quote.propTypes = {
  quoteTextOnly: PropTypes.string.isRequired,
  persons: PropTypes.string.isRequired,
  profanity: PropTypes.string.isRequired
};

export default Quote;
