/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { Root } from "native-base";

import { StackNavigator } from 'react-navigation';

import Login from "./components/login/index.js";
import Home from "./components/home/index.js";
import Web from "./components/web/index.js";

const stackRouterConfig = { initialRouteName: "Login", headerMode: "none" };

const stackConfigs = {
    Login: { screen: Login },
    Home: { screen: Home },
    Web: { screen: Web }
}

var AppNavigator = StackNavigator(stackConfigs, stackRouterConfig);

console.log(stackRouterConfig.initialRouteName)






class Routers extends Component{
    
    constructor(){
        super()
        this.state = {
            isLoading: true,
        }
    }
    
    render(){
        return(
            <Root>
                <AppNavigator />
            </Root>
        )
    }
}


export default Routers;