import React, { Component } from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class PhoneDirectory extends Component {
  constructor() {
    super();
    this.state = {
      subscribersList: [
        { id: 1, name: "Ashok", phone: "8898988898" },
        { id: 2, name: "Kanika", phone: "9999999999" },
      ],
    };
  }

  addSubscriberHandler = (newSubscriber) => {
    let subscribersList = this.state.subscribersList;
    if (subscribersList.length > 0) {
      newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
    } else {
      newSubscriber.id = 1;
    }
    subscribersList.push(newSubscriber);
    this.setState({ subscribersList: subscribersList });
    console.log("Phone Directory");

    console.log(this.state.subscribersList);
  };

  render() {
    // return <AddSubscriber addSubscriberHandler={this.addSubscriberHandler} />;
    // return <ShowSubscribers subscribersList={this.state.subscribersList} />;
    return (
      <Router>
        <div className="main-container">
          <Routes>
            <Route
              path="/"
              element={
                <ShowSubscribers subscribersList={this.state.subscribersList} />
              }
            />
            <Route
              path="/add"
              element={
                <AddSubscriber
                  addSubscriberHandler={this.addSubscriberHandler}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default PhoneDirectory;
