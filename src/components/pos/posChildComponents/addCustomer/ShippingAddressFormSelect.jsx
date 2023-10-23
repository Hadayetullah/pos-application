import React, { useState } from 'react';
import './ShippingAddressFormSelect.css'

const ShippingAddressFormSelect = () => {
  const options = [
    'Select One',
    'Bangladesh',
    'Soudi Arab',
    'Pakisthan',
    'India',
    'United States',
    'Canada',
    'Afghanisthan',
    'Albania',
    'Algeria',
    'Australia',
    'Bermuda',
    'Rassia',
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="shipping__address__dropdown">
      
      {isOpen && (
        <div className="shipping__address__options">
          {options.map((option, index) => (
            <div
              key={index}
              className="shipping__address__option"
              onClick={() => handleOptionSelect(option)}
            >
              <p>{option}</p>
            </div>
          ))}
        </div>
      )}


        <div className="shipping__address__selected-option" onClick={toggleDropdown}>
          {selectedOption}
        </div>
    </div>
  );
};

export default ShippingAddressFormSelect;
