import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS,
         EMPLOYEE_SAVE_SUCCESS, EMPLOYEE_DELETE_SUCCESS } from './types';

//ES6 Destructering passed an object and desctructure
//Called when input onChange is treggered on Input field
export const employeeUpdate = ({ property, value }) => {
    return {

        type: EMPLOYEE_UPDATE,
        payload: { property, value }

    };
};

//ES6 Destructering passed an object and desctructure
export const employeeCreate = ({ name, phone, shift }) => {

    const { currentUser } = firebase.auth();

    console.log('currentUser is:', currentUser.uid);

    //redux-thunk middle ware async request to firebase and dispatch method to reducers
    return (dispatch) => {
        //Template replacement
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                 dispatch({ type: EMPLOYEE_CREATE });
                 Actions.employeeList({ type: 'reset' });  
            });
            //when we navigate back to EmployeeList dont show the back button with parameter type.
            //Reset the stack .
    };
};

//updates the database.destructering of object
export const employeeSave = ({ name, phone, shift, uid }) => {

    const { currentUser } = firebase.auth();

    console.log('currentUser is:', currentUser.uid);

    //redux-thunk middle ware async request to firebase and dispatch method to reducers
    return (dispatch) => {
        //Template replacement
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                 console.log('Record updated for uid of :', uid);
                 dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
                 Actions.employeeList({ type: 'reset' });  
            });
            //when we navigate back to EmployeeList dont show the back button with parameter type.
            //Reset the view stack .
    };
};

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        //Template replacement
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => {
                 dispatch({ type: EMPLOYEE_DELETE_SUCCESS });
                 Actions.employeeList({ type: 'reset' });  
            });
            //when we navigate back to EmployeeList dont show the back button with parameter type.
            //Reset the view stack .
    };
};

export const employeesFetch = () => {
   console.log('employeesFetch action called');
   const { currentUser } = firebase.auth();

   return (dispatch) => {
       //'snapshop'' is an objec that describes what data is in there .Gives you metadata as well .
       //'value'' means when we get any data back .
       firebase.database().ref(`/users/${currentUser.uid}/employees`)
           .on('value', snapshot => {
                console.log('going to dispatch');
                dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
           });
   };
};




