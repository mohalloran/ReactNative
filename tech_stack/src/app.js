import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {
    
    {/** Store holds our applicaion state and the Provider  is what translates 
        that data so it can be used by react.Loads reducers from index.js.
        The Provider is the root of your components and is reponsible for giving 
        your other components access to the redux store.It looks at the Index.js file in reducers folder
        and loads all the reducers creating the app initial state setting up a key that can be referenced in
        mapStateToProps used by the Connect function .Connect connects our component to the redux store calling
        mapStateToProps .
      */ }
 
    return (
        <Provider store={createStore(reducers)}>
           <View style={{ flex: 1 }}>
             <Header headerText='Tech Stack' />
             <LibraryList />
           </View>
        </Provider>
    );
};

export default App;
