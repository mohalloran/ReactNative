import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
//This function makes sure that all the actions we create end up flowing through all the reducers
import { bindActionCreators } from 'redux';
import { CardSection } from './common';

//give me every function that was exported from the actions/index.js
// file and reference it as actions .
import * as actions from '../actions';

class ListItem extends Component {


    //Called when the component is about to be rerendered to the device .
    //Does not seem to work with emulator .
    componentWillUpdate() {
        console.log('component is updating ');
        LayoutAnimation.spring();
    }

    renderDescription(libraryId) {
        if (libraryId === this.props.selectedLibraryid) {
            //if (this.props.expanded) {
            return (

                <CardSection>
                    <Text style={{ flex: 1 }}>{this.props.library.description}</Text>
                </CardSection>
            );
        }
    }

    render() {
        console.log('Rendering all....');

        const { titleStyle } = styles;

        return (
            <TouchableWithoutFeedback 
              onPress={() => this.props.selectLibrary(this.props.library.id)}
            >
              <View>
                <CardSection>
                    <Text style={titleStyle}>{this.props.library.title}</Text>
                </CardSection>
                {this.renderDescription(this.props.library.id)}
              </View>
            </TouchableWithoutFeedback>
        );
    }

}

const styles = {

    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

//All the props are passed in OwnProps to the component 
//when called .We look at the selected id and compared to the 
//props library id that is passed in when the compent is being created .
function mapStateToProps(state, ownProps){
    const expanded = state.selectedLibraryId === ownProps.library.id;
    console.log('this compent will be expanded:', expanded);

    return {
        selectedLibraryid: state.selectedLibraryid,
        expanded:expanded
    };
}

function mapDispatchToProps(dispatch) {
    console.log('mapDispatchToProps......');
    //makes available the dispatch action selectLibrary in our props .
    //we are making available 'actions.selectLibrary' in our props 'props.selectLibrary' the action
    //will then be dispatched to our reducers which will create our Application state . 
    //here we are explicity passing actions.selectLibrary to our reducers .
    return bindActionCreators({ selectLibrary: actions.selectLibrary }, dispatch);
}

//no mapStateToProps so first arguement is null
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
