export const tpQuotes = () => {
  return fetch('https://thedavidbarton.herokuapp.com/api/1/quotes/recommend')
    .then(res => res.json())

    .then(json => json.map(({ url }) => url));
};
