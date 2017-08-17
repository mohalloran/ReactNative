import React, { Component } from 'react';
import { Text ,View} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, CardSection, Input, Button, Spinner} from './common';
import * as actions from '../actions';


class LoginForm extends Component {
    
    constructor(props) {
      super(props);

      this.state = { email: '', password: '', loading: '', error: '', user: '' };
    }
    
    onEmailChange(text) {
        this.props.emailChanged(text);
     }

    onPasswordChange(text) {
        this.props.passwordChanged(text);    
    }
    onButtonPress() {
        console.log('Button clicked....');
        const { email, password } = this.props;
        this.props.loginUser({ email: email, password:password });
    }

    renderButton() {
          if (this.props.loading) {
            return <Spinner size="large" />;
          } else {
              return (
                  <Button onPress={this.onButtonPress.bind(this)} > 
                       Log in
                  </Button>
              ); 
          }
    }

    render() {
       console.log('State on Render is:', this.state);

       return (
           <Card>
             <CardSection>
               <Input 
                 secureTextEntry={false}
                 label={'Email'} 
                 placeholder={'email@gmail.com'}
                 value={this.props.email}
                 onChangeText={this.onEmailChange.bind(this)}
               />
             </CardSection>
             <CardSection>
               <Input
                secureTextEntry
                label={'Password'}
                placeholder={'password'}
                value={this.props.password}
                onChangeText={this.onPasswordChange.bind(this)}
               />
             </CardSection>
             <Text style={styles.errorStyle}>
                {this.props.error}
             </Text>
             <CardSection>
               {this.renderButton()}
             </CardSection>
             
           </Card>

       );
    }
}

const styles = {
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'

    }
};

function mapStateToProps(state) {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
}

function mapDispatchToProps(dispatch) {
    console.log('mapDispatchToProps......');
    //makes available the dispatch action selectLibrary in our props .
    //we are making available 'actions.selectLibrary' in our props 'props.selectLibrary' the action
    //will then be dispatched to our reducers which will create our Application state . 
    //here we are explicity passing actions.selectLibrary to our reducers .
    return bindActionCreators({ loginUser: actions.loginUser,
                                emailChanged: actions.emailChanged,
                                passwordChanged: actions.passwordChanged }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
