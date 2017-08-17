import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FlatList } from 'react-native';
import { renderListings } from '../Utils/utils';
import ListItem from './ListItem';
import { searchForProperty } from '../actions';


class SearchPageResults extends Component {

    componentWillMount(){
        console.log('component will mount...');
    }

    onPressItem = (index) => {
       console.log('Pressed row: ', index);
       this.props.searchForProperty({ propertyIndex: index });
    };

    keyExtractor(item, index) {
        return index;
    }

    renderItem = ({ item, index }) => (
             <ListItem
                item={item}
                index={index}
                onPressItem={this.onPressItem}
             />
    );

    render() {
        //renderListings(this.props.listings.listings);
        console.log('Render In SearchPageResults ', this.props.listings);
        return (
            <FlatList
                data={this.props.listings}
                keyExtractor={(item, index) => this.keyExtractor(item, index)}
                renderItem={this.renderItem}
            />
        );
    }
}

function mapStateToProps(state) {
    console.log('Mapping State:', state.listings);

    //listings: state.listings.listings
    return {
        listings: state.propertyState.listings
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ searchForProperty: searchForProperty }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPageResults);
