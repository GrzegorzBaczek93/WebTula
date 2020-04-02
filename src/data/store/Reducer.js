import { LoadingState } from '@data/Constant'

const initialState = {
    isLoading: false,
    images: {
        ilustrations: [],
        portraits: [],
    },
    error: ''
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case LoadingState.LOADING:
            return {
                ...state,
                isLoading: true
            };
        case LoadingState.LOADED:
            return {
                ...state,
                isLoading: false,
                images: action.payload
            };
        case LoadingState.FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default dataReducer;
