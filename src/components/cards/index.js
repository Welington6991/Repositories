import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, NetInfo } from 'react-native';
import { Spinner, Toast } from "native-base";
import { SearchBar } from "react-native-elements";
import _ from 'lodash';
import axios from 'axios';
import style from './style';


class Cards extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            data: [],
            fullData: [],
            informationCards: '',
            informationSearch: ''
        }
        var actual = this
        function handleFirstConnectivityChange(connectionInfo) {
            NetInfo.isConnected.fetch().then(isConnected => {
                if (!isConnected) {
                    Toast.show({
                        text: 'Device is offline',
                        buttonText: "Ok",
                        duration: 4000
                    })
                    actual.setState({ informationCards: 'Device is offline' })
                }
                else {
                    actual.setState({ isLoading: true, informationCards: '' })
                    actual.componentDidMount();
                }
            })
        }
        NetInfo.addEventListener('connectionChange', handleFirstConnectivityChange);
    }

    componentDidMount = async () => {
        try {
            let res = await axios.get('https://api.github.com/repositories')
            let data = await res.data
            let informationCards = ''
            if (data.length == 0)
                informationCards = 'Empty data'

            this.setState({ data: data, fullData: data, isLoading: false, informationCards: informationCards })
        } catch (e) {
            NetInfo.isConnected.fetch().then(isConnected => {
                if (!isConnected) {
                    Toast.show({
                        text: 'Device is offline',
                        buttonText: "Ok",
                        duration: 4000
                    })
                    actual.setState({ informationCards: 'Device is offline' })
                }
            })
            this.setState({ isLoading: false, informationCards: 'Device is offline' })
        }
    }

    contains = (informations, query) => {
        const { name, description } = informations;
        if (name.toLowerCase().includes(query) || description.toLowerCase().includes(query)) {
            return true;
        }
        return false;
    }

    handleSearch = async (text) => {
        this.setState({ isLoading: true });
        if (text.length > 2 || text == '') {
            var information = ''
            const data = await _.filter(this.state.fullData, item => {
                const name = item.name.toUpperCase()
                const textData = text.toUpperCase()
                return name.indexOf(textData) > -1
            })
            if (data.length < 1)
                information = 'Empty data'
            this.setState({ data: data, isLoading: false, informationCards: information });
        } else {
            this.setState({ isLoading: false, informationCards: 'Search must be minimum 3 characters.' });
        }
    }

    render() {
        return (
            <View>
                <SearchBar placeholder="Search by name" lightTheme round onChangeText={this.handleSearch} />
                <ScrollView style={{ height: '82%' }}>
                    {this.state.isLoading ? <Spinner color="#ce0309" /> :
                        this.state.informationCards != '' ? <Text style={{ textAlign: 'center' }}>{this.state.informationCards}</Text> :
                            this.state.data.map((r, i) => {
                                return (
                                    <View key={i} style={style.list} >
                                        <Text style={style.title} >{r.name.toUpperCase()}</Text>
                                        <Text style={style.description} >{r.description}</Text>
                                        <TouchableOpacity onPress={() => { this.props.actualCards.props.navigation.navigate('Web', { link: r.owner.html_url }) }} style={[style.buttonData, { alignSelf: 'center', marginTop: 20, marginBottom: 5 }]}>
                                            <Text style={{ color: '#000' }} >REPOSITORY</Text>
                                        </TouchableOpacity>
                                    </View>
                                );
                            })}
                </ScrollView>
            </View>
        );
    }
}

export default Cards;