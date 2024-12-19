import React, {useState}  from "react";
import Header from "../Header.js";
import "./ShowSubscriber.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
const ShowSubscriber = ({subscribersList, deleteSubscriberHandler, searchHandler}) => {
  const [searchInput, setSearchInput] = useState("");

    const onDeleteClick = (subscriberId)  => {
        deleteSubscriberHandler(subscriberId) 
    }
    const onSearchHandler = () =>{
      searchHandler(searchInput)
    }

    const handleClearSearch = () => {
      setSearchInput(""); // Clear the input
      searchHandler(""); // Reset the search (show all subscribers)
    };

  return (
    <div className="component-container">
      <Header heading="Phone Directory" />
      <div className="component-body-container">
        <Link to={"/add"}>
          {" "}
          <button className="custom-btn add-btn">Add</button>
        </Link>
        {/* <input type="text" name="search" className="search-box" placeholder="Search.."  value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}/>
         <button type="submit" className="search-btn" onClick={onSearchHandler}> <FontAwesomeIcon icon={faSearch} /></button> */}
         {/* Search Input with Cancel Icon */}
        <div className="search-box-container">
          <input
            type="text"
            name="search"
            className="search-box"
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          {searchInput && (
            <FontAwesomeIcon
              icon={faTimes}
              className="cancel-icon"
              onClick={handleClearSearch} // Clear the input and reset search
            />
          )}
          <button type="submit" className="search-btn" onClick={onSearchHandler}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
          <span className="grid-item phone-heading">Action</span>
        </div>

        {subscribersList.map((sub) => {
          return (
            <div key={sub.id} className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              <span className="grid-item action-btn-container">
              <button className="custom-btn delete-btn" onClick={() => onDeleteClick(sub.id)}>Delete</button>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowSubscriber;
