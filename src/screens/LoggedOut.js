import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import colors from '../styles/colors';
import RoundedButton from '../components/buttons/RoundedButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import { transparentHeaderStyle } from '../styles/navigation';
import NavBarButton from '../components/buttons/NavBarButtons';
// import Login from './Login';

export default class LoggedOut extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerRight: () => <NavBarButton handleButtonPress={() => navigation.navigate('Login')} location='right' color={colors.white} text="Log In"/>,
        headerStyle: transparentHeaderStyle,
        headerTintColor: colors.white
    })

    constructor(props){
        super(props)
        this.onCreateAccountPress = this.onCreateAccountPress.bind(this)
    }
    
    onFacebookPress() {
        alert('Facebook button')
    }
    onCreateAccountPress({navigation}) {
        const {navigate} = this.props.navigation;
        // alert('Create button')
        navigate('Signup')
    }
    onMoreOptionsPress() {
        alert('More options')
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.welcomeWrapper}>
                    <Image
                        source={require('../img/car1.png')}
                        style={styles.logo}    
                    />
                    <Text style={styles.welcomeText}>Welcome to LifeLine</Text>
                    <RoundedButton
                        text="Continue with Facebook"
                        textColor={colors.green01}
                        background={colors.white}
                        icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon}/>}
                        handleOnPress={this.onFacebookPress}
                    />
                    <RoundedButton
                        text="Create Account"
                        textColor={colors.white}
                        handleOnPress={this.onCreateAccountPress}
                    />
                    <TouchableHighlight style={styles.moreOptionsButton} onPress={this.onMoreOptionsPress}>
                        <Text style={styles.moreOptionsButtonText}>More Options</Text>
                    </TouchableHighlight>
                    <View style={styles.termAndConditions}>
                        <Text style={styles.termsText}>By tapping continue, Create Account or More</Text>
                        <Text style={styles.termsText}> options, </Text>
                        <Text style={styles.termsText}>I agree to LifeLine's </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Terms of service</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>, </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Payments Terms of service</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>, </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Privacy Policy</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}> and </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Nondiscrimination Policy</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>.</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',
        backgroundColor: colors.green01,
    },
    welcomeWrapper: {
        flex: 1,
        display: 'flex',
        marginTop: 50,
        padding: 30,
        // alignItems: 'center'
    },
    welcomeText: {
        fontSize: 30,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40
    },
    facebookButtonIcon: {
        color: colors.green01,
        position: 'relative',
        left: 20,
        zIndex: 8
    },
    logo: {
        width: 100,
        height: 100,
        marginTop: 50,
        marginBottom: 40
    },
    moreOptionsButton: {
        marginTop: 10,
    },
    moreOptionsButtonText: {
        color: colors.white,
        fontSize: 16,
    },
    termAndConditions: {
        textAlign: 'justify',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 30,
    },
    termsText: {
        color: colors.white,
        fontSize: 13,
        fontWeight: '600',
    },
    linkButton: {
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
    },
});