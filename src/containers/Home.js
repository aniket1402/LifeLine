import React, { Component } from 'react'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

export default class Home extends Component {
    state = {
        // location: {},
        longitude: 0,
        latitude: 0,
        errorMessage: '',
        longitudeDelta: 0,
        latitudeDelta: 0
    }

    componentDidMount() {
        this._getLocation();
    } 

    _getLocation = async() => {
        const {status} = await Permissions.askAsync(Permissions.LOCATION);
        if(status !== 'granted'){
            console.log('Permission Not Granted');
            this.setState({
                errorMessage: 'Permission Not Granted'
            })
        }
        // const { location } = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
        // this.setState({
        //     // location,
        //     logni: location.longitude,
        //     lati: location.latitude
        // })
        let { coords } = await Location.getCurrentPositionAsync({});
            this.setState({ region: {
                longitude: coords.longitude,
                latitude: coords.latitude,
                longitudeDelta: 0.04,
                latitudeDelta: 0.09
            } 
        });
    }

    render() {
        // const long = JSON.stringify(this.state.location)[2][2];
        // const lat = JSON.stringify(this.state.location)[2][4];
        return (
            <View>
                <View style={styles.main}>
                    <Text style={styles.text}>Are You Safe ???</Text>
                    <Text style={styles.text}>{this.state.lati}</Text>
                </View>    
                <View style={styles.container}>
                    <MapView
                        region={this.state.region}
                        style={styles.mapStyle}
                    >
                        {/* <Marker
                            coordinate={{latitude: this.state.lati,
                            longitude: this.state.longi,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,}}
                        /> */}
                    </MapView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
      fontSize: 40,
      fontWeight: "900",
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginTop: 10,
    },
    main:{
      marginTop:20,
    marginBottom: 50
    },
    container: {
      margin:20,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'black',
      borderWidth: 5
    },
    mapStyle: {
      width: 310,
      height: 330,
    },
  });