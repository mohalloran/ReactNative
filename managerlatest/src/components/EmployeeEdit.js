import _ from 'lodash';
import React, { Component } from 'react';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { employeeUpdate, employeeSave , employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button, Confirm } from './common';

class EmployeeEdit extends Component {

    constructor(props){
        super(props);

        this.state={showModal: false};
    }

    //Call the Action Creator employeeUpdate with the props that were passed to it .
    componentWillMount() {
        console.log('EmployeeEdit component will mount ', this.props.employee);

        //so employeeUpdate takes a name value pair only so we need to iterate
        // over calling the action employeeUpdate 
        _.each(this.props.employee, (value, property) => {
              this.props.employeeUpdate({ property: property, value: value });
        });
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        
        //Get uid from the onClick on employee .The others come from the form input .
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    onTextPress() {
        const { phone, shift } = this.props;
        
        Communications.text(phone, `your upcoming shift is on ${shift}`);
    }

    onAccept() {
        console.log('Accepted Deleting Empployee.....');
        this.props.employeeDelete({ uid: this.props.employee.uid });
        this.setState({ showModal: false });
    }
    onDecline() {
        console.log('Declined closing window....');
        this.setState({ showModal: false });
    }

    removeEmployee() {
        this.setState({ showModal: !this.state.showModal });
    }

    render() {
        console.log('Employee Edit render', this.props);
        return (
            <Card>
              <EmployeeForm />
              <CardSection>
                 <Button onPress={this.onButtonPress.bind(this)}>
                    Save Changes
                 </Button>
              </CardSection>
              <CardSection>

                 <Button onPress={this.onTextPress.bind(this)} >Text Schedule</Button>

              </CardSection>

              <CardSection>

                 <Button onPress={this.removeEmployee.bind(this)}>Remove</Button>

              </CardSection>

              <Confirm 
                       visible={this.state.showModal} 
                       onAccept={this.onAccept.bind(this)} 
                       onDecline={this.onDecline.bind(this)}
              >
                  Are you sure you want to remove this Employee ? .
              </Confirm>

            </Card>

        );
    }
}

function mapDispatchToProps(dispatch) {
        return bindActionCreators({employeeUpdate: employeeUpdate,
                                  employeeSave: employeeSave,
                                  employeeDelete: employeeDelete }, dispatch);
}

function mapStateToProps(state) {
    console.log('MappingStateToProps in EmployeeEdid...');
    const { name, phone, shift } = state.employeeForm;
        
    return { name, phone, shift };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeEdit);
