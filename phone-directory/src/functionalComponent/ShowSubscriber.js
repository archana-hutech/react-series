import React, { useState } from "react";
import Header from "../Header.js";
import "./ShowSubscriber.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
const ShowSubscriber = ({
  subscribersList,
  deleteSubscriberHandler,
  searchHandler,
}) => {
  const [searchInput, setSearchInput] = useState("");

  const onDeleteClick = (subscriberId) => {
    deleteSubscriberHandler(subscriberId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    searchHandler(searchInput);
  };

  const handleClearSearch = () => {
    setSearchInput("");
    searchHandler(""); // Reset to full list
  };

  return (
    <div className="component-container">
      <Header heading="Phone Directory" />
      <div className="component-body-container">
        <div className="action-bar">
          <Link to="/add">
            <button type="button" className="custom-btn add-btn">
              Add
            </button>
          </Link>

          <form onSubmit={handleSubmit} className="search-form">
            <div className="search-box-container">
              <input
                type="text"
                placeholder="Search by name..."
                className="search-box"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              {searchInput && (
                <FontAwesomeIcon
                  icon={faTimes}
                  className="cancel-icon"
                  onClick={handleClearSearch}
                />
              )}
              <button type="submit" className="search-btn">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </form>
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
                <button
                  className="custom-btn delete-btn"
                  onClick={() => onDeleteClick(sub.id)}
                >
                  Delete
                </button>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// const ShowSubscriber = ({
//   subscribersList,
//   deleteSubscriberHandler,
//   searchHandler,
// }) => {
//   const [searchInput, setSearchInput] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     searchHandler(searchInput);
//   };

//   const handleClearSearch = () => {
//     setSearchInput("");
//     searchHandler(""); // Reset to full list
//   };

//   return (
//     <div className="component-container">
//       <h2>Phone Directory</h2>
//       <div className="component-body-container">
//         <div className="action-bar">
//           <Link to="/add">
//             <button type="button" className="custom-btn add-btn">
//               Add
//             </button>
//           </Link>

//           <form onSubmit={handleSubmit} className="search-form">
//             <div className="search-box-container">
//               <input
//                 type="text"
//                 placeholder="Search by name..."
//                 className="search-box"
//                 value={searchInput}
//                 onChange={(e) => setSearchInput(e.target.value)}
//               />
//               {searchInput && (
//                 <FontAwesomeIcon
//                   icon={faTimes}
//                   className="cancel-icon"
//                   onClick={handleClearSearch}
//                 />
//               )}
//               <button type="submit" className="search-btn">
//                 <FontAwesomeIcon icon={faSearch} />
//               </button>
//             </div>
//           </form>
//         </div>

//         <div className="grid-container heading-container">
//           <span className="grid-item name-heading">Name</span>
//           <span className="grid-item phone-heading">Phone</span>
//           <span className="grid-item action-heading">Action</span>
//         </div>

//         {subscribersList.length > 0 ? (
//           subscribersList.map((sub) => (
//             <div key={sub.id} className="grid-container">
//               <span className="grid-item">{sub.name}</span>
//               <span className="grid-item">{sub.phone}</span>
//               <span className="grid-item action-btn-container">
//                 <button
//                   className="custom-btn delete-btn"
//                   onClick={() => deleteSubscriberHandler(sub.id)}
//                 >
//                   Delete
//                 </button>
//               </span>
//             </div>
//           ))
//         ) : (
//           <p>No results found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

export default ShowSubscriber;
