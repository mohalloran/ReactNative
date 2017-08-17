import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {

  onRowPress(uid) {
     console.log('Uid is ', uid);
     //pass props employee
     Actions.employeeEdit({ employee: this.props.employee }); 
  }
  
  render() {
    console.log('Rendering ListItem...');

    const { name, uid } = this.props.employee;

    return (
        <TouchableWithoutFeedback onPress={this.onRowPress.bind(this, uid)}>
            <View>
                <CardSection>
                    <Text style={styles.titleStyle}>
                        {name}
                    </Text>
                </CardSection>
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

export default ListItem;

