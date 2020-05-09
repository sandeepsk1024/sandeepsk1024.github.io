import React from 'react';
import { Provider } from 'react-redux'
import store from '../state/store'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import TodosList from '../components/jsonph-todos'

const JsonPlaceholder = (props) => {
    return (
        <Provider store={store}>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">home</Link>
                        </li>
                        <li>
                            <Link to="/posts">posts</Link>
                        </li>
                        <li>
                            <Link to="/todos">todos</Link>
                        </li>                        
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <div>home - TODO</div>
                    </Route>
                    <Route path="/posts">
                        <div>posts - TODO</div>
                    </Route>
                    <Route path="/todos">
                        <TodosList userId={1} />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    )

}
export default JsonPlaceholder;