import React from 'react'

const CustomerInformationForm = () => {
  return (
    <div>
        <form>
            <div className="row">
            <div className="col-25">
                <label htmlFor="fname">First Name</label>
            </div>
            <div className="col-75">
                <input type="text" name='fname' placeholder='Your name' />
            </div>
            </div>

            <div className="row">
            <div className="col-25">
                <label htmlFor="lname">Last Name</label>
            </div>
            <div className="col-75">
                <input type="text" name='lname' placeholder='Your last name' />
            </div>
            </div>

            <div className="row">
            <div className="col-25">
                <label htmlFor="email">Email</label>
            </div>
            <div className="col-75">
                <input type="email" name='email' placeholder='Email' />
            </div>
            </div>

            <div className="row">
                <div className="col-25">
                    <label htmlFor="currency">Currency</label>
                </div>
                <div className="col-75">
                    <select name="currency" className='add__customer__select'>
                        <option value="BDT" className='add__customer__select__option'>BDT</option>
                        <option value="EUR" className='add__customer__select__option'>EUR</option>
                        <option value="USD" className='add__customer__select__option'>USD</option>
                        <option value="GBP" className='add__customer__select__option'>GBP</option>
                    </select>
                </div>
            </div>

            <div className="row">
                <div className="col-25">
                    <label htmlFor="phone">Phone</label>
                </div>
                <div className="col-75">
                    <input type="text" name='phone' placeholder='Phone' />
                </div>
            </div>

            <div className="row">
                <div className="col-25">
                    <label htmlFor="taxid">Tax Id</label>
                </div>
                <div className="col-75">
                    <input type="text" name='taxid' placeholder='Tax Id' />
                </div>
            </div>

            <div className="row">
                <div className="col-25">
                    <label htmlFor="billingstreet">Street</label>
                </div>
                <div className="col-75">
                    <input type="text" name='billingstreet' placeholder='Billing Street' />
                </div>
            </div>

            <div className="row">
                <div className="col-25">
                    <label htmlFor="billingcity">City</label>
                </div>
                <div className="col-75">
                    <input type="text" name='billingcity' placeholder='Billing City' />
                </div>
            </div>

            <div className="row">
                <div className="col-25">
                    <label htmlFor="billingstate">State</label>
                </div>
                <div className="col-75">
                    <input type="text" name='billingstate' placeholder='Billing State' />
                </div>
            </div>

            <div className="row">
                <div className="col-25">
                    <label htmlFor="billingzip">Zip Code</label>
                </div>
                <div className="col-75">
                    <input type="text" name='billingzip' placeholder='Billing Zip Code' />
                </div>
            </div>

            <div className="row">
                <div className="col-25">
                    <label htmlFor="country">Country</label>
                </div>
                <div className="col-75">
                    <select name="country" className='add__customer__select'>
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
                    </select>
                </div>
            </div>


                  {/* <CustomSelect /> */}

                  {/* <button type='submit'>Add Customer</button> */}
        </form>
    </div>
  )
}

export default CustomerInformationForm