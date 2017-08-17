import { SEARCH_SUCCESS, SEARCH_FOR_PROPERTY } from '../actions/types';

const INITIAL_STATE = { listings: '', listing: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case SEARCH_SUCCESS:
            return {...state, listings: action.payload };
        case SEARCH_FOR_PROPERTY:
            console.log('State is:', {...state.listings[action.payload] });
            
            //return {...state.listings[action.payload] };
            return {...state, listing: state.listings[action.payload] };
           
       default:
           return state;

    }
};
