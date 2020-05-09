import React from 'react';
import { Provider } from 'react-redux'
import store from '../state/store'

import Greeter from '../components/greeter'


const Root = (props) => {
    return (
        <Provider store={store}>
            <Greeter message={"Hello"}></Greeter>
        </Provider>
    )

}
export default Root;