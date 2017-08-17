import { combineReducers } from 'redux';
import PropertyFinderReducer from './PropertyFinderReducer';

export default combineReducers({
   propertyState: PropertyFinderReducer
});
