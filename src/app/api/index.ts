const API_URL = "https://rickandmortyapi.com/api/";

export function fetchCharacters() {
  return fetch(API_URL + "character").then((res) => res.json());
}
