import * as React from "react";
import { createBrowserRouter } from 'react-router-dom'
import POS from './components/pos/POS'
import AddCustomer from "./components/pos/posChildComponents/addCustomer/AddCustomer";


const router = createBrowserRouter([
  {
    path: "/",
    element: <POS />,
    children: [
      {
        path: "add-customer",
        element: <AddCustomer />
      },
    ],
  },
])

export default router
