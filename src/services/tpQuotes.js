export const tpQuotes = () => {
  return fetch('https://thedavidbarton.herokuapp.com/api/1/quotes/recommend')
    .then(res => res.json())
    .then(res => res.results.map(quotes =>({
      id: quotes.id,
      quoteText: quotes.quoteText,
      profanity: quotes.profanity
    })));
};

