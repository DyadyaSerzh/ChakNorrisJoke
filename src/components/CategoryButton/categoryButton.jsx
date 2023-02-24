const CategoryButton=({list})=>{
    
    console.log('list===',list)
    return(
        <>
        {list.map((item)=>(
        <button >{item}</button>)
        )}
        </>
        
    )
}
export default CategoryButton;