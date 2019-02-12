import React, { Component } from 'react';
import { View, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { NavigationActions, StackActions } from "react-navigation";
import { Icon } from "react-native-elements";
import style from './style';

class Header extends Component {
  constructor(props) {
    super(props)
  }

  logout = () => {
    var actual = this.props.actual
    AsyncStorage.removeItem('check', (err, result) => {
      if (!err) {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Login' })],
        });

        actual.props.navigation.dispatch(resetAction);
      }
    });
  }

  render() {

    return (
      <View style={style.styleViewHeader}>
        <Image style={style.logo} source={require('../../../assets/img/logoHome.png')} />
        <View style={style.styleLogout}>
          <TouchableOpacity
            style={style.styleButtonLogout}
            onPress={() => { this.logout() }}
          >
            <Icon color="#fff" type="font-awesome" name="sign-out" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Header;