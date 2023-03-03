import { useDispatch } from "react-redux"
const CategoryButton=({list})=>{
    const dispatch=useDispatch()
    const setCategory=(target)=>{
        dispatch({type:"setCategoryForSearch",CategoryForSearch:target})
        console.log('list===',target)
    }
    
    return(
        <div className="flexInline">
            <form action="setCategory" onChange={event=>setCategory(event.target.value)}>
        {list.map((item,i)=>(
            <div>
            <input key={i} type="radio" value={item} name="categoryRadio" />
            <label htmlFor={item}>{item}</label>
            </div>
            )
        )}
        </form>
        </div>
        
    )
}
export default CategoryButton;