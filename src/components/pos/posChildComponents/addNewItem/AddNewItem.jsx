import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './AddNewItem.css';

const AddNewItem = ({handleLeftTopNavActiveModal}) => {
  return (
    <div className='add__newitem'>
        <div className="add__newitem__overflow">
          <div className="add__newitem__content">
              <div className="add__newitem__top">
                  <h3>Add New Item</h3>
                  <FontAwesomeIcon icon={faXmark} onClick={handleLeftTopNavActiveModal} />
              </div>
              <hr />
              <div className="add__newitem__form">
                
              </div>
              
          </div>
        </div>
    </div>
  )
}

export default AddNewItem