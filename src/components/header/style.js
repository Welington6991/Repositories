const React = require('react-native');

const { StyleSheet } = React;
export default {
    styleViewHeader: {
        height: 50,
        alignItems: 'center',
        backgroundColor: '#ce0309',
        justifyContent: 'center'
    },
    logo: {
        width: 90,
        height: 45,
        resizeMode: 'contain'
    },
    styleLogout: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        marginTop: 15,
        position: 'absolute'
    },
    styleButtonLogout: {
        paddingRight: 10,
        paddingLeft: 40,
        borderColor: 'white'
    }
};