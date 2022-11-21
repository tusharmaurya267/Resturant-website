import React from 'react'

const Navbar = ({filteredItem,menuList}) => {
  return (
    <>
        <nav className='navbar'>
            <div className='btn-group'>

            {
                menuList.map((curElem)=>{
                    return <button className='btn-group__item' onClick={()=>filteredItem(curElem)}>{curElem}</button>
                })
            }
            {/* <button className='btn-group__item' onClick={()=>filteredItem("breakfast")}>Breakfast</button>
            <button className='btn-group__item' onClick={()=>filteredItem("lunch")}>Lunch</button>
            <button className='btn-group__item' onClick={()=>filteredItem("evening")}>Snacks</button>
            <button className='btn-group__item' onClick={()=>filteredItem("dinner")}>Dinner</button>
            <button className='btn-group__item' onClick={()=>setMenuData(Menu)}>>>></button> */}

            </div>
        </nav>
    </>
  )
}

export default Navbar