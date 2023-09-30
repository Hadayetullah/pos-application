import React from 'react'
import './HoldOrder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const HoldOrder = ({handleHoldOrderModal}) => {
    const state = useSelector(state => state.pos)
    return (
        <div className='hold__order'>
            <div className="hold__order__content">
                <div className="hold__order__top">
                    <h3>Order on Hold</h3>
                    <FontAwesomeIcon icon={faXmark} onClick={handleHoldOrderModal} />
                </div>
                <form className='hold__order__form'>
                    <div className="hold__order__inside">
                        <span>Order Title</span>
                        <input type="text" placeholder='Title name' />
                    </div>

                    <div className="hold__order__inside">
                        <span>Order Amount</span>
                        <input type="text" placeholder={`${state.totalPrice} $`} disabled />
                    </div>

                    <div className="hold__order__buttons">
                        <button onClick={handleHoldOrderModal} style={{backgroundColor: "#B42A2B"}}>Close</button>
                        <button type='submit'>Put on hold</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default HoldOrder