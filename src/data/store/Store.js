import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import dataReducer from '@data/store/Reducer';

const provideStore = () => {
    return createStore(dataReducer, applyMiddleware(thunk));
}

export default provideStore;