import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CategoryButton from "../CategoryButton";
import Search from "../search";



// https://api.chucknorris.io/jokes/categories    list of categories
// https://api.chucknorris.io/jokes/random?category={category}  random search in category
// https://api.chucknorris.io/jokes/search?query={query} search by text
// sum w=1440, right=480
// const listTest=[1,2,3,3]
const ChuckNorris = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  console.log(state);
  
  useEffect(() => {
    fetch(`https://api.chucknorris.io/jokes/categories`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "CREATELIST", categoryList: data });
      });
    }, [dispatch]);
  
  const getRandomResult = () => {
    fetch(`https://api.chucknorris.io/jokes/random`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "GETRANDOMJOKE", payload: data });
      });
  };
  const getResult=()=>{
    let api
    let category="music"
    let query=state.TextOfSearch
    console.log('stateOnClick',state)
    if(state.CategoryJoke==="category"){
      if(category){api=`https://api.chucknorris.io/jokes/random?category=${category}`
      console.log('api==',api)}
      else return
    }else if(state.CategoryJoke==="search"){
      api=`https://api.chucknorris.io/jokes/search?query={${query}}`
      console.log('api==',api)
    }else{
      api=`https://api.chucknorris.io/jokes/random`
    };
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type:"GETJOKE", payload: data });
      });
      console.log('data of jokes',state)

  }
  const setJokeCategory=(value)=>{
    dispatch({type:'SETJOKECATEGORY',CategoryJoke:value})
  }
  return (
    <div className="ChuckNorris">
      <form className="dFlex" action="searchForm" onChange={(event)=>{setJokeCategory(event.target.value)}}>
        <div> 
          <input type="radio" value="random" name="searchRadio" />
          <label htmlFor="random">random</label>
        </div>
        <div>
        <input type="radio" value="category" name="searchRadio" />
        <label htmlFor="category">category</label>
        {state.CategoryJoke==="category" ? (
          <CategoryButton list={state.listOfCategory}></CategoryButton>
        ) : null}
        </div>
        <div>
        <input type="radio" value="search" name="searchRadio" />
        <label htmlFor="search">search</label>
        </div>
      </form>
      <div>
        <button onClick={() => getResult()}>GETJOKE</button>
        {state.CategoryJoke==="search"?<Search></Search>:null}
        {!!state.payload? <p>{state.payload}</p> : null}
      </div>
    </div>
  );

};
export default ChuckNorris;
