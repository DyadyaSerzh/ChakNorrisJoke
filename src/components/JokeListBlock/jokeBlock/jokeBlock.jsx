import './jokeBlock.css'
import { useDispatch } from 'react-redux';
const JokeBlock=({value,id})=>{
    const dispatch=useDispatch();
    console.log('value----',value.value)
    let favorite=false;
    const ChangeFavorits=(id)=>{dispatch({type:"ChangeFavorits",payload:id})};
    return(
        <div className="jokeBlock" id={id} >
            {favorite?<span onClick={ChangeFavorits}>favorite</span>:<span onClick={ChangeFavorits}>NOfavorite</span>}
            <p>{value.value}</p>
            </div>
        
    )
    
}
export default JokeBlock