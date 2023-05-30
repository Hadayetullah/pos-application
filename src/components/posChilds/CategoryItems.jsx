
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

import "./CategoryItems.css"
const CategoryItems = ({item}) => {

    let data = item.data.map((itemData, i)=>{
      return(
        <div className="item__details" key={i}>
          <img src={`${itemData.img}`} alt={`${itemData.title}`} className="item__img" />
          <span className="item__price">
            <FontAwesomeIcon icon={faDollarSign} />
            {itemData.price}
          </span>
          <span className="item__title">{itemData.title}</span>
        </div>
      )
    })

    return data;
}

export default CategoryItems;
