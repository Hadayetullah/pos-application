import { Link, Outlet } from 'react-router-dom'
import { navItems } from '../../redux/data/Products'
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

import DisplayNavItems from './posChildComponents/navItem/DisplayNavItems'
import CategoryItems from './posChildComponents/category/CategoryItems'
import CurrentOrderList from './posChildComponents/orderList/CurrentOrderList'
import CategoryModal from './posChildComponents/modalCategory/CategoryModal'
import MobileResponsivePopupMsg from './posExampleShowcase/mobileResponsiveView/MobileResponsivePopupMsg'

import { 
    cancelOrder,
    closeModal, 
    createProductList, 
    currentOrder, 
    decreaseCartItem, 
    increaseCartItem, 
    removeItem, 
    selectedData
} from '../../redux/posReducer/posActionCreators'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchProducts from './posChildComponents/search/SearchProducts'
import AddCustomer from './posChildComponents/addCustomer/AddCustomer'
import HoldOrder from './posChildComponents/holdOrder/HoldOrder'
import { handleResponsiveMsg } from '../../redux/forDevelopment/devActionCreators'


const POS = () => {

    const [leftTopNavActiveModal, setLeftTopNavActiveModal] = useState(null); 
    const [itemCount, setItemCount] = useState(0);
    const [activeSection, setActiveSection] = useState(false);
    const [categoryModalActive, setCategoryModalActive] = useState(false);
    const [activeCustomerModal, setActiveCustomerModal] = useState(false);
    const [holdOrder, setHoldOrder] = useState(false);

    const [height, setHeight] = useState(window.innerHeight);
    
    const dispatch = useDispatch()
    const state = useSelector(state => state);

    // console.log(window.innerWidth)
    // console.log(state.allProductsData)


    // useEffect(()=> {
        
    // }, []);
    // console.log(activeSection)


    useEffect(() => {
        dispatch(createProductList("all"));
        // handleResizePosRightBottom();
        
        window.addEventListener('resize', handleResizePosRightBottom);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResizePosRightBottom);
            window.addEventListener('resize', handleResize);
        };
    }, []);


    useEffect(()=>{
        handleResizePosRightBottom("Resize");
        handleResize();
    },[itemCount])


    const handleLeftTopNavActiveModal = (activeModal) => {
        setLeftTopNavActiveModal(activeModal);
    }

    const handleActiveCustomerModal = () => {
        setActiveCustomerModal(prev => !prev);
    }

    const handleHoldOrderModal = () => {
        setHoldOrder(prev => !prev);
    }



    const handleResizePosRightBottom = (e) => {
        let items = Math.floor((document.querySelector(".pos__right__bottom").clientWidth)/ 170);
        if(items <=2) {
            setItemCount((items + 1));
        } else {
            setItemCount((items));
        }
        // console.log(window.innerWidth)
    };

    const handleResize = () => {
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        // if(windowWidth <= 824){
        //     setHeight(windowHeight - 60);
        // } else {
        //     setHeight(windowHeight);
        // }
        setHeight(windowHeight);
        // console.log(windowHeight)
        // console.log(windowWidth)
        // dispatch(handleResponsiveMsg(windowWidth));
    }

    // console.log(state.devReducer.isResponsive);

    const handleCategoryModal = () => {
        setCategoryModalActive(item=> !item);
    }

    // const addCustomer = () => {
    //     <AddCustomer />
    // }

    const handleSelectData = (option) => {
        dispatch(selectedData(option))
    }

    const posModal = (
        <div className="pos__modal">
            <div className="pos__modal-content">
                <div className="pos__modal-cross">
                    <FontAwesomeIcon icon={faXmark} onClick={()=> dispatch(closeModal())}/>
                </div>

                <span>{ state.pos.isProductAvailable }</span>

                <button className='pos__modal-ok' onClick={()=> dispatch(closeModal())}>OK</button>
            </div>
        </div>
    );


    const footer = (
        <div className={`${activeSection === true ? "translate__footer" : ""} left__bottom__footer-parent`}>
            <div className="pos__left__bottom-button">
                <div onClick={()=> setActiveSection(!activeSection)} className="pos__left__bottom-button-area">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className={`left__bottom__footer`}>
                <button className='left__bottom__footer-nav' onClick={()=> dispatch(cancelOrder())}>
                    <FontAwesomeIcon icon={faCircleXmark} className='left__nav__top-icon' />
                    <span>
                        Cancel
                    </span>
                </button>
                <button className='left__bottom__footer-nav'>
                    <FontAwesomeIcon icon={faGear} className='left__nav__top-icon' />
                    <span>
                        Settings
                    </span>
                </button>
                <button 
                    className='left__bottom__footer-nav' 
                    onClick={()=> setHoldOrder(!holdOrder)}
                    disabled={state.pos.totalPrice === 0 ? true : false}
                >
                    <FontAwesomeIcon icon={faHandBackFist} className='left__nav__top-icon' />
                    <span>
                        Hold
                    </span>
                </button>
                <button className='left__bottom__footer-nav' disabled={true}>
                    <FontAwesomeIcon icon={faPercent} className='left__nav__top-icon' />
                    <span>
                        Discount
                    </span>
                </button>
                <button className='responsive__visible' disabled></button>
                <button className='left__bottom__footer-nav' disabled>
                    <FontAwesomeIcon icon={faMoneyBill1Wave} className='left__nav__top-icon' />
                    <span>
                        Pay Now
                    </span>
                </button>
            </div>
        </div>
    )

    // console.log(state.isProductAvailable)


  return (
    <div>
        <div className="home grid" style={{
            height: `${height}px`,
        }}>
            {/* <div className={`${name ? "responsive__scroll" : ""}`}> */}
                <div className="pos grid">
                    {/* <div className={`pos__left`}> */}
                    <div 
                        className={`pos__left ${activeSection === true ? "pos__left-deactive" : ""}`}
                        style={{
                            height: `${height}px`,
                        }}
                    >
                       <div className="pos__left__main" style={{
                            height: `${height}px`,
                        }}>
                            <nav className="left__nav__top grid">
                                <FontAwesomeIcon icon={faBars} className="pos__left__bar" />
                                <div className="left__nav__top-items">
                                    <button className='left__nav__top-item'>
                                        <FontAwesomeIcon icon={faFileLines} className='left__nav__top-icon' />
                                        <span>
                                            Note
                                        </span>
                                    </button>
                                    <button className='left__nav__top-item'>
                                        <FontAwesomeIcon icon={faTruck} className='left__nav__top-icon' />
                                        <span>
                                            Shipping
                                        </span>
                                    </button>
                                    <button className='left__nav__top-item'>
                                    <FontAwesomeIcon icon={faLayerGroup} className='left__nav__top-icon' />
                                        <span>
                                            Hold Orders
                                        </span>
                                    </button>
                                    <button className='left__nav__top-item'>
                                        <FontAwesomeIcon icon={faCirclePlus} className='left__nav__top-icon' />
                                        <span>
                                            New Item
                                        </span>
                                    </button>
                                </div>
                            </nav>

                            <div className="left__nav__bottom-bg">
                                <nav className="left__nav__bottom">
                                    <div className="left__nav__bottom-left">
                                        <FontAwesomeIcon icon={faCircleUser} className='left__nav__bottom-icon' />
                                        <span>No active customer!</span>
                                    </div>

                                    <Link to={`pos/add-customer`}>
                                        <FontAwesomeIcon icon={faCirclePlus} 
                                            className='left__nav__bottom-icon' 
                                        />
                                    </Link>
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
                                        state.pos.currentOrder.map((item, i, orderList)=> {
                                            return (
                                                <CurrentOrderList 
                                                    item={item} 
                                                    index={i} 
                                                    orderList={orderList} 
                                                    removeItem={()=> dispatch(removeItem(item))} 
                                                    totalPrice={state.pos.totalPrice}
                                                    key={i} 
                                                    decreaseCartItem={()=> dispatch(decreaseCartItem(item))}
                                                    increaseCartItem={()=> dispatch(increaseCartItem(item))}
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
                                            <FontAwesomeIcon icon={faDollarSign} className='total__price-dolar' />{state.pos.totalPrice.toFixed(2)}
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
                                    <span>Products Count {`(${state.pos.totalQty})`}</span>
                                    <div className="total__price">
                                        <span>Total</span>
                                        <span>
                                            <FontAwesomeIcon icon={faDollarSign} className='total__price-dolar' />{state.pos.totalPrice.toFixed(2)}
                                        </span>
                                    </div>
                                </div>

                                { footer }
                            </footer>

                            
                       </div>
                       <div className="responsive__footer__navigation">
                            { footer }
                        </div>
                    </div>

                    

                    {/* POS RIGHT */}
                    <div className={`pos__right ${activeSection === true ? "pos__right-active": ""}`}>
                        <nav className="right__nav__top">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="right__nav__top-search" />
                            {/* <input onChange={(e)=>handelSearch(e)} type="text" className="right__nav__top-input" placeholder='Search Products...' /> */}
                            <SearchProducts data={state.pos.products} handleSelectData={handleSelectData} />
                            <FontAwesomeIcon icon={faQrcode} className="right__nav__top-qr" />
                        </nav>

                        <div className="pos__right__bottom">
                            <div className="pos__right__bottom-content">
                                <div className="pos__right__bottom__navsection grid">
                                    <nav 
                                        className="right__nav__bottom grid"
                                        style={{
                                            gridTemplateColumns: `repeat(${itemCount}, auto)`,
                                        }}
                                    >
                                        <DisplayNavItems createProductList={createProductList} navItems={navItems} itemCount={itemCount} />
                                    </nav>

                                    <div className="right__nav__bottom-menu" onClick={()=>handleCategoryModal()}>
                                        <FontAwesomeIcon icon={faEllipsisVertical} />
                                    </div>
                                </div>
                                <div className="pos__right__bottom-button">
                                    <div onClick={()=> setActiveSection(!activeSection)} className="pos__right__bottom-button-area">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>

                            <div 
                                className="categories grid"
                                style={{
                                    gridTemplateColumns: `repeat(${itemCount}, auto)`,
                                }}
                            >
                                {
                                    state.pos.products.map((item, i)=>{
                                        return <CategoryItems item={item} currentOrder={()=> dispatch(currentOrder(item))} key={i} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}

            {/* <div onClick={()=> setActiveSection(!activeSection)} className="toggle__view">
                <FontAwesomeIcon icon={faAnglesUp} className='angle__up' />
            </div> */}
        </div>


        {/* Modal - Showing Msg */}
        {
            (state.pos.isProductAvailable !==null ? posModal : <div></div>)
        }
        
        {/* Modal - Categories in modal */}
        <div 
            className='category__modal'
            style={{
                display: `${categoryModalActive ? 'block' : 'none'}`,
              }}
        ></div>
        
        <CategoryModal 
            createProductList={createProductList} 
            navItems={navItems} 
            categoryModalActive={categoryModalActive} 
            handleCategoryModal={handleCategoryModal} 
        />

        {/* Modal - Adding Customer */}
        {/* {
            activeCustomerModal && <AddCustomer handleActiveCustomerModal={handleActiveCustomerModal} />
        } */}
        {/* Test */}
        <div>
            <Outlet />
        </div>

        {/* Modal - Holding Order */}
        {
            holdOrder && <HoldOrder handleHoldOrderModal={handleHoldOrderModal} />
        }
    </div>
  )
}

export default POS;
