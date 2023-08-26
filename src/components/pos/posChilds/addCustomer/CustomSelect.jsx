import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const CustomSelect = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
  
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ];
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionSelect = (option) => {
      setSelectedOption(option.label);
      setIsOpen(false);
    };
  
    return (
      <div className="custom-select-container">
        <div className={`custom-select ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
          <div className="selected-option">
            {selectedOption !== '' ? <span>{selectedOption}</span> : <span>Currency</span>}
          </div>
          <div className="dropdown-icon">
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
        {isOpen && (
          <ul className="options">
            {options.map((option) => (
              <li key={option.value} onClick={() => handleOptionSelect(option)}>
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

export default CustomSelect;
  