import React from 'react'
import './AddCustomer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import CustomSelect from './CustomSelect';

const AddCustomer = ({handleActiveCustomerModal}) => {
  return (
    <div className='add__customer'>
        <div className="add__customer__content">
            <div className="add__customer__top">
                <h3>Add New Customer</h3>
                <FontAwesomeIcon icon={faXmark} onClick={handleActiveCustomerModal} />
            </div>
            <form className='add__customer__form'>
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <input type="text" placeholder='Phone' />
                {/* <select name="selectedFruit">
                  <option value="">Currency</option>
                  <option value="banana">Banana</option>
                  <option value="orange">Orange</option>
                </select> */}
                <CustomSelect />
                <input type="text" placeholder='TAX ID' />
                <button type='submit'>Add Customer</button>
            </form>
        </div>
    </div>
  )
}

export default AddCustomer