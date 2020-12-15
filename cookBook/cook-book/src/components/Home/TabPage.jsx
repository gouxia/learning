import React, { Component } from 'react';
import '../../assets/styles/TabPage.scss'
class TabPage extends Component {
    render() { 
        return ( 
            <div className="tab-page">
            <main className="content">
              {this.props.children}
            </main>
            {/* <!-- footer --> */}
            <div
              style={{width:'10rem',height:'1.47973rem',float:'left'}} ></div>  
          </div>
         );
    }
}
 
export default TabPage;