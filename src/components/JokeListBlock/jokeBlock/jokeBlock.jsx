import './jokeBlock.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
const JokeBlock=({value, clName="jokeBlock"})=>{
    
    const state = useSelector((state) => state);
    const textValue=value.value;
    // console.log('propsJokeblockvalue1====>',value1)
    const {id}=value;
    const dispatch=useDispatch();
    let favorite=(state.FavoritsList.includes(value))
    const ChangeFavorits=()=>{dispatch({type:"ChangeFavorits",payload:value})};
    return(
        <div className={clName}  id={id} key={id}>
            <div className='jokeMsg'><img src="./message.png" alt="" /></div>
            <p className='textValueJoke'>{textValue}</p>
            <div className='heart'>
            {favorite?<img onClick={ChangeFavorits} src="./heart.png" alt="" />:<img onClick={ChangeFavorits} src="./Vector.png"  alt="" />}
            </div>
            
            </div>
        
    )
    

}
export default JokeBlock