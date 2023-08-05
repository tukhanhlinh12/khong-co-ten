import React, { useState } from "react";
import Form from "./Form";
import "./Add.css";

export default function Add() {
  const [buttonText, setButtonText] = useState("ADD NEW EXPENSE");
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    if (!showForm) {
      setButtonText("TURN OFF");
      setShowForm(true);
    } else {
      setButtonText("ADD NEW EXPENSE");
      setShowForm(false);
    }
  };

  return (
    <>
      <div className="buttons">
        <button className="buttonz" onClick={handleClick}>
          {buttonText}
        </button>
      </div>
      {showForm && <Form />}
    </>
  );
}
