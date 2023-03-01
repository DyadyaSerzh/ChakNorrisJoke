const CategoryButton=({list})=>{
    
    console.log('list===',list)
    return(
        <div className="flexInline">
        {list.map((item,i)=>(
        <button key={i}>{item}</button>)
        )}
        </div>
        
    )
}
export default CategoryButton;