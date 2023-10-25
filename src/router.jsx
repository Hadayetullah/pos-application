import * as React from "react";
import { createBrowserRouter } from 'react-router-dom'
import POS from './components/pos/POS'
import AddCustomer from "./components/pos/posChildComponents/addCustomer/AddCustomer";
import CustomerInformationForm from "./components/pos/posChildComponents/addCustomer/CustomerInformationForm";
import ShippingAddressForm from "./components/pos/posChildComponents/addCustomer/ShippingAddressForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <POS />,
    children: [
      {
        path: "pos/add-customer",
        element: <AddCustomer />,
        children: [
          {
            path: "customer-information",
            element: <CustomerInformationForm />
          },
          {
            path: "shipping-address",
            element: <ShippingAddressForm />,
          },
        ],
      },
    ],
  },
])

export default router
