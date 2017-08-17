import React, { Component } from 'react';
import ReactCalculator from './components/ReactCalculator';

class App extends Component {

    componentWillMount() {
        
    }

    render() {
        //applyMiddleware is referred to as an store enhancer adding 
        //additional functionality to the store .
        return (

            <ReactCalculator />
        );
    }
}


export default App;
