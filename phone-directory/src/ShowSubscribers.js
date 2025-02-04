import React, { Component } from "react";
import Header from "./Header.js";
import "./ShowSubscribers.css";
import  {Link} from "react-router-dom";

class ShowSubscribers extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     subscribersListToShow: [],
  //   };
  //   console.log("constructor called");
  // }

  // componentDidMount() {
  //   let newSubscriber ={
  //       id: 1,
  //       name: "Ashok",
  //       phone: "8898988898"
  //   }
  //   let subscribersList = this.state.subscribersListToShow
  //   subscribersList.push(newSubscriber)
  //   this.setState({subscribersListToShow: subscribersList})
  //   console.log("Component did mount called");
    
  //   console.log("state", this.state);
  // }

  render() {
    return (
      <div className="component-container">
        <Header heading="Phone Directory" />
        <div className="component-body-container">
         <Link to={"/add"}> <button className="custom-btn add-btn">Add</button> </Link>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {this.props.subscribersList.map((sub) => {
            return (
              <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn">Delete</button>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ShowSubscribers;
