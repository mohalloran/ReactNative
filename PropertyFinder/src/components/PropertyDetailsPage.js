import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, Image } from 'react-native';

class PropertyDetailsPage extends Component {

    render() {
        console.log('Props are ', this.props);

       
        const { listing } = this.props;
        const price = listing.price_formatted.split(' ')[0];

        return (
           <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={styles.imageContainer}>
              <Image style={styles.canvas} source={{ uri: listing.img_url }} />
            </View>
            <View style={styles.textsContainer}>
                <Text style={styles.price}>{price}</Text>
                <Text 
                  style={styles.title}
                  numberOfLines={1}
                >{listing.title}
              </Text>
            </View>
           
            
            <View style={styles.textsContainer}>
                <Text>{ listing.summary }</Text>
            </View>

           </View>
        );
    }

}

function mapStateToProps(state) {
        console.log('MappingStateToProps:', state);
        //listing: state.propertyState
        return {
            listing: state.propertyState.listing
        };
}

const styles = StyleSheet.create({
  img: {
    width: 180,
    height: 180,
    marginRight: 10,
    marginLeft: 10,
  },
  imageStyle: {
      height: 300,
      width: 300
  },
  imageStylef: {
      height: 180,
      flex: 1,
      width: null
  },
  imgContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },

  imageContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    position: 'relative'
  },
  textsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    position: 'relative',

    paddingLeft: 10,
    paddingRight: 10
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

});

export default connect(mapStateToProps)(PropertyDetailsPage);

