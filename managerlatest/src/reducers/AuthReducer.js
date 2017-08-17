import { EMAIL_CHANGED,
         PASSWORD_CHANGED, 
         LOGIN_USER_SUCCESS, 
         LOGIN_USER,
         LOGIN_USER_FAIL } from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: '', error: '', loading: false };

export default (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        //Redux need to understand that we updated our state object in order to register a change.*/
        case EMAIL_CHANGED:
           //you cant mutate the existing state object or when a compare 
           //is done it will be referencing the same object
           //if oldState === newState register a change .
           //make a new object and take all the properties of existing state 
           //object i.e spreadoperator and add if the emaiil property does
           // not exist or update that email property .
           //Now when a compare is done oldStateObject === newStateObject since we 
           //have created a new state object a change
           //will be registered .
           return { ...state, email: action.payload, error: '', loading: false };
        case PASSWORD_CHANGED:
           return { ...state, password: action.payload, error: '', loading: false };
        case LOGIN_USER_SUCCESS:
           return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER:
           return { ...state, user: action.payload, error: '', loading: true };   
        case LOGIN_USER_FAIL:
           return { ...state, password: '', error: 'Authentication Failed.', loading: false };
        default:
           return state;
            
    }
};
