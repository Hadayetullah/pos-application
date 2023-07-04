import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './DisplayNavItems.css'
import { useDispatch } from 'react-redux';

const CategoryModal = ({createProductList, navItems, categoryModalActive, handleCategoryModal}) => {
  
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(createProductList(item));
    handleCategoryModal();
  }

  return (
    // <div className='category__modal'>
        <div 
          className="category__modal__main"
          style={{
            transform: `${categoryModalActive ? 'translateX(0)' : 'translateX(100%)'}`,
          }}
        >
            <div className="cancel__category__modal">
              <FontAwesomeIcon 
                icon={faXmark} 
                className="cancel__category__modal-icon" 
                onClick={()=>handleCategoryModal()} 
              />
            </div>
            <div className="category__modal__body">
              <h3>Categories</h3>

              <FontAwesomeIcon 
                icon={faXmark} 
                className="cancel__category__modal-icon" 
                onClick={()=>handleCategoryModal()} 
              />

              <div className='category__modal__body-categories'>
                {
                  navItems.map((item, i)=>{
                    return (
                      <button onClick={()=> handleClick(item.category)} className='category__modal__body-items' key={i}>
                          {item.title}
                      </button>
                    )
                  })
                }
              </div>
            </div>
        </div>
    // </div>
  )
}

export default CategoryModal;