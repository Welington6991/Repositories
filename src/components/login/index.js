import React, { Component } from 'react';
import { Text, View, TouchableOpacity, AsyncStorage, Image, SafeAreaView } from 'react-native';
import { Container, CheckBox, Content, Spinner, Toast } from "native-base";
import { Madoka } from 'react-native-textinput-effects';
import { NavigationActions, StackActions } from "react-navigation";
import login from './../../login.json';
import style from './style';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      isLoadingLogin: false,
      email: '',
      password: '',
      checkBox: false,
      colorBorderError: '#fff'
    }
  }

  componentDidMount() {
    var actual = this;
    AsyncStorage.getItem('check', (err, result) => {
      if (err) {
        actual.setState({
          isLoading: false
        })
      } else {
        if (result == 'true') {
          const resetAction = StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Home' })
            ]
          });

          actual.props.navigation.dispatch(resetAction);
        } else {
          actual.setState({
            isLoading: false
          })
        }
      }
    })
  }

  message = (text) => {
    Toast.show({
      text: text,
      buttonText: "Ok",
      duration: 4000
    })
  }

  login = () => {
    var actual = this
    const { email, password, checkBox } = this.state;
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (checkBox == true)
      check = 'true';
    else
      check = 'false';

    if (!reg.test(email) && password.length < 6) {
      this.message('E-mail and password invalid!')
    }
    else if (!reg.test(email)) {
      this.message('E-mail invalid!')
    }
    else if (password.length < 6) {
      this.message('Password must be minimum 6 characters.')
    }
    else if (login.email != email && login.password != password) {
      this.message('E-mail and password incorrects!')
    }
    else if (login.email != email) {
      this.message('E-mail incorrect!')
    }
    else if (login.password != password) {
      this.message('Password incorrect!')
    }
    else {
      AsyncStorage.setItem('check', check);
      const resetAction = StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Home' })
        ]
      });

      actual.props.navigation.dispatch(resetAction);
    }
  }

  render() {
    if (this.state.isLoading) {
      return <Spinner color="#ce0309" />
    } else {
      return (
        <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: '#fff' }} >
          <Container style={style.container}>
            <Image style={style.background} source={require('../../../assets/img/fundo.png')} >
            </Image>
            <Content centerContent={true} style={style.content}>
              <View style={{ alignItems: 'center' }}>
                <Image style={style.logo} source={require('../../../assets/img/logoLogin.png')} />
                <Madoka
                  style={style.styleText}
                  onChangeText={email => this.setState({ email })}
                  inputStyle={{ color: '#fff' }}
                  label={'E-mail'}
                  autoComplete='email'
                  returnKeyType="next"
                  borderColor={this.state.colorBorderError}
                  labelStyle={{ color: '#fff' }}
                  selectionColor={'#fff'}
                  onSubmitEditing={() => this.inputPassword.focus()}
                  keyboardType="email-address"
                />

                <Madoka
                  style={style.styleText}
                  onChangeText={password => this.setState({ password })}
                  inputStyle={{ color: '#fff' }}
                  secureTextEntry
                  label={'Password'}
                  ref={(input) => this.inputPassword = input}
                  returnKeyType="go"
                  onSubmitEditing={() => this.login()}
                  borderColor={this.state.colorBorderError}
                  labelStyle={{ color: '#fff' }}
                  selectionColor={'#fff'}
                />

                <TouchableOpacity
                  style={style.styleButtonInput}
                  onPress={() => { this.login() }}
                >
                  <Text style={style.styleTextButtonInput}>Login</Text>
                </TouchableOpacity>
                <View style={style.CheckBox}>
                  <CheckBox style={style.Check} onPress={() => { this.setState({ checkBox: !this.state.checkBox }) }} color='transparent' checked={this.state.checkBox} />
                  <TouchableOpacity onPress={() => { this.setState({ checkBox: !this.state.checkBox }) }}>
                    <Text style={style.CheckBoxTexto}>Keep me logged</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Content>
          </Container>
        </SafeAreaView>
      );
    }
  }
}

export default Login;