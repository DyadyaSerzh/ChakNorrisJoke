import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import CategoryButton from "../CategoryButton";
import Search from "../search";

// https://api.chucknorris.io/jokes/categories    list of categories
// https://api.chucknorris.io/jokes/random?category={category}  random search in category
// https://api.chucknorris.io/jokes/search?query={query} search by text
// sum w=1440, right=480
// const listTest=[1,2,3,3]
const ChuckNorris = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);
  
  useEffect(() => {
    fetch(`https://api.chucknorris.io/jokes/categories`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "CREATELIST", categoryList: data });
      });
  }, [dispatch]);

  const getResult = () => {
    let api;
    let category = state.CategoryForSearch;
    let query = state.TextOfSearch;
    console.log("stateOnClick", state);
    if (state.CategoryJoke === "category") {
      if (category) {
        api = `https://api.chucknorris.io/jokes/random?category=${category}`;
        console.log("api==", api);
      } else return;
    } else if (state.CategoryJoke === "search") {
      api = `https://api.chucknorris.io/jokes/search?query=${query}`;
      console.log("api==", api);
    } else {
      api = `https://api.chucknorris.io/jokes/random`;
    }
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log('dataAfterFetch=====',data)
        dispatch({ type: "GETJOKE", payload: data });
      });
    console.log("data of jokes", state);
  };
  const setJokeCategory = (value) => {
    dispatch({ type: "SETJOKECATEGORY", CategoryJoke: value });
  };
  return (
    <div className="ChuckNorris">
      
        <div>
          <input onChange={(event) => {
          setJokeCategory(event.target.value);
        }}
         type="radio" value="random" name="searchRadio" />
          <label htmlFor="random">random</label>
        </div>
        <div>
          <input onChange={(event) => {
          setJokeCategory(event.target.value);
        }}
         type="radio" value="category" name="searchRadio" />
          <label htmlFor="category">category</label>
          {state.CategoryJoke === "category" ? (
            <CategoryButton list={state.listOfCategory}></CategoryButton>
          ) : null}
        </div>
        <div>
          <input onChange={(event) => {
          setJokeCategory(event.target.value);
        }} 
        type="radio" value="search" name="searchRadio" />
          <label htmlFor="search">search</label>
        </div>
      
      <div>
        <button onClick={() => getResult()}>GETJOKE</button>
        {state.CategoryJoke === "search" ? <Search></Search> : null}
        
      </div>
    </div>
  );
};
export default ChuckNorris;
