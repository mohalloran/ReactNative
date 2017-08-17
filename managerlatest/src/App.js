import React, { Component } from 'react';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';    //middlewared
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Router from './Router';





class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDBCUcL40JhVMsJiTFpXZ7jtXhD4XJji30',
            authDomain: 'manager-5f9b8.firebaseapp.com',
            databaseURL: 'https://manager-5f9b8.firebaseio.com',
            projectId: 'manager-5f9b8',
            storageBucket: 'manager-5f9b8.appspot.com',
            messagingSenderId: '168506229952'
        };

        firebase.initializeApp(config);
    }

    render() {
        //applyMiddleware is referred to as an store enhancer adding 
        //additional functionality to the store .
        return (

            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))} >
              <Router />
            </Provider>
        );
    }
}


export default App;
