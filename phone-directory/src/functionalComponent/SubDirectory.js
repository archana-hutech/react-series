import React, { useState, useEffect } from "react";
import AddSubscribers from "./AddSubscribers";
import ShowSubscriber from "./ShowSubscriber";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const SubDirectory = () => {
  const [subscribersList, setSubscriberList] = useState([
    { id: 1, name: "Ashok", phone: "8898988898" },
    { id: 2, name: "Kanika", phone: "9999999999" },
  ]);

  const [filteredSubscribersList, setFilteredSubscribersList] =
    useState(subscribersList);

  useEffect(() => {
    setFilteredSubscribersList(subscribersList);
  }, [subscribersList]);

  // const addSubscriberHandler = (newSubscriber) => {
  //   setSubscriberList((prevSubscribersList) => {
  //     const newId =
  //       prevSubscribersList.length > 0
  //         ? prevSubscribersList[prevSubscribersList.length - 1].id + 1
  //         : 1;
  //     newSubscriber.id = newId;
  //     const updatedSubscribersList = [...prevSubscribersList, newSubscriber];
  //     console.log("Phone Directory");
  //     console.log(updatedSubscribersList);
  //     return updatedSubscribersList;
  //   });
  // };

  const addSubscriberHandler = (newSubscriber) => {
    setSubscriberList((prev) => [
      ...prev,
      {
        ...newSubscriber,
        id: prev.length > 0 ? prev[prev.length - 1].id + 1 : 1,
      },
    ]);
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

  // const searchHandler = (subscriberName) => {
  //   const searchedSubscriber = subscribersList.find((subscriber) => subscriber.name === subscriberName);
  //   if (searchedSubscriber) {
  //     // alert(`Name: ${searchedSubscriber.name}\nPhone: ${searchedSubscriber.phone}`);
  //     console.log(`Name: ${searchedSubscriber.name}\nPhone: ${searchedSubscriber.phone}`);
  //     return searchedSubscriber;
  //   } else {
  //     alert("Subscriber not found.");
  //   }
  // }

  const searchHandler = (subscriberName) => {
    if (!subscriberName) {
      setFilteredSubscribersList(subscribersList); // Reset to full list if search input is empty
      return;
    }

    const searchedSubscriber = subscribersList.filter((subscriber) =>
      subscriber.name.toLowerCase().includes(subscriberName.toLowerCase())
    );

    if (searchedSubscriber.length > 0) {
      setFilteredSubscribersList(searchedSubscriber);
    } 
    else {
      alert("Subscriber not found.");
      setFilteredSubscribersList([]);
    }
  };

  return (
    <Router>
      <div className="main-container">
        <Routes>
          <Route
            path="/"
            element={
              <ShowSubscriber
                subscribersList={filteredSubscribersList}
                deleteSubscriberHandler={deleteSubscriberHandler}
                searchHandler={searchHandler}
              />
            }
          />
          {/* <Route
            path="/add"
            element={
              <AddSubscribers addSubscriberHandler={addSubscriberHandler} />
            }
          /> */}

          <Route
            path="/add"
            element={
              <>
                {console.log("Navigating to /add route")}
                <AddSubscribers addSubscriberHandler={addSubscriberHandler} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default SubDirectory;
