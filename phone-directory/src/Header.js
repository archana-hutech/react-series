import React, { Component } from "react";
import './Header.css'

const Header = function(){
    const headerStyle = {textAlign: 'center',padding: 20, background: "black", color:'white',textTransform:'uppercase'}
    return (
        <div className="header">Phone Directory</div>
    )
}

// class Header extends Component {
//   render() {
//     return <div className="header">Phone Directory</div>;
//   }
// }

export default Header;
