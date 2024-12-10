import React from "react";
import Header from "./Header.js";
import './App.css'


function App() {
  let subscribers = [
    {
      id: 1,
      name: "Shilpa",
      phone: "9876543210"
    },
    {
      id: 2,
      name: "Srishti",
      phone: "9876543210"
    }
  ]
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
      <Header heading="Phone Directory"/>
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
            <span className="grid-item action-btn">Action</span>
          </div>
          {subscribers.map((subscriber) => {
            return (
              <div key={subscriber.id} className="grid-container">
                <span className="grid-item">{subscriber.name}</span>
                <span className="grid-item">{subscriber.phone}</span>
                <span className="grid-item action-btn">
                  <button className="custom-btn delete-btn">Delete</button> 
                  {/* <button className="custom-btn edit-btn">Edit</button> */}
                </span>
              </div>
            )
          })}
        </div>
    </div>   
  );
}

export default App;
