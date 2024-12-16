import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header.js';
import "./AddSubscribers.css"
import { useNavigate } from 'react-router-dom';

const AddSubscribers = ({ addSubscriberHandler }) => {
  const [subscriber, setSubscriber] = useState({
    id: 0,
    name: '',
    phone: '',
  });
  const navigate = useNavigate(); // Hook for navigation


  const inputChangedHandler = (e) => {
    const { name, value } = e.target;
    setSubscriber((prevSubscriber) => ({
      ...prevSubscriber,
      [name]: value,
    }));
  };

  const onFormSubmitted = (e) => {
    e.preventDefault();
    addSubscriberHandler(subscriber);
    setSubscriber({ id: 0, name: '', phone: '' });
    // Navigate back to the home page after adding the subscriber
    navigate('/');
  };

  const { name, phone } = subscriber;

  return (
    <div>
      <Header heading="Add Subscriber" />
      <div className="component-body-container">
        <Link to="/">
          <button className="custom-btn">Back</button>
        </Link>
        <form className="subscriber-form" onSubmit={onFormSubmitted}>
          <label htmlFor="name" className="label-control">
            Name:
          </label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            className="input-control"
            onChange={inputChangedHandler}
            value={name}
          />
          <br />
          <br />
          <label htmlFor="phone" className="label-control">
            Phone:
          </label>
          <br />
          <input
            type="text"
            name="phone"
            id="phone"
            className="input-control"
            onChange={inputChangedHandler}
            value={phone}
          />
          <br />
          <br />
          <div className="subscriber-info-container">
            <span className="subscriber-to-add-heading">Subscriber to be added:</span>
            <br />
            <span className="subscriber-info">Name: {name}</span>
            <br />
            <span className="subscriber-info">Phone: {phone}</span>
            <br />
          </div>
          <button type="submit" className="custom-btn add-btn">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSubscribers;
