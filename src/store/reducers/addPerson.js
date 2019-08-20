import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const addPersonReducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.ADD_PERSON:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            }
    }
    return state;
};

export default addPersonReducer;