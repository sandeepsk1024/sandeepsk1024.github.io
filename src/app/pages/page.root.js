import React from 'react';
import { Provider } from 'react-redux'
import store from '../state/store'

const Root = (props) => {
    return (
        <Provider store={store}>
            
        </Provider>
    )

}
export default Root;