

import { useDispatch } from 'react-redux'
import './DisplayNavItems.css'


const DisplayNavItems = ({createProductList, navItems, itemCount}) => {

    const dispatch = useDispatch();

    const items = navItems.slice(0, itemCount).map((item, i)=>{
        return (
            <button onClick={()=> dispatch(createProductList(item.category))} className='nav__btns' key={i}>
                {item.title}
            </button>
        )
    })

  return items
}

export default DisplayNavItems;
