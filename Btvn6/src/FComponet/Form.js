import React, { useState } from 'react';
import "./Form.css";
import Price from "./Price"; 

export default function Form() {
    const [prices, setPrices] = useState([]); 

    const addPrice = (name, amount, date) => {
        setPrices([...prices, { name, amount, date }]);
    };

    const resetForm = () => {
        document.getElementById("priceForm").reset();
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get("name");
        const amount = formData.get("number");
        const date = formData.get("date");

        if (name && amount && date) {
            addPrice(name, amount, date);
            resetForm();
        } else {
            alert("Hay Nhap Gia Tri:");
        }
    };

    return (
        <div className="form-group">
            <form id="priceForm" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input className="form-control" type="text" name="name" placeholder="Enter name here ..." />
                </label>
                <br /> <br />
                <label>
                    Amount:
                    <input className="form-controls" type="text" name="number" placeholder="Enter amount here ..." />
                </label>
                <br /> <br />
                <label>
                    Date:
                    <input className="form-controlz" type="text" name="date" placeholder="dd/mm/yyyy" />
                </label>
                <br /> <br />
                <button className="buttonf" type="submit">ADD</button>
                <button className="buttonx" type="reset">CANCEL</button>
            </form>
            {prices.map((price, index) => (
                <Price key={index} name={price.name} amount={price.amount} date={price.date} />
            ))}
        </div>
    )
}





