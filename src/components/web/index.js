import React, { Component } from 'react';
import { WebView, View, SafeAreaView } from 'react-native';
import style from './style';

class Web extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const link = this.props.navigation.getParam("link");

        return (
            <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: '#fff' }} >
                <View style={style.screen}>
                    <WebView
                        source={{ uri: link }}
                        domStorageEnabled={true}
                        startInLoadingState={true}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

export default Web;