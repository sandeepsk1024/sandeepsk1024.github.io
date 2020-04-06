import React from 'react';
import {Provider} from 'react-redux'
import store from '../state/store'
const Root = () => {

    return (
        <Provider store={store}>
            <h1>Hello World</h1>
        </Provider>
    )

}
export default Root;