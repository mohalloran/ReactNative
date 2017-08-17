import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, ListView } from 'react-native';
import ListItem from './ListItem';


class LibraryList extends Component {

    componentWillMount() {

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);


    }
 
    //Passing a prop of library to ListItem .
    renderRow(library) {
        return <ListItem library={library} />;
    }

    render() {
        console.log('Loading the LibraryList,,,,', this.props.libraries);
        return (

            <ListView 
              dataSource={this.dataSource}
              renderRow={(data) => this.renderRow(data)}
            />
              
        );
    }
}

//makes state available as a prop .so props.libraries returns our application from our reducers .
function mapStateToProps(state) {
    console.log(state);

    //Key is libraries in the index.js in reducers folder .
    return {
         libraries: state.libraries
    };
}
//Connects a React component to a Redux store i.e reducers .
//connnect return a function and then that function executes with LibraryList as the parameter .
//when the component is about to render connect asks for the state from 
//the provider and through the mapStateToProps is able
//to make the state available through props . 
export default connect(mapStateToProps)(LibraryList);
