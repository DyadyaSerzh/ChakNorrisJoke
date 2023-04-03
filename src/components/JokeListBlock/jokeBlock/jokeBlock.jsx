import './jokeBlock.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
const JokeBlock=(props)=>{
    const state = useSelector((state) => state);
    const {value,id}=props.value;
    const dispatch=useDispatch();
    let favorite=(state.FavoritsList.includes(props.value))
    const ChangeFavorits=()=>{dispatch({type:"ChangeFavorits",payload:props.value})};
    return(
        <div className="jokeBlock" id={id} >
            {favorite?<img onClick={ChangeFavorits} src="./heart.png" className='heart' alt="" />:<img onClick={ChangeFavorits} src="./Vector.png" className='heart' alt="" />}
            <p>{value}</p>
            </div>
        
    )
    

}
export default JokeBlock