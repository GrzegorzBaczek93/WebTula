import React from 'react';
import { Provider } from 'react-redux';

import provideStore from '@data/store/store';

export default ({ element }) => {
    const store = provideStore();
    return <Provider store={store}>{element}</Provider>
}