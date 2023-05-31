
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCirclePlus,
    faCircleMinus,
    faDollarSign,
} from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons'

import "./CurrentOrderList.css";

import { useDispatch } from 'react-redux';



const CurrentOrderList = ({item, index, orderList}) => {

    // console.log(item)

    // const dispatch = useDispatch();
    
  return (
    <div className="body__left__selected__product">
        <FontAwesomeIcon icon={faPenToSquare} className='init__icon' />
        <div 
            className="selected__product__middle"
            style={{
                borderRadius: `${index === 0 ? "4px 4px 0 0" : "none"}`,
                borderBottom: `${orderList.length-1 === index ? "1px solid #999" : "none"}`
            }}
        >
            <div className="body__left__items">
                <span>{item.productTitle}</span>
            </div>
            <div className="body__left__unitprice">
                <FontAwesomeIcon icon={faDollarSign} style={{color: "#727272"}} />
                <span>{item.price}</span>
            </div>
            <div className="body__left__qty">
                <FontAwesomeIcon icon={faCircleMinus} className='munus' />
                <span>{1}</span>
                <FontAwesomeIcon icon={faCirclePlus} className='plus' />
            </div>
            <div className="body__left__totalprice">
                <FontAwesomeIcon icon={faDollarSign} style={{color: "#727272"}} />
                <span>{item.price}</span>
            </div>
        </div>
        <FontAwesomeIcon icon={faTrashCan} className='last__icon' />
    </div>
  )
}

export default CurrentOrderList;
