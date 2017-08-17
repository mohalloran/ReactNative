import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import DaysOfWeekReducer from './DaysOfWeekReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer,
    daysOfWeek: DaysOfWeekReducer,
    employees: EmployeeReducer
});
