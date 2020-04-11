import React from 'react';
import {Provider} from 'react-redux'
import store from '../state/store'
import Greeter from '../components/greeter'
const Root = (props) => {

    return (
        <Provider store={store}>
            <h1>Hello World</h1>
            <Greeter message={"Hello World"} />
        </Provider>
    )

}
export default Root;