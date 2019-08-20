import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const removePersonReducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.DELETE_PERSON:
            const updatedArray = state.results.filter((result, index) => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
};

export default removePersonReducer;