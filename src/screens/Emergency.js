import React, {Component} from 'react';
import MapView, { Marker, Polygon } from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';

export default class Emergency extends Component {
 
        state = {
          coordinates1: [
            { name: '1', latitude: 37.8025259, longitude: -122.4351431 },
            { name: '2', latitude: 37.7946386, longitude: -122.421646 },
            { name: '3', latitude: 37.7665248, longitude: -122.4165628},
            { name: '4', latitude: 37.7834153, longitude: -122.4527787 },
            { name: '5', latitude: 37.7948105, longitude: -122.4596065},
          ],
          coordinates2: [
            { name: '1', latitude: 37.8025259, longitude: -122.4351431 },
            { name: '2', latitude: 37.7946386, longitude: -122.421646 },
            { name: '3', latitude: 37.7665248, longitude: -122.4165628},
            { name: '4', latitude: 37.7834153, longitude: -122.4527787 },
            { name: '5', latitude: 37.7948105, longitude: -122.4596065},
            { name: '6', latitude: 37.78825, longitude: -122.4324}
          ]
        }

  render() {
    return (
      <View>
      <View style={styles.main}>
        <Text style={styles.text}>Stay Calm</Text>
        <Text style={styles.text}>Help is on the way</Text>
        </View>
      <View style={styles.container}>
      <MapView
  region={{latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0122,
    longitudeDelta: 0.0021,}}
   style={styles.mapStyle}
>
    <Polygon coordinates={this.state.coordinates1} />
    <Marker coordinate={
        { latitude: 37.78825, longitude: -122.4324}
    }
    title="you"
    />
    <Marker coordinate={{
        latitude: 37.8025259, longitude: -122.4351431}
    } 
    title="Help Center"
    />
    <Marker coordinate={{
       latitude: 37.7946386, longitude: -122.421646} 
    } 
    title="Help Center"
    />
    <Marker coordinate={{
        latitude: 37.7665248, longitude: -122.4165628}
    } 
    title="Help Center"
    />
    <Marker coordinate={{
        latitude: 37.7834153, longitude: -122.4527787} 
    }
    title="Help Center"
    />
    <Marker coordinate={{
        latitude: 37.7948105, longitude: -122.4596065}
    }
    title="Help Center"
    />
</MapView>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text:{
    fontSize: 40,
    fontWeight: "900",
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
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