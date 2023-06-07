

import { navItems } from '../redux/data/Products'
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
    faMoneyBill1Wave,
    faEllipsisVertical,
    faMessage,
    faFlag,
    faAnglesUp,
    faXmark
} from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark, faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons'
// import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

import DisplayNavItems from './posChilds/DisplayNavItems'
import CategoryItems from './posChilds/CategoryItems'

import { closeModal, createProductList, currentOrder, removeItem } from '../redux/actionCreators'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CurrentOrderList from './posChilds/CurrentOrderList'


const POS = () => {

    const [itemCount, setItemCount] = useState(0);
    const [name, setName] = useState(false);
    const [activeSection, setActiveSection] = useState(false);

    const dispatch = useDispatch()
    const state = useSelector(state => state);

    // console.log(window.innerWidth)


    // useEffect(()=> {
        
    // }, []);
    // console.log(activeSection)


    useEffect(() => {
        dispatch(createProductList("all"));
        // handleResize();
        
        window.addEventListener('resize', handleResize);
        window.addEventListener('resize', handleClassName);
        return () => {
            window.removeEventListener('resize', handleResize);
            window.addEventListener('resize', handleClassName);
        };
    }, []);


    useEffect(()=>{
        handleResize("Resize");
        handleClassName();
    },[itemCount, name])

    

    const handleResize = (e) => {
        let items = Math.floor((document.querySelector(".pos__right__bottom").clientWidth)/ 170);
        if(items <=2) {
            setItemCount((items + 1));
        } else {
            setItemCount((items));
        }
        // console.log(window.innerWidth)
    };

    const handleClassName = () => {
        let windowWidth = window.innerWidth;
        if(windowWidth < 1051){
            setName(true);
        } else {
            setName(false)
        }
    }

    const posModal = (
        <div className="pos__modal">
            <div className="pos__modal-content">
                <div className="pos__modal-cross">
                    <FontAwesomeIcon icon={faXmark} onClick={()=> dispatch(closeModal())}/>
                </div>

                <span>{ state.isProductAvailable }</span>

                <button className='pos__modal-ok' onClick={()=> dispatch(closeModal())}>OK</button>
            </div>
        </div>
    )


    const footer = (
        <ul className={`${activeSection === true ? "translate__footer" : ""} left__bottom__footer`}>
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
            <li className='responsive__visible'></li>
            <li className='left__bottom__footer-nav'>
                <FontAwesomeIcon icon={faMoneyBill1Wave} className='left__nav__top-icon' />
                <span>
                    Pay Now
                </span>
            </li>
        </ul>
    )

    // console.log(state.isProductAvailable)


  return (
    <div>
        <div className="home grid">
            {/* <div className={`${name ? "responsive__scroll" : ""}`}> */}
                <div className="pos grid">
                    {/* <div className={`pos__left`}> */}
                    <div className={`pos__left ${activeSection === true ? "pos__left-deactive" : ""}`}>
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
                                {
                                    state.currentOrder.map((item, i, orderList)=> {
                                        return (
                                            <CurrentOrderList 
                                                item={item} 
                                                index={i} 
                                                orderList={orderList} 
                                                removeItem={removeItem} 
                                                totalPrice={state.totalPrice}
                                                key={i} 
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <footer className="left__bottom">
                            <div className="products__calculation__top">
                                <div>
                                    <span>Sub Total</span>
                                    <span className="price__title">
                                        <FontAwesomeIcon icon={faDollarSign} className='total__price-dolar' />{state.totalPrice.toFixed(2)}
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
                                <span>Products Count {`(${state.totalQty})`}</span>
                                <div className="total__price">
                                    <span>Total</span>
                                    <span>
                                        <FontAwesomeIcon icon={faDollarSign} className='total__price-dolar' />{state.totalPrice.toFixed(2)}
                                    </span>
                                </div>
                            </div>

                            { footer }
                        </footer>
                    </div>

                    <div className="responsive__footer__navigation">
                        { footer }
                    </div>

                    {/* POS RIGHT */}
                    <div className={`pos__right ${activeSection === true ? "pos__right-active": ""}`}>
                        <nav className="right__nav__top">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="right__nav__top-search" />
                            <input type="text" className="right__nav__top-input" placeholder='Search Products...' />
                            <FontAwesomeIcon icon={faQrcode} className="right__nav__top-qr" />
                        </nav>

                        <div className="pos__right__bottom">
                            <div className="pos__right__bottom__navsection grid">
                                <nav 
                                    className="right__nav__bottom grid"
                                    style={{
                                        gridTemplateColumns: `repeat(${itemCount}, auto)`,
                                    }}
                                >
                                    <DisplayNavItems createProductList={createProductList} navItems={navItems} itemCount={itemCount} />
                                </nav>

                                <div className="right__nav__bottom-menu">
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </div>
                            </div>

                            <div 
                                className="categories grid"
                                style={{
                                    gridTemplateColumns: `repeat(${itemCount}, auto)`,
                                }}
                            >
                                {
                                    state.products.map((item, i)=>{
                                        return <CategoryItems item={item} currentOrder={()=> dispatch(currentOrder(item))} key={i} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}

            <div onClick={()=> setActiveSection(!activeSection)} className="toggle__view">
                <FontAwesomeIcon icon={faAnglesUp} className='angle__up' />
            </div>
        </div>

        {
            (state.isProductAvailable !==null ? posModal : <div></div>)
        }
    </div>
  )
}

export default POS;
