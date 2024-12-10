import React from "react";
import './Header.css'

const Header = function(props){
    // const headerStyle = {textAlign: 'center',padding: 20, background: "black", color:'white',textTransform:'uppercase'}
    return (
        <div className="header">{props.heading}</div>
    )
}

// class Header extends Component {
//   render() {
//     return <div className="header" style={headerStyle}>{this.props.heading}</div>;
//   }
// }

export default Header;
