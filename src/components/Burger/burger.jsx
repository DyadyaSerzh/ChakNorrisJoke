import './burger.css'

const Burger=()=>{
    const toggleMenu=()=>{
        document.querySelector('.burger').classList.toggle('open')
        console.log('menu open')
        
    }
    return (   
        <button className='burger' onClick={toggleMenu}>
            <span></span><span></span><span></span>
        </button>
    )
}

export default Burger;