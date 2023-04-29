import JokeBlock from "./jokeBlock";
import { useSelector } from "react-redux";
import ListOfPages from "./listOfPages";

const JokeListBlock = () => {
  const state = useSelector((state) => state);
  const QuantityOnPage=10;
  const pageForShow=state.pageForShow;
  const JokeList=state.JokeList;
  
  let ListForPrint=[];
  let QuantityOfPages
  if(JokeList){
    if(JokeList.value){
      ListForPrint[0]=JokeList}
    else{
    QuantityOfPages=Math.ceil(JokeList.length/QuantityOnPage)
    for(let i=pageForShow;i<=JokeList.length&&i<pageForShow+10;i++){
      ListForPrint[i]=JokeList[i]
    }}
  };
  
  return (
    <>
    {JokeList?
      <div className="JokeListBlock">
      {ListForPrint.map(element=>{return <JokeBlock value={element} clName='jokeBlock main' ></JokeBlock> })}
      <ListOfPages number={QuantityOfPages}></ListOfPages>
    </div>
    :null}
    </>
    
  );
};

export default JokeListBlock;
