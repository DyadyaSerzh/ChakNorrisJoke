import './jokeBlock.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
const JokeBlock=(props)=>{
    const state = useSelector((state) => state);
    const {value,id}=props.value;
    const dispatch=useDispatch();
    console.log('value----',props.value,'val====',value)
    let favorite=(state.FavoritsList.includes(props.value))
    const ChangeFavorits=()=>{dispatch({type:"ChangeFavorits",payload:props.value})};
    return(
        <div className="jokeBlock" id={id} >
            {favorite?<span onClick={ChangeFavorits}>favorite {id}</span>:<span onClick={ChangeFavorits}>NOfavorite</span>}
            <p>{value}</p>
            </div>
        
    )
    

}
export default JokeBlock