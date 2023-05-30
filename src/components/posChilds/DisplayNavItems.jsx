
import { useEffect } from 'react'
import './DisplayNavItems.css'


const DisplayNavItems = ({navItems, itemCount}) => {

    const items = navItems.slice(0, itemCount).map((item, i)=>{
        return (
            <button className='nav__btns' key={i}>{item.title}</button>
        )
    })

  return items
}

export default DisplayNavItems;
