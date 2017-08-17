import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    ActivityIndicator,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from '../actions'; 
import houseImg from '../Resources/house.png';



function urlForQueryAndPage(key, value, pageNumber) {
  const data = {
      country: 'uk',
      pretty: '1',
      encoding: 'json',
      listing_type: 'buy',
      action: 'search_listings',
      page: pageNumber,
  };
  data[key] = value;

  const querystring = Object.keys(data)
    .map((key) => key + '=' + encodeURIComponent(data[key])).join('&');

  return `https://api.nestoria.co.uk/api?${querystring}`;
}

class SearchPage extends Component {

    constructor(props) {
        super(props);

        this.state = { searchString: '', message: '', isLoading: false };
    }

    onSearchTextChanged(event) {
        
        this.setState({ searchString: event.nativeEvent.text });
    }

    onSearchPressed() {
        //this.setState({ isLoading: true });
         const query = urlForQueryAndPage('place_name', this.state.searchString, 1);
         this.props.search({ query: query });
    }
    renderSpinner() {
        if (this.state.isLoading) {
            return (
                <ActivityIndicator size='large' />
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.description}>
                    Search for houses to buy in UK!
              </Text>
                <Text style={styles.description}>
                    Search by place-name or postcode.
              </Text>
              <View style={styles.flowRight}>
                    <TextInput
                        style={styles.searchInput}
                        value={this.state.searchString}
                        onChange={this.onSearchTextChanged.bind(this)}
                        placeholder='Search via name or postcode' />
                    <Button
                        onPress={this.onSearchPressed.bind(this)}
                        color='#48BBEC'
                        title='Go'
                    />
                </View>
                {/**  <Image source={ require('../Resources/house.png') } style={styles.image} />*/}
                <Image source={houseImg} style={styles.image} />
                {this.renderSpinner()}
                <Text style={styles.description}>{this.state.message}</Text>
            </View>
            
        );
    }

}

//bind props.search to action search
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ search: search }, dispatch);
}

const styles = StyleSheet.create({
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565'
    },
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center'
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    searchInput: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC',
    },
    image: {
        width: 217,
        height: 138,
    },
});

export default connect(null, mapDispatchToProps)(SearchPage);
