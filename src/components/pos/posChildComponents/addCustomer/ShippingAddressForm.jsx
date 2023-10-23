import React from 'react'
import ShippingAddressFormSelect from './ShippingAddressFormSelect'

const ShippingAddressForm = () => {
  return (
    <div>
        <form className='shipping__address__form'>
            <div className="row">
                <div className="col-25">
                    <label htmlFor="shippingStreet">Street</label>
                </div>
                <div className="col-75">
                    <input type="text" name='shippingStreet' placeholder='Street' />
                </div>
            </div>

            <div className="row">
                <div className="col-25">
                    <label htmlFor="shippingCity">City</label>
                </div>
                <div className="col-75">
                    <input type="text" name='shippingCity' placeholder='City' />
                </div>
            </div>

            <div className="row">
                <div className="col-25">
                    <label htmlFor="shippingState">State</label>
                </div>
                <div className="col-75">
                    <input type="text" name='shippingState' placeholder='State' />
                </div>
            </div>

            <div className="row">
                <div className="col-25">
                    <label htmlFor="shippingZipCode">Zip Code</label>
                </div>
                <div className="col-75">
                    <input type="text" name='shippingZipCode' placeholder='Zip Code' />
                </div>
            </div>

            <div className="row">
                <div className="col-25">
                    <label htmlFor="shippingCountry">Country</label>
                </div>
                <div className="col-75">
                    <ShippingAddressFormSelect />
                    {/* <select name="shippingCountry" className='add__customer__select'>
                        <option value="" className='add__customer__select__option'>Select One</option>
                        <option value="Bangladesh" className='add__customer__select__option'>Bangladesh</option>
                        <option value="Soudi Arab" className='add__customer__select__option'>Soudi Arab</option>
                        <option value="Pakisthan" className='add__customer__select__option'>Pakisthan</option>
                        <option value="India" className='add__customer__select__option'>India</option>
                        <option value="United States" className='add__customer__select__option'>United States</option>
                        <option value="Canada" className='add__customer__select__option'>Canada</option>
                        <option value="Afghanisthan" className='add__customer__select__option'>Afghanisthan</option>
                        <option value="Albania" className='add__customer__select__option'>Albania</option>
                        <option value="Algeria" className='add__customer__select__option'>Algeria</option>
                        <option value="Australia" className='add__customer__select__option'>Australia</option>
                        <option value="Bermuda" className='add__customer__select__option'>Bermuda</option>
                        <option value="Rassia" className='add__customer__select__option'>Rassia</option>
                    </select> */}
                </div>
            </div>


                  {/* <CustomSelect /> */}

                  {/* <button type='submit'>Add Customer</button> */}
        </form>
    </div>
  )
}

export default ShippingAddressForm