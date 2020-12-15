import React, { Component } from 'react';
import '../../assets/styles/NavBar.scss'
class NarBar  extends Component {
    render() { 
        return ( 
            <div className="wd-navbar">
                {this.props.children}
            </div>
         );
    }
}
 
export default NarBar;