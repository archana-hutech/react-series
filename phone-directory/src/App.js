import React, { useState, useEffect } from "react";
import Header from "./Header.js";
import "./App.css";

function App() {
  // let subscribers = [
  //   {
  //     id: 1,
  //     name: "Shilpa",
  //     phone: "9876543210"
  //   },
  //   {
  //     id: 2,
  //     name: "Srishti",
  //     phone: "9876543210"
  //   }
  // ]

  // Initialize the subscribers state with useState
  const [subscribers, setSubscribers] = useState([
    {
      id: 1,
      name: "Shilpa",
      phone: "9876543210",
    },
  ]);

  useEffect(() => {
    console.log("Subscribers have been updated:", subscribers);
  }, [subscribers]);

  const deleteSubscriber = (subscriberId) => {
    alert("Are you sure you want to delete this subscriber?");
    subscribers = subscribers.filter(
      (subscriber) => subscriber.id !== subscriberId
    );
    console.log(subscribers);
  };

  const clickHandler = () => {
    alert("Delete clicked");
  };

  return (
    // <div>
    //   <Header />
    //   <button>Add</button>
    //   <div>
    //     <span>Name</span>
    //     <br />
    //     <span>Phone</span>
    //   </div>
    //   {/* <label htmlFor="name">Name: </label> */}
    //   {/* <input type="text" id="name" placeholder="Type here" defaultValue="Karthi" /> */}
    // </div>
    <div>
      <Header heading="Phone Directory" />
      <div className="component-body-container">
        <button className="custom-btn add-btn">Add</button>
        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
          <span className="grid-item action-btn">Action</span>
        </div>
        {subscribers.length === 0 ? (
          <div className="no-subscribers">No subscribers available</div>
        ) : (
          subscribers.map((subscriber) => {
            return (
              <div key={subscriber.id} className="grid-container">
                <span className="grid-item">{subscriber.name}</span>
                <span className="grid-item">{subscriber.phone}</span>
                <span className="grid-item action-btn">
                  {/* <button className="custom-btn delete-btn" onClick={() => deleteSubscriber(subscriber.id)}>Delete</button>  */}
                  {/* <button className="custom-btn delete-btn" onClick={clickHandler.bind(this, " Delete handler clicked")}>Delete</button> */}
                  <button
                    className="custom-btn delete-btn"
                    onClick={() => clickHandler()}
                  >
                    Delete
                  </button>
                </span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;

// import React from 'react';

// import LuckyThree from './game/LuckyThree.js';

// const idArr = ["numberCard1", "numberCard2", "numberCard3"];
// const colorsArr = ["#ff5e5e", "#66b266", "#5d5dff"];

// const App = function () {
//   return (
//     <LuckyThree idArr={idArr} colorsArr={colorsArr} />
//   )
// }

// export default App;
