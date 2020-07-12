import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { withNavigation } from 'react-navigation';
import Emergency from './Emergency';

const Help = ({navigation}) => {
	return(
    <View>
        <View style={{marginBottom: 20}}>
            <Text style={styles.text1}>Fortis Hospital</Text>
            <Text style={styles.text2}>011-27637810</Text>
            <Text style={styles.text1}>Max Hospital</Text>
            <Text style={styles.text2}>011-38735282</Text>
            <Text style={styles.text1}>Police Station</Text>
            <Text style={styles.text2}>011-27453829</Text>
            <Text style={styles.text1}>Emergency Contact 1 - 'Papa'</Text>
            <Text style={styles.text2}>9953785220</Text>
        </View>
        <View style={styles.button}>
            <Button title="Emergency" onPress={()=> navigation.navigate('Emergency',{screen : 'Emergency'})} />
        </View>
    </View>
	);
}

const styles = StyleSheet.create({
    text1:{
        marginTop: 10,
        marginLeft: 10,
        fontSize: 22,
        fontWeight: "bold"
    },
    text2:{
        marginLeft: 10,
        fontSize: 18,
        fontWeight: "500"
    },
    button:{
        marginHorizontal: 50,
        marginTop: 25,
        
    }
});

export default withNavigation(Help);