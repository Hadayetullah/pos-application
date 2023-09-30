import React from 'react'
import './AddCustomer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import CustomSelect from './CustomSelect';
import CustomerInformationForm from './CustomerInformationForm';

const AddCustomer = ({handleActiveCustomerModal}) => {
  return (
    <div className='add__customer'>
        <div className="add__customer__overflow">
          <div className="add__customer__content">
              <div className="add__customer__top">
                  <h3>Add Customer</h3>
                  <FontAwesomeIcon icon={faXmark} onClick={handleActiveCustomerModal} />
              </div>
              <hr />
              <div className="add__customer__form">
                <div className="add__customer__middle__buttons">
                  <button>Customer Information</button>
                  <button>Shipping Address</button>
                </div>
                <CustomerInformationForm />
              </div>
              
          </div>
        </div>
    </div>
  )
}

export default AddCustomer