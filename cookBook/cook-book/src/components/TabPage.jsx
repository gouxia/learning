import React, { Component } from 'react';
import '../assets/styles/TabPage.scss'
import TabBar from '../components/TabBar'
import TabItem from '../components/TabItem'
import tab_main_select_ny  from '../assets/images/tab_main_select_ny.png'
import tab_journey_no_ny  from '../assets/images/tab_journey_no_ny.png'
import tab_notice_no_ny  from '../assets/images/tab_notice_no_ny.png'
import tab_me_no_ny  from '../assets/images/tab_me_no_ny.png'
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
            <TabBar>
              <TabItem >
                <img
                  src={tab_main_select_ny}
                  alt="activeHomeIcon" />
                  <div>首页</div>
                
              </TabItem>
              <TabItem>
                <img
                  src={tab_journey_no_ny}
                  alt="homeIcon" />
                  <div>订单</div>
                
              </TabItem>
              <TabItem>
                <img
                  src={tab_notice_no_ny}
                  alt="homeIcon" />
                  <div>旅客须知</div>
                
              </TabItem>
              <TabItem>
                <img
                  src={tab_me_no_ny}
                  alt="homeIcon" />
                  <div>我</div>
                
              </TabItem>
            </TabBar>
          </div>
         );
    }
}
 
export default TabPage;