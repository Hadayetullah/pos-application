import React, { useEffect, useState } from 'react'
import './AddCustomer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import CustomSelect from './CustomSelect';
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';

const AddCustomer = () => {

  const documentData = [
    {
      buttonTitle: "Customer Information",
      routeName: "customer-information",
    },
    {
      buttonTitle: "Shipping Address",
      routeName: "shipping-address"
    },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  const [selectedForm, setSelectedForm] = useState(null);

  useEffect(()=> {
    const pathNameSegments = location.pathname.split('/');
    const routeName = pathNameSegments[pathNameSegments.length - 1];
    if(routeName === "add-customer") {
      navigate(documentData[0].routeName);
      setSelectedForm(documentData[0].routeName)
    } else {
      navigate(routeName);
      setSelectedForm(routeName)
    }
  },[]);


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
                  {
                    documentData.map((data, i) => {
                      return(
                        <NavLink key={i}
                          className={`add__customer__middle__button 
                            ${selectedForm === data.routeName ? "add__customer__active__form" : ""}`
                          } 
                          to={ data.routeName }
                          onClick={()=> setSelectedForm(data.routeName)}
                        >
                          { data.buttonTitle }
                        </NavLink>
                      )
                    })
                  }
                </div>

                <Outlet />
              </div>
              
          </div>
        </div>
    </div>
  )
}

export default AddCustomer