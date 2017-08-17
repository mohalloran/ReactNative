//index.android.js place code for Android


import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header.js';
import AlbumList from './src/components/AlbumList.js';


//flex: 1  expand to fill the entire area of the device .

const App = () => {

   return (
     <View style={{ flex: 1 }}>
       <Header headerText='Albums!' />
       <AlbumList />
    </View>
   );
};

//Name of the string albums must match up with our project name albums .
//Returns first component we want to render for our application App .
AppRegistry.registerComponent('albums', () => App);
