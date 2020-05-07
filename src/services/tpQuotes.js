export const tpQuotes = () => {
  return fetch('https://thedavidbarton.herokuapp.com/api/1/quotes/recommend')
    .then(res => res.json())
    .then(res => res.results.map(quotes =>({
      id: quotes.id,
      quoteTextOnly: quotes.quoteTextOnly,
      persons: quotes.persons,
      profanity: quotes.profanity
    })));
};

