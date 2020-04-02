import { Api } from '@data/services/Api';
import { LoadingState } from '@data/Constant';

const loading = () => {
    return {
        type: LoadingState.LOADING
    }
}

const success = data => {
    return {
        type: LoadingState.LOADED,
        payload: data
    }
}

const failed = error => {
    return {
        type: LoadingState.FAILED,
        payload: error
    }
}

export const requestData = () => dispatch => {
    dispatch(loading());

    Api.fetchData()
        .then(data => {
            dispatch(success(data));
        })
        .catch(error => {
            dispatch(failed(error));
        });
}