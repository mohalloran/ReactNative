import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';



class LoginForm extends Component {

      constructor(props) {
          super(props);

          this.state = { email: '', password: '', error: '', loading: false };

          //this.onInputChange = this.onInputChange.bind(this);
      }

      onInputChange(email) {
          console.log('event value is', email);
          this.setState({ email: email });
      }

      onButtonPress() {
          console.log('Validating..');

          const { email, password } = this.state;

          this.setState({ error: '', loading: true });

         
          firebase.auth().signInWithEmailAndPassword(email, password)
                .then(this.onLoginSuccess.bind(this))
                .catch(() => {
                      firebase.auth().createUserWithEmailAndPassword(email, password)
                           .then(this.onLoginSuccess.bind(this))
                           .catch(this.onLoginFail.bind(this));
                 });
      }

      onLoginFail() {
          debugger;
          console.log('Login Failed....');
          this.setState({ error: 'Authentication Failure!', loading: false });
      }

      onLoginSuccess() {
          debugger;
          console.log('Login Success....');
          this.setState({ error: '', loading: false, email: '', password: '' });
      }

      renderButton(){
          if (this.state.loading) {
            return <Spinner size="small" />;
          } else {
              return (
                  <Button onPress={this.onButtonPress.bind(this)} > 
                       Log in
                  </Button>
              ); 
          }
      }

      render() {
          return (
                 <Card >
                  <CardSection >
                    <Input
                       secureTextEntry={false}
                       placeholder="user@gmail.com"
                       label={'Email'} 
                       value={this.state.email} 
                       onChangeText={(enteredemail) => this.setState({ email: enteredemail })}
                    />
                  </CardSection>

                  {/**secureTextEntry does not take a value when set to true secureTextEntry={true} */}

                  <CardSection >
                     <Input 
                       secureTextEntry
                       placeholder="password"
                       label='password'
                       value={this.state.password}
                       onChangeText={(enteredpassword) =>
                            this.setState({ password: enteredpassword })}
                     />
                  </CardSection>

                  <Text style={styles.errorTextStyle}>{this.state.error}</Text>

                  <CardSection >

                      {this.renderButton()}

                  </CardSection>

               </Card>

          );
      }                 
}

const styles = {

    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
