
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

import "./CategoryItems.css"

const CategoryItems = ({item, currentOrder}) => {

    return(
      <div onClick={currentOrder} className="item__details">
        <img src={`${item.img}`} alt={`${item.title}`} className="item__img" />
        <span className="item__price">
          <FontAwesomeIcon icon={faDollarSign} />
          {item.price}
        </span>
        <span className="item__title">{item.productTitle}</span>
      </div>
    )
}

export default CategoryItems;
