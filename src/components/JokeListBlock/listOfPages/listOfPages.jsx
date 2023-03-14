import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
const ListOfPages=(numberOfpages)=>{
    const dispatch=useDispatch();
    numberOfpages=numberOfpages.number
    const state=useSelector(state=>state)
    const JokeList=state.JokeList;
    const pageForShow=state.pageForShow;
    let showListOfPages=0;
    const testArr={1:"1history",2:'2werty',3:"3ture",4:"4",5:"5",6:"6",7:"7"}

    useEffect(()=>{dispatch({type:"JokeForShow",payload:testArr})},[])
    // const carPage=()=>{dispatch({type:"setPagefoShow",payload:pageForShow})}
    
    // const ArrForSearch=
    let arrPages=()=>{
        
    }
    if(numberOfpages>1)showListOfPages=1;
    if(numberOfpages>5){
        showListOfPages=2;
    }
    return(
        showListOfPages?
        <>
        <button onClick={()=>dispatch({ type: "setPagefoShow", payload: pageForShow-1 })}>Prev</button>
        <span>{pageForShow}</span>
            {showListOfPages===2?
                <span>...</span>
                :null
            }
        <button onClick={()=>dispatch({ type: "setPagefoShow", payload: pageForShow+1 })}>Next</button>
        </>:null
        
    )
}
const Pages=()=>{
    return
}
export default ListOfPages;