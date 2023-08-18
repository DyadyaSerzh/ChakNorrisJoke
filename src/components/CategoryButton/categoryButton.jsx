import { useDispatch } from "react-redux"
import "./categoryButton.css"

const CategoryButton=({list})=>{
    const dispatch=useDispatch()
    const setCategory=(target)=>{
        dispatch({type:"setCategoryForSearch",CategoryForSearch:target})
        console.log('list===',target)
    }
    
    const RadioCheck=(i,item)=>{
        const radioBattons=document.querySelectorAll('.radio-button')
        radioBattons.forEach(item=>item.removeAttribute('checked'))
        radioBattons[i].setAttribute('checked', 'checked')
        setCategory(item)
    }
    
    return(
        <div className="categoryButtons">
            <form action="setCategory" onChange={event=>setCategory(event.target.value)}>
        {list.map((item,i)=>(
            <div key={"div"+i} className="flexInline">
            <input key={'input'+i}  type="radio" value={item} name="categoryRadio"  className="hidden radio-button"/>
            <label key={'label'+i} htmlFor={item} onClick={()=>{RadioCheck(i,item)}} className="button-label">{item}</label>
            </div>
            )
        )}
        </form>
        </div>
        
    )
}
export default CategoryButton;