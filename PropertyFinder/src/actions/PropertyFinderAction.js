
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { SEARCH_SUCCESS, SEARCH_FOR_PROPERTY } from './types';



export const search = ({ query: query }) => {
    console.log('queryString is:', query);

    //redux-thunk middle ware async request to axios and dispatch method to reducers
    return (dispatch) => {
         axios.get(query)
             .then((response) => {
                 console.log('listings in Action is ', response.data.response.listings);
                 dispatch({ type: SEARCH_SUCCESS, payload: response.data.response.listings });
                 Actions.searchPageResults(); 
              }).catch((error) => {
                 console.log(error);
             });
    };
};

export const searchForProperty = ({ propertyIndex: propertyIndex }) => {
    console.log('queryString is:', propertyIndex);

    //redux-thunk middle ware async request to axios and dispatch method to reducers
    return (dispatch) => {
               dispatch({ type: SEARCH_FOR_PROPERTY, payload: propertyIndex });
               Actions.propertyDetailsPage(); 
    };
};
