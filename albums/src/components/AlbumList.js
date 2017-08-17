import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import axios from 'axios';
import _ from 'lodash';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

  constructor(props) {
      super(props);

      this.state = { albums: [] };
  }

  componentWillMount() {
      console.log('component will mount');
      debugger;
      //returns a promise back to us .Then '.then'' will be called once the request is complete
      axios.get('https://rallycoding.herokuapp.com/api/music_albums')
             .then((response) => this.setState({ albums: response.data }));
  }

  componentDidMount() {
      //debugger;
      console.log('component did mount');
  }

  render() {
     debugger;

     console.log(this.state);

     const { albums } = this.state;
     const albumList = albums.map((album) => {
        return (
            <AlbumDetail key={album.title} album={album} />
        );
     });

     console.log('album list: ', albumList);

     return (

        <ScrollView>
 
           {albumList}

        </ScrollView>
    );
  }
}

export default AlbumList;

