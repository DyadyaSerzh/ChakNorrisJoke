import JokeBlock from "./jokeBlock";
import { useDispatch, useSelector } from "react-redux";
import ListOfPages from "./listOfPages";

const JokeListBlock = () => {
  const state = useSelector((state) => state);
  const QuantityOnPage=10;
  const pageForShow=state.pageForShow;
  const JokeList=state.JokeList;
  
  console.log('JokeList===',JokeList)
  let ListForPrint=[];
  const dispatch = useDispatch();
  let QuantityOfPages
  if(JokeList){
    QuantityOfPages=Math.ceil(JokeList.length/QuantityOnPage)
    for(let i=pageForShow;i<=JokeList.length&&i<pageForShow+10;i++){
      ListForPrint[i]=JokeList[i]
    }
    console.log('ListForPrint====',ListForPrint)
  }
  
  return (
    <>
    {JokeList?
      <div className="JokeListBlock">jokeBlock
      {ListForPrint.map(element=>{return <JokeBlock value={element.value}></JokeBlock> })}
      <ListOfPages number={QuantityOfPages}></ListOfPages>
    </div>
    :null}
    </>
    
  );
};

export default JokeListBlock;
