import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import '../../assets/styles/Tab.scss'
import Home from '../Home/Home'
import tab_me_no_ny from '../../assets/images/Home/tab_me_no_ny.png'
import tab_notice_no_ny from '../../assets/images/Home/tab_notice_no_ny.png'
import tab_main_no_ny from '../../assets/images/Home/tab_main_no_ny.png'
import tab_journey_no_ny from '../../assets/images/Home/tab_journey_no_ny.png'
import tab_journey_select_ny from '../../assets/images/Home/tab_journey_select_ny.png'
import tab_message_select_ny from '../../assets/images/Home/tab_message_select_ny.png'
import tab_main_select_ny from '../../assets/images/Home/tab_main_select_ny.png'
import tab_me_select_ny from '../../assets/images/Home/tab_me_select_ny.png'

export default class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: true,
    };
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 667 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="red"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${tab_main_no_ny}) center center /  21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${tab_main_select_ny}) center center /  21px 21px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
           <Home></Home>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${tab_journey_no_ny}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${tab_journey_select_ny}) center center /  21px 21px no-repeat` }}
              />
            }
            title="订单"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
           <div>bbb</div>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${tab_notice_no_ny}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${tab_message_select_ny}) center center /  21px 21px no-repeat` }}
              />
            }
            title="旅客须知"
            key="Friend"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <div>ccc</div>
          </TabBar.Item>
          <TabBar.Item
            icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${tab_me_no_ny}) center center /  21px 21px no-repeat` }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${tab_me_select_ny}) center center /  21px 21px no-repeat` }}
                />
              }
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            <div>ddd</div>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

