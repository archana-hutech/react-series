import React from "react";
import Header from "./Header.js";
import "./AddSubscriber.css";
function AddSubscriber() {
  return (
    <div>
      <Header heading="Add Subscriber" />
      <div className="component-body-container">
        <button className="custom-btn">Back</button>
        <form action="" className="subscriber-form">
          <label htmlFor="name" className="label-control">
            Name:
          </label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            className="input-contrl"
          />{" "}
          <br /> <br />
          <label htmlFor="phone" className="label-control">
            Phone:
          </label>{" "}
          <br />
          <input
            type="number"
            name="phone"
            id="phone"
            className="input-contol"
          />{" "}
          <br />
          <br />
          <div className="subscriber-info-container">
            <span className="subsciber-to-add-heading">Subscriber to be added:</span> <br />
            <span className="subscriber-info">Name: </span><br />
            <span className="subscriber-info">Phone: </span><br />
          </div>
          <button type="submit" className="custom-btn add-btn">Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddSubscriber;
