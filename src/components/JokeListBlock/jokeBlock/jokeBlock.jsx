const JokeBlock=({value,id})=>{
    console.log('value----',value.value)
    let favorite=false;
    return(
        <div id={id} className="jokeBlock">
            {favorite?<span>favorite</span>:<span>NOfavorite</span>}
            <p>{value.value}</p>
            </div>
        
    )
}
export default JokeBlock