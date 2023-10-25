import React, { useState } from 'react'
import './AddCustomer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import CustomSelect from './CustomSelect';
import { Link, Navigate, Outlet, redirect, useNavigate } from 'react-router-dom';

const AddCustomer = () => {

  const [selectedForm, setSelectedForm] = useState(1); 
  const activeButtonColor = "#B6D1CB";

  return (
    <div className='add__customer'>
        <div className="add__customer__overflow">
          <div className="add__customer__content">
              <div className="add__customer__top">
                  <h3>Add Customer</h3>
                  <Link to={`/`}><FontAwesomeIcon icon={faXmark} /></Link>
              </div>
              <hr />
              <div className="add__customer__form">
                <div className="add__customer__middle__buttons">
                  <Link to={`customer-information`}
                    style={{
                      backgroundColor: `${selectedForm === 1 ? activeButtonColor : "transparent"}`
                    }}
                    onClick={()=> setSelectedForm(1)}
                  >
                    Customer Information
                  </Link>

                  <Link to={`shipping-address`}
                    style={{
                      backgroundColor: `${selectedForm === 2 ? activeButtonColor : "transparent"}`
                    }}
                    onClick={()=> setSelectedForm(2)}
                  >
                    Shipping Address
                  </Link>
                </div>

                {selectedForm === 1 && <Navigate to={`customer-information`} replace={true} />}
                <Outlet />
              </div>
              
          </div>
        </div>
    </div>
  )
}

export default AddCustomer