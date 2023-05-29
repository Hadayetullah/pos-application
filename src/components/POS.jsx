

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faBars, 
    faFileLines, 
    faTruck,
    faLayerGroup, 
    faCirclePlus,
    faCircleUser,
    faMagnifyingGlass,
    faQrcode,
    faCircleMinus,
    faDollarSign,
    faGear,
    faHandBackFist,
    faPercent,
    faMoneyBill1Wave
} from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons'
// import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'


const POS = () => {
  return (
    <div>
        <div className="home grid">
            <div className="pos grid">
                <div className="pos__left">
                    <nav className="left__nav__top grid">
                        <FontAwesomeIcon icon={faBars} className="pos__left__bar" />
                        <ul className="left__nav__top-items">
                            <li className='left__nav__top-item'>
                                <FontAwesomeIcon icon={faFileLines} className='left__nav__top-icon' />
                                <span>
                                    Note
                                </span>
                            </li>
                            <li className='left__nav__top-item'>
                                <FontAwesomeIcon icon={faTruck} className='left__nav__top-icon' />
                                <span>
                                    Shipping
                                </span>
                            </li>
                            <li className='left__nav__top-item'>
                            <FontAwesomeIcon icon={faLayerGroup} className='left__nav__top-icon' />
                                <span>
                                    Hold Orders
                                </span>
                            </li>
                            <li className='left__nav__top-item'>
                                <FontAwesomeIcon icon={faCirclePlus} className='left__nav__top-icon' />
                                <span>
                                    New Item
                                </span>
                            </li>
                        </ul>
                    </nav>

                    <div className="left__nav__bottom-bg">
                        <nav className="left__nav__bottom">
                            <div className="left__nav__bottom-left">
                                <FontAwesomeIcon icon={faCircleUser} className='left__nav__bottom-icon' />
                                <span>No active customer!</span>
                            </div>

                            <FontAwesomeIcon icon={faCirclePlus} className='left__nav__bottom-icon' />
                        </nav>
                    </div>

                    <div className="body__left">
                        <header className="body__left__header">
                            <div className="body__left__header-left"></div>
                            <div className="body__left__header-middle">
                                <span className="body__left__items body__left__header-title">
                                    <h5 style={{paddingLeft: "15px", textAlign: "left"}}>Items</h5>
                                </span>
                                <span className="body__left__unitprice body__left__header-title">
                                    <h5>Unit Price</h5>
                                </span>
                                <span className="body__left__qty body__left__header-title">
                                    <h5>Quantity</h5>
                                </span>
                                <span className="body__left__totalprice body__left__header-title">
                                    <h5>Total Price</h5>
                                </span>
                            </div>
                            <div className="body__left__header-right"></div>
                        </header>

                        <div className="body__left__content">
                            <div className="body__left__selected__product">
                                <FontAwesomeIcon icon={faPenToSquare} className='init__icon' />
                                <div className="selected__product__middle">
                                    <div className="body__left__items">
                                        <span>Samsung Galaxy S10</span>
                                    </div>
                                    <div className="body__left__unitprice">
                                        <FontAwesomeIcon icon={faDollarSign} style={{color: "#727272"}} />
                                        <span>757.000</span>
                                    </div>
                                    <div className="body__left__qty">
                                        <FontAwesomeIcon icon={faCircleMinus} className='munus' />
                                        <span>757.000</span>
                                        <FontAwesomeIcon icon={faCirclePlus} className='plus' />
                                    </div>
                                    <div className="body__left__totalprice">
                                        <FontAwesomeIcon icon={faDollarSign} style={{color: "#727272"}} />
                                        <span>757.000</span>
                                    </div>
                                </div>
                                <FontAwesomeIcon icon={faTrashCan} className='last__icon' />
                            </div>

                            <div className="body__left__selected__product">
                                <FontAwesomeIcon icon={faPenToSquare} className='init__icon' />
                                <div className="selected__product__middle">
                                    <div className="body__left__items">
                                        <p>Samsung Galaxy S10</p>
                                    </div>
                                    <div className="body__left__unitprice">
                                        <p>757.000</p>
                                    </div>
                                    <div className="body__left__qty">
                                        <p>757.000</p>
                                    </div>
                                    <div className="body__left__totalprice">
                                        <p>757.000</p>
                                    </div>
                                </div>
                                <FontAwesomeIcon icon={faTrashCan} className='last__icon' />
                            </div>

                            <div className="body__left__selected__product">
                                <FontAwesomeIcon icon={faPenToSquare} className='init__icon' />
                                <div className="selected__product__middle">
                                    <div className="body__left__items">
                                        <p>Samsung Galaxy S10</p>
                                    </div>
                                    <div className="body__left__unitprice">
                                        <p>757.000</p>
                                    </div>
                                    <div className="body__left__qty">
                                        <p>757.000</p>
                                    </div>
                                    <div className="body__left__totalprice">
                                        <p>757.000</p>
                                    </div>
                                </div>
                                <FontAwesomeIcon icon={faTrashCan} className='last__icon' />
                            </div>
                        </div>
                    </div>

                    <footer className="left__bottom">
                        <div className="products__calculation__top">
                            <div>
                                <span>Sub Total</span>
                                <span className="price__title">
                                    <FontAwesomeIcon icon={faDollarSign} className='total__price-dolar' />0.00
                                </span>
                            </div>
                            <div>
                                <span>TAX</span>
                                <span className="price__title">
                                    <FontAwesomeIcon icon={faDollarSign} className='total__price-dolar' />0.00
                                </span>
                            </div>
                            <div>
                                <span>Shipping</span>
                                <span className="price__title">
                                    <FontAwesomeIcon icon={faDollarSign} className='total__price-dolar' />0.00
                                </span>
                            </div>
                            <div>
                                <span>Discount on Cart</span>
                                <span className="price__title">
                                    <FontAwesomeIcon icon={faDollarSign} className='total__price-dolar' />0.00
                                </span>
                            </div>
                        </div>

                        <div className="products__calculation__bottom">
                            <span>Products Count ()</span>
                            <div className="total__price">
                                    <span>Total</span>
                                    <span>
                                        <FontAwesomeIcon icon={faDollarSign} className='total__price-dolar' />0.00
                                    </span>
                                </div>
                            </div>
                        <div className="products__total"></div>

                        <ul className="left__bottom__footer">
                            <li className='left__bottom__footer-nav'>
                                <FontAwesomeIcon icon={faCircleXmark} className='left__nav__top-icon' />
                                <span>
                                    Cancel
                                </span>
                            </li>
                            <li className='left__bottom__footer-nav'>
                                <FontAwesomeIcon icon={faGear} className='left__nav__top-icon' />
                                <span>
                                    Settings
                                </span>
                            </li>
                            <li className='left__bottom__footer-nav'>
                                <FontAwesomeIcon icon={faHandBackFist} className='left__nav__top-icon' />
                                <span>
                                    Hold
                                </span>
                            </li>
                            <li className='left__bottom__footer-nav'>
                            <FontAwesomeIcon icon={faPercent} className='left__nav__top-icon' />
                                <span>
                                    Discount
                                </span>
                            </li>
                            <li className='left__bottom__footer-nav'>
                                <FontAwesomeIcon icon={faMoneyBill1Wave} className='left__nav__top-icon' />
                                <span>
                                    Pay Now
                                </span>
                            </li>
                        </ul>
                    </footer>
                </div>

                {/* POS RIGHT */}
                <div className="pos__right">
                    <nav className="right__nav__top">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="right__nav__top-search" />
                        <input type="text" className="right__nav__top-input" />
                        <FontAwesomeIcon icon={faQrcode} className="right__nav__top-qr" />
                    </nav>
                    <nav className="right__nav__bottom"></nav>
                </div>
            </div>

            <div className="pos__right__bar">
            </div>
        </div>
    </div>
  )
}

export default POS;
