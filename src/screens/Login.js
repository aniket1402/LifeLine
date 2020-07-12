import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import colors from '../styles/colors';
import InputField from '../components/form/InputField';
import NextArrowButton from '../components/buttons/NextArrowButton';
import Notification from '../components/Notification';
import Loader from '../components/Loader';
import { transparentHeaderStyle } from '../styles/navigation';
import NavBarButton from '../components/buttons/NavBarButtons';

class Login extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerRight: () => <NavBarButton handleButtonPress={() => navigation.navigate('ForgotPassword')} location='right' color={colors.white} text="Forgot Password?"/>,
        // headerStyle: transparentHeaderStyle,
        headerTintColor: colors.white
    })

    constructor(props) {
        super(props);
        this.state = {
            formValid: true,
            validEmail: false,
            emailAddress: '',
            password: '',
            validPassword: false,
            lodingVisible: false,
        }
        this.handleCloseNotification = this.handleCloseNotification.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleNextButton = this.handleNextButton.bind(this)
        this.toggleNextButtonState = this.toggleNextButtonState.bind(this)
    }
    handleNextButton() {
        // simulate slow server to show loading
        this.setState({
            lodingVisible: true
        })
        const {navigate} = this.props.navigation;

        setTimeout(() => {
            // const {emailAddress, password} = this.state;
            // if (this.props.logIn(emailAddress,password)){
            //     this.setState({formValid: true, lodingVisible: false});
            // } else {
            //     this.setState({formValid: false, lodingVisible: false});
            // }
            if(this.state.emailAddress === 'aniket@gmail.com' && this.state.validPassword){
                // alert('Success')
                this.setState({formValid: true, lodingVisible: false}, () => {
                    alert('success')
                });
                navigate('LoggedInTabNavigator');
            } else {
                this.setState({formValid: false, lodingVisible: false})
            }
        }, 2000);
    }

    handleCloseNotification() {
        this.setState({
            formValid: true
        })
    }

    handleEmailChange(email) {
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.setState({
            emailAddress: email,
        })
        if(!this.state.validEmail){
            if(emailCheckRegex.test(email)){
                this.setState({validEmail: true})
            }
        } else {
            if(!emailCheckRegex.test(email)){
                this.setState({validEmail: false})
            } 
        }
    }

    handlePasswordChange(password){
        this.setState({ password });
        if(!this.state.validPassword){
            if(password.length > 4){
                this.setState({validPassword: true})
            }
        } else if (password.length <= 4){
            this.setState({validPassword: false})
        }
    }

    toggleNextButtonState() {
        const {validEmail, validPassword} = this.state;
        if(validEmail && validPassword){
            return false;
        }
        return true;
    }

    render() {
        const { formValid, lodingVisible, validEmail, validPassword } = this.state;
        const showNotification = formValid ? false : true;
        const background = formValid ? colors.green01 : colors.darkOrange;
        // const notificationMarginTop = showNotification ? 10 : 0;
        // console.log(this.props.loggedInStatus)
        return (
            <KeyboardAvoidingView style={[{backgroundColor: background},styles.wrapper]} behavior="">
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.loginHeader}>Log In</Text>
                        <InputField
                            labelText="EMAIL ADDRESS"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            bottomBorderColor={colors.white}
                            inputType="email"
                            customStyle={{marginBottom:30}}
                            onChangeText={this.handleEmailChange}
                            showCheckmark={validEmail}
                            autoFocus={true}
                        />
                        <InputField
                            labelText="PASSWORD"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            bottomBorderColor={colors.white}
                            inputType="password"
                            customStyle={{marginBottom:30}}
                            onChangeText={this.handlePasswordChange}
                            showCheckmark={validPassword}
                        />
                    </ScrollView>
                    <View style={styles.nextButton}>
                        <NextArrowButton
                            handleNextButton={this.handleNextButton}
                            disabled={this.toggleNextButtonState()}
                        />
                    </View>
                    {/* <View style={[styles.notificationWrapper, {marginTop: notificationMarginTop}]}> */}
                    <View style={styles.notificationWrapper}>
                        <Notification
                            showNotification={showNotification}
                            handleCloseNotification={this.handleCloseNotification}
                            type="Error"
                            firstLine="Those credentials don't look right."
                            secondLine="Please try again."
                        />
                    </View>
                </View>
                <Loader
                    animationType="fade"
                    modalVisible={lodingVisible}
                />
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flex: 1,
        paddingTop: 40
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1,
    },
    scrollView: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        flex: 1,
    },
    loginHeader: {
        fontSize: 30,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40,
    },
    notificationWrapper: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        // zIndex: 9,
    }
});

export default Login;