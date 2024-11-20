import React, { useState, useContext } from "react";
import InvoiceContext from "../Context";
const InvoiceDetailComponent = () => {
  const { invoices, setInvoices } = useContext(InvoiceContext);

  const [data, setData] = useState({
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
  });
  const [InvoiceItem, setInvoiceItem] = useState({
    Id: "",
    ItemName: "",
    Quatity: 0,
    Price: 0,
  });
  const [InvoiceBillSundry, setInvoiceBillSundry] = useState({
    Id: "",
    billSundryName: "",
  });
  const hadleChangeInput = (e) => {
    let { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleAddItem = (type) => {
    if (type == "InvoiceItem") {
      setData((prev) => {
        let items = prev.Items;
        items.push(InvoiceItem);
        return {
          ...prev,
          Items: items,
        };
      });
    }
    if (type === "BillSundrys") {
      setData((prev) => {
        let items = prev.BillSundrys;
        items.push(InvoiceItem);
        return {
          ...prev,
          BillSundrys: items,
        };
      });
    }
  };
  const handleInvoiceItem = (e) => {
    let { name, value } = e.target.value;
    setInvoiceItem((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const format = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    setInvoices((prev) => {
      return [...prev, data];
    });
  };
  return (
    <div className="p-10">
      <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex text-center w-[600px] justify-around gap-5">
          <label>Customer Name</label>
          <input
            required
            className="border-2 border-black"
            value={data.CustomerName}
            name={`CustomerName`}
            onChange={(e) => hadleChangeInput(e)}
          />
        </div>
        <div className="flex  text-cente w-[600px] justify-around  gap-5">
          <label>BillingAddress</label>
          <input
            required
            className="border-2 border-black"
            value={data.BillingAddress}
            name={`BillingAddress`}
            onChange={(e) => hadleChangeInput(e)}
          />
        </div>
        <div className="flex  text-cente w-[600px] justify-around  gap-5">
          <label>ShippingAddress</label>
          <input
            required
            className="border-2 border-black"
            value={data.ShippingAddress}
            name={`ShippingAddress`}
            onChange={(e) => hadleChangeInput(e)}
          />
        </div>
        <div className="flex  text-cente w-[600px] justify-around  gap-5">
          <label>GSTN</label>
          <input
            required
            className="border-2 border-black"
            value={data.GSTIN}
            name={`GSTIN`}
            onChange={(e) => hadleChangeInput(e)}
          />
        </div>

        <div className="border-2 border-zinc-200">
          <div>Items:</div>
          <span>Item Name</span>
          <input
            className="border-2 border-black"
            value={InvoiceItem.ItemName}
            name="ItemName"
            onChange={(e) => handleInvoiceItem(e)}
          />
          <span>Quantity</span>
          <input
            type="number"
            name="Quantity"
            value={InvoiceItem.Quatity}
            className="border-2 border-black"
            onChange={(e) => handleInvoiceItem(e)}
          />
          <span>Price</span>
          <input
            type="number"
            name="Price"
            value={InvoiceItem.Price}
            className="border-2 border-black"
            onChange={(e) => handleInvoiceItem(e)}
          />
          <button
            className="bg-blue-400 rounded-md p-2"
            onClick={() => handleAddItem()}
          >
            Add Item
          </button>
        </div>
        <div>
          <div>BillSundrys:</div>
          <input
            className="border-2 border-black"
            value={InvoiceBillSundry.billSundryName}
            onChange={(e) => setInvoiceItem(e.target.value)}
          />
          <button
            className="bg-blue-400 rounded-md p-2"
            onClick={() => handleAddItem()}
          >
            Add Item
          </button>
        </div>
        <button
          type="Submit"
          className="bg-blue-600 w-[100px]  h-[40px] rounded-md "
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default InvoiceDetailComponent;
