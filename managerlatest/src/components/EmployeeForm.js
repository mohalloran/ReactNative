import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {

    renderDays() {
         const days = this.props.daysOfWeek.map((day) => {
                return <Picker.Item key={day.label} label={day.label} value={day.value} />;
        });

        return days;
    }

    render() {
       return (
           <View>

              <CardSection>
                <Input 
                    label={'Name'} 
                    placeholder='Jane' 
                    value={this.props.name} 
                    onChangeText={(text) =>
                         this.props.employeeUpdate({ property: 'name', value: text })}
                />
              </CardSection>

              <CardSection>
                 <Input 
                    label={'Phone'} 
                    placeholder='555-555-5555'
                    value={this.props.phone}
                    onChangeText={(text) =>
                          this.props.employeeUpdate({ property: 'phone', value: text })}
                 />
              </CardSection>

              <CardSection style={{ flexDirection: 'column' }}>
                <Text style={styles.pickerTextStyle}>Shift</Text>
                <Picker 
                selectedValue={this.props.shift}
                onValueChange={(text) =>
                     this.props.employeeUpdate({ property: 'shift', value: text })}
                >
                {this.renderDays()}
                </Picker>

              </CardSection>
           </View>
       );
    }
}

const styles = {
     pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
     }
};

function mapStateToProps(state) {
    const { name, phone, shift } = state.employeeForm;
    const { daysOfWeek } = state;
 
    
    return { name, phone, shift, daysOfWeek };
}

function mapDispatchToProps(dispatch) {
        return bindActionCreators({employeeUpdate: employeeUpdate }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm);


