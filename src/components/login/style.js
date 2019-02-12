const React = require('react-native');

const { StyleSheet } = React;
export default {
    logo: {
        marginTop: 50,
        width: 300,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 100
    },
    styleButtonInput: {
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 50,
        borderWidth: 1,
        borderColor: '#fff'
    },
    styleTextButtonInput: {
        color: '#fff',
        fontSize: 30,
    },
    styleText: {
        width: 300
    },
    Check: {
        borderWidth: 2,
        borderColor: '#fff'
    },
    CheckBox: {
        flexDirection: 'row',
        marginTop: '3%'
    },
    CheckBoxTexto: {
        marginLeft: '6%',
        color: '#fff',
        textAlign: 'center'
    },
    background: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '100%', 
        height: '100%'
    },
    content: {
        alignSelf: 'center', 
        width: '100%', 
        height: '100%'
    }
};