import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import CategoryButton from '../CategoryButton'

// https://api.chucknorris.io/jokes/categories    list of categories
// https://api.chucknorris.io/jokes/random?category={category}  random search in category
// https://api.chucknorris.io/jokes/search?query={query} search by text
// sum w=1440, right=480
// const listTest=[1,2,3,3]
const Counter=()=>{
    const couster=useSelector((state) => state)
    const dispatch=useDispatch()
    async function getList(){
        return await fetch(`https://api.chucknorris.io/jokes/categories`)
        .then((res) => res.json())
        .then((data) =>{
            dispatch({type:'CREATELIST',categoryList:data})
    })}
    useEffect(()=>{
        getList()
        
    },[])
    console.log(couster)
    console.log('couster.payload',!!couster.payload)
    const getRandomResult = () => {
        fetch(`https://api.chucknorris.io/jokes/random`)
          .then((res) => res.json())
          .then((data) =>{
            dispatch({ type: 'GETRANDOMJOKE', payload: data })},
          );
      };
    console.log('listCounter',couster)
return(
        <div>
            <form action="searchForm"  onChange={(event)=>{console.log(event.target.value)}}>
                <input type="radio" value="random" name="searchRadio"  />random
                <input type="radio" value="category" name="searchRadio"/>category
                <CategoryButton list={couster.listOfCategory}></CategoryButton>
                {/* <CategoryButton list={listTest}></CategoryButton> */}
                <input type="radio" value="search" name="searchRadio" />search
            </form>
            <div>
            {!!couster.payload?<p>{couster.payload}</p>:null}
                <button onClick={()=>getRandomResult()}>GETJOKE</button>
            <input type="text" placeholder="Free text search..." />
            </div>
        </div>
    )


// function todos(state = [], action) {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return state.concat([action.text])
//     default:
//       return state
//   }
// }

// const store = createStore(todos, ['Use Redux'])

// store.dispatch({
//   type: 'ADD_TODO',
//   text: 'Read the docs'
// })

// console.log(store.getState())

}
export default Counter