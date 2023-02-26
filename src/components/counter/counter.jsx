import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CategoryButton from "../CategoryButton";
import Search from "../search";



// https://api.chucknorris.io/jokes/categories    list of categories
// https://api.chucknorris.io/jokes/random?category={category}  random search in category
// https://api.chucknorris.io/jokes/search?query={query} search by text
// sum w=1440, right=480
// const listTest=[1,2,3,3]
const Counter = () => {
  const couster = useSelector(state => state);
  const dispatch = useDispatch();
  console.log(couster);
  
  const [CategoryShow, setCategoryShow] = useState(false);
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

  return (
    <div>
      <form
        action="searchForm"
        onChange={() => {
          setCategoryShow(true);
        }}
      >
        <input type="radio" value="random" name="searchRadio" />
        random
        <input type="radio" value="category" name="searchRadio" />
        category
        {CategoryShow ? (
          <CategoryButton list={couster.listOfCategory}></CategoryButton>
        ) : null}
        <input type="radio" value="search" name="searchRadio" />
        search
      </form>
      <div>
        <button onClick={() => getRandomResult()}>GETJOKE</button>
          <Search></Search>
        {!!couster.payload? <p>{couster.payload}</p> : null}
      </div>
    </div>
  );

};
export default Counter;
