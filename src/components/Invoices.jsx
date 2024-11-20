import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import InvoiceContext from "../Context";

const Invoices = () => {
  const [pages, setPages] = useState(0);
  const { invoices, setInvoices } = useContext(InvoiceContext);
  console.log(invoices.length);
  const handlePagination = (id) => {
    setPages(id)
  }
  return (
    <div className="m-4 flex flex-col gap-6">
      <button className="bg-blue-400 rounded-md w-[150px] flex justify-center">
        <Link to={`/InvoiceDetailComponent`}>Add Invoice Item</Link>
      </button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>InvoiceNumber</th>
            <th>CustomerName</th>
            <th>BillingAddress</th>
            <th>ShippingAddress</th>
            <th>GSTIN</th>
          </tr>
        </thead>
        <tbody>
          {invoices &&
            invoices.slice(pages*10, pages + 10).map((ele, idx) => {
              return (
                <tr key={idx}>
                  <td>{ele.Id}</td>
                  <td>{ele.Date}</td>
                  <td>{ele.InvoiceNumber}</td>
                  <td>{ele.CustomerName}</td>
                  <td>{ele.BillingAddress}</td>
                  <td>{ele.ShippingAddress}</td>
                  <td>{ele.GSTIN}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="flex gap-2">

        {[...new Array(Math.ceil(invoices.length / 10))].map((ele, idx) => {
          return (
            <div className="border-2 border-black p-2" key={idx} onClick={()=>handlePagination(idx)}>
              {idx + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Invoices;
