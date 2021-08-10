function searchForSuggestion(city) {
  return fetch(`https://geo.api.gouv.fr/communes?nom=${city}&fields=departement&boost=population&limit=5`)
    .then(res => res.json())
    .then(data => { return data })
    .catch(error => console.log(error));
}

export default searchForSuggestion;