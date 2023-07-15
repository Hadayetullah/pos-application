import React, { useEffect, useState } from 'react'
import './SearchProducts.css';

const SearchProducts = ({data, handleSelectData}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);
  
    // useEffect(() => {
    //   if(searchQuery.trim() !== ""){
    //     const filtered = data.filter(option =>
    //         option.productTitle.toLowerCase().includes(searchQuery.toLowerCase().trim())
    //     );
    //     setFilteredOptions(filtered);
    //   }
    // }, [searchQuery]);
  
    const handleSelect = option => {
      handleSelectData(option);
      setSearchQuery('');
      setFilteredOptions([]);
    };

    const handelSearch = (value) => {
      setSearchQuery(value);
      const productSearchResults = [];
      for(let x in data) {
          let changeCaseSensitivity = data[x].productTitle.toLowerCase();
          if(value.trim() === ""){
              break;
          }
          else if(changeCaseSensitivity.includes(value.trim().toLowerCase())){
              productSearchResults.push(data[x]);
          }
      }

      setFilteredOptions(productSearchResults);
    }
    
  
    return (
      <div className="dropdown__search">
        <input
          type="text"
          value={searchQuery}
          // onChange={e => setSearchQuery(e.target.value)}
          onChange={(e)=> handelSearch(e.target.value)}
          placeholder="Search Products..."
        />
        <div className="dropdown__product__search">
          {filteredOptions.map((option, i) => (
            <div
              key={i}
              className="dropdown__product__item"
              onClick={() => handleSelect(option)}
            >
              {option.productTitle}
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default SearchProducts