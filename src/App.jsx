import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Invoices from "./components/Invoices";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import InvoiceDetailComponent from "./components/InvoiceDetailComponent";
import InvoiceContext from "./Context";
function App() {
  const [invoices, setInvoices] = useState([
    {
      Id: "1",
      Date: "2",
      InvoiceNumber: 0,
      CustomerName: "1",
      BillingAddress: "1",
      ShippingAddress: "1",
      GSTIN: "1",
      Items: [],
      BillSundrys: [],
      TotalAmount: 0,
    },
  ]);
  return (
    <div>
      <div className="">
        <div className="flex ">
          <InvoiceContext.Provider value={{invoices,setInvoices}}>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/Invoices" element={<Invoices />} />
                <Route
                  path="/InvoiceDetailComponent"
                  element={<InvoiceDetailComponent />}
                />
              </Routes>
            </BrowserRouter>
          </InvoiceContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
