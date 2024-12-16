import React, { useState } from "react";
import AddSubscribers from "./AddSubscribers";
import ShowSubscriber from "./ShowSubscriber";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const SubDirectory = () => {
  const [subscribersList, setSubscriberList] = useState([
    { id: 1, name: "Ashok", phone: "8898988898" },
    { id: 2, name: "Kanika", phone: "9999999999" },
  ]);

  const addSubscriberHandler = (newSubscriber) => {
    setSubscriberList((prevSubscribersList) => {
      const newId =
        prevSubscribersList.length > 0
          ? prevSubscribersList[prevSubscribersList.length - 1].id + 1
          : 1;
      newSubscriber.id = newId;
      const updatedSubscribersList = [...prevSubscribersList, newSubscriber];
      console.log("Phone Directory");
      console.log(updatedSubscribersList);
      return updatedSubscribersList;
    });
  };

//   const deleteSubscriberHandler = (subscriberId) => {
//     let subscriberIndex = 0;
//     subscribersList.forEach((subscriber, index) => {
//       if (subscriber.id === subscriberId) {
//         subscriberIndex = index;
//       }
//     });
//     let newSubscribers = subscribersList;
//     newSubscribers.slice(subscriberIndex, 1);
//     setSubscriberList({ subscriber: newSubscribers });
//   };

const deleteSubscriberHandler = (subscriberId) => {
    const updatedSubscribers = subscribersList.filter(
      (subscriber) => subscriber.id !== subscriberId
    );
    setSubscriberList(updatedSubscribers);
  };

  return (
    <Router>
      <div className="main-container">
        <Routes>
          <Route
            path="/"
            element={
              <ShowSubscriber
                subscribersList={subscribersList}
                deleteSubscriberHandler={deleteSubscriberHandler}
              />
            }
          />
          <Route
            path="/add"
            element={
              <AddSubscribers addSubscriberHandler={addSubscriberHandler} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default SubDirectory;
