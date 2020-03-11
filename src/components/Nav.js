import React, {useEffect, useState} from 'react';
import {NavItem, Navbar, Tab, Tabs, CardTitle, Icon} from 'react-materialize'
import Movies from './Movies';

const Nav = () =>{
  return (
              <Navbar
                alignLinks="right"
                backgroundColor="blue"
                brand={<a className="brand-logo" href="#">Lovel Free Download Site</a>}
                extendWith={<Tabs className="tabs-transparent">
                  <Tab className="black-text flow-text" options={{duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false}} title="Latest Movies">
                   <Movies /> 
                  </Tab>
                <Tab active className="white-text" options={{duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false}} title="Latest Software">Latest Software</Tab>
                <Tab className="white-text" options={{duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false}} title="test 4">Latest</Tab>
                </Tabs>
                }
                menuIcon={<Icon>menu</Icon>}
                options={{
                  draggable: true,
                  edge: 'left',
                  inDuration: 250,
                  onCloseEnd: null,
                  onCloseStart: null,
                  onOpenEnd: null,
                  onOpenStart: null,
                  outDuration: 200,
                  preventScrolling: true
                }}
              >
                <NavItem onClick={function noRefCheck(){}}>
                  Getting started
                </NavItem>
                <NavItem href="components.html">
                  Components
                </NavItem>
              </Navbar>
  )
}

export default Nav