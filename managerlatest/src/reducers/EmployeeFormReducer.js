import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, 
         EMPLOYEE_SAVE_SUCCESS, EMPLOYEE_DELETE_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: ' ',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) { 

      case EMPLOYEE_UPDATE:
          // action.payload = {property: 'name',value: 'jane' }
          //key interrepulation so if we call with name it will 
          // es6 turn into  name:value .same for shift shift:value
          //const newState = {}
          //newState[action.payload.property] = action.payload.value
          //{ } create a new object extract the existing state and insert
          // or update with value of newState .
          //return {...state,...newState}
          return { ...state, [action.payload.property]: action.payload.value };
      case EMPLOYEE_CREATE:
          return INITIAL_STATE;
      case EMPLOYEE_SAVE_SUCCESS:
          return INITIAL_STATE;
      case EMPLOYEE_DELETE_SUCCESS:
          return INITIAL_STATE;
      
      default:
          return state;
  }
};

