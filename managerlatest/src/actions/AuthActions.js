import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { EMAIL_CHANGED,
         PASSWORD_CHANGED,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_FAIL,
         LOGIN_USER } from './types';



export const loginUser = ({ email, password }) => { //destructering of object
    console.log('Logging in the user ', email);
    //Asynchronous call with reduxThunk .
    //ActionCreator now returning a function .ReduxThunk sees that a fuction
    // is returned from action 
    //creator and will immediately call that function with a dispatch method to reducers .
    return (dispatch) => {

        dispatch({
            type: LOGIN_USER
        });
       //ReduxThunk to handle asynchronous action creators .
       //How do we dispatch an action only after the then 
       firebase.auth().signInWithEmailAndPassword(email, password)
          .then((user) => {
             loginUserSuccess(dispatch, user);
          }).catch((error) => {
              console.log(error);
              firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((user) => {
                    loginUserSuccess(dispatch, user);
                }).catch(() => {
                    console.log(error);
                    loginUserFail(dispatch);
                });
          });
    };
};

const loginUserFail = (dispatch) => {
    console.log('login user failed..');
    dispatch({
        type: LOGIN_USER_FAIL 
    });
};

const loginUserSuccess = (dispatch, user) => {
     dispatch({
           type: LOGIN_USER_SUCCESS, payload: user
     });

     //finds the key on the Router.js
    
     Actions.main();
     //Actions.callback({ key: 'main', type: 'push' });
     //Actions.callback({ key: 'employeeList', type: 'jump' });
};

export const emailChanged = (email) => {
    //console.log('Email changing..', email);

    //Return an Action 
    return {
        type: EMAIL_CHANGED,
        payload: email
    };
};

export const passwordChanged = (password) => {
    //console.log('Email changing..', password);
    //Return an Action
    return {
        type: PASSWORD_CHANGED,
        payload: password
    };
};

