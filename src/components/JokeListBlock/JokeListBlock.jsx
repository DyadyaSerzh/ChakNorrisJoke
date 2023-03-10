import JokeBlock from "./jokeBlock";
import { useDispatch, useSelector } from "react-redux";
import ListOfPages from "./listOfPages";

const JokeListBlock = () => {
  const state = useSelector((state) => state);
  const QuantityOnPage=10;
  const JokeList=state.JokeList;
  const dispatch = useDispatch();
  let QuantityOfPages
  if(JokeList){
    QuantityOfPages=Math.ceil(JokeList.length/QuantityOnPage)
  }

  return (
    <>
    {JokeList?
    <div className="JokeListBlock">jokeBlock
    <>
    {JokeList.map(element=>{return <JokeBlock value={element.value}></JokeBlock> })}
      
    </>
    
      <ListOfPages number={QuantityOfPages}></ListOfPages>
    </div>
    :null}
    </>
    
  );
};

export default JokeListBlock;
