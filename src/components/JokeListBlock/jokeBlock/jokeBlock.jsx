import './jokeBlock.css'
const JokeBlock=({value,id})=>{
    console.log('value----',value.value)
    let favorite=false;
    return(
        <div className="jokeBlock" id={id} >
            {favorite?<span>favorite</span>:<span>NOfavorite</span>}
            <p>{value.value}</p>
            </div>
        
    )
    // xp 86k, def 3.7k, speed 242, 
}
export default JokeBlock