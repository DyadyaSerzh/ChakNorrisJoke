import { useDispatch, useSelector } from "react-redux";

const Search =()=>{
    const dispatch = useDispatch();
return(
 <input type="text" 
 onChange={(event)=>{dispatch({type:'SetTextOfSearch', TextOfSearch:event.target.value})}}
  placeholder="Free text search..." />)
}

export default Search;