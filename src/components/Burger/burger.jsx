import './burger.css'

const Burger=()=>{
    const toggleMenu=()=>{
        document.querySelector('.burger').classList.toggle('open')
        console.log('menu open')
        
    }
    return (   
        
        <div className='burger-container'>
            <button className='burger' onClick={toggleMenu}>
                <span></span><span></span>
            </button>
            <span className='burger-name'>Favourite</span>
        </div>
    )
}

export default Burger;