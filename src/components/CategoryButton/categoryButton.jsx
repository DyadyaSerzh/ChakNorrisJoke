const CategoryButton=({list})=>{
    
    console.log('list===',list)
    return(
        <>
        {list.map((item,i)=>(
        <button key={i}>{item}</button>)
        )}
        </>
        
    )
}
export default CategoryButton;