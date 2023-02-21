import { useDispatch, useSelector } from "react-redux"


const Counter=()=>{
    const couster=useSelector((state) => state)
    const dispatch=useDispatch()
return(
        <div>
            Counter
            {couster}
            <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
            <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
            <button onClick={()=>dispatch({type:"RESET"})}>reset</button>
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