import { createStore } from "redux";
// 1. Use Chuck Norris API to get jokes in JSON format - https://api.chucknorris.io/
// 2. Ability to get a random joke.
// 3. Ability to get a random joke from categories (Use API to get all available categories).
// 4. Ability to get jokes by free text search.
// 5. Any joke can be marked/unmarked as favourite.
// 6. Jokes marked as favourite should appear in the right section Favourite.
// 7. Favourite jokes should be available after reloading the page and stored in the browser
// (No need to use Back-end).

const reduser = (state = {payload: 0 }, action) => {
  switch (action.type) {
    case "GETJOKE":
      const JokeList=action.payload.value;
      console.log('JokeList',JokeList);
      return { ...state,JokeList};
    case "CREATELIST":
      const listOfCategory = action.categoryList;
      console.log("listOfCategory", listOfCategory);
      return { ...state, listOfCategory };
    case "SetTextOfSearch":
      console.log("TextOfSearch", action.TextOfSearch);
      const TextOfSearch=action.TextOfSearch;
      return { ...state,TextOfSearch };
    case "SETJOKECATEGORY":
      const CategoryJoke=action.CategoryJoke
      console.log('CategoryJoke',CategoryJoke)
      return { ...state, CategoryJoke };
    case "setCategoryForSearch":
      const CategoryForSearch=action.CategoryForSearch
      console.log('CategoryForSearch',CategoryForSearch)
      return { ...state, CategoryForSearch};
    default:
      return { ...state };
  }
};
const store = createStore(reduser);

export default store;
