import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Button, Header, Spinner } from './components/common';

import LoginForm from './components/LoginForm';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = { loggedIn: null };
    }

    componentWillMount() {

        //Firebase Initialization
        // Initialize Firebase
        const config = {
            apiKey: 'AIzaSyDi1cE7i0uKXsruSVh1IUyxpoIZ6afb4yM',
            authDomain: 'authentication-f830d.firebaseapp.com',
            databaseURL: 'https://authentication-f830d.firebaseio.com',
            projectId: 'authentication-f830d',
            storageBucket: 'authentication-f830d.appspot.com',
            messagingSenderId: '957055263551'
        };
        firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged((user) => {
             if (user) {
                 console.log('User is logged in..', this.state.loggedIn);
                 debugger;
                 this.setState({ loggedIn: true });
                 console.log('State is now ', this.state.loggedIn);
             } else {
                 console.log('User is logged off');
                 debugger;
                 this.setState({ loggedIn: false });
             }
        });
    }

    onButtonPress() {
       console.log('Buton Pressed...');
       firebase.auth().signOut();
    }

    renderContent() {
        console.log('rendering content....');

        switch (this.state.loggedIn) {
            case true:
              return (
                  <View style={{ height: 40 }}>
                     <Button onPress={this.onButtonPress.bind(this)} > 
                       Log Out
                     </Button>
                  </View>
              ); 

            case false:
              return <LoginForm />;

            default:
              return (
                  <View style={{ height: 40, marginTop: 10 }}>
                    <Spinner size="large" />
                  </View>
              );
        }
  }


    render() {

        return (

          <View>
           <Header headerText='Autentication' />
           {this.renderContent()}
          </View>

        );
    }
}

export default App;
