import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import JokeBlock from "../JokeListBlock/jokeBlock";
import Burger from "../Burger";

const Favorits=()=>{
    const dispatch=useDispatch();
    const state=useSelector(state=>state);
    useEffect(()=>
        {
           
            let FavoritesList=localStorage.getItem('FavoritesList');
      if (!FavoritesList){
        FavoritesList=JSON.stringify([])
      }
      console.log('fl====',FavoritesList)
      dispatch({type:"CreateFavoritesList",payload:JSON.parse(FavoritesList)});
        },[dispatch]
    )
    const FavoritsList=state.FavoritsList;

    if(!FavoritsList.length){console.log('favEmpty',(Favorits.length))}
    console.log('FavoritsList=====',FavoritsList)
    return(
        
        <div>
            <Burger></Burger>
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