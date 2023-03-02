const CategoryButton=({list})=>{
    
    console.log('list===',list)
    return(
        <div className="flexInline">
        {list.map((item,i)=>(
            <div>
            <input key={i} type="radio" value={item} name="categoryRadio" />
            <label htmlFor={item}>{item}</label>
            </div>
            )
        // <input key={i} type="radio" value="search" name="categoryRadio">{item}</input>)
        )}
        </div>
        
    )
}
export default CategoryButton;