// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../Header.js';
// import "./AddSubscribers.css"
// import { useNavigate } from 'react-router-dom';

// const AddSubscribers = ({ addSubscriberHandler }) => {
//   const navigate = useNavigate(); // Hook for navigation
  
//   const [subscriber, setSubscriber] = useState({
//     id: 0,
//     name: '',
//     phone: '',
//   });


//   const inputChangedHandler = (e) => {
//     const { name, value } = e.target;
//     setSubscriber((prevSubscriber) => ({
//       ...prevSubscriber,
//       [name]: value,
//     }));
//   };

//   const onFormSubmitted = (e) => {
//     e.preventDefault();
//     addSubscriberHandler(subscriber);
//     setSubscriber({ id: 0, name: '', phone: '' });
//     // Navigate back to the home page after adding the subscriber
//     navigate('/');
//   };

//   const { name, phone } = subscriber;

//   return (
//     <div>
//       <Header heading="Add Subscriber" />
//       <div className="component-body-container">
//         <Link to="/">
//           <button className="custom-btn">Back</button>
//         </Link>
//         <form className="subscriber-form" onSubmit={onFormSubmitted}>
//           <label htmlFor="name" className="label-control">
//             Name:
//           </label>
//           <br />
//           <input
//             type="text"
//             name="name"
//             id="name"
//             className="input-control"
//             onChange={inputChangedHandler}
//             value={name}
//             required
//           />
//           <br />
//           <br />
//           <label htmlFor="phone" className="label-control">
//             Phone:
//           </label>
//           <br />
//           <input
//             type="text"
//             name="phone"
//             id="phone"
//             className="input-control"
//             onChange={inputChangedHandler}
//             value={phone}
//             required
//           />
//           <br />
//           <br />
//           <div className="subscriber-info-container">
//             <span className="subscriber-to-add-heading">Subscriber to be added:</span>
//             <br />
//             <span className="subscriber-info">Name: {name}</span>
//             <br />
//             <span className="subscriber-info">Phone: {phone}</span>
//             <br />
//           </div>
//           <button type="submit" className="custom-btn add-btn" disabled>
//             Add
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddSubscribers;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../Header.js';
// import "./AddSubscribers.css";
// import { useNavigate } from 'react-router-dom';

// const AddSubscribers = ({ addSubscriberHandler }) => {
//   const navigate = useNavigate(); // Hook for navigation

//   const [subscriber, setSubscriber] = useState({
//     id: 0,
//     name: '',
//     phone: '',
//   });

//   // State to track if the form is valid
//   const [isFormValid, setIsFormValid] = useState(false);

//   const inputChangedHandler = (e) => {
//     const { name, value } = e.target;
//     setSubscriber((prevSubscriber) => {
//       const updatedSubscriber = {
//         ...prevSubscriber,
//         [name]: value,
//       };

//       // Update form validity
//       setIsFormValid(updatedSubscriber.name.trim() !== '' && updatedSubscriber.phone.trim() !== '');

//       return updatedSubscriber;
//     });
//   };

//   const onFormSubmitted = (e) => {
//     e.preventDefault();
//     addSubscriberHandler(subscriber);
//     setSubscriber({ id: 0, name: '', phone: '' });
//     setIsFormValid(false); // Reset form validity
//     navigate('/'); // Navigate back to the home page
//   };

//   const { name, phone } = subscriber;

//   return (
//     <div>
//       <Header heading="Add Subscriber" />
//       <div className="component-body-container">
//         <Link to="/">
//           <button className="custom-btn">Back</button>
//         </Link>
//         <form className="subscriber-form" onSubmit={onFormSubmitted}>
//           <label htmlFor="name" className="label-control">
//             Name:
//           </label>
//           <br />
//           <input
//             type="text"
//             name="name"
//             id="name"
//             className="input-control"
//             onChange={inputChangedHandler}
//             value={name}
//             required
//           />
//           <br />
//           <br />
//           <label htmlFor="phone" className="label-control">
//             Phone:
//           </label>
//           <br />
//           <input
//             type="text"
//             name="phone"
//             id="phone"
//             className="input-control"
//             onChange={inputChangedHandler}
//             value={phone}
//             required
//           />
//           <br />
//           <br />
//           <div className="subscriber-info-container">
//             <span className="subscriber-to-add-heading">Subscriber to be added:</span>
//             <br />
//             <span className="subscriber-info">Name: {name}</span>
//             <br />
//             <span className="subscriber-info">Phone: {phone}</span>
//             <br />
//           </div>
//           <button type="submit" className="custom-btn add-btn" disabled={!isFormValid}>
//             Add
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddSubscribers;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header.js';
import "./AddSubscribers.css";
import { useNavigate } from 'react-router-dom';

const AddSubscribers = ({ addSubscriberHandler }) => {
  const navigate = useNavigate(); // Hook for navigation

  const [subscriber, setSubscriber] = useState({
    id: 0,
    name: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const validateField = (fieldName, value) => {
    let error = '';
    if (fieldName === 'name' && !value.trim()) {
      error = 'Name is required';
    } else if (fieldName === 'phone') {
      if (!/^\d{10}$/.test(value)) {
        error = 'Phone number must be exactly 10 digits';
      }
    }
    return error;
  };

  const inputChangedHandler = (e) => {
    const { name, value } = e.target;

    const updatedSubscriber = {
      ...subscriber,
      [name]: value,
    };

    setSubscriber(updatedSubscriber);

    const updatedErrors = {
      ...errors,
      [name]: validateField(name, value),
    };

    setErrors(updatedErrors);

    // Update form validity
    const isFormValidNow =
      !updatedErrors.name && !updatedErrors.phone && updatedSubscriber.name.trim() !== '' && updatedSubscriber.phone.trim() !== '';
    setIsFormValid(isFormValidNow);
  };

  const onBlurHandler = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const onFormSubmitted = (e) => {
    e.preventDefault();
    if (isFormValid) {
      addSubscriberHandler(subscriber);
      setSubscriber({ id: 0, name: '', phone: '' });
      setErrors({ name: '', phone: '' });
      setIsFormValid(false);
      navigate('/');
    }
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
            onBlur={onBlurHandler}
            value={name}
            required
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
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
            onBlur={onBlurHandler}
            value={phone}
            required
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
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
          <button type="submit" className="custom-btn add-btn" disabled={!isFormValid}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSubscribers;


