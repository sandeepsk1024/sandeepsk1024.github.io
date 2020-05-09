import "whatwg-fetch"
import React from 'react'
import ReactDOM from 'react-dom'
import RootPage from './pages/page.root'
import JsonPHPage from './pages/page.jsonph'

ReactDOM.render(<JsonPHPage />, document.querySelector("#root-container"))
