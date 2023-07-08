import { useSelector, useDispatch } from "react-redux";
import './favorits.css'
import { useEffect } from "react";
import JokeBlock from "../JokeListBlock/jokeBlock";

const Favorits=()=>{
    const dispatch=useDispatch();
    const state=useSelector(state=>state);
    useEffect(()=>
        {
           
            let FavoritesList=localStorage.getItem('FavoritsList');
      if (!FavoritesList){
        FavoritesList=JSON.stringify([])
      }
      dispatch({type:"CreateFavoritesList",payload:JSON.parse(FavoritesList)});
        },[dispatch]
    )
    const FavoritsList=state.FavoritsList;

    if(!FavoritsList.length){console.log('favEmpty',(Favorits.length))}
    return(
        
        <div>
        {(!FavoritsList.length)?<div>No favorites yet</div>:
        FavoritsList.map(elem=>{return(
            <>
            <JokeBlock value={elem}></JokeBlock>
            </>)
        })
        
        }
        </div>
        
        
    )
}
export default Favorits;